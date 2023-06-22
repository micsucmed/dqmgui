# Deployment of new DQMGUI at CMSWEB Kubernetes cluster
---
NOTE: All scripts in this directory are kept here as copies of the CMSKubernetes repository where this scripts have the production version. To apply changes into production deployment, fork such repository, and create a Pull Request. Keeping this scripts here is optional but for maintainability and documentation purposes we considered it better to keep copies and update them as changes are made.
* [CMSKubernetes - Docker image configuration](https://github.com/dmwm/CMSKubernetes/tree/master/docker/newdqmgui)
* [CMSKubernetes - Kubernetes deployment configuration](https://github.com/dmwm/CMSKubernetes/blob/master/kubernetes/cmsweb/services/newdqmgui.yaml)

## Creating and configuring the Docker image
There are 4 scripts used to setup the proper environment of the container for the new DQMGUI to run smoothly
* `Dockerfile`
    * Uses the cvmfs base image from cmscloud dockerhub to configure the environment needed to run CMSSW
    * Adds the other three configuration scripts to the image and runs the one needed to install the dependencies of the application.
    * Sets up the source directory of the project as the working directory of the image
*  `install.sh`
    * Installs the dependencies needed to run the application
        * `wget`
        * `cmake`
        * `z-lib-devel`
        * `openssl-devel`
        * `python-devel`
        * `dev-toolset-7`
        * `wheel`
        * `xrootd`
    * Clones the master branch of the new DQMGUI repository
    * Installs the python dependencies of the project
* `monitor.sh`
    * Creates a service with `k5start` to continuously renew the necessary kerberos session to access EOS files
        * This service needs the deployment of a kubernetes secret (This is explained under the __ section of this documentation)
* `run.sh` 
    * Sources the cms repository of cvmfs to allow the use of scram and CMSSW tools
    * Builds the plugins of the application (renderers) and it's Cython classes
    * Runs the application on the port 8889

The scripts used during the creation of the Docker image are the `Dockerfile` and `install.sh` the other scripts, `monitor.sh` and `run.sh` are run during the runtime of the image.

To execute the build of the image:
* `Docker build -t <image_name>:<tag> <Dockerfile destination>`
    * This will generate a local image (It will fail if done on lxplus due to the memory usage needed to build the image)
To run the image:
* `docker run --rm --cap-add SYS_ADMIN --device /dev/fuse -it -p 8889:8889 <image_name>:<tag>`

## Uploading a new production image to CERN's registry
* For CMSWEB to deploy the Docker image it needs to be pushed to [CERN registry](registry.cern.ch/cmsweb/). For this build the Docker image as before but the `<image_name>` needs to be `registry.cern.ch/cmsweb/newdqmgui` and the `<tag>` should be in the format `HG<day><month><version['a'-'z']>`. The registry is periodically being cleaned up, so if any image hasn't been used for a while they will be deleted. Please keep a local or remote (docker hub) copy of any images you consider important. 
* After creating the image with the appropriate name and tag, uploaded to the registry:
    * Login to the registry:
        * `docker login registry.cern.ch`
        * Enter username
        * Enter CLI Secret for password. 
            * The CLI Secrets can be obtained by login to CERN registry and then click on User Profile in Drop Down Box of top right corner under username.
    * Push image
        * `docker push registry.cern.ch/cmsweb/newdqmgui:<tag>`

## Configuration of Kubernetes deployment
* The `newdqmgui.yaml` file has the configurations used to deploy the service in a Kubernetes environment.
    * This file makes configurations for the Service, ConfigMap, Deployment, and Pod that deploy the new DQMGUI docker image
        * For simplicity all of them have been named `newdqmgui`
        * The port chosen for deployment is 8889
        * The command configured to execute when the pod starts runs a small script created in the ConfigMap configuration. Here, the `run.sh` script mentioned [before](#creating-and-configuring-the-docker-image) is executed.
        * Mounts necessary to have availability of CMSSW, scram, and EOS are added
* A secret for the keytab file used to renew and authenticate the kerberos authentication is needed so add an encrypted version of a valid keytab file to the [`services_config`](https://gitlab.cern.ch/cmsweb-k8s/services_config) repository
    * Fork the [`services_config`](https://gitlab.cern.ch/cmsweb-k8s/services_config) repository
    * Go inside the repository on your development environment and run the encryption script:
        * `./scripts/encrypt-secrets.sh newdqmgui <full-path-to-kerberos-keytab-file>`
    * How this secret is deployed is described later in the [Deployment instructions](#deploy-in-cmsweb-kubernetes-clusters)

## Connecting to CMSWEB clusters
There are 3 different clusters, testing, testbed, and production. To access any of them the connection has to be done through lxplus8.
* There needs to be an export of the OS_TOKEN to access any of the clusters:
    * `export OS_TOKEN=$(openstack token issue -c id -f value)`
* To connect to a specific cluster you need to export the configuration file, this are retrieved from the following repository: https://gitlab.cern.ch/cmsweb-k8s/users_config. Please ask CMSWEB for access to the repository.
    1. `export KUBECONFIG=~/K8s_tokens/config.cmsweb-test4` (DQM exclusive development cluster)
    2. `export KUBECONFIG=~/K8s_tokens/config.cmsweb-testbed` (Quality assurance cluster)
    3. `export KUBECONFIG=~/K8s_tokens/config.cmsweb-k8s-services-prod` (Production cluster)
* Confirm you have connected to the appropiate cluster by running the kubernetes command:
    * `kubectl config get-clusters`

## Deploy in CMSWEB Kubernetes clusters
To deploy the application in any of the clusters go to the [CMSKubernetes repository on your lxplus8](https://github.com/dmwm/CMSKubernetes/). The `dqm` namespace configured within all CMSWEB Kubernetes clusters is used for the AutoDQM, DQM^2 mirror, and the new DQMGUI deployments. Make sure you always run the `-n dqm` flag to administrate and deploy DQM services.
* Deploy kerberos secret
    * `./scripts/deploy-secrets.sh dqm newdqmgui <path_to_services_config_repository>`
* Deploy application
    * `./scripts/deploy-srv.sh newdqmgui <image-tag> <environment>`
        * The first parameter passed to the script corresponds to the name of the `.yaml` configuration file
        * Chose the tag corresponding to the image at [CERN registry](registry.cern.ch/cmsweb/) that you wish to deploy
        * The `environment` refers to the cluster you wish to deploy this service
            * `prod` : production cluster
            * `preprod` : testbed cluster
            * `test4` : DQM development cluster
    * The new Offline DQMGUI should now be accessible at the CMSWEB endpoints
        * `https://cmsweb-test4.cern.ch/dqm/offline-test-new/` - (DQM exclusive development cluster)
        * `https://cmsweb-testbed.cern.ch/dqm/offline-test-new/` - (Quality assurance cluster)
        * `https://cmsweb.cern.ch/dqm/offline-new/` - (Production cluster)

## Troubleshoot
* See general information of the pod (e.g pod names) deployed at kubernetes:
    * `kubectl get pods -n dqm`
* See logs generated by the pod at startup:
    * `kubectl logs <pod-name> -n dqm`
* See a description of the pods lifecycle:
    * `kubectl describe pods <pod-name> -n dqm`
* Access an interactive terminal of the pod:
    * `kubectl exec -it <pod-name> bash -n dqm`

## [Detailed documentation of CMSWEB kubernetes clusters services](https://cms-http-group.docs.cern.ch/k8s_cluster/quickstart/)
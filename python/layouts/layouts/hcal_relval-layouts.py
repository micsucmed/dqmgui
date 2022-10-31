from layouts.layout_manager import LayoutScope, adapt_and_register
dqmitems={}

def hcalrechitDlayout(i, p, *rows): i[p] = rows
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/00 HB Timing vs. Energy',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_timing_vs_energy_Low_HB'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/01 HE Timing vs. Energy',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_timing_vs_energy_Low_HE'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/02 HF Timing vs. Energy',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_timing_vs_energy_Low_HF'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/03 HE depth 3: occupancy vs ieta',[{'path' : 'HcalRecHitsD/HcalRecHitTask/occupancy_vs_ieta_HE3'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/04 HE depth 1: occupancy vs ieta',[{'path' : 'HcalRecHitsD/HcalRecHitTask/occupancy_vs_ieta_HE1'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/05 HE depth 2: occupancy vs ieta',[{'path' : 'HcalRecHitsD/HcalRecHitTask/occupancy_vs_ieta_HE2'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/06 severityLevel HB',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_severityLevel_HB'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/07 severityLevel HE',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_severityLevel_HE'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/08 severityLevel HF',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_severityLevel_HF'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/09 severityLevel HO',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_severityLevel_HO'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/10 HE status word',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_RecHit_StatusWord_HE'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/11 HF status word',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_RecHit_StatusWord_HF'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/12 HB status word',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_RecHit_StatusWord_HB'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/13 HO status word',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_RecHit_StatusWord_HO'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/14 HO: occupancy vs ieta',[{'path' : 'HcalRecHitsD/HcalRecHitTask/occupancy_vs_ieta_HO'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/15 Mean energy vs ieta (GeV) HO ',[{'path' : 'HcalRecHitsD/HcalRecHitTask/emean_vs_ieta_HO'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/16 HO RecHits energy (GeV)',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_energy_of_rechits_HO'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/17 HB RecHits energy (GeV)',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_energy_of_rechits_HB'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/18 HE RecHits energy (GeV)',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_energy_of_rechits_HE'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/19 HF RecHits energy (GeV)',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_energy_of_rechits_HF'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/20 eta-phi RecHits Emap depth1',[{'path' : 'HcalRecHitsD/HcalRecHitTask/emap_depth1'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/21 eta-phi RecHits Emap depth2',[{'path' : 'HcalRecHitsD/HcalRecHitTask/emap_depth2'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/22 eta-phi RecHits Emap depth3',[{'path' : 'HcalRecHitsD/HcalRecHitTask/emap_depth3'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/23 eta-phi RecHits Emap depth4 ',[{'path' : 'HcalRecHitsD/HcalRecHitTask/emap_depth4'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/24 Mean energy vs ieta (GeV) HE depth1',[{'path' : 'HcalRecHitsD/HcalRecHitTask/emean_vs_ieta_HE1'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/25 Mean energy vs ieta (GeV) HE depth3',[{'path' : 'HcalRecHitsD/HcalRecHitTask/emean_vs_ieta_HE3'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/26 Mean energy vs ieta (GeV) HE depth2',[{'path' : 'HcalRecHitsD/HcalRecHitTask/emean_vs_ieta_HE2'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/27 Mean energy vs ieta (GeV) HF depth1',[{'path' : 'HcalRecHitsD/HcalRecHitTask/emean_vs_ieta_HF1'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/28 Mean energy vs ieta (GeV) HF depth2',[{'path' : 'HcalRecHitsD/HcalRecHitTask/emean_vs_ieta_HF2'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/29 Number of HO RecHits',[{'path' : 'HcalRecHitsD/HcalRecHitTask/N_HO'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/30 Number of HF RecHits',[{'path' : 'HcalRecHitsD/HcalRecHitTask/N_HF'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/31 Number of HE RecHits',[{'path' : 'HcalRecHitsD/HcalRecHitTask/N_HE'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/32 Number of HB RecHits',[{'path' : 'HcalRecHitsD/HcalRecHitTask/N_HB'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/33 Mean energy vs ieta (GeV) HB depth1',[{'path' : 'HcalRecHitsD/HcalRecHitTask/emean_vs_ieta_HB1'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/34 Mean energy vs ieta (GeV) HB depth2',[{'path' : 'HcalRecHitsD/HcalRecHitTask/emean_vs_ieta_HB2'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/35 HB Aux status word',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_RecHit_Aux_StatusWord_HB'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/36 HF Aux status word',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_RecHit_Aux_StatusWord_HF'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/37 HE Aux status word',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_RecHit_Aux_StatusWord_HE'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/38 HO Aux status word',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_RecHit_Aux_StatusWord_HO'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/39 HF depth 1: occupancy vs ieta',[{'path' : 'HcalRecHitsD/HcalRecHitTask/occupancy_vs_ieta_HF1'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/40 HF depth 2: occupancy vs ieta',[{'path' : 'HcalRecHitsD/HcalRecHitTask/occupancy_vs_ieta_HF2'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/41 HO Timing vs. Energy',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_timing_vs_energy_HO'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/42 HB RecHits timing',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_timing_HB'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/43 HE RecHits timing',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_timing_HE'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/44 HF RecHits timing',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_timing_HF'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/45 HO RecHits timing',[{'path' : 'HcalRecHitsD/HcalRecHitTask/HcalRecHitTask_timing_HO'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/46 HB depth 2: occupancy vs ieta',[{'path' : 'HcalRecHitsD/HcalRecHitTask/occupancy_vs_ieta_HB2'}])
hcalrechitDlayout(dqmitems, 'DataLayouts/Hcal/RecHits/47 HB depth 1: occupancy vs ieta',[{'path' : 'HcalRecHitsD/HcalRecHitTask/occupancy_vs_ieta_HB1'}])

def calotowersDlayout(i, p, *rows): i[p] = rows
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/00 HE CaloTowers EM Timing vs Energy',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_EM_Energy_Timing_Low_HE'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/01 HB CaloTowers EM Timing vs Energy',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_EM_Energy_Timing_Low_HB'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/02 HF CaloTowers HAD Timing vs Energy',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_HAD_Energy_Timing_Low_HF'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/03 HE CaloTowers HAD Timing vs Energy',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_HAD_Energy_Timing_Low_HE'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/04 HB CaloTowers HAD Timing vs Energy',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_HAD_Energy_Timing_Low_HB'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/05 HE CaloTowers number',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_number_of_fired_towers_HE'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/06 HF CaloTowers number',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_number_of_fired_towers_HF'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/07 HB CaloTowers number',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_number_of_fired_towers_HB'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/08 HF Calo MET (GeV)',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_MET_HF'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/09 HE Calo MET (GeV)',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_MET_HE'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/10 HB Calo MET (GeV)',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_MET_HB'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/11 problematic cells number HB',[{'path' : 'CaloTowersD/CaloTowersTask/number_of_problematic_cells_Hcal_HB'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/12 problematic cells number HF',[{'path' : 'CaloTowersD/CaloTowersTask/number_of_problematic_cells_Hcal_HF'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/13 problematic cells number HE',[{'path' : 'CaloTowersD/CaloTowersTask/number_of_problematic_cells_Hcal_HE'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/14 CaloTowers Occupancy vs. iEta',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_occupancy_vs_ieta'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/15 problematic cells number EE',[{'path' : 'CaloTowersD/CaloTowersTask/number_of_problematic_cells_Ecal_EE'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/16 recovered cells number HE',[{'path' : 'CaloTowersD/CaloTowersTask/number_of_recovered_cells_Hcal_HE'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/17 recovered cells number HF',[{'path' : 'CaloTowersD/CaloTowersTask/number_of_recovered_cells_Hcal_HF'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/18 recovered cells number HB',[{'path' : 'CaloTowersD/CaloTowersTask/number_of_recovered_cells_Hcal_HB'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/19 bad cells number HE',[{'path' : 'CaloTowersD/CaloTowersTask/number_of_bad_cells_Hcal_HE'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/20 bad cells number HF',[{'path' : 'CaloTowersD/CaloTowersTask/number_of_bad_cells_Hcal_HF'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/21 bad cells number HB',[{'path' : 'CaloTowersD/CaloTowersTask/number_of_bad_cells_Hcal_HB'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/22 HF CaloTowers EM Timing vs Energy',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_EM_Energy_Timing_HF'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/23 HE CaloTowers ECAL energy (GeV)',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_energy_ECAL_HE'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/24 HF CaloTowers ECAL energy (GeV)',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_energy_ECAL_HF'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/25 HB CaloTowers ECAL energy (GeV)',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_energy_ECAL_HB'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/26 HB CaloTowers HCAL energy (GeV)',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_energy_HCAL_HB'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/27 HE CaloTowers HCAL energy (GeV)',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_energy_HCAL_HE'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/28 HF CaloTowers HCAL energy (GeV)',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_energy_HCAL_HF'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/29 recovered cells number EB',[{'path' : 'CaloTowersD/CaloTowersTask/number_of_recovered_cells_Ecal_EB'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/30 problematic cells number EB',[{'path' : 'CaloTowersD/CaloTowersTask/number_of_problematic_cells_Ecal_EB'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/31 HF CaloTowers EM Timing',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_EM_Timing_HF'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/32 HE CaloTowers EM Timing',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_EM_Timing_HE'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/33 HB CaloTowers EM Timing',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_EM_Timing_HB'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/34 HF CaloTowers HAD Timing',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_HAD_Timing_HF'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/35 HE CaloTowers HAD Timing',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_HAD_Timing_HE'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/36 HB CaloTowers HAD Timing',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_HAD_Timing_HB'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/37 bad cells number EE',[{'path' : 'CaloTowersD/CaloTowersTask/number_of_bad_cells_Ecal_EE'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/38 bad cells number EB',[{'path' : 'CaloTowersD/CaloTowersTask/number_of_bad_cells_Ecal_EB'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/39 recovered cells number EE',[{'path' : 'CaloTowersD/CaloTowersTask/number_of_recovered_cells_Ecal_EE'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/40 Endcap CaloTowers SET (GeV)',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_SET_HE'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/41 Forward CaloTowers SET (GeV)',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_SET_HF'}])
calotowersDlayout(dqmitems, 'DataLayouts/Hcal/CaloTowers/42 Barrel CaloTowers SET (GeV)	',[{'path' : 'CaloTowersD/CaloTowersTask/CaloTowersTask_SET_HB'}])

def hcalnoiseratesDlayout(i, p, *rows): i[p] = rows
hcalnoiseratesDlayout(dqmitems, 'DataLayouts/Hcal/RBX/00 RBX energy type 3 (GeV)',[{'path' : 'HcalNoiseRatesD/HcalNoiseRatesTask/hRBXEnergyType3'}])
hcalnoiseratesDlayout(dqmitems, 'DataLayouts/Hcal/RBX/01 RBX energy type 2 (GeV)',[{'path' : 'HcalNoiseRatesD/HcalNoiseRatesTask/hRBXEnergyType2'}])
hcalnoiseratesDlayout(dqmitems, 'DataLayouts/Hcal/RBX/02 RBX energy type 1 (GeV)',[{'path' : 'HcalNoiseRatesD/HcalNoiseRatesTask/hRBXEnergyType1'}])
hcalnoiseratesDlayout(dqmitems, 'DataLayouts/Hcal/RBX/03 RBX number of hits',[{'path' : 'HcalNoiseRatesD/HcalNoiseRatesTask/hRBXNHits'}])
hcalnoiseratesDlayout(dqmitems, 'DataLayouts/Hcal/RBX/04 RBX energy (GeV)',[{'path' : 'HcalNoiseRatesD/HcalNoiseRatesTask/hRBXEnergy'}])


adapt_and_register(dqmitems, scope=LayoutScope.RELVAL)

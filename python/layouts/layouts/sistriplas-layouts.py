from .adapt_to_new_backend import *
dqmitems={}

def sistriplaslayout(i, p, *rows): i["SiStripLAS/Layouts/" + p] = rows

sistriplaslayout(dqmitems, "00 - SiStripLAS ReportSummary",
 [{ 'path': "SiStripLAS/EventInfo/reportSummaryMap",
    'description': "NumberOfSignals_AlignmentTubes</a> ", 'draw': { 'withref': "no" }}])
sistriplaslayout(dqmitems, "01 - SiStripLAS TIB&TOB",
 [{ 'path': "SiStripLAS/NumberOfSignals_AlignmentTubes",
    'description': "NumberOfSignals_AlignmentTubes</a> ", 'draw': { 'withref': "no" }}])
sistriplaslayout(dqmitems, "02 - SiStripLAS TEC+",
 [{ 'path': "SiStripLAS/NumberOfSignals_TEC+R4",
    'description': "NumberOfSignals_TEC+R4</a> ", 'draw': { 'withref': "no" }}],
 [{ 'path': "SiStripLAS/NumberOfSignals_TEC+R6",
    'description': "NumberOfSignals_TEC+R6</a> ", 'draw': { 'withref': "no" }}])
sistriplaslayout(dqmitems, "03 - SiStripLAS TEC-",
 [{ 'path': "SiStripLAS/NumberOfSignals_TEC-R4",
    'description': "NumberOfSignals_TEC-R4</a> ", 'draw': { 'withref': "no" }}],
 [{ 'path': "SiStripLAS/NumberOfSignals_TEC-R6",
    'description': "NumberOfSignals_TEC-R6</a> ", 'draw': { 'withref': "no" }}])

apply_dqm_items_to_new_back_end(dqmitems, __file__)

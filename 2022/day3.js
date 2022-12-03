const assert = require('assert')
const { intersection } = require('lodash')

const input = [
  'PcPlnShmrLmBnmcwBhrmcmbHNGFGpwdFFwGNjNbGqNHH',
  'tzQfRJfWZZztWzVtCTfRzFZjpFjNZjGLHbdHLDdjpb',
  'CCQTzRLzvQVVfRzJfMPsnBlglgPmBgPmvSrl',
  'RMfvbbszHTsssFPzDQPggpQJPQ',
  'NSNcqVtLVGgDlpQBClVB',
  'hmStGNNLhjNrpWLGSjWrZssbZTMMvTfMnThbRRTs',
  'fTrTPGTbfftWBBmLjrJL',
  'DqHwVMqVplDslmlZmpHVwNnShWZFdBBdjWBtWtdtWJSSLS',
  'MNslpDvVHlwsmpQRgQgCfTTcvcRQ',
  'pBBhRgDsMsswprBhvgRglZtFGFFRqZtZmRtNqtZPPN',
  'TdmmzzmdZdqdGFtF',
  'nmSccCVmSCpDCswMwl',
  'NptqDsQtDTQzCvlzCpRlRp',
  'jmZcndmjbZcjrmDvFMFFlwCvzFnF',
  'jjgLVLrGcdDBNhWQTgHg',
  'mLVhhfSMSTmMwClHGdpjDHjGdV',
  'zPrZgJCgbsnrPtZzsCsbpRDjBRHnjGDRldRHppcG',
  'JJrbsFrZqrgWbbqbrgWzJPNTwhTNCmmvfWCShhhmwwfm',
  'ftgfljvgfgBTNvtggFDDGLGRDnMDzcQzncGt',
  'VdbpbVdZwdwrsVVLRrMrDLDBGnBGcM',
  'wmpWwWsHWBCCCPPvjvmSqlfTTmSNgN',
  'jSqmzmmSSDRjLMLDwqjNcMMLTTflffWCCsRsTHnHVrfHWTsr',
  'tdbgZpgBPdgGZGGFTHVpCsCVfVsJpnWl',
  'FnPQFvbvhFFFbvBwScjhzcqSLLSzSN',
  'bWdgrWwwFWbgzFWzrmNbdPqttChMSRnmqSPSnqtMRM',
  'lcPJLDDPPfpMBCRJBtQtMh',
  'lGDGjTGLLDHPPGjlPTsswsbHNFsNrFNFsrzr',
  'VmtHfVhBLHVtlhphjZMdnQQZZqZmQDdzQQ',
  'CPFwPWrvWgrfNgFPCMqZzMDDbznFTqqzDQ',
  'NNPsfffPCsBLjpVltV',
  'ssdBBJqJhlTJLsjTJqFFmnmmnnrcmpprmmmPcRlf',
  'gqtqzSgWQWqmnRPPcNmmQM',
  'GqbSVtGzvgvgWbZjjBhTdhBsTZBJBZ',
  'jhNBsPDzLjsVhLSNzgvcvbcwbBWFcgtWCc',
  'ZQQTTHHnGpMtnpdHpQJfMgrvWWFqbcWWGgrgwCCwwF',
  'nHpmMnQQMmHpRnHRmMJnnTShPzljzjSNmSDhLsNSPtSh',
  'GdqnBGFdlqzFnwdSCQZjZLLDZjZRvZLDVvgQ',
  'PsptsTcftMfcTfhTghVDvvjnRNjVZnvV',
  'WtPfJTfftJcMTrMnpccFwlCSCGFGCbCwJSbqBl',
  'GjFLGhjRwFjNSjSdJCBBdQJddbBc',
  'MVvMMHRzVtHlvlcQBQJHqdpQqCBC',
  'vDgVztvvmrgrVRrMmsrsmZzZnWhGnNhGWTLfnLwTLhLTjngL',
  'VljjQJSsrjjrCglsCjsgjVVfDLdZGMdvvGdQMzmvzcDQMc',
  'HqPBtcpRWwtHbbFwBHZfmfpDfvffDfMfmGvM',
  'PwHNbcwtqFqnwtNNqPNPPWBTThjhhVTCSJTThssVnSlJJV',
  'GCccNCrrnCrpnzrnCDPcDDrvHHTBqTPhswqhPTBTTwBhTj',
  'VfNmRtZgWWHdBdswdjZv',
  'SmtQfgNmVFgVLVLVmrnMpcDLGCGLGDMpCp',
  'CrdZdZmPPjrQdRPRDqDLBqBLBSWgWgLDzF',
  'sQhTNphsVbhhhMJfhNVGqltVSzSllBzStlzFFFWB',
  'hsMpwQhNMZmPmrwHRj',
  'cNVpSVRpLHRLsVWWfnfsCshW',
  'jvqjTgqZPlJZmbPPfbpswsPb',
  'vlqdTZdtJvqdZjgqZrtRpQFtLFRQczHGzt',
  'JJQndVQnQgTfNvGf',
  'ljpbWbmNbDlGTvggGvZf',
  'mpmRbMmmNDFDmScpzCsdzrnJrsCzrrnM',
  'tNFtNFFzzjjzjBtVNZVbjZGlpSvTllpWwvnBlWGGBGCC',
  'fPdcrrgPHrHMMMWlppGJSPwGSnGv',
  'fmrqrhhfhdRddHrhQqQrfnLZjLtNttZjjRtzjFtRNj',
  'sphRcpQRhfmnmfpptg',
  'WVPlGLlSjCjSlGSHJJWZdmbmfvPmmnftbbgDdt',
  'LJjjqVNjlnCTRcRhhsNcFF',
  'vwwqttFjwgClRNCCvGNmZZMmJsPJjJpTdMpsZd',
  'fBLVHHHrFnhHhnrVSTmfdPdPccTTPsMfsJ',
  'QzVWzznzFbWNGNlt',
  'vjMddVVmnWpdMndjvhhWfNLpfBsfLLZLBBSqqTZq',
  'RFlrzQJPSRGzzzzgBZNsgBZTBflfgf',
  'cQFDRHFDDGCJShCnvwVnnhCn',
  'hgjlpRRLlPJJhTLJMDnwBndSPBNvMqnN',
  'FGWVfZsmCbmVzrvtwCSMtMdnDMCw',
  'VsVmVZfVQDmVFrrmzmGrHHTJgJjhHJcllglLQJRL',
  'rrTVcTBgsjTffmfWHZTv',
  'JLdnDlpGlGSLlpwJpHZfFvRZnWzWrHWqFH',
  'wQDpDrdSlSCblCdwdSLlwQGBthPMsghNsVNVtCNNhNPjhs',
  'CtCMvNhDMHfDDdffqtDtCflpJlBpvmWWJWwlpwFFvjwB',
  'rGSbVGZrSsFJjlmBFZWp',
  'rbbQgzVGrFVSPPGqfhftfqztNtqHtt',
  'lMGZCGphllZDNshNNmHHND',
  'PLwjVwJVsHmRrZZw',
  'ffSdzjfZSjtjSjLtLLFFFGqFzznCpCnCBblQ',
  'CqRnlzHCRWTlHPTZVQrcQtFsQFTcrQ',
  'DfJcdBDBcftQjsrsBtjZ',
  'JDfdGhSvNGhNfffGSfRznPvcRWcqCqmlvlcn',
  'JPhBBBQCnCJCMhnhMZRrRZgbDgrWrNbglDgR',
  'jLtSTwtsShwRNpRWrh',
  'FLLSHsjGLGczvfPfJdfhddnHPC',
  'BjHBNrWmTjFgJngbJhWd',
  'vsGttMDtwCMQCJnqqqFJsggqdg',
  'GFtDSwwMpTrzSSfcfm',
  'rnWDQvpwWpDDcPjFPPHZjVDZ',
  'CTJCRmCJcZZZHCCQ',
  'LdlmdQJNpnLWbrfL',
  'VdTdcVTZwCRGVGGMVmttlF',
  'gnrsbngfgQSpBfpMBBBpSgMNNJbmGmlqGDqDNlFFJlGNFz',
  'gprgQhgpMMMPsrRTCdPZwCwZZCRH',
  'cHlCVGbbWHWqRNThhcNcmh',
  'MwQDzpwdJwpBpPDQvrhShfLTTRLfLdjfNRqS',
  'JwMBBrPsPDwQMDPPBPQJwMrvWHFbHHlgbsGnnWHnFnRGlblF',
  'PQPjPDjRRQSFLSlgSmLlfh',
  'zpLdBddbNCdqGbWJGWpJWWlsFsmmFpwfflFgfHwFhgmh',
  'nJLdLVnzqqbjRctcPDQVTP',
  'JdztScztPdSWLJLtgMbCjhvlbPRbjbMvCh',
  'VZrqfQcFQwGVVFqfrTFTNqhljRHDMvMMGhRDRRHGbDhG',
  'NZQNVQQpQmrZFQQFwQQVVZgBszJJgznstnmtcztdBSgs',
  'nFHLNJzFbLJGGLMlTTRZbZRhWRTr',
  'wVmgBBmtmwlqlWTwTM',
  'sdvmgcPsCPPQQSMz',
  'SccCqmQmgBmppLQmpSMjjlJzzsNPMDRbPNPlJM',
  'VHZvwtZwhZHtdTwrVbNsljlRDlJPDhzsbN',
  'dZwftVRftmcgpBCmBf',
  'NTTlVlgNSflqbphFFhNbFp',
  'wmmLmjwzwbWGLjRmtZZdhZLFtQQLQBFh',
  'RvjbMjjvMzMWbDWwvzPjvmWSfVfsTlVVPVgTgPfVsnnnsJ',
  'BsBsZHZNdWwsNdrzgCrMMqsjzzMC',
  'flfhVWFmLrhQzCCh',
  'fVbmFSpnSSmtnPZvdWbwvdvdHZ',
  'NsZWWWWLsBZPhfsLmPhcFCCHCMMrqfqcvHMfHH',
  'nThSllnplGlMpvFRcCqrrr',
  'DnTwSztgzlDnVGTwztmdZhmLdJdNDshBdsWs',
  'RBBGTFZGglMHvrtcgSdnNgjg',
  'DmVcbmbJmwJDJzVVwzJfmfstnztvjnNjvNSpdptvzCnpjj',
  'DsLcfLmbhVQssQJQscWRPBZZMMRLHFHZBGMG',
  'FVvhVnhFnFhmvFhVcMBHLgcPClrqqrtqCppldrRRTppldg',
  'QLWfDNwsQLtlrrCtDdpq',
  'sJwZwLsGJWGGwzzWZNbWNLjQHSVhvHSnhcMFcbVmnvcchSBS',
  'jTMNMrHBJWWDffRqfDBqfD',
  'QmSFphtQqQmVmqVnPnPlpwgfnRnDPl',
  'VqFmLFbLhmZhGFGmCmGtZLtJWzWHcJrNrHMccjMscMHzMZ',
  'hGPGmbfPzbPfgdMdWGqBGQcqpp',
  'nvFTvDrTdNZZlrjnMHHHpBBcppqq',
  'rNlZZNLvRdRCRFFwZwhgbmSJPSmPfhfwhS',
  'vjdbFWTtFRRvtvZZvdWJWbGjLhCcnrrrNqLNCPqchShNqc',
  'QHQVlDsMfmmDMHDBdLdCSLnhNLNNfqCd',
  'VQHsMDpHlzMBBwlsmMzmmlVwptvTWdvJdbvJtRTWgGFJJGtR',
  'nSScBcnbbFSQVdBFBtWpwtvtPbTZthtTvT',
  'pRzHpGjCDGzHGCGsThqqwZwPhCtvhTqZ',
  'NzlzjDDpNldBFrlfFQ',
  'qJlDlPPWppgppqPlplpfdvgnbMfGbdgCghMdCM',
  'QWTWZcSsWbvVvTnhfC',
  'tRFLwZrcrWzzlJmtBqlm',
  'HMNMvvzzNcmfNmfbhs',
  'qVcwCgjCLtWRSLsTPbmPfmTh',
  'RtWCJgddWRtCJdWWgdBjwWWwpzMFpHGprcBGFFnGHQZHQGpF',
  'gZgBDgDVGDGjmDZRtgjvVvtQdnLrcRcrdfdfCcnlscsJsn',
  'WTqzqHqNzpHpwzNhMHNwWPbQCQcCLsnCrLLfcrffNflcNn',
  'zHTwwpTPzTTwlFTFzwqzPbwZGgGZZBtmGGvGmBGZVFStFZ',
  'znlSSzfzTcmmfcCt',
  'PHWWGpqgPShPMwGwqJFTVtwtCVTCmTJcFc',
  'qHqqSggLrRLBbvDDdndzRQ',
  'WBddBQWZWWQqqQFMWfmrWsJnmVJJNDDVJGsLmHmLDN',
  'PTgCjvCCPPPzSZGJVLsVZCHHnH',
  'pzwtPTvzTjRTPtwSjPSzRgBbWMBfMwwZfbWrMrZFqFFM',
  'BqDwVqdqlDlblQMf',
  'ZcCWWcWzvJZjcPjZZZfTHfQJQHThqpMbQQJf',
  'LPCcZcczZLgCjvPWgvstjsjmRRBdmGrdGdmSFGnFrtGmqr',
  'CBvgQssVzfCBQSgvvvfmrlGrCtMGwthJlJtbrh',
  'TpLqLRFpqdRpRTfNPtRmrMMtMlMMmlMJlt',
  'PZTjqFFTHZZNZpqcVWzVvgzcWnSWfBDD',
  'SVSTpgpVpdNbpcVdfjcNfbcJnqsltcJPvRJqRwQqlQsJls',
  'zhWzDLmFHhmrWZmmzHJJQlnswqsvttrstQqs',
  'zGtZFGGCmZmGGFhLBWBGGFdgVjgppMTSTgMfCNfVVSdj',
  'CzjNJGcnzQJltPHttcPHTP',
  'bLVsqLbLmSSVrqmdhVSmsVFFprfrFWrwTTWWWZpFPtlP',
  'ssDsMqLqhvmvhdmdvzRCnQgRzzBjgnlNCM',
  'TzTLzzSGRlRSjWzlWRzHGTpNhPhJPmdnNPPbhlbPbdhfPh',
  'mBCDBVrCqVQvQMBcVcqBrBDsbtJfnZNbJndNNhthZNJfPZPs',
  'wMCrqVvBzmzHTGLw',
  'NbfwfZPPdVNPdBdQBcmQzrQz',
  'nnWqHLWGFMDFDLDjsqnHLsrQGzmJczmQrgJmJGZmQrgJ',
  'FFWRsHMHCZCWFwRwphpvlfTTpp',
  'PclPlVZvLDNvVZSLSMvvDttmtfzFtzHqtqtzzccCFc',
  'jrggQGhjQsTDbrbJjJQqzzCsdtzzFCdHqmBBHz',
  'WGDgngwrQggZMNvMWPMRRV',
  'wNgpMdMMcdSscccNcLLTbtQJtQJQltJwFtlBlzBt',
  'HHGhrLrCvHWHCPhrWDtnBllnQbfQftGnfnBF',
  'HvLjWCLHPZvHHHZjjrqVTTZVcppMgNNNNSpS',
  'QQrwQmvWQjgTfvBjfffrSDcrqSqDDVLctqqcVd',
  'GnHFnGhGplGMlHMNhzBzlLPLVcVNCPDqVNdcqLdqtV',
  'GnMGpslMhGsRzzHzGsZFZQJTTmWfBbvfgfgJRfbwbW',
  'MRCtSwMhvjCGtvMZDVWpVZJlVccNDlpb',
  'gdLQFFwwLfHJWnQlcJJbWc',
  'rdqdmqHLTLmsswsFHLFtMPRMCSSRtSjTPMPSCR',
  'jmCCnLCLZjZjRjQTLZQhGPGhhzHhDRGRDzwzwh',
  'stlJlrlJJcSSfSMMzPfhhGhzpwhpNwhD',
  'rbrbBcSlWmdZWjDnTm',
  'PNBRNnnqQRNfVfRtVVzgFLLttpSwgzzzmFFF',
  'fcWlcbvvCFzLbwLw',
  'rlrMrhTJhDcTTfhRNqHRQPQRQNQB',
  'TrprpprRVVfpRpVqTVpzDdvmvbbCchhcttqcthSMdd',
  'JlnZnFlsMBZnJHlsLsCLbSNtbNhdbbShCScm',
  'FlZjjsHHsnQFQwTDzMRRpGRR',
  'wHWzwCTTqJhzzvJhWHWhqJWrFsFQrrrFCfFfgjjgjprfsp',
  'DBRmZRtZLbnRBGSBmtGSLpjBrrsfrgsTQVrVrrPrgr',
  'DLnbcbtLtmNNmbRcGbcGmHzlThNNhqJTHdvqvWlHJh',
  'GSNqjRcqflNLnCTTWrWn',
  'BmwQtmtJwPwmzMwQtHtVssvrnpWTTnsTTgpVCLCs',
  'DBBQHJJrzhzQDDfSljRfhccfcdZf',
  'wtgtChCwzqgLzjggqtHtjFHHFcnPfdRDfZZVcPfVZZfGnfdm',
  'vBTrRTTWGGmcTDVD',
  'SJMbbpWslJblSSNzNsztRChzqRCj',
  'gBHHCtVCSHMQlfFTQqCfmq',
  'WrpdwjbwbwQGlPqSqblP',
  'wWDncWrDDNdWNRjScScjpzvHZtBMZtJsvLVgvzssBsvs',
  'VppWpVfmZPBlnmrGBzhttMzMpctLLcChSh',
  'FwgLJvRdHcwMzSzjzc',
  'QvbgdQLQgDvsqvqRHRDdDQDBWmBGBflnVbZmZmmnBBWrmW',
  'SqShwLFCQGpDHCtZCWpW',
  'bdHPHjTbJdsMnPHPbdjgtnBlVlBnVgtZpDBpWV',
  'bdmPcjbjMNMvvHbTcQRNfRwRwLffwwqwNF',
  'zdRHTpQTQHQnpnnQRHTsNNlJSJWmzJmJllNmSG',
  'FBbRvLbFRwLqbbVgBVqqLFqJtJNcltsSGmgmGtNtgWmstm',
  'FLhhfvvVwvjqfLRBqLVqbwqZQrTTpHMHjdrpnnDPDQCdCrpC',
  'JgjzvbJCWgbjgGbJWjRhgNPGHHBMtqBStZZsHMSsBqtD',
  'cfQdwQFdQQppnVVnlFLLBsBZMhqPlPMMqBSHDtHM',
  'wnQhcnVddmdWgjvjmvRjjJ',
  'QpcRtndvsLcVJtRSzWSlWjzSbjjWBv',
  'qGZPqCTmGPqgGTCqHgCqZCPFWbbBNBMNBbdBMlWWrbjlMbFl',
  'qhHDGhCmPhZHgDmDVQthttRchLwLdwcc',
  'srpPMwlMmsrGFGswvDRhRWRDJJJchJ',
  'fSgBbCBNnBTTgCNLTCRJhRJVWhTcVVVFFJdR',
  'SbBnnLNZCLFQCZjnCnZFjPrzqmlMmmsrpzrlsmtt',
  'BBsfDfsBDSWRwlLqmWCpWcllrl',
  'nQMgMnnnhdntgMBrCdpNNLNlNqLqLl',
  'FnQFHzPQJjJGRBGvfR',
  'lRnVRFFlgMCRVwLgFZRnZQHWdcftHdmcJHmmMdzzfz',
  'DGBqGQbhhBDbSBpGDBzqdNHJdtmcWdqdmtcm',
  'bjbsBvjhSlVsPRgLQl',
  'dDLbRdTMRJMbFRzZBfzNSjtNBzBD',
  'PmgspqqVrppTVrvrsPhhfQwZBwNjNtNffzqqfwwN',
  'mCcmsngrPvpVTssCVsvsPLRRJllGFlnRGbMJMWWlJJ',
  'fGlGZHRRbwgPbZRRNCdcSWpncnQtQWlWcWpW',
  'JrTLJgVvVLQQvtSvQncQ',
  'JrrrmMTBVTmjBMrVjrshmJzgCfzRPCRZPGHfbwNPzbZHNH',
  'qqqlDDZzVVnNqHDDFFFNlQpzjrTvsvzTbgJQQggjJp',
  'cWPWcCmMfCMWdtPMhMbQQQjGGjpdvjTbjgjr',
  'WtMSBCtCwchChMfBWtcPnNVNqZZLDRNqTRnnlwHn',
  'mvQQnhBvhmvBmncmZBclTZTQccRFNFFdqFFgVqSRrgFrppNR',
  'MjzJPzGPfffMCjVVjfPHLCFRNFStqrdRSdqdNGRqNptq',
  'HDJHPjDJLfjbzfwPjCzCWWTwlmQhBnsWBvVsvBvZ',
  'RVjcshhscQhrVjhvzjVfDNnzGtftmDHFttFGGf',
  'qLcBCCMBJJbTdBDnNtdfnmDG',
  'WpZgLLclTclRwgjgsrwsvj',
  'shhhltNPcDtlNcNMcsctNtppLZvWWFLTFFZpTZDQgFLT',
  'dRgJVzRHbqnLpTWQvLLJfp',
  'mCVCdzqHndbqHCrVqRrmbwtNBsmPwNmScPgtPhBclw',
  'bDDZMDrFPsrsMcsrbJZJdMMGpSzpSbwRSSRGpCHCGzlhCC',
  'BWWNQjBLQVHhlGpSCmwj',
  'ffwnNwfgtnNgVVwfNWBWnFsMJTJTcPFJcTFDsrJstJ',
  'vQbQLQBpBvbvpHplHNTHWGZDngntZCQGgZhGhtjG',
  'rqccPPmcrffRmsmCjVgnrGChChDjgW',
  'fqRJsJMSlSzSWTbT',
  'brsjjJPJwrJJsrRRlllNQGWQpwppCtfGGtWzGGMQ',
  'ncBqqLTDnmLgVDZVnBDmdtVVtMzWWdMCQdpQWdVz',
  'hDZgTSSnTzNPNFSFPF',
  'VZVJJtWTsfTVVWsJhPWrCjzSBJlHSmjJCRlNSSlz',
  'CqMpwccgvvgLnvLbMMRRjBNHzjmGmwNHlmlN',
  'gLqqvpCDfVDrTfVW',
  'CNMDGNPPNJCGbLnTffsTLT',
  'tcBBRlrBdQrtmtWFjjbnrTjjFbjr',
  'cTQQhcmvcBRcwDMVDZZPPCJh',
  'mBCdgPLgZmLfGmfvGhtRQJWjtjQGQhtN',
  'pMwrVwbwHMsqcTWQhQWzggTTWp',
  'nnSMwrlrsmSZgvvmDd',
  'WNSzpCzNzqzNdmqrRHrrLHFrJH',
  'MtPfvnGMPnMcbnRtDHTRFFDrmJRQ',
  'PcBsfPPHPGGfcSzZjNjpNZZdCs',
  'mDCZVLDhWVSDCRvGtsGgGRHl',
  'JjPwPNdcPnjPdcwNltHzzGmgGJzQJJRQ',
  'dqfjnNmwmbmWrZMbMrThhB',
  'qtBpNZFpBGFNfZNPmZPmQmHrmPPPTz',
  'LLwJLvDvlWWLHdwDrVcCRcDVzzVVcV',
  'sMMwvgjnMvjvnlsvNFBqfGHFqHGjtSpS',
  'MmZZsFgwJTdTMdgmZdZRgFhDHhPQPPnRPhCrHhnnrPDD',
  'fBcLlNNpQCDLDJJC',
  'jSbWWlWpBpclWlWpNWlVBbWVdgwswFJmFJsGtdMggZFGbZwd',
  'CMVQVMLLMFGRCMWQttnqqwQwhqsm',
  'pJzlczSpPpPgmsqNhmPGDstq',
  'gZgTccZGGpzdpjclGRVMVRFRMFvHRLRdLf',
  'FMWMSBtStZqZWQtFtScWWSZmHPVJJVHwwlTgmgbzQwbwTJ',
  'jhGLhdjNjsLvLsshzHJPVdVmmbzHzdHJ',
  'jvDRNjnDNGRCzjLzZZpqnrFBSccWrMcB',
  'zggmthDDghHvtrdgrVWfSBRwTHLWHwsBWw',
  'PGGjpCjQnJQGJcJnnQpjFWVSsZWVLRZLBcsWSZBRWS',
  'FGQlpnJCbqqGGRCjjnlCqGMtdNmmmvdNmmmzvhbrmgMz',
  'TstvBTdgBhqTsdTcPlfCSrNMrNnrCNNSNNgp',
  'HwLQwQDZzDjnDbmMhNSnmm',
  'FZLVzLLQHRRzwWHjdPlJctlJtlsllhRs',
  'fBtPsMDDswHvBmmVdBlSBRcGGnhVhg',
  'LWJbrpFqpTLTTjqqNWlhnRGGSnhrcSdlRlsh',
  'JWNbbpjJzTbNNNJNJMvmvfZHvzDsHDCsZw',
  'LPGnPNLtwGhFFnJPfsqpVVszzpsP',
  'TcWdvlrcWddggrDBDDdDMmWzRJqfVQZqmsfZsRQzZfZzQJ',
  'TldWrMrDdlDCDdMTcwSLVCSShLNSwHjhGF',
  'JGsWWWQsJmPwQWbBPmccbcbqFfMMpFDVCDFVFVCDqqfFwD',
  'ZtLnlvLnNtvLndnCmfMVSmVCClfpVp',
  'zTzZtjnZNLNmZvdtznntHHZJbBRGBRQWcJGbGsbsJRPQWT',
  'MLmlMTPtQtMNlhbqbbqhflBB',
  'rcrvjpSvScbRbBvbDBPG',
  'ZZJzSHpzPrJzHFmMVMFmHCLNtV',
]

const sampleInput = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw',
]

const priorities = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

{ // Part 1
  let sum = 0
  for (const rucksack of input) {
    assert(rucksack.length % 2 === 0) // make sure the splits will be even

    const left = rucksack.substring(0, rucksack.length / 2).split('')
    const right = rucksack.substring(rucksack.length / 2).split('')
    const commonItems = intersection(left, right)
    assert(commonItems.length === 1)

    const priority = priorities.indexOf(commonItems[0])
    sum += priority
  }

  console.log('Part 1:', sum) // 7831
}

{ // Part 2
  assert(input.length % 3 === 0) // iterate later with step of 3

  let sum = 0
  for (let i = 0; i < input.length; i += 3) {
    const commonItems = intersection(input[i].split(''), input[i + 1].split(''), input[i + 2].split(''))
    assert(commonItems.length === 1)

    const priority = priorities.indexOf(commonItems[0])
    sum += priority
  }

  console.log('Part 2:', sum) // 2683
}
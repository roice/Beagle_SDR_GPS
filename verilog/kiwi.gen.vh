// this file auto-generated by the embedded processor assembler -- edits likely to be overwritten

`ifndef _KIWI_GEN_VH_
`define _KIWI_GEN_VH_

// from assembler DEF directives:

	localparam FPGA_VER = 4'd1;    // DEFp 0x1
`define DEF_FPGA_VER
	localparam FW_ID = 20480;    // DEFp 0x5000
`define DEF_FW_ID
	localparam ADC_BITS = 14;    // DEFp 0xe
`define DEF_ADC_BITS
	localparam NUM_CMDS = 36;    // DEFp 0x24
`define DEF_NUM_CMDS
	localparam DEFAULT_NSYNC = 2;    // DEFp 0x2
`define DEF_DEFAULT_NSYNC
`define USE_CPU_MULT    // DEFh 0x1
`define USE_MIX_DDS    // DEFh 0x1
`define USE_GEN    // DEFh 0x1
//`define USE_HBEAT    // DEFh 0x0
//`define USE_LOGGER    // DEFh 0x0
`define USE_CPU_CTR    // DEFh 0x1
`define USE_DEBUG    // DEFh 0x1
`define USE_VIVADO    // DEFh 0x1
`define ARTIX_7    // DEFh 0x1
//`define QUICK_BUILD    // DEFh 0x0
//`define SPI_PUMP_CHECK    // DEFh 0x0
//`define STACK_CHECK    // DEFh 0x0
//`define SND_SEQ_CHECK    // DEFh 0x0
//`define SND_TIMING_CK    // DEFh 0x0
`define SPI_32    // DEFh 0x1
	localparam GPS_CHANS = 12;    // DEFp 0xc
`define DEF_GPS_CHANS
	localparam RX_CHANS = 4;    // DEFp 0x4
`define DEF_RX_CHANS
	localparam WF_CHANS = 4;    // DEFp 0x4
`define DEF_WF_CHANS
	localparam FPGA_ID = 4'd3;    // DEFp 0x3
`define DEF_FPGA_ID
//`define USE_RX_SEQ    // DEFh 0x0
`define SND_12000    // DEFh 0x1
//`define SND_9600    // DEFh 0x0
	localparam SND_RATE = 12000;    // DEFp 0x2ee0
`define DEF_SND_RATE
	localparam RX1_DECIM = 505;    // DEFp 0x1f9
`define DEF_RX1_DECIM
	localparam RX2_DECIM = 11;    // DEFp 0xb
`define DEF_RX2_DECIM
	localparam NRX_BUFS = 8;    // DEFp 0x8
`define DEF_NRX_BUFS
	localparam NRX_SAMPS = 84;    // DEFp 0x54
`define DEF_NRX_SAMPS
	localparam NRX_SAMPS_RPT = 8;    // DEFp 0x8
`define DEF_NRX_SAMPS_RPT
	localparam NRX_SAMPS_LOOP = 42;    // DEFp 0x2a
`define DEF_NRX_SAMPS_LOOP
//`define USE_RX_CIC24    // DEFh 0x0
	localparam RX1_BITS = 22;    // DEFp 0x16
`define DEF_RX1_BITS
	localparam RX2_BITS = 18;    // DEFp 0x12
`define DEF_RX2_BITS
	localparam RXO_BITS = 24;    // DEFp 0x18
`define DEF_RXO_BITS
	localparam RX1_STAGES = 3;    // DEFp 0x3
`define DEF_RX1_STAGES
	localparam RX2_STAGES = 5;    // DEFp 0x5
`define DEF_RX2_STAGES
	localparam MAX_ZOOM = 14;    // DEFp 0xe
`define DEF_MAX_ZOOM
	localparam NWF_SAMPS = 482;    // DEFp 0x1e2
`define DEF_NWF_SAMPS
	localparam NWF_SAMPS_RPT = 48;    // DEFp 0x30
`define DEF_NWF_SAMPS_RPT
	localparam NWF_SAMPS_LOOP = 10;    // DEFp 0xa
`define DEF_NWF_SAMPS_LOOP
	localparam NWF_SAMPS_REM = 2;    // DEFp 0x2
`define DEF_NWF_SAMPS_REM
`define USE_WF_1CIC    // DEFh 0x1
`define USE_WF_PRUNE    // DEFh 0x1
`define USE_WF_CIC24    // DEFh 0x1
//`define USE_WF_MEM24    // DEFh 0x0
//`define USE_WF_NEW    // DEFh 0x0
	localparam WF1_STAGES = 5;    // DEFp 0x5
`define DEF_WF1_STAGES
	localparam WF2_STAGES = 5;    // DEFp 0x5
`define DEF_WF2_STAGES
	localparam WF1_BITS = 24;    // DEFp 0x18
`define DEF_WF1_BITS
	localparam WF2_BITS = 24;    // DEFp 0x18
`define DEF_WF2_BITS
	localparam WFO_BITS = 16;    // DEFp 0x10
`define DEF_WFO_BITS
	localparam WF_1CIC_MAXD = 8192;    // DEFp 0x2000
`define DEF_WF_1CIC_MAXD
	localparam WF_2CIC_MAXD = 0;    // DEFp 0x0
//`define DEF_WF_2CIC_MAXD
	localparam MAX_NAV_BITS = 64;    // DEFp 0x40
`define DEF_MAX_NAV_BITS
	localparam GPS_SAMPS = 256;    // DEFp 0x100
`define DEF_GPS_SAMPS
	localparam NADC_SAMPS = 512;    // DEFp 0x200
`define DEF_NADC_SAMPS
	localparam GET_CHAN_IQ = 0;    // DEFb: bit number for value: 0x1
	localparam GET_SRQ = 1;    // DEFb: bit number for value: 0x2
	localparam GET_SNAPSHOT = 2;    // DEFb: bit number for value: 0x4
	localparam HOST_RX = 3;    // DEFb: bit number for value: 0x8
	localparam GET_RX_SRQ = 4;    // DEFb: bit number for value: 0x10
	localparam GET_CPU_CTR0 = 5;    // DEFb: bit number for value: 0x20
	localparam GET_CPU_CTR1 = 6;    // DEFb: bit number for value: 0x40
	localparam GET_CPU_CTR2 = 7;    // DEFb: bit number for value: 0x80
	localparam GET_CPU_CTR3 = 8;    // DEFb: bit number for value: 0x100
	localparam GET_STATUS = 9;    // DEFb: bit number for value: 0x200
	localparam HOST_TX = 0;    // DEFb: bit number for value: 0x1
	localparam SET_MASK = 1;    // DEFb: bit number for value: 0x2
	localparam SET_CHAN = 2;    // DEFb: bit number for value: 0x4
	localparam SET_CA_NCO = 3;    // DEFb: bit number for value: 0x8
	localparam SET_LO_NCO = 4;    // DEFb: bit number for value: 0x10
	localparam SET_SV = 5;    // DEFb: bit number for value: 0x20
	localparam SET_PAUSE = 6;    // DEFb: bit number for value: 0x40
	localparam SET_CTRL = 0;    // DEFb: bit number for value: 0x1
	localparam SET_RX_CHAN = 1;    // DEFb: bit number for value: 0x2
	localparam SET_RX_FREQ = 2;    // DEFb: bit number for value: 0x4
	localparam SET_RX_NSAMPS = 3;    // DEFb: bit number for value: 0x8
	localparam SET_GEN = 4;    // DEFb: bit number for value: 0x10
	localparam SET_GEN_ATTN = 5;    // DEFb: bit number for value: 0x20
	localparam SET_WF_FREQ = 6;    // DEFb: bit number for value: 0x40
	localparam SET_WF_DECIM = 7;    // DEFb: bit number for value: 0x80
	localparam SET_WF_CHAN = 8;    // DEFb: bit number for value: 0x100
	localparam WF_SAMPLER_RST = 9;    // DEFb: bit number for value: 0x200
	localparam HOST_RST = 0;    // DEFb: bit number for value: 0x1
	localparam HOST_RDY = 1;    // DEFb: bit number for value: 0x2
	localparam GPS_SAMPLER_RST = 2;    // DEFb: bit number for value: 0x4
	localparam GET_GPS_SAMPLES = 3;    // DEFb: bit number for value: 0x8
	localparam GET_MEMORY = 4;    // DEFb: bit number for value: 0x10
	localparam GET_LOG = 5;    // DEFb: bit number for value: 0x20
	localparam PUT_LOG = 6;    // DEFb: bit number for value: 0x40
	localparam LOG_RST = 7;    // DEFb: bit number for value: 0x80
	localparam CPU_CTR_CLR = 8;    // DEFb: bit number for value: 0x100
	localparam CPU_CTR_ENA = 9;    // DEFb: bit number for value: 0x200
	localparam CPU_CTR_DIS = 10;    // DEFb: bit number for value: 0x400
	localparam GET_RX_SAMP = 0;    // DEFb: bit number for value: 0x1
	localparam RX_BUFFER_RST = 1;    // DEFb: bit number for value: 0x2
	localparam RX_GET_BUF_CTR = 2;    // DEFb: bit number for value: 0x4
	localparam SET_WF_CONTIN = 3;    // DEFb: bit number for value: 0x8
	localparam GET_WF_SAMP_I = 4;    // DEFb: bit number for value: 0x10
	localparam GET_WF_SAMP_Q = 5;    // DEFb: bit number for value: 0x20
	localparam CLR_RX_OVFL = 6;    // DEFb: bit number for value: 0x40
	localparam FREEZE_TOS = 7;    // DEFb: bit number for value: 0x80
	localparam WF_SAMP_RD_RST = 0;    // DEFb: bit number for value: 0x1
	localparam WF_SAMP_WR_RST = 1;    // DEFb: bit number for value: 0x2
	localparam WF_SAMP_CONTIN = 2;    // DEFb: bit number for value: 0x4
	localparam WF_SAMP_SYNC = 3;    // DEFb: bit number for value: 0x8
	localparam STAT_FPGA_ID = 15;    // DEFp 0xf
`define DEF_STAT_FPGA_ID
	localparam STAT_CLOCK_ID = 240;    // DEFp 0xf0
`define DEF_STAT_CLOCK_ID
	localparam STAT_FPGA_VER = 3840;    // DEFp 0xf00
`define DEF_STAT_FPGA_VER
	localparam STAT_FW_ID = 28672;    // DEFp 0x7000
`define DEF_STAT_FW_ID
	localparam STAT_OVFL = 15;    // DEFb: bit number for value: 0x8000
	localparam CTRL_OSC_EN = 8;    // DEFb: bit number for value: 0x100
	localparam CTRL_EEPROM_WP = 9;    // DEFb: bit number for value: 0x200
	localparam CTRL_USE_GEN = 10;    // DEFb: bit number for value: 0x400
	localparam CTRL_TEST_MODE = 11;    // DEFb: bit number for value: 0x800
	localparam CTRL_INTERRUPT = 12;    // DEFb: bit number for value: 0x1000
`define HEARTBEAT_IND    // DEFh 0x200
	localparam CTRL_UNUSED_OUT = 15;    // DEFb: bit number for value: 0x8000

`endif

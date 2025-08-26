// ==UserScript==
// @name       qqmusic
// @namespace  npm/vite-plugin-monkey
// @version    0.0.0
// @icon       https://vitejs.dev/logo.svg
// @match      https://y.qq.com/*
// @require    https://cdn.jsdelivr.net/npm/dayjs@1.11.13/dayjs.min.js
// @require    https://cdn.jsdelivr.net/npm/react@19.1.1/umd/react.production.min.js
// @require    https://cdn.jsdelivr.net/npm/react-dom@19.1.1/umd/react-dom.production.min.js
// @require    https://cdn.jsdelivr.net/npm/antd@5.27.1/dist/antd.min.js
// @require    https://cdn.jsdelivr.net/npm/@ant-design/icons@5.6.1/dist/index.umd.min.js
// @connect    y.qq.com
// @grant      GM_addStyle
// @grant      GM_deleteValue
// @grant      GM_getValue
// @grant      GM_listValues
// @grant      GM_setValue
// @grant      GM_xmlhttpRequest
// ==/UserScript==

(function (antd, require$$1, require$$2, icons) {
  'use strict';

  const d=new Set;const _ = async e=>{d.has(e)||(d.add(e),(t=>{typeof GM_addStyle=="function"?GM_addStyle(t):document.head.appendChild(document.createElement("style")).append(t);})(e));};

  _(' @charset "UTF-8";._button-group_y8t3i_1{position:fixed;right:20px;top:50%;width:44px;max-height:400px;overflow-y:auto;background:#fff3;border-radius:22px;box-shadow:0 2px 10px #0006;padding:10px 0;z-index:999;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}._button-group_y8t3i_1::-webkit-scrollbar{width:0;background:transparent}._button-group_y8t3i_1 .ant-btn{width:36px;height:36px;padding:0;border:none;background:transparent;display:flex;align-items:center;justify-content:center;margin:4px auto;transition:all .3s}._button-group_y8t3i_1 .ant-btn:hover{background:#c20c0c1a;color:#fff;transform:scale(1.1)}._button-group_y8t3i_1 .ant-btn:active{transform:scale(.95)}._button-group_y8t3i_1 .ant-btn .anticon{font-size:20px;color:#666}._button-group_y8t3i_1 .ant-btn:hover .anticon{color:#fff}._button-group_y8t3i_1 .ant-tooltip .ant-tooltip-inner{background-color:#000c;border-radius:4px;font-size:12px;padding:4px 8px}._button-group_y8t3i_1 .ant-tooltip .ant-tooltip-arrow-content{background-color:#000c}._copy-text_1att4_1{display:flex;align-items:center;width:100%}._copy-text_1att4_1 ._text_1att4_6{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._copy-text_1att4_1 ._copy-btn_1att4_12{flex-shrink:0;padding:0}._text-overflow-show-tips-container_btabq_1{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:text}._select-search_19wb1_1 .ant-select:first-child .ant-select-selector{border-radius:32px 0 0 32px!important}._select-search_19wb1_1>:last-child{border-radius:0 32px 32px 0!important}._search-form_10eg9_1{margin-bottom:-16px}._search-form_10eg9_1 .ant-form-item{margin-bottom:16px}._search-form_10eg9_1 input.ant-input,._search-form_10eg9_1 .ant-input-affix-wrapper,._search-form_10eg9_1 .ant-picker,._search-form_10eg9_1 .ant-calendar-picker-input,._search-form_10eg9_1 .ant-select-selector,._search-form_10eg9_1 .ant-select-multiple .ant-select-selection-item{border-radius:32px}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1{width:100%}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4{display:flex;align-items:center;justify-content:space-between;padding-right:30px}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10{display:flex;align-items:center}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14{display:flex;flex-direction:column;align-items:center;padding:8px 16px;border-radius:8px;margin-left:12px;box-shadow:0 2px 8px #0000001a;transition:all .3s ease;position:relative;overflow:hidden}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(1){background:linear-gradient(135deg,#667eea,#764ba2);box-shadow:0 2px 8px #667eea4d}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(1):hover{box-shadow:0 4px 12px #667eea66}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(2){background:linear-gradient(135deg,#f093fb,#f5576c);box-shadow:0 2px 8px #f093fb4d}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(2):hover{box-shadow:0 4px 12px #f093fb66}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(3){background:linear-gradient(135deg,#4facfe,#00f2fe);box-shadow:0 2px 8px #4facfe4d}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(3):hover{box-shadow:0 4px 12px #4facfe66}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(1):hover{transform:translateY(-2px) scale(1.02)}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(2):hover{transform:translateY(-2px) scale(1.02)}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(3):hover{transform:translateY(-2px) scale(1.02)}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:hover{transform:translateY(-2px)}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14._loading_jnpqx_59{opacity:.7}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14._loading_jnpqx_59:nth-child(1) ._stat-value_jnpqx_62{animation:_pulse_jnpqx_1 1.5s ease-in-out infinite;animation-delay:.2s}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14._loading_jnpqx_59:nth-child(2) ._stat-value_jnpqx_62{animation:_pulse_jnpqx_1 1.5s ease-in-out infinite;animation-delay:.4s}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14._loading_jnpqx_59:nth-child(3) ._stat-value_jnpqx_62{animation:_pulse_jnpqx_1 1.5s ease-in-out infinite;animation-delay:.6s}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14 ._stat-label_jnpqx_74{font-size:12px;color:#fffc;font-weight:500;margin-bottom:2px}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14 ._stat-value_jnpqx_62{font-size:16px;color:#fff;font-weight:600;line-height:1;transition:all .3s ease}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14 ._stat-value_jnpqx_62:hover{transform:scale(1.1)}._hot-song-modal_jnpqx_1 ._singer-info-display_jnpqx_90{margin-bottom:16px;padding:16px;background-color:#f5f5f5;border-radius:6px;border-left:4px solid #1890ff}._hot-song-modal_jnpqx_1 ._song-table_jnpqx_97{margin-bottom:16px}._hot-song-modal_jnpqx_1 ._song-info_jnpqx_100 ._album-cover_jnpqx_100{width:40px;height:40px;border-radius:4px;overflow:hidden;flex-shrink:0}._hot-song-modal_jnpqx_1 ._song-info_jnpqx_100 ._album-cover_jnpqx_100 img{width:100%;height:100%;object-fit:cover;border-radius:4px}._hot-song-modal_jnpqx_1 ._song-info_jnpqx_100 ._song-details_jnpqx_113{flex:1;min-width:0}._hot-song-modal_jnpqx_1 ._song-info_jnpqx_100 ._song-details_jnpqx_113 ._song-name_jnpqx_117{font-weight:500;color:#262626;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:150px}._hot-song-modal_jnpqx_1 ._song-info_jnpqx_100 ._song-details_jnpqx_113 ._song-album_jnpqx_126{font-size:12px;color:#8c8c8c;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:150px}._hot-song-modal_jnpqx_1 ._singer-info_jnpqx_90 ._singer-name_jnpqx_134{font-weight:500;color:#262626;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px}._hot-song-modal_jnpqx_1 ._singer-info_jnpqx_90 ._singer-id_jnpqx_142{font-size:12px;color:#8c8c8c;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px}._hot-song-modal_jnpqx_1 ._song-id-text_jnpqx_150,._hot-song-modal_jnpqx_1 ._song-mid-text_jnpqx_151{font-family:Monaco,Menlo,Ubuntu Mono,monospace;font-size:12px;color:#595959;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px;display:inline-block}._hot-song-modal_jnpqx_1 ._footer_jnpqx_161{display:flex;align-items:center;justify-content:flex-end;margin-top:16px}._hot-song-modal_jnpqx_1 ._footer_jnpqx_161 ._selected-count_jnpqx_167{font-size:14px;color:#595959;margin-right:auto}@keyframes _pulse_jnpqx_1{0%,to{opacity:1}50%{opacity:.5}}._album-list-modal_13s8d_1 ._modal-title_13s8d_1{width:100%}._album-list-modal_13s8d_1 ._modal-title_13s8d_1 ._title-content_13s8d_4{display:flex;align-items:center;justify-content:space-between;padding-right:30px}._album-list-modal_13s8d_1 ._modal-title_13s8d_1 ._title-content_13s8d_4 ._title-stats_13s8d_10{display:flex;align-items:center}._album-list-modal_13s8d_1 ._modal-title_13s8d_1 ._title-content_13s8d_4 ._title-stats_13s8d_10 ._stat-item_13s8d_14{display:flex;flex-direction:column;align-items:center;padding:8px 16px;border-radius:8px;margin-left:12px;box-shadow:0 2px 8px #0000001a;transition:all .3s ease;position:relative;overflow:hidden}._album-list-modal_13s8d_1 ._modal-title_13s8d_1 ._title-content_13s8d_4 ._title-stats_13s8d_10 ._stat-item_13s8d_14:nth-child(1){background:linear-gradient(135deg,#667eea,#764ba2);box-shadow:0 2px 8px #667eea4d}._album-list-modal_13s8d_1 ._modal-title_13s8d_1 ._title-content_13s8d_4 ._title-stats_13s8d_10 ._stat-item_13s8d_14:nth-child(1):hover{box-shadow:0 4px 12px #667eea66}._album-list-modal_13s8d_1 ._modal-title_13s8d_1 ._title-content_13s8d_4 ._title-stats_13s8d_10 ._stat-item_13s8d_14:nth-child(2){background:linear-gradient(135deg,#f093fb,#f5576c);box-shadow:0 2px 8px #f093fb4d}._album-list-modal_13s8d_1 ._modal-title_13s8d_1 ._title-content_13s8d_4 ._title-stats_13s8d_10 ._stat-item_13s8d_14:nth-child(2):hover{box-shadow:0 4px 12px #f093fb66}._album-list-modal_13s8d_1 ._modal-title_13s8d_1 ._title-content_13s8d_4 ._title-stats_13s8d_10 ._stat-item_13s8d_14:nth-child(1):hover{transform:translateY(-2px) scale(1.02)}._album-list-modal_13s8d_1 ._modal-title_13s8d_1 ._title-content_13s8d_4 ._title-stats_13s8d_10 ._stat-item_13s8d_14:nth-child(2):hover{transform:translateY(-2px) scale(1.02)}._album-list-modal_13s8d_1 ._modal-title_13s8d_1 ._title-content_13s8d_4 ._title-stats_13s8d_10 ._stat-item_13s8d_14:hover{transform:translateY(-2px)}._album-list-modal_13s8d_1 ._modal-title_13s8d_1 ._title-content_13s8d_4 ._title-stats_13s8d_10 ._stat-item_13s8d_14._loading_13s8d_49{opacity:.7}._album-list-modal_13s8d_1 ._modal-title_13s8d_1 ._title-content_13s8d_4 ._title-stats_13s8d_10 ._stat-item_13s8d_14._loading_13s8d_49:nth-child(1) ._stat-value_13s8d_52{animation:_pulse_13s8d_1 1.5s ease-in-out infinite;animation-delay:.2s}._album-list-modal_13s8d_1 ._modal-title_13s8d_1 ._title-content_13s8d_4 ._title-stats_13s8d_10 ._stat-item_13s8d_14._loading_13s8d_49:nth-child(2) ._stat-value_13s8d_52{animation:_pulse_13s8d_1 1.5s ease-in-out infinite;animation-delay:.4s}._album-list-modal_13s8d_1 ._modal-title_13s8d_1 ._title-content_13s8d_4 ._title-stats_13s8d_10 ._stat-item_13s8d_14 ._stat-label_13s8d_60{font-size:12px;color:#fffc;font-weight:500;margin-bottom:2px}._album-list-modal_13s8d_1 ._modal-title_13s8d_1 ._title-content_13s8d_4 ._title-stats_13s8d_10 ._stat-item_13s8d_14 ._stat-value_13s8d_52{font-size:16px;color:#fff;font-weight:600;line-height:1;transition:all .3s ease}._album-list-modal_13s8d_1 ._modal-title_13s8d_1 ._title-content_13s8d_4 ._title-stats_13s8d_10 ._stat-item_13s8d_14 ._stat-value_13s8d_52:hover{transform:scale(1.1)}._album-list-modal_13s8d_1 ._album-table_13s8d_76{margin-bottom:16px}._album-list-modal_13s8d_1 ._album-info_13s8d_79 ._album-cover_13s8d_79{width:60px;height:60px;border-radius:6px;overflow:hidden;flex-shrink:0}._album-list-modal_13s8d_1 ._album-info_13s8d_79 ._album-cover_13s8d_79 img{width:100%;height:100%;object-fit:cover;border-radius:6px}._album-list-modal_13s8d_1 ._album-info_13s8d_79 ._album-details_13s8d_92{flex:1;min-width:0}._album-list-modal_13s8d_1 ._album-info_13s8d_79 ._album-details_13s8d_92 ._album-name_13s8d_96{font-weight:500;color:#262626;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px}._album-list-modal_13s8d_1 ._album-info_13s8d_79 ._album-details_13s8d_92 ._album-trans-name_13s8d_105{font-size:12px;color:#8c8c8c;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px}._album-list-modal_13s8d_1 ._album-info_13s8d_79 ._album-details_13s8d_92 ._album-type_13s8d_114{margin-top:4px}._album-list-modal_13s8d_1 ._singer-info_13s8d_117 ._singer-name_13s8d_117{font-weight:500;color:#262626;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px}._album-list-modal_13s8d_1 ._singer-info_13s8d_117 ._singer-id_13s8d_125{font-size:12px;color:#8c8c8c;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px}._album-list-modal_13s8d_1 ._album-id-text_13s8d_133,._album-list-modal_13s8d_1 ._album-mid-text_13s8d_134{font-family:Monaco,Menlo,Ubuntu Mono,monospace;font-size:12px;color:#595959;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px;display:inline-block}._album-list-modal_13s8d_1 ._publish-date_13s8d_144{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px;display:inline-block}._album-list-modal_13s8d_1 ._footer_13s8d_151{display:flex;justify-content:space-between;align-items:center;padding:16px 0;border-top:1px solid #f0f0f0}._album-list-modal_13s8d_1 ._footer_13s8d_151 ._selected-count_13s8d_158{font-size:14px;color:#666}._album-list-modal_13s8d_1 ._footer_13s8d_151 ._selected-count_13s8d_158 ._selected-info_13s8d_162{color:#1890ff;margin-left:8px;font-weight:500}@keyframes _pulse_13s8d_1{0%,to{opacity:1}50%{opacity:.5}}._singer-search-modal_1jeib_2 .ant-modal-body{display:flex;flex-direction:column;gap:16px}._singer-info_1jeib_8{display:flex;align-items:center}._singer-info_1jeib_8 ._singer-avatar_1jeib_12{border:3px solid #f0f0f0;box-shadow:0 2px 8px #0000001a;transition:all .3s ease}._singer-info_1jeib_8 ._singer-avatar_1jeib_12:hover{border-color:#31c27c;transform:scale(1.05)}._singer-info_1jeib_8 ._singer-details_1jeib_21{display:flex;flex-direction:column;gap:4px}._singer-info_1jeib_8 ._singer-details_1jeib_21 ._singer-name_1jeib_26{font-size:16px;font-weight:600;color:#262626;line-height:1.4}._singer-info_1jeib_8 ._singer-details_1jeib_21 ._singer-country_1jeib_32{font-size:13px;color:#666;display:flex;align-items:center;gap:4px}._singer-info_1jeib_8 ._singer-details_1jeib_21 ._singer-country_1jeib_32:before{content:"\u{1F4CD}";font-size:12px}._singer-info_1jeib_8 ._singer-details_1jeib_21 ._singer-id_1jeib_43{font-size:12px;color:#999;font-family:Courier New,monospace;background:#f5f5f5;padding:2px 6px;border-radius:4px;display:inline-block;width:fit-content}._singer-id-text_1jeib_54{font-family:Courier New,monospace;font-size:13px;color:#666;background:#f8f9fa;padding:4px 8px;border-radius:4px;border:1px solid #e9ecef}._singer-mid-text_1jeib_64{font-family:Courier New,monospace;font-size:12px;color:#999;background:#f5f5f5;padding:4px 8px;border-radius:4px;border:1px solid #e9ecef;word-break:break-all}._info-tag_1jeib_75{border-radius:6px;font-size:12px;padding:4px 8px;font-weight:500;border:none;box-shadow:0 1px 3px #0000001a}._info-tag_1jeib_75._ant-tag-blue_1jeib_83{background:linear-gradient(135deg,#e6f7ff,#bae7ff);color:#1890ff}._song-search-modal_15iqn_1 ._modal-title_15iqn_1{display:flex;align-items:center;justify-content:space-between}._song-search-modal_15iqn_1 ._modal-title_15iqn_1 ._title-content_15iqn_6{display:flex;align-items:center;gap:12px}._song-search-modal_15iqn_1 ._modal-title_15iqn_1 ._title-content_15iqn_6 ._title-text_15iqn_11{font-size:16px;font-weight:600;color:#333}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-info_15iqn_16{display:flex;align-items:center;gap:12px}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-info_15iqn_16 ._song-cover_15iqn_21{width:60px;height:60px;border-radius:8px;overflow:hidden;background-color:#f5f5f5;display:flex;align-items:center;justify-content:center}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-info_15iqn_16 ._song-details_15iqn_31{display:flex;flex-direction:column;gap:4px}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-info_15iqn_16 ._song-details_15iqn_31 ._song-name_15iqn_36{font-size:14px;font-weight:500;color:#333;line-height:1.4;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:200px}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-info_15iqn_16 ._song-details_15iqn_31 ._song-album_15iqn_46{font-size:12px;color:#666;line-height:1.4;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:200px}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._singer-info_15iqn_55{display:flex;flex-direction:column;gap:4px}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._singer-info_15iqn_55 ._singer-name_15iqn_60{font-size:14px;color:#333;line-height:1.4;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._duration_15iqn_69{font-size:14px;color:#666;font-family:monospace}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-id-text_15iqn_74,._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-mid-text_15iqn_75{font-size:12px;color:#666;font-family:monospace;background-color:#f5f5f5;padding:2px 6px;border-radius:4px;cursor:pointer}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-id-text_15iqn_74:hover,._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-mid-text_15iqn_75:hover{background-color:#e6f7ff;color:#1890ff}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-track{background:transparent;border-radius:6px}::-webkit-scrollbar-thumb{background:#8080804d;border-radius:6px;transition:all .2s ease-in-out}::-webkit-scrollbar-thumb:hover{background:#80808080}*{scrollbar-width:thin;scrollbar-color:rgba(128,128,128,.3) transparent} ');

  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production = {};
  /**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactJsxRuntime_production;
  function requireReactJsxRuntime_production() {
    if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
    hasRequiredReactJsxRuntime_production = 1;
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    function jsxProd(type, config, maybeKey) {
      var key = null;
      void 0 !== maybeKey && (key = "" + maybeKey);
      void 0 !== config.key && (key = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      config = maybeKey.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== config ? config : null,
        props: maybeKey
      };
    }
    reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
    reactJsxRuntime_production.jsx = jsxProd;
    reactJsxRuntime_production.jsxs = jsxProd;
    return reactJsxRuntime_production;
  }
  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    {
      jsxRuntime.exports = requireReactJsxRuntime_production();
    }
    return jsxRuntime.exports;
  }
  var jsxRuntimeExports = requireJsxRuntime();
  var zh_CN$6 = {};
  var interopRequireDefault = { exports: {} };
  var hasRequiredInteropRequireDefault;
  function requireInteropRequireDefault() {
    if (hasRequiredInteropRequireDefault) return interopRequireDefault.exports;
    hasRequiredInteropRequireDefault = 1;
    (function(module) {
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
          "default": e
        };
      }
      module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(interopRequireDefault);
    return interopRequireDefault.exports;
  }
  var zh_CN$5 = {};
  var hasRequiredZh_CN$6;
  function requireZh_CN$6() {
    if (hasRequiredZh_CN$6) return zh_CN$5;
    hasRequiredZh_CN$6 = 1;
    Object.defineProperty(zh_CN$5, "__esModule", {
      value: true
    });
    zh_CN$5.default = void 0;
    var locale = {
      // Options
      items_per_page: "条/页",
      jump_to: "跳至",
      jump_to_confirm: "确定",
      page: "页",
      // Pagination
      prev_page: "上一页",
      next_page: "下一页",
      prev_5: "向前 5 页",
      next_5: "向后 5 页",
      prev_3: "向前 3 页",
      next_3: "向后 3 页",
      page_size: "页码"
    };
    zh_CN$5.default = locale;
    return zh_CN$5;
  }
  var zh_CN$4 = {};
  var zh_CN$3 = {};
  var zh_CN$2 = {};
  var objectSpread2 = { exports: {} };
  var defineProperty = { exports: {} };
  var toPropertyKey = { exports: {} };
  var _typeof = { exports: {} };
  var hasRequired_typeof;
  function require_typeof() {
    if (hasRequired_typeof) return _typeof.exports;
    hasRequired_typeof = 1;
    (function(module) {
      function _typeof2(o) {
        "@babel/helpers - typeof";
        return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(o);
      }
      module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(_typeof);
    return _typeof.exports;
  }
  var toPrimitive = { exports: {} };
  var hasRequiredToPrimitive;
  function requireToPrimitive() {
    if (hasRequiredToPrimitive) return toPrimitive.exports;
    hasRequiredToPrimitive = 1;
    (function(module) {
      var _typeof2 = require_typeof()["default"];
      function toPrimitive2(t, r) {
        if ("object" != _typeof2(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var i = e.call(t, r || "default");
          if ("object" != _typeof2(i)) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
      }
      module.exports = toPrimitive2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(toPrimitive);
    return toPrimitive.exports;
  }
  var hasRequiredToPropertyKey;
  function requireToPropertyKey() {
    if (hasRequiredToPropertyKey) return toPropertyKey.exports;
    hasRequiredToPropertyKey = 1;
    (function(module) {
      var _typeof2 = require_typeof()["default"];
      var toPrimitive2 = requireToPrimitive();
      function toPropertyKey2(t) {
        var i = toPrimitive2(t, "string");
        return "symbol" == _typeof2(i) ? i : i + "";
      }
      module.exports = toPropertyKey2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(toPropertyKey);
    return toPropertyKey.exports;
  }
  var hasRequiredDefineProperty;
  function requireDefineProperty() {
    if (hasRequiredDefineProperty) return defineProperty.exports;
    hasRequiredDefineProperty = 1;
    (function(module) {
      var toPropertyKey2 = requireToPropertyKey();
      function _defineProperty(e, r, t) {
        return (r = toPropertyKey2(r)) in e ? Object.defineProperty(e, r, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[r] = t, e;
      }
      module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(defineProperty);
    return defineProperty.exports;
  }
  var hasRequiredObjectSpread2;
  function requireObjectSpread2() {
    if (hasRequiredObjectSpread2) return objectSpread2.exports;
    hasRequiredObjectSpread2 = 1;
    (function(module) {
      var defineProperty2 = requireDefineProperty();
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r2) {
            return Object.getOwnPropertyDescriptor(e, r2).enumerable;
          })), t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread2(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
            defineProperty2(e, r2, t[r2]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
            Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
          });
        }
        return e;
      }
      module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(objectSpread2);
    return objectSpread2.exports;
  }
  var common = {};
  var hasRequiredCommon;
  function requireCommon() {
    if (hasRequiredCommon) return common;
    hasRequiredCommon = 1;
    Object.defineProperty(common, "__esModule", {
      value: true
    });
    common.commonLocale = void 0;
    common.commonLocale = {
      yearFormat: "YYYY",
      dayFormat: "D",
      cellMeridiemFormat: "A",
      monthBeforeYear: true
    };
    return common;
  }
  var hasRequiredZh_CN$5;
  function requireZh_CN$5() {
    if (hasRequiredZh_CN$5) return zh_CN$2;
    hasRequiredZh_CN$5 = 1;
    var _interopRequireDefault = requireInteropRequireDefault().default;
    Object.defineProperty(zh_CN$2, "__esModule", {
      value: true
    });
    zh_CN$2.default = void 0;
    var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
    var _common = requireCommon();
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
      locale: "zh_CN",
      today: "今天",
      now: "此刻",
      backToToday: "返回今天",
      ok: "确定",
      timeSelect: "选择时间",
      dateSelect: "选择日期",
      weekSelect: "选择周",
      clear: "清除",
      week: "周",
      month: "月",
      year: "年",
      previousMonth: "上个月 (翻页上键)",
      nextMonth: "下个月 (翻页下键)",
      monthSelect: "选择月份",
      yearSelect: "选择年份",
      decadeSelect: "选择年代",
      previousYear: "上一年 (Control键加左方向键)",
      nextYear: "下一年 (Control键加右方向键)",
      previousDecade: "上一年代",
      nextDecade: "下一年代",
      previousCentury: "上一世纪",
      nextCentury: "下一世纪",
      yearFormat: "YYYY年",
      cellDateFormat: "D",
      monthBeforeYear: false
    });
    zh_CN$2.default = locale;
    return zh_CN$2;
  }
  var zh_CN$1 = {};
  var hasRequiredZh_CN$4;
  function requireZh_CN$4() {
    if (hasRequiredZh_CN$4) return zh_CN$1;
    hasRequiredZh_CN$4 = 1;
    Object.defineProperty(zh_CN$1, "__esModule", {
      value: true
    });
    zh_CN$1.default = void 0;
    const locale = {
      placeholder: "请选择时间",
      rangePlaceholder: ["开始时间", "结束时间"]
    };
    zh_CN$1.default = locale;
    return zh_CN$1;
  }
  var hasRequiredZh_CN$3;
  function requireZh_CN$3() {
    if (hasRequiredZh_CN$3) return zh_CN$3;
    hasRequiredZh_CN$3 = 1;
    var _interopRequireDefault = requireInteropRequireDefault().default;
    Object.defineProperty(zh_CN$3, "__esModule", {
      value: true
    });
    zh_CN$3.default = void 0;
    var _zh_CN = _interopRequireDefault(requireZh_CN$5());
    var _zh_CN2 = _interopRequireDefault(/* @__PURE__ */ requireZh_CN$4());
    const locale = {
      lang: Object.assign({
        placeholder: "请选择日期",
        yearPlaceholder: "请选择年份",
        quarterPlaceholder: "请选择季度",
        monthPlaceholder: "请选择月份",
        weekPlaceholder: "请选择周",
        rangePlaceholder: ["开始日期", "结束日期"],
        rangeYearPlaceholder: ["开始年份", "结束年份"],
        rangeMonthPlaceholder: ["开始月份", "结束月份"],
        rangeQuarterPlaceholder: ["开始季度", "结束季度"],
        rangeWeekPlaceholder: ["开始周", "结束周"]
      }, _zh_CN.default),
      timePickerLocale: Object.assign({}, _zh_CN2.default)
    };
    locale.lang.ok = "确定";
    zh_CN$3.default = locale;
    return zh_CN$3;
  }
  var hasRequiredZh_CN$2;
  function requireZh_CN$2() {
    if (hasRequiredZh_CN$2) return zh_CN$4;
    hasRequiredZh_CN$2 = 1;
    var _interopRequireDefault = requireInteropRequireDefault().default;
    Object.defineProperty(zh_CN$4, "__esModule", {
      value: true
    });
    zh_CN$4.default = void 0;
    var _zh_CN = _interopRequireDefault(/* @__PURE__ */ requireZh_CN$3());
    zh_CN$4.default = _zh_CN.default;
    return zh_CN$4;
  }
  var hasRequiredZh_CN$1;
  function requireZh_CN$1() {
    if (hasRequiredZh_CN$1) return zh_CN$6;
    hasRequiredZh_CN$1 = 1;
    var _interopRequireDefault = requireInteropRequireDefault().default;
    Object.defineProperty(zh_CN$6, "__esModule", {
      value: true
    });
    zh_CN$6.default = void 0;
    var _zh_CN = _interopRequireDefault(requireZh_CN$6());
    var _zh_CN2 = _interopRequireDefault(/* @__PURE__ */ requireZh_CN$2());
    var _zh_CN3 = _interopRequireDefault(/* @__PURE__ */ requireZh_CN$3());
    var _zh_CN4 = _interopRequireDefault(/* @__PURE__ */ requireZh_CN$4());
    const typeTemplate = "${label}不是一个有效的${type}";
    const localeValues = {
      locale: "zh-cn",
      Pagination: _zh_CN.default,
      DatePicker: _zh_CN3.default,
      TimePicker: _zh_CN4.default,
      Calendar: _zh_CN2.default,
      // locales for all components
      global: {
        placeholder: "请选择",
        close: "关闭"
      },
      Table: {
        filterTitle: "筛选",
        filterConfirm: "确定",
        filterReset: "重置",
        filterEmptyText: "无筛选项",
        filterCheckAll: "全选",
        filterSearchPlaceholder: "在筛选项中搜索",
        emptyText: "暂无数据",
        selectAll: "全选当页",
        selectInvert: "反选当页",
        selectNone: "清空所有",
        selectionAll: "全选所有",
        sortTitle: "排序",
        expand: "展开行",
        collapse: "关闭行",
        triggerDesc: "点击降序",
        triggerAsc: "点击升序",
        cancelSort: "取消排序"
      },
      Modal: {
        okText: "确定",
        cancelText: "取消",
        justOkText: "知道了"
      },
      Tour: {
        Next: "下一步",
        Previous: "上一步",
        Finish: "结束导览"
      },
      Popconfirm: {
        cancelText: "取消",
        okText: "确定"
      },
      Transfer: {
        titles: ["", ""],
        searchPlaceholder: "请输入搜索内容",
        itemUnit: "项",
        itemsUnit: "项",
        remove: "删除",
        selectCurrent: "全选当页",
        removeCurrent: "删除当页",
        selectAll: "全选所有",
        deselectAll: "取消全选",
        removeAll: "删除全部",
        selectInvert: "反选当页"
      },
      Upload: {
        uploading: "文件上传中",
        removeFile: "删除文件",
        uploadError: "上传错误",
        previewFile: "预览文件",
        downloadFile: "下载文件"
      },
      Empty: {
        description: "暂无数据"
      },
      Icon: {
        icon: "图标"
      },
      Text: {
        edit: "编辑",
        copy: "复制",
        copied: "复制成功",
        expand: "展开",
        collapse: "收起"
      },
      Form: {
        optional: "（可选）",
        defaultValidateMessages: {
          default: "字段验证错误${label}",
          required: "请输入${label}",
          enum: "${label}必须是其中一个[${enum}]",
          whitespace: "${label}不能为空字符",
          date: {
            format: "${label}日期格式无效",
            parse: "${label}不能转换为日期",
            invalid: "${label}是一个无效日期"
          },
          types: {
            string: typeTemplate,
            method: typeTemplate,
            array: typeTemplate,
            object: typeTemplate,
            number: typeTemplate,
            date: typeTemplate,
            boolean: typeTemplate,
            integer: typeTemplate,
            float: typeTemplate,
            regexp: typeTemplate,
            email: typeTemplate,
            url: typeTemplate,
            hex: typeTemplate
          },
          string: {
            len: "${label}须为${len}个字符",
            min: "${label}最少${min}个字符",
            max: "${label}最多${max}个字符",
            range: "${label}须在${min}-${max}字符之间"
          },
          number: {
            len: "${label}必须等于${len}",
            min: "${label}最小值为${min}",
            max: "${label}最大值为${max}",
            range: "${label}须在${min}-${max}之间"
          },
          array: {
            len: "须为${len}个${label}",
            min: "最少${min}个${label}",
            max: "最多${max}个${label}",
            range: "${label}数量须在${min}-${max}之间"
          },
          pattern: {
            mismatch: "${label}与模式不匹配${pattern}"
          }
        }
      },
      Image: {
        preview: "预览"
      },
      QRCode: {
        expired: "二维码过期",
        refresh: "点击刷新",
        scanned: "已扫描"
      },
      ColorPicker: {
        presetEmpty: "暂无",
        transparent: "无色",
        singleColor: "单色",
        gradientColor: "渐变色"
      }
    };
    zh_CN$6.default = localeValues;
    return zh_CN$6;
  }
  var zh_CN;
  var hasRequiredZh_CN;
  function requireZh_CN() {
    if (hasRequiredZh_CN) return zh_CN;
    hasRequiredZh_CN = 1;
    zh_CN = /* @__PURE__ */ requireZh_CN$1();
    return zh_CN;
  }
  var zh_CNExports = /* @__PURE__ */ requireZh_CN();
  const zhCN = /* @__PURE__ */ getDefaultExportFromCjs(zh_CNExports);
  var client = { exports: {} };
  var reactDomClient_production = {};
  var scheduler = { exports: {} };
  var scheduler_production = {};
  /**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredScheduler_production;
  function requireScheduler_production() {
    if (hasRequiredScheduler_production) return scheduler_production;
    hasRequiredScheduler_production = 1;
    (function(exports) {
      function push(heap, node) {
        var index2 = heap.length;
        heap.push(node);
        a: for (; 0 < index2; ) {
          var parentIndex = index2 - 1 >>> 1, parent = heap[parentIndex];
          if (0 < compare(parent, node))
            heap[parentIndex] = node, heap[index2] = parent, index2 = parentIndex;
          else break a;
        }
      }
      function peek(heap) {
        return 0 === heap.length ? null : heap[0];
      }
      function pop(heap) {
        if (0 === heap.length) return null;
        var first = heap[0], last = heap.pop();
        if (last !== first) {
          heap[0] = last;
          a: for (var index2 = 0, length = heap.length, halfLength = length >>> 1; index2 < halfLength; ) {
            var leftIndex = 2 * (index2 + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
            if (0 > compare(left, last))
              rightIndex < length && 0 > compare(right, left) ? (heap[index2] = right, heap[rightIndex] = last, index2 = rightIndex) : (heap[index2] = left, heap[leftIndex] = last, index2 = leftIndex);
            else if (rightIndex < length && 0 > compare(right, last))
              heap[index2] = right, heap[rightIndex] = last, index2 = rightIndex;
            else break a;
          }
        }
        return first;
      }
      function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return 0 !== diff ? diff : a.id - b.id;
      }
      exports.unstable_now = void 0;
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        exports.unstable_now = function() {
          return localPerformance.now();
        };
      } else {
        var localDate = Date, initialTime = localDate.now();
        exports.unstable_now = function() {
          return localDate.now() - initialTime;
        };
      }
      var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = false, isHostCallbackScheduled = false, isHostTimeoutScheduled = false, needsPaint = false, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
      function advanceTimers(currentTime) {
        for (var timer = peek(timerQueue); null !== timer; ) {
          if (null === timer.callback) pop(timerQueue);
          else if (timer.startTime <= currentTime)
            pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
          else break;
          timer = peek(timerQueue);
        }
      }
      function handleTimeout(currentTime) {
        isHostTimeoutScheduled = false;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled)
          if (null !== peek(taskQueue))
            isHostCallbackScheduled = true, isMessageLoopRunning || (isMessageLoopRunning = true, schedulePerformWorkUntilDeadline());
          else {
            var firstTimer = peek(timerQueue);
            null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
          }
      }
      var isMessageLoopRunning = false, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
      function shouldYieldToHost() {
        return needsPaint ? true : exports.unstable_now() - startTime < frameInterval ? false : true;
      }
      function performWorkUntilDeadline() {
        needsPaint = false;
        if (isMessageLoopRunning) {
          var currentTime = exports.unstable_now();
          startTime = currentTime;
          var hasMoreWork = true;
          try {
            a: {
              isHostCallbackScheduled = false;
              isHostTimeoutScheduled && (isHostTimeoutScheduled = false, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
              isPerformingWork = true;
              var previousPriorityLevel = currentPriorityLevel;
              try {
                b: {
                  advanceTimers(currentTime);
                  for (currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost()); ) {
                    var callback = currentTask.callback;
                    if ("function" === typeof callback) {
                      currentTask.callback = null;
                      currentPriorityLevel = currentTask.priorityLevel;
                      var continuationCallback = callback(
                        currentTask.expirationTime <= currentTime
                      );
                      currentTime = exports.unstable_now();
                      if ("function" === typeof continuationCallback) {
                        currentTask.callback = continuationCallback;
                        advanceTimers(currentTime);
                        hasMoreWork = true;
                        break b;
                      }
                      currentTask === peek(taskQueue) && pop(taskQueue);
                      advanceTimers(currentTime);
                    } else pop(taskQueue);
                    currentTask = peek(taskQueue);
                  }
                  if (null !== currentTask) hasMoreWork = true;
                  else {
                    var firstTimer = peek(timerQueue);
                    null !== firstTimer && requestHostTimeout(
                      handleTimeout,
                      firstTimer.startTime - currentTime
                    );
                    hasMoreWork = false;
                  }
                }
                break a;
              } finally {
                currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = false;
              }
              hasMoreWork = void 0;
            }
          } finally {
            hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = false;
          }
        }
      }
      var schedulePerformWorkUntilDeadline;
      if ("function" === typeof localSetImmediate)
        schedulePerformWorkUntilDeadline = function() {
          localSetImmediate(performWorkUntilDeadline);
        };
      else if ("undefined" !== typeof MessageChannel) {
        var channel = new MessageChannel(), port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        schedulePerformWorkUntilDeadline = function() {
          port.postMessage(null);
        };
      } else
        schedulePerformWorkUntilDeadline = function() {
          localSetTimeout(performWorkUntilDeadline, 0);
        };
      function requestHostTimeout(callback, ms) {
        taskTimeoutID = localSetTimeout(function() {
          callback(exports.unstable_now());
        }, ms);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(task) {
        task.callback = null;
      };
      exports.unstable_forceFrameRate = function(fps) {
        0 > fps || 125 < fps ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return currentPriorityLevel;
      };
      exports.unstable_next = function(eventHandler) {
        switch (currentPriorityLevel) {
          case 1:
          case 2:
          case 3:
            var priorityLevel = 3;
            break;
          default:
            priorityLevel = currentPriorityLevel;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
      exports.unstable_requestPaint = function() {
        needsPaint = true;
      };
      exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
        switch (priorityLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            priorityLevel = 3;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
      exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
        switch (priorityLevel) {
          case 1:
            var timeout = -1;
            break;
          case 2:
            timeout = 250;
            break;
          case 5:
            timeout = 1073741823;
            break;
          case 4:
            timeout = 1e4;
            break;
          default:
            timeout = 5e3;
        }
        timeout = options + timeout;
        priorityLevel = {
          id: taskIdCounter++,
          callback,
          priorityLevel,
          startTime: options,
          expirationTime: timeout,
          sortIndex: -1
        };
        options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = true, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = true, isMessageLoopRunning || (isMessageLoopRunning = true, schedulePerformWorkUntilDeadline())));
        return priorityLevel;
      };
      exports.unstable_shouldYield = shouldYieldToHost;
      exports.unstable_wrapCallback = function(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = parentPriorityLevel;
          try {
            return callback.apply(this, arguments);
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        };
      };
    })(scheduler_production);
    return scheduler_production;
  }
  var hasRequiredScheduler;
  function requireScheduler() {
    if (hasRequiredScheduler) return scheduler.exports;
    hasRequiredScheduler = 1;
    {
      scheduler.exports = requireScheduler_production();
    }
    return scheduler.exports;
  }
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactDomClient_production;
  function requireReactDomClient_production() {
    if (hasRequiredReactDomClient_production) return reactDomClient_production;
    hasRequiredReactDomClient_production = 1;
    var Scheduler = requireScheduler(), React = require$$1, ReactDOM2 = require$$2;
    function formatProdErrorMessage(code) {
      var url = "https://react.dev/errors/" + code;
      if (1 < arguments.length) {
        url += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var i = 2; i < arguments.length; i++)
          url += "&args[]=" + encodeURIComponent(arguments[i]);
      }
      return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function isValidContainer(node) {
      return !(!node || 1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType);
    }
    function getNearestMountedFiber(fiber) {
      var node = fiber, nearestMounted = fiber;
      if (fiber.alternate) for (; node.return; ) node = node.return;
      else {
        fiber = node;
        do
          node = fiber, 0 !== (node.flags & 4098) && (nearestMounted = node.return), fiber = node.return;
        while (fiber);
      }
      return 3 === node.tag ? nearestMounted : null;
    }
    function getSuspenseInstanceFromFiber(fiber) {
      if (13 === fiber.tag) {
        var suspenseState = fiber.memoizedState;
        null === suspenseState && (fiber = fiber.alternate, null !== fiber && (suspenseState = fiber.memoizedState));
        if (null !== suspenseState) return suspenseState.dehydrated;
      }
      return null;
    }
    function assertIsMounted(fiber) {
      if (getNearestMountedFiber(fiber) !== fiber)
        throw Error(formatProdErrorMessage(188));
    }
    function findCurrentFiberUsingSlowPath(fiber) {
      var alternate = fiber.alternate;
      if (!alternate) {
        alternate = getNearestMountedFiber(fiber);
        if (null === alternate) throw Error(formatProdErrorMessage(188));
        return alternate !== fiber ? null : fiber;
      }
      for (var a = fiber, b = alternate; ; ) {
        var parentA = a.return;
        if (null === parentA) break;
        var parentB = parentA.alternate;
        if (null === parentB) {
          b = parentA.return;
          if (null !== b) {
            a = b;
            continue;
          }
          break;
        }
        if (parentA.child === parentB.child) {
          for (parentB = parentA.child; parentB; ) {
            if (parentB === a) return assertIsMounted(parentA), fiber;
            if (parentB === b) return assertIsMounted(parentA), alternate;
            parentB = parentB.sibling;
          }
          throw Error(formatProdErrorMessage(188));
        }
        if (a.return !== b.return) a = parentA, b = parentB;
        else {
          for (var didFindChild = false, child$0 = parentA.child; child$0; ) {
            if (child$0 === a) {
              didFindChild = true;
              a = parentA;
              b = parentB;
              break;
            }
            if (child$0 === b) {
              didFindChild = true;
              b = parentA;
              a = parentB;
              break;
            }
            child$0 = child$0.sibling;
          }
          if (!didFindChild) {
            for (child$0 = parentB.child; child$0; ) {
              if (child$0 === a) {
                didFindChild = true;
                a = parentB;
                b = parentA;
                break;
              }
              if (child$0 === b) {
                didFindChild = true;
                b = parentB;
                a = parentA;
                break;
              }
              child$0 = child$0.sibling;
            }
            if (!didFindChild) throw Error(formatProdErrorMessage(189));
          }
        }
        if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
      }
      if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
      return a.stateNode.current === a ? fiber : alternate;
    }
    function findCurrentHostFiberImpl(node) {
      var tag = node.tag;
      if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
      for (node = node.child; null !== node; ) {
        tag = findCurrentHostFiberImpl(node);
        if (null !== tag) return tag;
        node = node.sibling;
      }
      return null;
    }
    var assign = Object.assign, REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_PROVIDER_TYPE = Symbol.for("react.provider"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy");
    var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
    var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if ("object" === typeof type)
        switch (type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {
            }
        }
      return null;
    }
    var isArrayImpl = Array.isArray, ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ReactDOMSharedInternals = ReactDOM2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, sharedNotPendingObject = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, valueStack = [], index2 = -1;
    function createCursor(defaultValue) {
      return { current: defaultValue };
    }
    function pop(cursor) {
      0 > index2 || (cursor.current = valueStack[index2], valueStack[index2] = null, index2--);
    }
    function push(cursor, value) {
      index2++;
      valueStack[index2] = cursor.current;
      cursor.current = value;
    }
    var contextStackCursor = createCursor(null), contextFiberStackCursor = createCursor(null), rootInstanceStackCursor = createCursor(null), hostTransitionProviderCursor = createCursor(null);
    function pushHostContainer(fiber, nextRootInstance) {
      push(rootInstanceStackCursor, nextRootInstance);
      push(contextFiberStackCursor, fiber);
      push(contextStackCursor, null);
      switch (nextRootInstance.nodeType) {
        case 9:
        case 11:
          fiber = (fiber = nextRootInstance.documentElement) ? (fiber = fiber.namespaceURI) ? getOwnHostContext(fiber) : 0 : 0;
          break;
        default:
          if (fiber = nextRootInstance.tagName, nextRootInstance = nextRootInstance.namespaceURI)
            nextRootInstance = getOwnHostContext(nextRootInstance), fiber = getChildHostContextProd(nextRootInstance, fiber);
          else
            switch (fiber) {
              case "svg":
                fiber = 1;
                break;
              case "math":
                fiber = 2;
                break;
              default:
                fiber = 0;
            }
      }
      pop(contextStackCursor);
      push(contextStackCursor, fiber);
    }
    function popHostContainer() {
      pop(contextStackCursor);
      pop(contextFiberStackCursor);
      pop(rootInstanceStackCursor);
    }
    function pushHostContext(fiber) {
      null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
      var context = contextStackCursor.current;
      var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
      context !== JSCompiler_inline_result && (push(contextFiberStackCursor, fiber), push(contextStackCursor, JSCompiler_inline_result));
    }
    function popHostContext(fiber) {
      contextFiberStackCursor.current === fiber && (pop(contextStackCursor), pop(contextFiberStackCursor));
      hostTransitionProviderCursor.current === fiber && (pop(hostTransitionProviderCursor), HostTransitionContext._currentValue = sharedNotPendingObject);
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty, scheduleCallback$3 = Scheduler.unstable_scheduleCallback, cancelCallback$1 = Scheduler.unstable_cancelCallback, shouldYield = Scheduler.unstable_shouldYield, requestPaint = Scheduler.unstable_requestPaint, now = Scheduler.unstable_now, getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel, ImmediatePriority = Scheduler.unstable_ImmediatePriority, UserBlockingPriority = Scheduler.unstable_UserBlockingPriority, NormalPriority$1 = Scheduler.unstable_NormalPriority, LowPriority = Scheduler.unstable_LowPriority, IdlePriority = Scheduler.unstable_IdlePriority, log$1 = Scheduler.log, unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue, rendererID = null, injectedHook = null;
    function setIsStrictModeForDevtools(newIsStrictMode) {
      "function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
      if (injectedHook && "function" === typeof injectedHook.setStrictMode)
        try {
          injectedHook.setStrictMode(rendererID, newIsStrictMode);
        } catch (err) {
        }
    }
    var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback, log = Math.log, LN2 = Math.LN2;
    function clz32Fallback(x) {
      x >>>= 0;
      return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
    }
    var nextTransitionLane = 256, nextRetryLane = 4194304;
    function getHighestPriorityLanes(lanes) {
      var pendingSyncLanes = lanes & 42;
      if (0 !== pendingSyncLanes) return pendingSyncLanes;
      switch (lanes & -lanes) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return lanes & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return lanes & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return lanes;
      }
    }
    function getNextLanes(root2, wipLanes, rootHasPendingCommit) {
      var pendingLanes = root2.pendingLanes;
      if (0 === pendingLanes) return 0;
      var nextLanes = 0, suspendedLanes = root2.suspendedLanes, pingedLanes = root2.pingedLanes;
      root2 = root2.warmLanes;
      var nonIdlePendingLanes = pendingLanes & 134217727;
      0 !== nonIdlePendingLanes ? (pendingLanes = nonIdlePendingLanes & ~suspendedLanes, 0 !== pendingLanes ? nextLanes = getHighestPriorityLanes(pendingLanes) : (pingedLanes &= nonIdlePendingLanes, 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = nonIdlePendingLanes & ~root2, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))))) : (nonIdlePendingLanes = pendingLanes & ~suspendedLanes, 0 !== nonIdlePendingLanes ? nextLanes = getHighestPriorityLanes(nonIdlePendingLanes) : 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = pendingLanes & ~root2, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
      return 0 === nextLanes ? 0 : 0 !== wipLanes && wipLanes !== nextLanes && 0 === (wipLanes & suspendedLanes) && (suspendedLanes = nextLanes & -nextLanes, rootHasPendingCommit = wipLanes & -wipLanes, suspendedLanes >= rootHasPendingCommit || 32 === suspendedLanes && 0 !== (rootHasPendingCommit & 4194048)) ? wipLanes : nextLanes;
    }
    function checkIfRootIsPrerendering(root2, renderLanes2) {
      return 0 === (root2.pendingLanes & ~(root2.suspendedLanes & ~root2.pingedLanes) & renderLanes2);
    }
    function computeExpirationTime(lane, currentTime) {
      switch (lane) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return currentTime + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return currentTime + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function claimNextTransitionLane() {
      var lane = nextTransitionLane;
      nextTransitionLane <<= 1;
      0 === (nextTransitionLane & 4194048) && (nextTransitionLane = 256);
      return lane;
    }
    function claimNextRetryLane() {
      var lane = nextRetryLane;
      nextRetryLane <<= 1;
      0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
      return lane;
    }
    function createLaneMap(initial) {
      for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
      return laneMap;
    }
    function markRootUpdated$1(root2, updateLane) {
      root2.pendingLanes |= updateLane;
      268435456 !== updateLane && (root2.suspendedLanes = 0, root2.pingedLanes = 0, root2.warmLanes = 0);
    }
    function markRootFinished(root2, finishedLanes, remainingLanes, spawnedLane, updatedLanes, suspendedRetryLanes) {
      var previouslyPendingLanes = root2.pendingLanes;
      root2.pendingLanes = remainingLanes;
      root2.suspendedLanes = 0;
      root2.pingedLanes = 0;
      root2.warmLanes = 0;
      root2.expiredLanes &= remainingLanes;
      root2.entangledLanes &= remainingLanes;
      root2.errorRecoveryDisabledLanes &= remainingLanes;
      root2.shellSuspendCounter = 0;
      var entanglements = root2.entanglements, expirationTimes = root2.expirationTimes, hiddenUpdates = root2.hiddenUpdates;
      for (remainingLanes = previouslyPendingLanes & ~remainingLanes; 0 < remainingLanes; ) {
        var index$5 = 31 - clz32(remainingLanes), lane = 1 << index$5;
        entanglements[index$5] = 0;
        expirationTimes[index$5] = -1;
        var hiddenUpdatesForLane = hiddenUpdates[index$5];
        if (null !== hiddenUpdatesForLane)
          for (hiddenUpdates[index$5] = null, index$5 = 0; index$5 < hiddenUpdatesForLane.length; index$5++) {
            var update = hiddenUpdatesForLane[index$5];
            null !== update && (update.lane &= -536870913);
          }
        remainingLanes &= ~lane;
      }
      0 !== spawnedLane && markSpawnedDeferredLane(root2, spawnedLane, 0);
      0 !== suspendedRetryLanes && 0 === updatedLanes && 0 !== root2.tag && (root2.suspendedLanes |= suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
    }
    function markSpawnedDeferredLane(root2, spawnedLane, entangledLanes) {
      root2.pendingLanes |= spawnedLane;
      root2.suspendedLanes &= ~spawnedLane;
      var spawnedLaneIndex = 31 - clz32(spawnedLane);
      root2.entangledLanes |= spawnedLane;
      root2.entanglements[spawnedLaneIndex] = root2.entanglements[spawnedLaneIndex] | 1073741824 | entangledLanes & 4194090;
    }
    function markRootEntangled(root2, entangledLanes) {
      var rootEntangledLanes = root2.entangledLanes |= entangledLanes;
      for (root2 = root2.entanglements; rootEntangledLanes; ) {
        var index$6 = 31 - clz32(rootEntangledLanes), lane = 1 << index$6;
        lane & entangledLanes | root2[index$6] & entangledLanes && (root2[index$6] |= entangledLanes);
        rootEntangledLanes &= ~lane;
      }
    }
    function getBumpedLaneForHydrationByLane(lane) {
      switch (lane) {
        case 2:
          lane = 1;
          break;
        case 8:
          lane = 4;
          break;
        case 32:
          lane = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          lane = 128;
          break;
        case 268435456:
          lane = 134217728;
          break;
        default:
          lane = 0;
      }
      return lane;
    }
    function lanesToEventPriority(lanes) {
      lanes &= -lanes;
      return 2 < lanes ? 8 < lanes ? 0 !== (lanes & 134217727) ? 32 : 268435456 : 8 : 2;
    }
    function resolveUpdatePriority() {
      var updatePriority = ReactDOMSharedInternals.p;
      if (0 !== updatePriority) return updatePriority;
      updatePriority = window.event;
      return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
    }
    function runWithPriority(priority, fn) {
      var previousPriority = ReactDOMSharedInternals.p;
      try {
        return ReactDOMSharedInternals.p = priority, fn();
      } finally {
        ReactDOMSharedInternals.p = previousPriority;
      }
    }
    var randomKey = Math.random().toString(36).slice(2), internalInstanceKey = "__reactFiber$" + randomKey, internalPropsKey = "__reactProps$" + randomKey, internalContainerInstanceKey = "__reactContainer$" + randomKey, internalEventHandlersKey = "__reactEvents$" + randomKey, internalEventHandlerListenersKey = "__reactListeners$" + randomKey, internalEventHandlesSetKey = "__reactHandles$" + randomKey, internalRootNodeResourcesKey = "__reactResources$" + randomKey, internalHoistableMarker = "__reactMarker$" + randomKey;
    function detachDeletedInstance(node) {
      delete node[internalInstanceKey];
      delete node[internalPropsKey];
      delete node[internalEventHandlersKey];
      delete node[internalEventHandlerListenersKey];
      delete node[internalEventHandlesSetKey];
    }
    function getClosestInstanceFromNode(targetNode) {
      var targetInst = targetNode[internalInstanceKey];
      if (targetInst) return targetInst;
      for (var parentNode = targetNode.parentNode; parentNode; ) {
        if (targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey]) {
          parentNode = targetInst.alternate;
          if (null !== targetInst.child || null !== parentNode && null !== parentNode.child)
            for (targetNode = getParentSuspenseInstance(targetNode); null !== targetNode; ) {
              if (parentNode = targetNode[internalInstanceKey]) return parentNode;
              targetNode = getParentSuspenseInstance(targetNode);
            }
          return targetInst;
        }
        targetNode = parentNode;
        parentNode = targetNode.parentNode;
      }
      return null;
    }
    function getInstanceFromNode(node) {
      if (node = node[internalInstanceKey] || node[internalContainerInstanceKey]) {
        var tag = node.tag;
        if (5 === tag || 6 === tag || 13 === tag || 26 === tag || 27 === tag || 3 === tag)
          return node;
      }
      return null;
    }
    function getNodeFromInstance(inst) {
      var tag = inst.tag;
      if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
      throw Error(formatProdErrorMessage(33));
    }
    function getResourcesFromRoot(root2) {
      var resources = root2[internalRootNodeResourcesKey];
      resources || (resources = root2[internalRootNodeResourcesKey] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() });
      return resources;
    }
    function markNodeAsHoistable(node) {
      node[internalHoistableMarker] = true;
    }
    var allNativeEvents = /* @__PURE__ */ new Set(), registrationNameDependencies = {};
    function registerTwoPhaseEvent(registrationName, dependencies) {
      registerDirectEvent(registrationName, dependencies);
      registerDirectEvent(registrationName + "Capture", dependencies);
    }
    function registerDirectEvent(registrationName, dependencies) {
      registrationNameDependencies[registrationName] = dependencies;
      for (registrationName = 0; registrationName < dependencies.length; registrationName++)
        allNativeEvents.add(dependencies[registrationName]);
    }
    var VALID_ATTRIBUTE_NAME_REGEX = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), illegalAttributeNameCache = {}, validatedAttributeNameCache = {};
    function isAttributeNameSafe(attributeName) {
      if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
        return true;
      if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
      if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
        return validatedAttributeNameCache[attributeName] = true;
      illegalAttributeNameCache[attributeName] = true;
      return false;
    }
    function setValueForAttribute(node, name, value) {
      if (isAttributeNameSafe(name))
        if (null === value) node.removeAttribute(name);
        else {
          switch (typeof value) {
            case "undefined":
            case "function":
            case "symbol":
              node.removeAttribute(name);
              return;
            case "boolean":
              var prefix$8 = name.toLowerCase().slice(0, 5);
              if ("data-" !== prefix$8 && "aria-" !== prefix$8) {
                node.removeAttribute(name);
                return;
              }
          }
          node.setAttribute(name, "" + value);
        }
    }
    function setValueForKnownAttribute(node, name, value) {
      if (null === value) node.removeAttribute(name);
      else {
        switch (typeof value) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            node.removeAttribute(name);
            return;
        }
        node.setAttribute(name, "" + value);
      }
    }
    function setValueForNamespacedAttribute(node, namespace, name, value) {
      if (null === value) node.removeAttribute(name);
      else {
        switch (typeof value) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            node.removeAttribute(name);
            return;
        }
        node.setAttributeNS(namespace, name, "" + value);
      }
    }
    var prefix, suffix;
    function describeBuiltInComponentFrame(name) {
      if (void 0 === prefix)
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix = match && match[1] || "";
          suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return "\n" + prefix + name + suffix;
    }
    var reentry = false;
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry) return "";
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function() {
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if ("object" === typeof Reflect && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$9) {
                    control = x$9;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$10) {
                  control = x$10;
                }
                (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                });
              }
            } catch (sample) {
              if (sample && control && "string" === typeof sample.stack)
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(
          RunInRootFrame.DetermineComponentFrameRoot,
          "name"
        );
        namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
          RunInRootFrame.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
          for (namePropDescriptor = RunInRootFrame = 0; RunInRootFrame < sampleLines.length && !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot"); )
            RunInRootFrame++;
          for (; namePropDescriptor < controlLines.length && !controlLines[namePropDescriptor].includes(
            "DetermineComponentFrameRoot"
          ); )
            namePropDescriptor++;
          if (RunInRootFrame === sampleLines.length || namePropDescriptor === controlLines.length)
            for (RunInRootFrame = sampleLines.length - 1, namePropDescriptor = controlLines.length - 1; 1 <= RunInRootFrame && 0 <= namePropDescriptor && sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]; )
              namePropDescriptor--;
          for (; 1 <= RunInRootFrame && 0 <= namePropDescriptor; RunInRootFrame--, namePropDescriptor--)
            if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
              if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
                do
                  if (RunInRootFrame--, namePropDescriptor--, 0 > namePropDescriptor || sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
                    var frame = "\n" + sampleLines[RunInRootFrame].replace(" at new ", " at ");
                    fn.displayName && frame.includes("<anonymous>") && (frame = frame.replace("<anonymous>", fn.displayName));
                    return frame;
                  }
                while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
              }
              break;
            }
        }
      } finally {
        reentry = false, Error.prepareStackTrace = previousPrepareStackTrace;
      }
      return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(previousPrepareStackTrace) : "";
    }
    function describeFiber(fiber) {
      switch (fiber.tag) {
        case 26:
        case 27:
        case 5:
          return describeBuiltInComponentFrame(fiber.type);
        case 16:
          return describeBuiltInComponentFrame("Lazy");
        case 13:
          return describeBuiltInComponentFrame("Suspense");
        case 19:
          return describeBuiltInComponentFrame("SuspenseList");
        case 0:
        case 15:
          return describeNativeComponentFrame(fiber.type, false);
        case 11:
          return describeNativeComponentFrame(fiber.type.render, false);
        case 1:
          return describeNativeComponentFrame(fiber.type, true);
        case 31:
          return describeBuiltInComponentFrame("Activity");
        default:
          return "";
      }
    }
    function getStackByFiberInDevAndProd(workInProgress2) {
      try {
        var info = "";
        do
          info += describeFiber(workInProgress2), workInProgress2 = workInProgress2.return;
        while (workInProgress2);
        return info;
      } catch (x) {
        return "\nError generating stack: " + x.message + "\n" + x.stack;
      }
    }
    function getToStringValue(value) {
      switch (typeof value) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return value;
        case "object":
          return value;
        default:
          return "";
      }
    }
    function isCheckable(elem) {
      var type = elem.type;
      return (elem = elem.nodeName) && "input" === elem.toLowerCase() && ("checkbox" === type || "radio" === type);
    }
    function trackValueOnNode(node) {
      var valueField = isCheckable(node) ? "checked" : "value", descriptor = Object.getOwnPropertyDescriptor(
        node.constructor.prototype,
        valueField
      ), currentValue = "" + node[valueField];
      if (!node.hasOwnProperty(valueField) && "undefined" !== typeof descriptor && "function" === typeof descriptor.get && "function" === typeof descriptor.set) {
        var get = descriptor.get, set = descriptor.set;
        Object.defineProperty(node, valueField, {
          configurable: true,
          get: function() {
            return get.call(this);
          },
          set: function(value) {
            currentValue = "" + value;
            set.call(this, value);
          }
        });
        Object.defineProperty(node, valueField, {
          enumerable: descriptor.enumerable
        });
        return {
          getValue: function() {
            return currentValue;
          },
          setValue: function(value) {
            currentValue = "" + value;
          },
          stopTracking: function() {
            node._valueTracker = null;
            delete node[valueField];
          }
        };
      }
    }
    function track(node) {
      node._valueTracker || (node._valueTracker = trackValueOnNode(node));
    }
    function updateValueIfChanged(node) {
      if (!node) return false;
      var tracker = node._valueTracker;
      if (!tracker) return true;
      var lastValue = tracker.getValue();
      var value = "";
      node && (value = isCheckable(node) ? node.checked ? "true" : "false" : node.value);
      node = value;
      return node !== lastValue ? (tracker.setValue(node), true) : false;
    }
    function getActiveElement(doc) {
      doc = doc || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof doc) return null;
      try {
        return doc.activeElement || doc.body;
      } catch (e) {
        return doc.body;
      }
    }
    var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
    function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
      return value.replace(
        escapeSelectorAttributeValueInsideDoubleQuotesRegex,
        function(ch) {
          return "\\" + ch.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function updateInput(element, value, defaultValue, lastDefaultValue, checked, defaultChecked, type, name) {
      element.name = "";
      null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type ? element.type = type : element.removeAttribute("type");
      if (null != value)
        if ("number" === type) {
          if (0 === value && "" === element.value || element.value != value)
            element.value = "" + getToStringValue(value);
        } else
          element.value !== "" + getToStringValue(value) && (element.value = "" + getToStringValue(value));
      else
        "submit" !== type && "reset" !== type || element.removeAttribute("value");
      null != value ? setDefaultValue(element, type, getToStringValue(value)) : null != defaultValue ? setDefaultValue(element, type, getToStringValue(defaultValue)) : null != lastDefaultValue && element.removeAttribute("value");
      null == checked && null != defaultChecked && (element.defaultChecked = !!defaultChecked);
      null != checked && (element.checked = checked && "function" !== typeof checked && "symbol" !== typeof checked);
      null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name ? element.name = "" + getToStringValue(name) : element.removeAttribute("name");
    }
    function initInput(element, value, defaultValue, checked, defaultChecked, type, name, isHydrating2) {
      null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type && (element.type = type);
      if (null != value || null != defaultValue) {
        if (!("submit" !== type && "reset" !== type || void 0 !== value && null !== value))
          return;
        defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
        value = null != value ? "" + getToStringValue(value) : defaultValue;
        isHydrating2 || value === element.value || (element.value = value);
        element.defaultValue = value;
      }
      checked = null != checked ? checked : defaultChecked;
      checked = "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
      element.checked = isHydrating2 ? element.checked : !!checked;
      element.defaultChecked = !!checked;
      null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name && (element.name = name);
    }
    function setDefaultValue(node, type, value) {
      "number" === type && getActiveElement(node.ownerDocument) === node || node.defaultValue === "" + value || (node.defaultValue = "" + value);
    }
    function updateOptions(node, multiple, propValue, setDefaultSelected) {
      node = node.options;
      if (multiple) {
        multiple = {};
        for (var i = 0; i < propValue.length; i++)
          multiple["$" + propValue[i]] = true;
        for (propValue = 0; propValue < node.length; propValue++)
          i = multiple.hasOwnProperty("$" + node[propValue].value), node[propValue].selected !== i && (node[propValue].selected = i), i && setDefaultSelected && (node[propValue].defaultSelected = true);
      } else {
        propValue = "" + getToStringValue(propValue);
        multiple = null;
        for (i = 0; i < node.length; i++) {
          if (node[i].value === propValue) {
            node[i].selected = true;
            setDefaultSelected && (node[i].defaultSelected = true);
            return;
          }
          null !== multiple || node[i].disabled || (multiple = node[i]);
        }
        null !== multiple && (multiple.selected = true);
      }
    }
    function updateTextarea(element, value, defaultValue) {
      if (null != value && (value = "" + getToStringValue(value), value !== element.value && (element.value = value), null == defaultValue)) {
        element.defaultValue !== value && (element.defaultValue = value);
        return;
      }
      element.defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
    }
    function initTextarea(element, value, defaultValue, children) {
      if (null == value) {
        if (null != children) {
          if (null != defaultValue) throw Error(formatProdErrorMessage(92));
          if (isArrayImpl(children)) {
            if (1 < children.length) throw Error(formatProdErrorMessage(93));
            children = children[0];
          }
          defaultValue = children;
        }
        null == defaultValue && (defaultValue = "");
        value = defaultValue;
      }
      defaultValue = getToStringValue(value);
      element.defaultValue = defaultValue;
      children = element.textContent;
      children === defaultValue && "" !== children && null !== children && (element.value = children);
    }
    function setTextContent(node, text) {
      if (text) {
        var firstChild = node.firstChild;
        if (firstChild && firstChild === node.lastChild && 3 === firstChild.nodeType) {
          firstChild.nodeValue = text;
          return;
        }
      }
      node.textContent = text;
    }
    var unitlessNumbers = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    );
    function setValueForStyle(style2, styleName, value) {
      var isCustomProperty = 0 === styleName.indexOf("--");
      null == value || "boolean" === typeof value || "" === value ? isCustomProperty ? style2.setProperty(styleName, "") : "float" === styleName ? style2.cssFloat = "" : style2[styleName] = "" : isCustomProperty ? style2.setProperty(styleName, value) : "number" !== typeof value || 0 === value || unitlessNumbers.has(styleName) ? "float" === styleName ? style2.cssFloat = value : style2[styleName] = ("" + value).trim() : style2[styleName] = value + "px";
    }
    function setValueForStyles(node, styles2, prevStyles) {
      if (null != styles2 && "object" !== typeof styles2)
        throw Error(formatProdErrorMessage(62));
      node = node.style;
      if (null != prevStyles) {
        for (var styleName in prevStyles)
          !prevStyles.hasOwnProperty(styleName) || null != styles2 && styles2.hasOwnProperty(styleName) || (0 === styleName.indexOf("--") ? node.setProperty(styleName, "") : "float" === styleName ? node.cssFloat = "" : node[styleName] = "");
        for (var styleName$16 in styles2)
          styleName = styles2[styleName$16], styles2.hasOwnProperty(styleName$16) && prevStyles[styleName$16] !== styleName && setValueForStyle(node, styleName$16, styleName);
      } else
        for (var styleName$17 in styles2)
          styles2.hasOwnProperty(styleName$17) && setValueForStyle(node, styleName$17, styles2[styleName$17]);
    }
    function isCustomElement(tagName) {
      if (-1 === tagName.indexOf("-")) return false;
      switch (tagName) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var aliases = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function sanitizeURL(url) {
      return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
    }
    var currentReplayingEvent = null;
    function getEventTarget(nativeEvent) {
      nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
      nativeEvent.correspondingUseElement && (nativeEvent = nativeEvent.correspondingUseElement);
      return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
    }
    var restoreTarget = null, restoreQueue = null;
    function restoreStateOfTarget(target) {
      var internalInstance = getInstanceFromNode(target);
      if (internalInstance && (target = internalInstance.stateNode)) {
        var props = target[internalPropsKey] || null;
        a: switch (target = internalInstance.stateNode, internalInstance.type) {
          case "input":
            updateInput(
              target,
              props.value,
              props.defaultValue,
              props.defaultValue,
              props.checked,
              props.defaultChecked,
              props.type,
              props.name
            );
            internalInstance = props.name;
            if ("radio" === props.type && null != internalInstance) {
              for (props = target; props.parentNode; ) props = props.parentNode;
              props = props.querySelectorAll(
                'input[name="' + escapeSelectorAttributeValueInsideDoubleQuotes(
                  "" + internalInstance
                ) + '"][type="radio"]'
              );
              for (internalInstance = 0; internalInstance < props.length; internalInstance++) {
                var otherNode = props[internalInstance];
                if (otherNode !== target && otherNode.form === target.form) {
                  var otherProps = otherNode[internalPropsKey] || null;
                  if (!otherProps) throw Error(formatProdErrorMessage(90));
                  updateInput(
                    otherNode,
                    otherProps.value,
                    otherProps.defaultValue,
                    otherProps.defaultValue,
                    otherProps.checked,
                    otherProps.defaultChecked,
                    otherProps.type,
                    otherProps.name
                  );
                }
              }
              for (internalInstance = 0; internalInstance < props.length; internalInstance++)
                otherNode = props[internalInstance], otherNode.form === target.form && updateValueIfChanged(otherNode);
            }
            break a;
          case "textarea":
            updateTextarea(target, props.value, props.defaultValue);
            break a;
          case "select":
            internalInstance = props.value, null != internalInstance && updateOptions(target, !!props.multiple, internalInstance, false);
        }
      }
    }
    var isInsideEventHandler = false;
    function batchedUpdates$1(fn, a, b) {
      if (isInsideEventHandler) return fn(a, b);
      isInsideEventHandler = true;
      try {
        var JSCompiler_inline_result = fn(a);
        return JSCompiler_inline_result;
      } finally {
        if (isInsideEventHandler = false, null !== restoreTarget || null !== restoreQueue) {
          if (flushSyncWork$1(), restoreTarget && (a = restoreTarget, fn = restoreQueue, restoreQueue = restoreTarget = null, restoreStateOfTarget(a), fn))
            for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
        }
      }
    }
    function getListener(inst, registrationName) {
      var stateNode = inst.stateNode;
      if (null === stateNode) return null;
      var props = stateNode[internalPropsKey] || null;
      if (null === props) return null;
      stateNode = props[registrationName];
      a: switch (registrationName) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (props = !props.disabled) || (inst = inst.type, props = !("button" === inst || "input" === inst || "select" === inst || "textarea" === inst));
          inst = !props;
          break a;
        default:
          inst = false;
      }
      if (inst) return null;
      if (stateNode && "function" !== typeof stateNode)
        throw Error(
          formatProdErrorMessage(231, registrationName, typeof stateNode)
        );
      return stateNode;
    }
    var canUseDOM = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), passiveBrowserEventsSupported = false;
    if (canUseDOM)
      try {
        var options = {};
        Object.defineProperty(options, "passive", {
          get: function() {
            passiveBrowserEventsSupported = true;
          }
        });
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, options);
      } catch (e) {
        passiveBrowserEventsSupported = false;
      }
    var root = null, startText = null, fallbackText = null;
    function getData() {
      if (fallbackText) return fallbackText;
      var start, startValue = startText, startLength = startValue.length, end, endValue = "value" in root ? root.value : root.textContent, endLength = endValue.length;
      for (start = 0; start < startLength && startValue[start] === endValue[start]; start++) ;
      var minEnd = startLength - start;
      for (end = 1; end <= minEnd && startValue[startLength - end] === endValue[endLength - end]; end++) ;
      return fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0);
    }
    function getEventCharCode(nativeEvent) {
      var keyCode = nativeEvent.keyCode;
      "charCode" in nativeEvent ? (nativeEvent = nativeEvent.charCode, 0 === nativeEvent && 13 === keyCode && (nativeEvent = 13)) : nativeEvent = keyCode;
      10 === nativeEvent && (nativeEvent = 13);
      return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
    }
    function functionThatReturnsTrue() {
      return true;
    }
    function functionThatReturnsFalse() {
      return false;
    }
    function createSyntheticEvent(Interface) {
      function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
        this._reactName = reactName;
        this._targetInst = targetInst;
        this.type = reactEventType;
        this.nativeEvent = nativeEvent;
        this.target = nativeEventTarget;
        this.currentTarget = null;
        for (var propName in Interface)
          Interface.hasOwnProperty(propName) && (reactName = Interface[propName], this[propName] = reactName ? reactName(nativeEvent) : nativeEvent[propName]);
        this.isDefaultPrevented = (null != nativeEvent.defaultPrevented ? nativeEvent.defaultPrevented : false === nativeEvent.returnValue) ? functionThatReturnsTrue : functionThatReturnsFalse;
        this.isPropagationStopped = functionThatReturnsFalse;
        return this;
      }
      assign(SyntheticBaseEvent.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var event = this.nativeEvent;
          event && (event.preventDefault ? event.preventDefault() : "unknown" !== typeof event.returnValue && (event.returnValue = false), this.isDefaultPrevented = functionThatReturnsTrue);
        },
        stopPropagation: function() {
          var event = this.nativeEvent;
          event && (event.stopPropagation ? event.stopPropagation() : "unknown" !== typeof event.cancelBubble && (event.cancelBubble = true), this.isPropagationStopped = functionThatReturnsTrue);
        },
        persist: function() {
        },
        isPersistent: functionThatReturnsTrue
      });
      return SyntheticBaseEvent;
    }
    var EventInterface = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(event) {
        return event.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, SyntheticEvent = createSyntheticEvent(EventInterface), UIEventInterface = assign({}, EventInterface, { view: 0, detail: 0 }), SyntheticUIEvent = createSyntheticEvent(UIEventInterface), lastMovementX, lastMovementY, lastMouseEvent, MouseEventInterface = assign({}, UIEventInterface, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: getEventModifierState,
      button: 0,
      buttons: 0,
      relatedTarget: function(event) {
        return void 0 === event.relatedTarget ? event.fromElement === event.srcElement ? event.toElement : event.fromElement : event.relatedTarget;
      },
      movementX: function(event) {
        if ("movementX" in event) return event.movementX;
        event !== lastMouseEvent && (lastMouseEvent && "mousemove" === event.type ? (lastMovementX = event.screenX - lastMouseEvent.screenX, lastMovementY = event.screenY - lastMouseEvent.screenY) : lastMovementY = lastMovementX = 0, lastMouseEvent = event);
        return lastMovementX;
      },
      movementY: function(event) {
        return "movementY" in event ? event.movementY : lastMovementY;
      }
    }), SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface), DragEventInterface = assign({}, MouseEventInterface, { dataTransfer: 0 }), SyntheticDragEvent = createSyntheticEvent(DragEventInterface), FocusEventInterface = assign({}, UIEventInterface, { relatedTarget: 0 }), SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface), AnimationEventInterface = assign({}, EventInterface, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface), ClipboardEventInterface = assign({}, EventInterface, {
      clipboardData: function(event) {
        return "clipboardData" in event ? event.clipboardData : window.clipboardData;
      }
    }), SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface), CompositionEventInterface = assign({}, EventInterface, { data: 0 }), SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface), normalizeKey = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, translateToKey = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, modifierKeyToProp = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function modifierStateGetter(keyArg) {
      var nativeEvent = this.nativeEvent;
      return nativeEvent.getModifierState ? nativeEvent.getModifierState(keyArg) : (keyArg = modifierKeyToProp[keyArg]) ? !!nativeEvent[keyArg] : false;
    }
    function getEventModifierState() {
      return modifierStateGetter;
    }
    var KeyboardEventInterface = assign({}, UIEventInterface, {
      key: function(nativeEvent) {
        if (nativeEvent.key) {
          var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
          if ("Unidentified" !== key) return key;
        }
        return "keypress" === nativeEvent.type ? (nativeEvent = getEventCharCode(nativeEvent), 13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent)) : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type ? translateToKey[nativeEvent.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: getEventModifierState,
      charCode: function(event) {
        return "keypress" === event.type ? getEventCharCode(event) : 0;
      },
      keyCode: function(event) {
        return "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
      },
      which: function(event) {
        return "keypress" === event.type ? getEventCharCode(event) : "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
      }
    }), SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface), PointerEventInterface = assign({}, MouseEventInterface, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface), TouchEventInterface = assign({}, UIEventInterface, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: getEventModifierState
    }), SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface), TransitionEventInterface = assign({}, EventInterface, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface), WheelEventInterface = assign({}, MouseEventInterface, {
      deltaX: function(event) {
        return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
      },
      deltaY: function(event) {
        return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface), ToggleEventInterface = assign({}, EventInterface, {
      newState: 0,
      oldState: 0
    }), SyntheticToggleEvent = createSyntheticEvent(ToggleEventInterface), END_KEYCODES = [9, 13, 27, 32], canUseCompositionEvent = canUseDOM && "CompositionEvent" in window, documentMode = null;
    canUseDOM && "documentMode" in document && (documentMode = document.documentMode);
    var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode, useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || documentMode && 8 < documentMode && 11 >= documentMode), SPACEBAR_CHAR = String.fromCharCode(32), hasSpaceKeypress = false;
    function isFallbackCompositionEnd(domEventName, nativeEvent) {
      switch (domEventName) {
        case "keyup":
          return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
        case "keydown":
          return 229 !== nativeEvent.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function getDataFromCustomEvent(nativeEvent) {
      nativeEvent = nativeEvent.detail;
      return "object" === typeof nativeEvent && "data" in nativeEvent ? nativeEvent.data : null;
    }
    var isComposing = false;
    function getNativeBeforeInputChars(domEventName, nativeEvent) {
      switch (domEventName) {
        case "compositionend":
          return getDataFromCustomEvent(nativeEvent);
        case "keypress":
          if (32 !== nativeEvent.which) return null;
          hasSpaceKeypress = true;
          return SPACEBAR_CHAR;
        case "textInput":
          return domEventName = nativeEvent.data, domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName;
        default:
          return null;
      }
    }
    function getFallbackBeforeInputChars(domEventName, nativeEvent) {
      if (isComposing)
        return "compositionend" === domEventName || !canUseCompositionEvent && isFallbackCompositionEnd(domEventName, nativeEvent) ? (domEventName = getData(), fallbackText = startText = root = null, isComposing = false, domEventName) : null;
      switch (domEventName) {
        case "paste":
          return null;
        case "keypress":
          if (!(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) || nativeEvent.ctrlKey && nativeEvent.altKey) {
            if (nativeEvent.char && 1 < nativeEvent.char.length)
              return nativeEvent.char;
            if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
          }
          return null;
        case "compositionend":
          return useFallbackCompositionData && "ko" !== nativeEvent.locale ? null : nativeEvent.data;
        default:
          return null;
      }
    }
    var supportedInputTypes = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function isTextInputElement(elem) {
      var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
      return "input" === nodeName ? !!supportedInputTypes[elem.type] : "textarea" === nodeName ? true : false;
    }
    function createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, target) {
      restoreTarget ? restoreQueue ? restoreQueue.push(target) : restoreQueue = [target] : restoreTarget = target;
      inst = accumulateTwoPhaseListeners(inst, "onChange");
      0 < inst.length && (nativeEvent = new SyntheticEvent(
        "onChange",
        "change",
        null,
        nativeEvent,
        target
      ), dispatchQueue.push({ event: nativeEvent, listeners: inst }));
    }
    var activeElement$1 = null, activeElementInst$1 = null;
    function runEventInBatch(dispatchQueue) {
      processDispatchQueue(dispatchQueue, 0);
    }
    function getInstIfValueChanged(targetInst) {
      var targetNode = getNodeFromInstance(targetInst);
      if (updateValueIfChanged(targetNode)) return targetInst;
    }
    function getTargetInstForChangeEvent(domEventName, targetInst) {
      if ("change" === domEventName) return targetInst;
    }
    var isInputEventSupported = false;
    if (canUseDOM) {
      var JSCompiler_inline_result$jscomp$282;
      if (canUseDOM) {
        var isSupported$jscomp$inline_417 = "oninput" in document;
        if (!isSupported$jscomp$inline_417) {
          var element$jscomp$inline_418 = document.createElement("div");
          element$jscomp$inline_418.setAttribute("oninput", "return;");
          isSupported$jscomp$inline_417 = "function" === typeof element$jscomp$inline_418.oninput;
        }
        JSCompiler_inline_result$jscomp$282 = isSupported$jscomp$inline_417;
      } else JSCompiler_inline_result$jscomp$282 = false;
      isInputEventSupported = JSCompiler_inline_result$jscomp$282 && (!document.documentMode || 9 < document.documentMode);
    }
    function stopWatchingForValueChange() {
      activeElement$1 && (activeElement$1.detachEvent("onpropertychange", handlePropertyChange), activeElementInst$1 = activeElement$1 = null);
    }
    function handlePropertyChange(nativeEvent) {
      if ("value" === nativeEvent.propertyName && getInstIfValueChanged(activeElementInst$1)) {
        var dispatchQueue = [];
        createAndAccumulateChangeEvent(
          dispatchQueue,
          activeElementInst$1,
          nativeEvent,
          getEventTarget(nativeEvent)
        );
        batchedUpdates$1(runEventInBatch, dispatchQueue);
      }
    }
    function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
      "focusin" === domEventName ? (stopWatchingForValueChange(), activeElement$1 = target, activeElementInst$1 = targetInst, activeElement$1.attachEvent("onpropertychange", handlePropertyChange)) : "focusout" === domEventName && stopWatchingForValueChange();
    }
    function getTargetInstForInputEventPolyfill(domEventName) {
      if ("selectionchange" === domEventName || "keyup" === domEventName || "keydown" === domEventName)
        return getInstIfValueChanged(activeElementInst$1);
    }
    function getTargetInstForClickEvent(domEventName, targetInst) {
      if ("click" === domEventName) return getInstIfValueChanged(targetInst);
    }
    function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
      if ("input" === domEventName || "change" === domEventName)
        return getInstIfValueChanged(targetInst);
    }
    function is(x, y) {
      return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    var objectIs = "function" === typeof Object.is ? Object.is : is;
    function shallowEqual(objA, objB) {
      if (objectIs(objA, objB)) return true;
      if ("object" !== typeof objA || null === objA || "object" !== typeof objB || null === objB)
        return false;
      var keysA = Object.keys(objA), keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) return false;
      for (keysB = 0; keysB < keysA.length; keysB++) {
        var currentKey = keysA[keysB];
        if (!hasOwnProperty.call(objB, currentKey) || !objectIs(objA[currentKey], objB[currentKey]))
          return false;
      }
      return true;
    }
    function getLeafNode(node) {
      for (; node && node.firstChild; ) node = node.firstChild;
      return node;
    }
    function getNodeForCharacterOffset(root2, offset) {
      var node = getLeafNode(root2);
      root2 = 0;
      for (var nodeEnd; node; ) {
        if (3 === node.nodeType) {
          nodeEnd = root2 + node.textContent.length;
          if (root2 <= offset && nodeEnd >= offset)
            return { node, offset: offset - root2 };
          root2 = nodeEnd;
        }
        a: {
          for (; node; ) {
            if (node.nextSibling) {
              node = node.nextSibling;
              break a;
            }
            node = node.parentNode;
          }
          node = void 0;
        }
        node = getLeafNode(node);
      }
    }
    function containsNode(outerNode, innerNode) {
      return outerNode && innerNode ? outerNode === innerNode ? true : outerNode && 3 === outerNode.nodeType ? false : innerNode && 3 === innerNode.nodeType ? containsNode(outerNode, innerNode.parentNode) : "contains" in outerNode ? outerNode.contains(innerNode) : outerNode.compareDocumentPosition ? !!(outerNode.compareDocumentPosition(innerNode) & 16) : false : false;
    }
    function getActiveElementDeep(containerInfo) {
      containerInfo = null != containerInfo && null != containerInfo.ownerDocument && null != containerInfo.ownerDocument.defaultView ? containerInfo.ownerDocument.defaultView : window;
      for (var element = getActiveElement(containerInfo.document); element instanceof containerInfo.HTMLIFrameElement; ) {
        try {
          var JSCompiler_inline_result = "string" === typeof element.contentWindow.location.href;
        } catch (err) {
          JSCompiler_inline_result = false;
        }
        if (JSCompiler_inline_result) containerInfo = element.contentWindow;
        else break;
        element = getActiveElement(containerInfo.document);
      }
      return element;
    }
    function hasSelectionCapabilities(elem) {
      var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
      return nodeName && ("input" === nodeName && ("text" === elem.type || "search" === elem.type || "tel" === elem.type || "url" === elem.type || "password" === elem.type) || "textarea" === nodeName || "true" === elem.contentEditable);
    }
    var skipSelectionChangeEvent = canUseDOM && "documentMode" in document && 11 >= document.documentMode, activeElement = null, activeElementInst = null, lastSelection = null, mouseDown = false;
    function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
      var doc = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : 9 === nativeEventTarget.nodeType ? nativeEventTarget : nativeEventTarget.ownerDocument;
      mouseDown || null == activeElement || activeElement !== getActiveElement(doc) || (doc = activeElement, "selectionStart" in doc && hasSelectionCapabilities(doc) ? doc = { start: doc.selectionStart, end: doc.selectionEnd } : (doc = (doc.ownerDocument && doc.ownerDocument.defaultView || window).getSelection(), doc = {
        anchorNode: doc.anchorNode,
        anchorOffset: doc.anchorOffset,
        focusNode: doc.focusNode,
        focusOffset: doc.focusOffset
      }), lastSelection && shallowEqual(lastSelection, doc) || (lastSelection = doc, doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect"), 0 < doc.length && (nativeEvent = new SyntheticEvent(
        "onSelect",
        "select",
        null,
        nativeEvent,
        nativeEventTarget
      ), dispatchQueue.push({ event: nativeEvent, listeners: doc }), nativeEvent.target = activeElement)));
    }
    function makePrefixMap(styleProp, eventName) {
      var prefixes = {};
      prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
      prefixes["Webkit" + styleProp] = "webkit" + eventName;
      prefixes["Moz" + styleProp] = "moz" + eventName;
      return prefixes;
    }
    var vendorPrefixes = {
      animationend: makePrefixMap("Animation", "AnimationEnd"),
      animationiteration: makePrefixMap("Animation", "AnimationIteration"),
      animationstart: makePrefixMap("Animation", "AnimationStart"),
      transitionrun: makePrefixMap("Transition", "TransitionRun"),
      transitionstart: makePrefixMap("Transition", "TransitionStart"),
      transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
      transitionend: makePrefixMap("Transition", "TransitionEnd")
    }, prefixedEventNames = {}, style = {};
    canUseDOM && (style = document.createElement("div").style, "AnimationEvent" in window || (delete vendorPrefixes.animationend.animation, delete vendorPrefixes.animationiteration.animation, delete vendorPrefixes.animationstart.animation), "TransitionEvent" in window || delete vendorPrefixes.transitionend.transition);
    function getVendorPrefixedEventName(eventName) {
      if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
      if (!vendorPrefixes[eventName]) return eventName;
      var prefixMap = vendorPrefixes[eventName], styleProp;
      for (styleProp in prefixMap)
        if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
          return prefixedEventNames[eventName] = prefixMap[styleProp];
      return eventName;
    }
    var ANIMATION_END = getVendorPrefixedEventName("animationend"), ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration"), ANIMATION_START = getVendorPrefixedEventName("animationstart"), TRANSITION_RUN = getVendorPrefixedEventName("transitionrun"), TRANSITION_START = getVendorPrefixedEventName("transitionstart"), TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel"), TRANSITION_END = getVendorPrefixedEventName("transitionend"), topLevelEventsToReactNames = /* @__PURE__ */ new Map(), simpleEventPluginEvents = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    simpleEventPluginEvents.push("scrollEnd");
    function registerSimpleEvent(domEventName, reactName) {
      topLevelEventsToReactNames.set(domEventName, reactName);
      registerTwoPhaseEvent(reactName, [domEventName]);
    }
    var CapturedStacks = /* @__PURE__ */ new WeakMap();
    function createCapturedValueAtFiber(value, source) {
      if ("object" === typeof value && null !== value) {
        var existing = CapturedStacks.get(value);
        if (void 0 !== existing) return existing;
        source = {
          value,
          source,
          stack: getStackByFiberInDevAndProd(source)
        };
        CapturedStacks.set(value, source);
        return source;
      }
      return {
        value,
        source,
        stack: getStackByFiberInDevAndProd(source)
      };
    }
    var concurrentQueues = [], concurrentQueuesIndex = 0, concurrentlyUpdatedLanes = 0;
    function finishQueueingConcurrentUpdates() {
      for (var endIndex = concurrentQueuesIndex, i = concurrentlyUpdatedLanes = concurrentQueuesIndex = 0; i < endIndex; ) {
        var fiber = concurrentQueues[i];
        concurrentQueues[i++] = null;
        var queue = concurrentQueues[i];
        concurrentQueues[i++] = null;
        var update = concurrentQueues[i];
        concurrentQueues[i++] = null;
        var lane = concurrentQueues[i];
        concurrentQueues[i++] = null;
        if (null !== queue && null !== update) {
          var pending = queue.pending;
          null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
          queue.pending = update;
        }
        0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
      }
    }
    function enqueueUpdate$1(fiber, queue, update, lane) {
      concurrentQueues[concurrentQueuesIndex++] = fiber;
      concurrentQueues[concurrentQueuesIndex++] = queue;
      concurrentQueues[concurrentQueuesIndex++] = update;
      concurrentQueues[concurrentQueuesIndex++] = lane;
      concurrentlyUpdatedLanes |= lane;
      fiber.lanes |= lane;
      fiber = fiber.alternate;
      null !== fiber && (fiber.lanes |= lane);
    }
    function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
      enqueueUpdate$1(fiber, queue, update, lane);
      return getRootForUpdatedFiber(fiber);
    }
    function enqueueConcurrentRenderForLane(fiber, lane) {
      enqueueUpdate$1(fiber, null, null, lane);
      return getRootForUpdatedFiber(fiber);
    }
    function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
      sourceFiber.lanes |= lane;
      var alternate = sourceFiber.alternate;
      null !== alternate && (alternate.lanes |= lane);
      for (var isHidden = false, parent = sourceFiber.return; null !== parent; )
        parent.childLanes |= lane, alternate = parent.alternate, null !== alternate && (alternate.childLanes |= lane), 22 === parent.tag && (sourceFiber = parent.stateNode, null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = true)), sourceFiber = parent, parent = parent.return;
      return 3 === sourceFiber.tag ? (parent = sourceFiber.stateNode, isHidden && null !== update && (isHidden = 31 - clz32(lane), sourceFiber = parent.hiddenUpdates, alternate = sourceFiber[isHidden], null === alternate ? sourceFiber[isHidden] = [update] : alternate.push(update), update.lane = lane | 536870912), parent) : null;
    }
    function getRootForUpdatedFiber(sourceFiber) {
      if (50 < nestedUpdateCount)
        throw nestedUpdateCount = 0, rootWithNestedUpdates = null, Error(formatProdErrorMessage(185));
      for (var parent = sourceFiber.return; null !== parent; )
        sourceFiber = parent, parent = sourceFiber.return;
      return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
    }
    var emptyContextObject = {};
    function FiberNode(tag, pendingProps, key, mode) {
      this.tag = tag;
      this.key = key;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.refCleanup = this.ref = null;
      this.pendingProps = pendingProps;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = mode;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function createFiberImplClass(tag, pendingProps, key, mode) {
      return new FiberNode(tag, pendingProps, key, mode);
    }
    function shouldConstruct(Component) {
      Component = Component.prototype;
      return !(!Component || !Component.isReactComponent);
    }
    function createWorkInProgress(current, pendingProps) {
      var workInProgress2 = current.alternate;
      null === workInProgress2 ? (workInProgress2 = createFiberImplClass(
        current.tag,
        pendingProps,
        current.key,
        current.mode
      ), workInProgress2.elementType = current.elementType, workInProgress2.type = current.type, workInProgress2.stateNode = current.stateNode, workInProgress2.alternate = current, current.alternate = workInProgress2) : (workInProgress2.pendingProps = pendingProps, workInProgress2.type = current.type, workInProgress2.flags = 0, workInProgress2.subtreeFlags = 0, workInProgress2.deletions = null);
      workInProgress2.flags = current.flags & 65011712;
      workInProgress2.childLanes = current.childLanes;
      workInProgress2.lanes = current.lanes;
      workInProgress2.child = current.child;
      workInProgress2.memoizedProps = current.memoizedProps;
      workInProgress2.memoizedState = current.memoizedState;
      workInProgress2.updateQueue = current.updateQueue;
      pendingProps = current.dependencies;
      workInProgress2.dependencies = null === pendingProps ? null : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
      workInProgress2.sibling = current.sibling;
      workInProgress2.index = current.index;
      workInProgress2.ref = current.ref;
      workInProgress2.refCleanup = current.refCleanup;
      return workInProgress2;
    }
    function resetWorkInProgress(workInProgress2, renderLanes2) {
      workInProgress2.flags &= 65011714;
      var current = workInProgress2.alternate;
      null === current ? (workInProgress2.childLanes = 0, workInProgress2.lanes = renderLanes2, workInProgress2.child = null, workInProgress2.subtreeFlags = 0, workInProgress2.memoizedProps = null, workInProgress2.memoizedState = null, workInProgress2.updateQueue = null, workInProgress2.dependencies = null, workInProgress2.stateNode = null) : (workInProgress2.childLanes = current.childLanes, workInProgress2.lanes = current.lanes, workInProgress2.child = current.child, workInProgress2.subtreeFlags = 0, workInProgress2.deletions = null, workInProgress2.memoizedProps = current.memoizedProps, workInProgress2.memoizedState = current.memoizedState, workInProgress2.updateQueue = current.updateQueue, workInProgress2.type = current.type, renderLanes2 = current.dependencies, workInProgress2.dependencies = null === renderLanes2 ? null : {
        lanes: renderLanes2.lanes,
        firstContext: renderLanes2.firstContext
      });
      return workInProgress2;
    }
    function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
      var fiberTag = 0;
      owner = type;
      if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
      else if ("string" === typeof type)
        fiberTag = isHostHoistableType(
          type,
          pendingProps,
          contextStackCursor.current
        ) ? 26 : "html" === type || "head" === type || "body" === type ? 27 : 5;
      else
        a: switch (type) {
          case REACT_ACTIVITY_TYPE:
            return type = createFiberImplClass(31, pendingProps, key, mode), type.elementType = REACT_ACTIVITY_TYPE, type.lanes = lanes, type;
          case REACT_FRAGMENT_TYPE:
            return createFiberFromFragment(pendingProps.children, mode, lanes, key);
          case REACT_STRICT_MODE_TYPE:
            fiberTag = 8;
            mode |= 24;
            break;
          case REACT_PROFILER_TYPE:
            return type = createFiberImplClass(12, pendingProps, key, mode | 2), type.elementType = REACT_PROFILER_TYPE, type.lanes = lanes, type;
          case REACT_SUSPENSE_TYPE:
            return type = createFiberImplClass(13, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_TYPE, type.lanes = lanes, type;
          case REACT_SUSPENSE_LIST_TYPE:
            return type = createFiberImplClass(19, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_LIST_TYPE, type.lanes = lanes, type;
          default:
            if ("object" === typeof type && null !== type)
              switch (type.$$typeof) {
                case REACT_PROVIDER_TYPE:
                case REACT_CONTEXT_TYPE:
                  fiberTag = 10;
                  break a;
                case REACT_CONSUMER_TYPE:
                  fiberTag = 9;
                  break a;
                case REACT_FORWARD_REF_TYPE:
                  fiberTag = 11;
                  break a;
                case REACT_MEMO_TYPE:
                  fiberTag = 14;
                  break a;
                case REACT_LAZY_TYPE:
                  fiberTag = 16;
                  owner = null;
                  break a;
              }
            fiberTag = 29;
            pendingProps = Error(
              formatProdErrorMessage(130, null === type ? "null" : typeof type, "")
            );
            owner = null;
        }
      key = createFiberImplClass(fiberTag, pendingProps, key, mode);
      key.elementType = type;
      key.type = owner;
      key.lanes = lanes;
      return key;
    }
    function createFiberFromFragment(elements, mode, lanes, key) {
      elements = createFiberImplClass(7, elements, key, mode);
      elements.lanes = lanes;
      return elements;
    }
    function createFiberFromText(content, mode, lanes) {
      content = createFiberImplClass(6, content, null, mode);
      content.lanes = lanes;
      return content;
    }
    function createFiberFromPortal(portal, mode, lanes) {
      mode = createFiberImplClass(
        4,
        null !== portal.children ? portal.children : [],
        portal.key,
        mode
      );
      mode.lanes = lanes;
      mode.stateNode = {
        containerInfo: portal.containerInfo,
        pendingChildren: null,
        implementation: portal.implementation
      };
      return mode;
    }
    var forkStack = [], forkStackIndex = 0, treeForkProvider = null, treeForkCount = 0, idStack = [], idStackIndex = 0, treeContextProvider = null, treeContextId = 1, treeContextOverflow = "";
    function pushTreeFork(workInProgress2, totalChildren) {
      forkStack[forkStackIndex++] = treeForkCount;
      forkStack[forkStackIndex++] = treeForkProvider;
      treeForkProvider = workInProgress2;
      treeForkCount = totalChildren;
    }
    function pushTreeId(workInProgress2, totalChildren, index3) {
      idStack[idStackIndex++] = treeContextId;
      idStack[idStackIndex++] = treeContextOverflow;
      idStack[idStackIndex++] = treeContextProvider;
      treeContextProvider = workInProgress2;
      var baseIdWithLeadingBit = treeContextId;
      workInProgress2 = treeContextOverflow;
      var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
      baseIdWithLeadingBit &= ~(1 << baseLength);
      index3 += 1;
      var length = 32 - clz32(totalChildren) + baseLength;
      if (30 < length) {
        var numberOfOverflowBits = baseLength - baseLength % 5;
        length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
        baseIdWithLeadingBit >>= numberOfOverflowBits;
        baseLength -= numberOfOverflowBits;
        treeContextId = 1 << 32 - clz32(totalChildren) + baseLength | index3 << baseLength | baseIdWithLeadingBit;
        treeContextOverflow = length + workInProgress2;
      } else
        treeContextId = 1 << length | index3 << baseLength | baseIdWithLeadingBit, treeContextOverflow = workInProgress2;
    }
    function pushMaterializedTreeId(workInProgress2) {
      null !== workInProgress2.return && (pushTreeFork(workInProgress2, 1), pushTreeId(workInProgress2, 1, 0));
    }
    function popTreeContext(workInProgress2) {
      for (; workInProgress2 === treeForkProvider; )
        treeForkProvider = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null, treeForkCount = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null;
      for (; workInProgress2 === treeContextProvider; )
        treeContextProvider = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextOverflow = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextId = idStack[--idStackIndex], idStack[idStackIndex] = null;
    }
    var hydrationParentFiber = null, nextHydratableInstance = null, isHydrating = false, hydrationErrors = null, rootOrSingletonContext = false, HydrationMismatchException = Error(formatProdErrorMessage(519));
    function throwOnHydrationMismatch(fiber) {
      var error = Error(formatProdErrorMessage(418, ""));
      queueHydrationError(createCapturedValueAtFiber(error, fiber));
      throw HydrationMismatchException;
    }
    function prepareToHydrateHostInstance(fiber) {
      var instance = fiber.stateNode, type = fiber.type, props = fiber.memoizedProps;
      instance[internalInstanceKey] = fiber;
      instance[internalPropsKey] = props;
      switch (type) {
        case "dialog":
          listenToNonDelegatedEvent("cancel", instance);
          listenToNonDelegatedEvent("close", instance);
          break;
        case "iframe":
        case "object":
        case "embed":
          listenToNonDelegatedEvent("load", instance);
          break;
        case "video":
        case "audio":
          for (type = 0; type < mediaEventTypes.length; type++)
            listenToNonDelegatedEvent(mediaEventTypes[type], instance);
          break;
        case "source":
          listenToNonDelegatedEvent("error", instance);
          break;
        case "img":
        case "image":
        case "link":
          listenToNonDelegatedEvent("error", instance);
          listenToNonDelegatedEvent("load", instance);
          break;
        case "details":
          listenToNonDelegatedEvent("toggle", instance);
          break;
        case "input":
          listenToNonDelegatedEvent("invalid", instance);
          initInput(
            instance,
            props.value,
            props.defaultValue,
            props.checked,
            props.defaultChecked,
            props.type,
            props.name,
            true
          );
          track(instance);
          break;
        case "select":
          listenToNonDelegatedEvent("invalid", instance);
          break;
        case "textarea":
          listenToNonDelegatedEvent("invalid", instance), initTextarea(instance, props.value, props.defaultValue, props.children), track(instance);
      }
      type = props.children;
      "string" !== typeof type && "number" !== typeof type && "bigint" !== typeof type || instance.textContent === "" + type || true === props.suppressHydrationWarning || checkForUnmatchedText(instance.textContent, type) ? (null != props.popover && (listenToNonDelegatedEvent("beforetoggle", instance), listenToNonDelegatedEvent("toggle", instance)), null != props.onScroll && listenToNonDelegatedEvent("scroll", instance), null != props.onScrollEnd && listenToNonDelegatedEvent("scrollend", instance), null != props.onClick && (instance.onclick = noop$1), instance = true) : instance = false;
      instance || throwOnHydrationMismatch(fiber);
    }
    function popToNextHostParent(fiber) {
      for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
        switch (hydrationParentFiber.tag) {
          case 5:
          case 13:
            rootOrSingletonContext = false;
            return;
          case 27:
          case 3:
            rootOrSingletonContext = true;
            return;
          default:
            hydrationParentFiber = hydrationParentFiber.return;
        }
    }
    function popHydrationState(fiber) {
      if (fiber !== hydrationParentFiber) return false;
      if (!isHydrating) return popToNextHostParent(fiber), isHydrating = true, false;
      var tag = fiber.tag, JSCompiler_temp;
      if (JSCompiler_temp = 3 !== tag && 27 !== tag) {
        if (JSCompiler_temp = 5 === tag)
          JSCompiler_temp = fiber.type, JSCompiler_temp = !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) || shouldSetTextContent(fiber.type, fiber.memoizedProps);
        JSCompiler_temp = !JSCompiler_temp;
      }
      JSCompiler_temp && nextHydratableInstance && throwOnHydrationMismatch(fiber);
      popToNextHostParent(fiber);
      if (13 === tag) {
        fiber = fiber.memoizedState;
        fiber = null !== fiber ? fiber.dehydrated : null;
        if (!fiber) throw Error(formatProdErrorMessage(317));
        a: {
          fiber = fiber.nextSibling;
          for (tag = 0; fiber; ) {
            if (8 === fiber.nodeType)
              if (JSCompiler_temp = fiber.data, "/$" === JSCompiler_temp) {
                if (0 === tag) {
                  nextHydratableInstance = getNextHydratable(fiber.nextSibling);
                  break a;
                }
                tag--;
              } else
                "$" !== JSCompiler_temp && "$!" !== JSCompiler_temp && "$?" !== JSCompiler_temp || tag++;
            fiber = fiber.nextSibling;
          }
          nextHydratableInstance = null;
        }
      } else
        27 === tag ? (tag = nextHydratableInstance, isSingletonScope(fiber.type) ? (fiber = previousHydratableOnEnteringScopedSingleton, previousHydratableOnEnteringScopedSingleton = null, nextHydratableInstance = fiber) : nextHydratableInstance = tag) : nextHydratableInstance = hydrationParentFiber ? getNextHydratable(fiber.stateNode.nextSibling) : null;
      return true;
    }
    function resetHydrationState() {
      nextHydratableInstance = hydrationParentFiber = null;
      isHydrating = false;
    }
    function upgradeHydrationErrorsToRecoverable() {
      var queuedErrors = hydrationErrors;
      null !== queuedErrors && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = queuedErrors : workInProgressRootRecoverableErrors.push.apply(
        workInProgressRootRecoverableErrors,
        queuedErrors
      ), hydrationErrors = null);
      return queuedErrors;
    }
    function queueHydrationError(error) {
      null === hydrationErrors ? hydrationErrors = [error] : hydrationErrors.push(error);
    }
    var valueCursor = createCursor(null), currentlyRenderingFiber$1 = null, lastContextDependency = null;
    function pushProvider(providerFiber, context, nextValue) {
      push(valueCursor, context._currentValue);
      context._currentValue = nextValue;
    }
    function popProvider(context) {
      context._currentValue = valueCursor.current;
      pop(valueCursor);
    }
    function scheduleContextWorkOnParentPath(parent, renderLanes2, propagationRoot) {
      for (; null !== parent; ) {
        var alternate = parent.alternate;
        (parent.childLanes & renderLanes2) !== renderLanes2 ? (parent.childLanes |= renderLanes2, null !== alternate && (alternate.childLanes |= renderLanes2)) : null !== alternate && (alternate.childLanes & renderLanes2) !== renderLanes2 && (alternate.childLanes |= renderLanes2);
        if (parent === propagationRoot) break;
        parent = parent.return;
      }
    }
    function propagateContextChanges(workInProgress2, contexts, renderLanes2, forcePropagateEntireTree) {
      var fiber = workInProgress2.child;
      null !== fiber && (fiber.return = workInProgress2);
      for (; null !== fiber; ) {
        var list = fiber.dependencies;
        if (null !== list) {
          var nextFiber = fiber.child;
          list = list.firstContext;
          a: for (; null !== list; ) {
            var dependency = list;
            list = fiber;
            for (var i = 0; i < contexts.length; i++)
              if (dependency.context === contexts[i]) {
                list.lanes |= renderLanes2;
                dependency = list.alternate;
                null !== dependency && (dependency.lanes |= renderLanes2);
                scheduleContextWorkOnParentPath(
                  list.return,
                  renderLanes2,
                  workInProgress2
                );
                forcePropagateEntireTree || (nextFiber = null);
                break a;
              }
            list = dependency.next;
          }
        } else if (18 === fiber.tag) {
          nextFiber = fiber.return;
          if (null === nextFiber) throw Error(formatProdErrorMessage(341));
          nextFiber.lanes |= renderLanes2;
          list = nextFiber.alternate;
          null !== list && (list.lanes |= renderLanes2);
          scheduleContextWorkOnParentPath(nextFiber, renderLanes2, workInProgress2);
          nextFiber = null;
        } else nextFiber = fiber.child;
        if (null !== nextFiber) nextFiber.return = fiber;
        else
          for (nextFiber = fiber; null !== nextFiber; ) {
            if (nextFiber === workInProgress2) {
              nextFiber = null;
              break;
            }
            fiber = nextFiber.sibling;
            if (null !== fiber) {
              fiber.return = nextFiber.return;
              nextFiber = fiber;
              break;
            }
            nextFiber = nextFiber.return;
          }
        fiber = nextFiber;
      }
    }
    function propagateParentContextChanges(current, workInProgress2, renderLanes2, forcePropagateEntireTree) {
      current = null;
      for (var parent = workInProgress2, isInsidePropagationBailout = false; null !== parent; ) {
        if (!isInsidePropagationBailout) {
          if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = true;
          else if (0 !== (parent.flags & 262144)) break;
        }
        if (10 === parent.tag) {
          var currentParent = parent.alternate;
          if (null === currentParent) throw Error(formatProdErrorMessage(387));
          currentParent = currentParent.memoizedProps;
          if (null !== currentParent) {
            var context = parent.type;
            objectIs(parent.pendingProps.value, currentParent.value) || (null !== current ? current.push(context) : current = [context]);
          }
        } else if (parent === hostTransitionProviderCursor.current) {
          currentParent = parent.alternate;
          if (null === currentParent) throw Error(formatProdErrorMessage(387));
          currentParent.memoizedState.memoizedState !== parent.memoizedState.memoizedState && (null !== current ? current.push(HostTransitionContext) : current = [HostTransitionContext]);
        }
        parent = parent.return;
      }
      null !== current && propagateContextChanges(
        workInProgress2,
        current,
        renderLanes2,
        forcePropagateEntireTree
      );
      workInProgress2.flags |= 262144;
    }
    function checkIfContextChanged(currentDependencies) {
      for (currentDependencies = currentDependencies.firstContext; null !== currentDependencies; ) {
        if (!objectIs(
          currentDependencies.context._currentValue,
          currentDependencies.memoizedValue
        ))
          return true;
        currentDependencies = currentDependencies.next;
      }
      return false;
    }
    function prepareToReadContext(workInProgress2) {
      currentlyRenderingFiber$1 = workInProgress2;
      lastContextDependency = null;
      workInProgress2 = workInProgress2.dependencies;
      null !== workInProgress2 && (workInProgress2.firstContext = null);
    }
    function readContext(context) {
      return readContextForConsumer(currentlyRenderingFiber$1, context);
    }
    function readContextDuringReconciliation(consumer, context) {
      null === currentlyRenderingFiber$1 && prepareToReadContext(consumer);
      return readContextForConsumer(consumer, context);
    }
    function readContextForConsumer(consumer, context) {
      var value = context._currentValue;
      context = { context, memoizedValue: value, next: null };
      if (null === lastContextDependency) {
        if (null === consumer) throw Error(formatProdErrorMessage(308));
        lastContextDependency = context;
        consumer.dependencies = { lanes: 0, firstContext: context };
        consumer.flags |= 524288;
      } else lastContextDependency = lastContextDependency.next = context;
      return value;
    }
    var AbortControllerLocal = "undefined" !== typeof AbortController ? AbortController : function() {
      var listeners = [], signal = this.signal = {
        aborted: false,
        addEventListener: function(type, listener) {
          listeners.push(listener);
        }
      };
      this.abort = function() {
        signal.aborted = true;
        listeners.forEach(function(listener) {
          return listener();
        });
      };
    }, scheduleCallback$2 = Scheduler.unstable_scheduleCallback, NormalPriority = Scheduler.unstable_NormalPriority, CacheContext = {
      $$typeof: REACT_CONTEXT_TYPE,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function createCache() {
      return {
        controller: new AbortControllerLocal(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function releaseCache(cache) {
      cache.refCount--;
      0 === cache.refCount && scheduleCallback$2(NormalPriority, function() {
        cache.controller.abort();
      });
    }
    var currentEntangledListeners = null, currentEntangledPendingCount = 0, currentEntangledLane = 0, currentEntangledActionThenable = null;
    function entangleAsyncAction(transition, thenable) {
      if (null === currentEntangledListeners) {
        var entangledListeners = currentEntangledListeners = [];
        currentEntangledPendingCount = 0;
        currentEntangledLane = requestTransitionLane();
        currentEntangledActionThenable = {
          status: "pending",
          value: void 0,
          then: function(resolve) {
            entangledListeners.push(resolve);
          }
        };
      }
      currentEntangledPendingCount++;
      thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
      return thenable;
    }
    function pingEngtangledActionScope() {
      if (0 === --currentEntangledPendingCount && null !== currentEntangledListeners) {
        null !== currentEntangledActionThenable && (currentEntangledActionThenable.status = "fulfilled");
        var listeners = currentEntangledListeners;
        currentEntangledListeners = null;
        currentEntangledLane = 0;
        currentEntangledActionThenable = null;
        for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
      }
    }
    function chainThenableValue(thenable, result) {
      var listeners = [], thenableWithOverride = {
        status: "pending",
        value: null,
        reason: null,
        then: function(resolve) {
          listeners.push(resolve);
        }
      };
      thenable.then(
        function() {
          thenableWithOverride.status = "fulfilled";
          thenableWithOverride.value = result;
          for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
        },
        function(error) {
          thenableWithOverride.status = "rejected";
          thenableWithOverride.reason = error;
          for (error = 0; error < listeners.length; error++)
            (0, listeners[error])(void 0);
        }
      );
      return thenableWithOverride;
    }
    var prevOnStartTransitionFinish = ReactSharedInternals.S;
    ReactSharedInternals.S = function(transition, returnValue) {
      "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && entangleAsyncAction(transition, returnValue);
      null !== prevOnStartTransitionFinish && prevOnStartTransitionFinish(transition, returnValue);
    };
    var resumedCache = createCursor(null);
    function peekCacheFromPool() {
      var cacheResumedFromPreviousRender = resumedCache.current;
      return null !== cacheResumedFromPreviousRender ? cacheResumedFromPreviousRender : workInProgressRoot.pooledCache;
    }
    function pushTransition(offscreenWorkInProgress, prevCachePool) {
      null === prevCachePool ? push(resumedCache, resumedCache.current) : push(resumedCache, prevCachePool.pool);
    }
    function getSuspendedCache() {
      var cacheFromPool = peekCacheFromPool();
      return null === cacheFromPool ? null : { parent: CacheContext._currentValue, pool: cacheFromPool };
    }
    var SuspenseException = Error(formatProdErrorMessage(460)), SuspenseyCommitException = Error(formatProdErrorMessage(474)), SuspenseActionException = Error(formatProdErrorMessage(542)), noopSuspenseyCommitThenable = { then: function() {
    } };
    function isThenableResolved(thenable) {
      thenable = thenable.status;
      return "fulfilled" === thenable || "rejected" === thenable;
    }
    function noop$3() {
    }
    function trackUsedThenable(thenableState2, thenable, index3) {
      index3 = thenableState2[index3];
      void 0 === index3 ? thenableState2.push(thenable) : index3 !== thenable && (thenable.then(noop$3, noop$3), thenable = index3);
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenableState2 = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState2), thenableState2;
        default:
          if ("string" === typeof thenable.status) thenable.then(noop$3, noop$3);
          else {
            thenableState2 = workInProgressRoot;
            if (null !== thenableState2 && 100 < thenableState2.shellSuspendCounter)
              throw Error(formatProdErrorMessage(482));
            thenableState2 = thenable;
            thenableState2.status = "pending";
            thenableState2.then(
              function(fulfilledValue) {
                if ("pending" === thenable.status) {
                  var fulfilledThenable = thenable;
                  fulfilledThenable.status = "fulfilled";
                  fulfilledThenable.value = fulfilledValue;
                }
              },
              function(error) {
                if ("pending" === thenable.status) {
                  var rejectedThenable = thenable;
                  rejectedThenable.status = "rejected";
                  rejectedThenable.reason = error;
                }
              }
            );
          }
          switch (thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenableState2 = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState2), thenableState2;
          }
          suspendedThenable = thenable;
          throw SuspenseException;
      }
    }
    var suspendedThenable = null;
    function getSuspendedThenable() {
      if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
      var thenable = suspendedThenable;
      suspendedThenable = null;
      return thenable;
    }
    function checkIfUseWrappedInAsyncCatch(rejectedReason) {
      if (rejectedReason === SuspenseException || rejectedReason === SuspenseActionException)
        throw Error(formatProdErrorMessage(483));
    }
    var hasForceUpdate = false;
    function initializeUpdateQueue(fiber) {
      fiber.updateQueue = {
        baseState: fiber.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function cloneUpdateQueue(current, workInProgress2) {
      current = current.updateQueue;
      workInProgress2.updateQueue === current && (workInProgress2.updateQueue = {
        baseState: current.baseState,
        firstBaseUpdate: current.firstBaseUpdate,
        lastBaseUpdate: current.lastBaseUpdate,
        shared: current.shared,
        callbacks: null
      });
    }
    function createUpdate(lane) {
      return { lane, tag: 0, payload: null, callback: null, next: null };
    }
    function enqueueUpdate(fiber, update, lane) {
      var updateQueue = fiber.updateQueue;
      if (null === updateQueue) return null;
      updateQueue = updateQueue.shared;
      if (0 !== (executionContext & 2)) {
        var pending = updateQueue.pending;
        null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
        updateQueue.pending = update;
        update = getRootForUpdatedFiber(fiber);
        markUpdateLaneFromFiberToRoot(fiber, null, lane);
        return update;
      }
      enqueueUpdate$1(fiber, updateQueue, update, lane);
      return getRootForUpdatedFiber(fiber);
    }
    function entangleTransitions(root2, fiber, lane) {
      fiber = fiber.updateQueue;
      if (null !== fiber && (fiber = fiber.shared, 0 !== (lane & 4194048))) {
        var queueLanes = fiber.lanes;
        queueLanes &= root2.pendingLanes;
        lane |= queueLanes;
        fiber.lanes = lane;
        markRootEntangled(root2, lane);
      }
    }
    function enqueueCapturedUpdate(workInProgress2, capturedUpdate) {
      var queue = workInProgress2.updateQueue, current = workInProgress2.alternate;
      if (null !== current && (current = current.updateQueue, queue === current)) {
        var newFirst = null, newLast = null;
        queue = queue.firstBaseUpdate;
        if (null !== queue) {
          do {
            var clone = {
              lane: queue.lane,
              tag: queue.tag,
              payload: queue.payload,
              callback: null,
              next: null
            };
            null === newLast ? newFirst = newLast = clone : newLast = newLast.next = clone;
            queue = queue.next;
          } while (null !== queue);
          null === newLast ? newFirst = newLast = capturedUpdate : newLast = newLast.next = capturedUpdate;
        } else newFirst = newLast = capturedUpdate;
        queue = {
          baseState: current.baseState,
          firstBaseUpdate: newFirst,
          lastBaseUpdate: newLast,
          shared: current.shared,
          callbacks: current.callbacks
        };
        workInProgress2.updateQueue = queue;
        return;
      }
      workInProgress2 = queue.lastBaseUpdate;
      null === workInProgress2 ? queue.firstBaseUpdate = capturedUpdate : workInProgress2.next = capturedUpdate;
      queue.lastBaseUpdate = capturedUpdate;
    }
    var didReadFromEntangledAsyncAction = false;
    function suspendIfUpdateReadFromEntangledAsyncAction() {
      if (didReadFromEntangledAsyncAction) {
        var entangledActionThenable = currentEntangledActionThenable;
        if (null !== entangledActionThenable) throw entangledActionThenable;
      }
    }
    function processUpdateQueue(workInProgress$jscomp$0, props, instance$jscomp$0, renderLanes2) {
      didReadFromEntangledAsyncAction = false;
      var queue = workInProgress$jscomp$0.updateQueue;
      hasForceUpdate = false;
      var firstBaseUpdate = queue.firstBaseUpdate, lastBaseUpdate = queue.lastBaseUpdate, pendingQueue = queue.shared.pending;
      if (null !== pendingQueue) {
        queue.shared.pending = null;
        var lastPendingUpdate = pendingQueue, firstPendingUpdate = lastPendingUpdate.next;
        lastPendingUpdate.next = null;
        null === lastBaseUpdate ? firstBaseUpdate = firstPendingUpdate : lastBaseUpdate.next = firstPendingUpdate;
        lastBaseUpdate = lastPendingUpdate;
        var current = workInProgress$jscomp$0.alternate;
        null !== current && (current = current.updateQueue, pendingQueue = current.lastBaseUpdate, pendingQueue !== lastBaseUpdate && (null === pendingQueue ? current.firstBaseUpdate = firstPendingUpdate : pendingQueue.next = firstPendingUpdate, current.lastBaseUpdate = lastPendingUpdate));
      }
      if (null !== firstBaseUpdate) {
        var newState = queue.baseState;
        lastBaseUpdate = 0;
        current = firstPendingUpdate = lastPendingUpdate = null;
        pendingQueue = firstBaseUpdate;
        do {
          var updateLane = pendingQueue.lane & -536870913, isHiddenUpdate = updateLane !== pendingQueue.lane;
          if (isHiddenUpdate ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes2 & updateLane) === updateLane) {
            0 !== updateLane && updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction = true);
            null !== current && (current = current.next = {
              lane: 0,
              tag: pendingQueue.tag,
              payload: pendingQueue.payload,
              callback: null,
              next: null
            });
            a: {
              var workInProgress2 = workInProgress$jscomp$0, update = pendingQueue;
              updateLane = props;
              var instance = instance$jscomp$0;
              switch (update.tag) {
                case 1:
                  workInProgress2 = update.payload;
                  if ("function" === typeof workInProgress2) {
                    newState = workInProgress2.call(instance, newState, updateLane);
                    break a;
                  }
                  newState = workInProgress2;
                  break a;
                case 3:
                  workInProgress2.flags = workInProgress2.flags & -65537 | 128;
                case 0:
                  workInProgress2 = update.payload;
                  updateLane = "function" === typeof workInProgress2 ? workInProgress2.call(instance, newState, updateLane) : workInProgress2;
                  if (null === updateLane || void 0 === updateLane) break a;
                  newState = assign({}, newState, updateLane);
                  break a;
                case 2:
                  hasForceUpdate = true;
              }
            }
            updateLane = pendingQueue.callback;
            null !== updateLane && (workInProgress$jscomp$0.flags |= 64, isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192), isHiddenUpdate = queue.callbacks, null === isHiddenUpdate ? queue.callbacks = [updateLane] : isHiddenUpdate.push(updateLane));
          } else
            isHiddenUpdate = {
              lane: updateLane,
              tag: pendingQueue.tag,
              payload: pendingQueue.payload,
              callback: pendingQueue.callback,
              next: null
            }, null === current ? (firstPendingUpdate = current = isHiddenUpdate, lastPendingUpdate = newState) : current = current.next = isHiddenUpdate, lastBaseUpdate |= updateLane;
          pendingQueue = pendingQueue.next;
          if (null === pendingQueue)
            if (pendingQueue = queue.shared.pending, null === pendingQueue)
              break;
            else
              isHiddenUpdate = pendingQueue, pendingQueue = isHiddenUpdate.next, isHiddenUpdate.next = null, queue.lastBaseUpdate = isHiddenUpdate, queue.shared.pending = null;
        } while (1);
        null === current && (lastPendingUpdate = newState);
        queue.baseState = lastPendingUpdate;
        queue.firstBaseUpdate = firstPendingUpdate;
        queue.lastBaseUpdate = current;
        null === firstBaseUpdate && (queue.shared.lanes = 0);
        workInProgressRootSkippedLanes |= lastBaseUpdate;
        workInProgress$jscomp$0.lanes = lastBaseUpdate;
        workInProgress$jscomp$0.memoizedState = newState;
      }
    }
    function callCallback(callback, context) {
      if ("function" !== typeof callback)
        throw Error(formatProdErrorMessage(191, callback));
      callback.call(context);
    }
    function commitCallbacks(updateQueue, context) {
      var callbacks = updateQueue.callbacks;
      if (null !== callbacks)
        for (updateQueue.callbacks = null, updateQueue = 0; updateQueue < callbacks.length; updateQueue++)
          callCallback(callbacks[updateQueue], context);
    }
    var currentTreeHiddenStackCursor = createCursor(null), prevEntangledRenderLanesCursor = createCursor(0);
    function pushHiddenContext(fiber, context) {
      fiber = entangledRenderLanes;
      push(prevEntangledRenderLanesCursor, fiber);
      push(currentTreeHiddenStackCursor, context);
      entangledRenderLanes = fiber | context.baseLanes;
    }
    function reuseHiddenContextOnStack() {
      push(prevEntangledRenderLanesCursor, entangledRenderLanes);
      push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
    }
    function popHiddenContext() {
      entangledRenderLanes = prevEntangledRenderLanesCursor.current;
      pop(currentTreeHiddenStackCursor);
      pop(prevEntangledRenderLanesCursor);
    }
    var renderLanes = 0, currentlyRenderingFiber = null, currentHook = null, workInProgressHook = null, didScheduleRenderPhaseUpdate = false, didScheduleRenderPhaseUpdateDuringThisPass = false, shouldDoubleInvokeUserFnsInHooksDEV = false, localIdCounter = 0, thenableIndexCounter$1 = 0, thenableState$1 = null, globalClientIdCounter = 0;
    function throwInvalidHookError() {
      throw Error(formatProdErrorMessage(321));
    }
    function areHookInputsEqual(nextDeps, prevDeps) {
      if (null === prevDeps) return false;
      for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
        if (!objectIs(nextDeps[i], prevDeps[i])) return false;
      return true;
    }
    function renderWithHooks(current, workInProgress2, Component, props, secondArg, nextRenderLanes) {
      renderLanes = nextRenderLanes;
      currentlyRenderingFiber = workInProgress2;
      workInProgress2.memoizedState = null;
      workInProgress2.updateQueue = null;
      workInProgress2.lanes = 0;
      ReactSharedInternals.H = null === current || null === current.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate;
      shouldDoubleInvokeUserFnsInHooksDEV = false;
      nextRenderLanes = Component(props, secondArg);
      shouldDoubleInvokeUserFnsInHooksDEV = false;
      didScheduleRenderPhaseUpdateDuringThisPass && (nextRenderLanes = renderWithHooksAgain(
        workInProgress2,
        Component,
        props,
        secondArg
      ));
      finishRenderingHooks(current);
      return nextRenderLanes;
    }
    function finishRenderingHooks(current) {
      ReactSharedInternals.H = ContextOnlyDispatcher;
      var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
      renderLanes = 0;
      workInProgressHook = currentHook = currentlyRenderingFiber = null;
      didScheduleRenderPhaseUpdate = false;
      thenableIndexCounter$1 = 0;
      thenableState$1 = null;
      if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
      null === current || didReceiveUpdate || (current = current.dependencies, null !== current && checkIfContextChanged(current) && (didReceiveUpdate = true));
    }
    function renderWithHooksAgain(workInProgress2, Component, props, secondArg) {
      currentlyRenderingFiber = workInProgress2;
      var numberOfReRenders = 0;
      do {
        didScheduleRenderPhaseUpdateDuringThisPass && (thenableState$1 = null);
        thenableIndexCounter$1 = 0;
        didScheduleRenderPhaseUpdateDuringThisPass = false;
        if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
        numberOfReRenders += 1;
        workInProgressHook = currentHook = null;
        if (null != workInProgress2.updateQueue) {
          var children = workInProgress2.updateQueue;
          children.lastEffect = null;
          children.events = null;
          children.stores = null;
          null != children.memoCache && (children.memoCache.index = 0);
        }
        ReactSharedInternals.H = HooksDispatcherOnRerender;
        children = Component(props, secondArg);
      } while (didScheduleRenderPhaseUpdateDuringThisPass);
      return children;
    }
    function TransitionAwareHostComponent() {
      var dispatcher = ReactSharedInternals.H, maybeThenable = dispatcher.useState()[0];
      maybeThenable = "function" === typeof maybeThenable.then ? useThenable(maybeThenable) : maybeThenable;
      dispatcher = dispatcher.useState()[0];
      (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher && (currentlyRenderingFiber.flags |= 1024);
      return maybeThenable;
    }
    function checkDidRenderIdHook() {
      var didRenderIdHook = 0 !== localIdCounter;
      localIdCounter = 0;
      return didRenderIdHook;
    }
    function bailoutHooks(current, workInProgress2, lanes) {
      workInProgress2.updateQueue = current.updateQueue;
      workInProgress2.flags &= -2053;
      current.lanes &= ~lanes;
    }
    function resetHooksOnUnwind(workInProgress2) {
      if (didScheduleRenderPhaseUpdate) {
        for (workInProgress2 = workInProgress2.memoizedState; null !== workInProgress2; ) {
          var queue = workInProgress2.queue;
          null !== queue && (queue.pending = null);
          workInProgress2 = workInProgress2.next;
        }
        didScheduleRenderPhaseUpdate = false;
      }
      renderLanes = 0;
      workInProgressHook = currentHook = currentlyRenderingFiber = null;
      didScheduleRenderPhaseUpdateDuringThisPass = false;
      thenableIndexCounter$1 = localIdCounter = 0;
      thenableState$1 = null;
    }
    function mountWorkInProgressHook() {
      var hook = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = hook : workInProgressHook = workInProgressHook.next = hook;
      return workInProgressHook;
    }
    function updateWorkInProgressHook() {
      if (null === currentHook) {
        var nextCurrentHook = currentlyRenderingFiber.alternate;
        nextCurrentHook = null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
      } else nextCurrentHook = currentHook.next;
      var nextWorkInProgressHook = null === workInProgressHook ? currentlyRenderingFiber.memoizedState : workInProgressHook.next;
      if (null !== nextWorkInProgressHook)
        workInProgressHook = nextWorkInProgressHook, currentHook = nextCurrentHook;
      else {
        if (null === nextCurrentHook) {
          if (null === currentlyRenderingFiber.alternate)
            throw Error(formatProdErrorMessage(467));
          throw Error(formatProdErrorMessage(310));
        }
        currentHook = nextCurrentHook;
        nextCurrentHook = {
          memoizedState: currentHook.memoizedState,
          baseState: currentHook.baseState,
          baseQueue: currentHook.baseQueue,
          queue: currentHook.queue,
          next: null
        };
        null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = nextCurrentHook : workInProgressHook = workInProgressHook.next = nextCurrentHook;
      }
      return workInProgressHook;
    }
    function createFunctionComponentUpdateQueue() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function useThenable(thenable) {
      var index3 = thenableIndexCounter$1;
      thenableIndexCounter$1 += 1;
      null === thenableState$1 && (thenableState$1 = []);
      thenable = trackUsedThenable(thenableState$1, thenable, index3);
      index3 = currentlyRenderingFiber;
      null === (null === workInProgressHook ? index3.memoizedState : workInProgressHook.next) && (index3 = index3.alternate, ReactSharedInternals.H = null === index3 || null === index3.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate);
      return thenable;
    }
    function use(usable) {
      if (null !== usable && "object" === typeof usable) {
        if ("function" === typeof usable.then) return useThenable(usable);
        if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
      }
      throw Error(formatProdErrorMessage(438, String(usable)));
    }
    function useMemoCache(size) {
      var memoCache = null, updateQueue = currentlyRenderingFiber.updateQueue;
      null !== updateQueue && (memoCache = updateQueue.memoCache);
      if (null == memoCache) {
        var current = currentlyRenderingFiber.alternate;
        null !== current && (current = current.updateQueue, null !== current && (current = current.memoCache, null != current && (memoCache = {
          data: current.data.map(function(array) {
            return array.slice();
          }),
          index: 0
        })));
      }
      null == memoCache && (memoCache = { data: [], index: 0 });
      null === updateQueue && (updateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = updateQueue);
      updateQueue.memoCache = memoCache;
      updateQueue = memoCache.data[memoCache.index];
      if (void 0 === updateQueue)
        for (updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0; current < size; current++)
          updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
      memoCache.index++;
      return updateQueue;
    }
    function basicStateReducer(state, action) {
      return "function" === typeof action ? action(state) : action;
    }
    function updateReducer(reducer) {
      var hook = updateWorkInProgressHook();
      return updateReducerImpl(hook, currentHook, reducer);
    }
    function updateReducerImpl(hook, current, reducer) {
      var queue = hook.queue;
      if (null === queue) throw Error(formatProdErrorMessage(311));
      queue.lastRenderedReducer = reducer;
      var baseQueue = hook.baseQueue, pendingQueue = queue.pending;
      if (null !== pendingQueue) {
        if (null !== baseQueue) {
          var baseFirst = baseQueue.next;
          baseQueue.next = pendingQueue.next;
          pendingQueue.next = baseFirst;
        }
        current.baseQueue = baseQueue = pendingQueue;
        queue.pending = null;
      }
      pendingQueue = hook.baseState;
      if (null === baseQueue) hook.memoizedState = pendingQueue;
      else {
        current = baseQueue.next;
        var newBaseQueueFirst = baseFirst = null, newBaseQueueLast = null, update = current, didReadFromEntangledAsyncAction$32 = false;
        do {
          var updateLane = update.lane & -536870913;
          if (updateLane !== update.lane ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes & updateLane) === updateLane) {
            var revertLane = update.revertLane;
            if (0 === revertLane)
              null !== newBaseQueueLast && (newBaseQueueLast = newBaseQueueLast.next = {
                lane: 0,
                revertLane: 0,
                action: update.action,
                hasEagerState: update.hasEagerState,
                eagerState: update.eagerState,
                next: null
              }), updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction$32 = true);
            else if ((renderLanes & revertLane) === revertLane) {
              update = update.next;
              revertLane === currentEntangledLane && (didReadFromEntangledAsyncAction$32 = true);
              continue;
            } else
              updateLane = {
                lane: 0,
                revertLane: update.revertLane,
                action: update.action,
                hasEagerState: update.hasEagerState,
                eagerState: update.eagerState,
                next: null
              }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = updateLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = updateLane, currentlyRenderingFiber.lanes |= revertLane, workInProgressRootSkippedLanes |= revertLane;
            updateLane = update.action;
            shouldDoubleInvokeUserFnsInHooksDEV && reducer(pendingQueue, updateLane);
            pendingQueue = update.hasEagerState ? update.eagerState : reducer(pendingQueue, updateLane);
          } else
            revertLane = {
              lane: updateLane,
              revertLane: update.revertLane,
              action: update.action,
              hasEagerState: update.hasEagerState,
              eagerState: update.eagerState,
              next: null
            }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = revertLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = revertLane, currentlyRenderingFiber.lanes |= updateLane, workInProgressRootSkippedLanes |= updateLane;
          update = update.next;
        } while (null !== update && update !== current);
        null === newBaseQueueLast ? baseFirst = pendingQueue : newBaseQueueLast.next = newBaseQueueFirst;
        if (!objectIs(pendingQueue, hook.memoizedState) && (didReceiveUpdate = true, didReadFromEntangledAsyncAction$32 && (reducer = currentEntangledActionThenable, null !== reducer)))
          throw reducer;
        hook.memoizedState = pendingQueue;
        hook.baseState = baseFirst;
        hook.baseQueue = newBaseQueueLast;
        queue.lastRenderedState = pendingQueue;
      }
      null === baseQueue && (queue.lanes = 0);
      return [hook.memoizedState, queue.dispatch];
    }
    function rerenderReducer(reducer) {
      var hook = updateWorkInProgressHook(), queue = hook.queue;
      if (null === queue) throw Error(formatProdErrorMessage(311));
      queue.lastRenderedReducer = reducer;
      var dispatch = queue.dispatch, lastRenderPhaseUpdate = queue.pending, newState = hook.memoizedState;
      if (null !== lastRenderPhaseUpdate) {
        queue.pending = null;
        var update = lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
        do
          newState = reducer(newState, update.action), update = update.next;
        while (update !== lastRenderPhaseUpdate);
        objectIs(newState, hook.memoizedState) || (didReceiveUpdate = true);
        hook.memoizedState = newState;
        null === hook.baseQueue && (hook.baseState = newState);
        queue.lastRenderedState = newState;
      }
      return [newState, dispatch];
    }
    function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
      var fiber = currentlyRenderingFiber, hook = updateWorkInProgressHook(), isHydrating$jscomp$0 = isHydrating;
      if (isHydrating$jscomp$0) {
        if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
        getServerSnapshot = getServerSnapshot();
      } else getServerSnapshot = getSnapshot();
      var snapshotChanged = !objectIs(
        (currentHook || hook).memoizedState,
        getServerSnapshot
      );
      snapshotChanged && (hook.memoizedState = getServerSnapshot, didReceiveUpdate = true);
      hook = hook.queue;
      var create = subscribeToStore.bind(null, fiber, hook, subscribe);
      updateEffectImpl(2048, 8, create, [subscribe]);
      if (hook.getSnapshot !== getSnapshot || snapshotChanged || null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1) {
        fiber.flags |= 2048;
        pushSimpleEffect(
          9,
          createEffectInstance(),
          updateStoreInstance.bind(
            null,
            fiber,
            hook,
            getServerSnapshot,
            getSnapshot
          ),
          null
        );
        if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
        isHydrating$jscomp$0 || 0 !== (renderLanes & 124) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
      }
      return getServerSnapshot;
    }
    function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
      fiber.flags |= 16384;
      fiber = { getSnapshot, value: renderedSnapshot };
      getSnapshot = currentlyRenderingFiber.updateQueue;
      null === getSnapshot ? (getSnapshot = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = getSnapshot, getSnapshot.stores = [fiber]) : (renderedSnapshot = getSnapshot.stores, null === renderedSnapshot ? getSnapshot.stores = [fiber] : renderedSnapshot.push(fiber));
    }
    function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
      inst.value = nextSnapshot;
      inst.getSnapshot = getSnapshot;
      checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
    }
    function subscribeToStore(fiber, inst, subscribe) {
      return subscribe(function() {
        checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
      });
    }
    function checkIfSnapshotChanged(inst) {
      var latestGetSnapshot = inst.getSnapshot;
      inst = inst.value;
      try {
        var nextValue = latestGetSnapshot();
        return !objectIs(inst, nextValue);
      } catch (error) {
        return true;
      }
    }
    function forceStoreRerender(fiber) {
      var root2 = enqueueConcurrentRenderForLane(fiber, 2);
      null !== root2 && scheduleUpdateOnFiber(root2, fiber, 2);
    }
    function mountStateImpl(initialState) {
      var hook = mountWorkInProgressHook();
      if ("function" === typeof initialState) {
        var initialStateInitializer = initialState;
        initialState = initialStateInitializer();
        if (shouldDoubleInvokeUserFnsInHooksDEV) {
          setIsStrictModeForDevtools(true);
          try {
            initialStateInitializer();
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
      }
      hook.memoizedState = hook.baseState = initialState;
      hook.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: basicStateReducer,
        lastRenderedState: initialState
      };
      return hook;
    }
    function updateOptimisticImpl(hook, current, passthrough, reducer) {
      hook.baseState = passthrough;
      return updateReducerImpl(
        hook,
        currentHook,
        "function" === typeof reducer ? reducer : basicStateReducer
      );
    }
    function dispatchActionState(fiber, actionQueue, setPendingState, setState, payload) {
      if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
      fiber = actionQueue.action;
      if (null !== fiber) {
        var actionNode = {
          payload,
          action: fiber,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(listener) {
            actionNode.listeners.push(listener);
          }
        };
        null !== ReactSharedInternals.T ? setPendingState(true) : actionNode.isTransition = false;
        setState(actionNode);
        setPendingState = actionQueue.pending;
        null === setPendingState ? (actionNode.next = actionQueue.pending = actionNode, runActionStateAction(actionQueue, actionNode)) : (actionNode.next = setPendingState.next, actionQueue.pending = setPendingState.next = actionNode);
      }
    }
    function runActionStateAction(actionQueue, node) {
      var action = node.action, payload = node.payload, prevState = actionQueue.state;
      if (node.isTransition) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = action(prevState, payload), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          handleActionReturnValue(actionQueue, node, returnValue);
        } catch (error) {
          onActionError(actionQueue, node, error);
        } finally {
          ReactSharedInternals.T = prevTransition;
        }
      } else
        try {
          prevTransition = action(prevState, payload), handleActionReturnValue(actionQueue, node, prevTransition);
        } catch (error$38) {
          onActionError(actionQueue, node, error$38);
        }
    }
    function handleActionReturnValue(actionQueue, node, returnValue) {
      null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then ? returnValue.then(
        function(nextState) {
          onActionSuccess(actionQueue, node, nextState);
        },
        function(error) {
          return onActionError(actionQueue, node, error);
        }
      ) : onActionSuccess(actionQueue, node, returnValue);
    }
    function onActionSuccess(actionQueue, actionNode, nextState) {
      actionNode.status = "fulfilled";
      actionNode.value = nextState;
      notifyActionListeners(actionNode);
      actionQueue.state = nextState;
      actionNode = actionQueue.pending;
      null !== actionNode && (nextState = actionNode.next, nextState === actionNode ? actionQueue.pending = null : (nextState = nextState.next, actionNode.next = nextState, runActionStateAction(actionQueue, nextState)));
    }
    function onActionError(actionQueue, actionNode, error) {
      var last = actionQueue.pending;
      actionQueue.pending = null;
      if (null !== last) {
        last = last.next;
        do
          actionNode.status = "rejected", actionNode.reason = error, notifyActionListeners(actionNode), actionNode = actionNode.next;
        while (actionNode !== last);
      }
      actionQueue.action = null;
    }
    function notifyActionListeners(actionNode) {
      actionNode = actionNode.listeners;
      for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
    }
    function actionStateReducer(oldState, newState) {
      return newState;
    }
    function mountActionState(action, initialStateProp) {
      if (isHydrating) {
        var ssrFormState = workInProgressRoot.formState;
        if (null !== ssrFormState) {
          a: {
            var JSCompiler_inline_result = currentlyRenderingFiber;
            if (isHydrating) {
              if (nextHydratableInstance) {
                b: {
                  var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
                  for (var inRootOrSingleton = rootOrSingletonContext; 8 !== JSCompiler_inline_result$jscomp$0.nodeType; ) {
                    if (!inRootOrSingleton) {
                      JSCompiler_inline_result$jscomp$0 = null;
                      break b;
                    }
                    JSCompiler_inline_result$jscomp$0 = getNextHydratable(
                      JSCompiler_inline_result$jscomp$0.nextSibling
                    );
                    if (null === JSCompiler_inline_result$jscomp$0) {
                      JSCompiler_inline_result$jscomp$0 = null;
                      break b;
                    }
                  }
                  inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
                  JSCompiler_inline_result$jscomp$0 = "F!" === inRootOrSingleton || "F" === inRootOrSingleton ? JSCompiler_inline_result$jscomp$0 : null;
                }
                if (JSCompiler_inline_result$jscomp$0) {
                  nextHydratableInstance = getNextHydratable(
                    JSCompiler_inline_result$jscomp$0.nextSibling
                  );
                  JSCompiler_inline_result = "F!" === JSCompiler_inline_result$jscomp$0.data;
                  break a;
                }
              }
              throwOnHydrationMismatch(JSCompiler_inline_result);
            }
            JSCompiler_inline_result = false;
          }
          JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
        }
      }
      ssrFormState = mountWorkInProgressHook();
      ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
      JSCompiler_inline_result = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: actionStateReducer,
        lastRenderedState: initialStateProp
      };
      ssrFormState.queue = JSCompiler_inline_result;
      ssrFormState = dispatchSetState.bind(
        null,
        currentlyRenderingFiber,
        JSCompiler_inline_result
      );
      JSCompiler_inline_result.dispatch = ssrFormState;
      JSCompiler_inline_result = mountStateImpl(false);
      inRootOrSingleton = dispatchOptimisticSetState.bind(
        null,
        currentlyRenderingFiber,
        false,
        JSCompiler_inline_result.queue
      );
      JSCompiler_inline_result = mountWorkInProgressHook();
      JSCompiler_inline_result$jscomp$0 = {
        state: initialStateProp,
        dispatch: null,
        action,
        pending: null
      };
      JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
      ssrFormState = dispatchActionState.bind(
        null,
        currentlyRenderingFiber,
        JSCompiler_inline_result$jscomp$0,
        inRootOrSingleton,
        ssrFormState
      );
      JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
      JSCompiler_inline_result.memoizedState = action;
      return [initialStateProp, ssrFormState, false];
    }
    function updateActionState(action) {
      var stateHook = updateWorkInProgressHook();
      return updateActionStateImpl(stateHook, currentHook, action);
    }
    function updateActionStateImpl(stateHook, currentStateHook, action) {
      currentStateHook = updateReducerImpl(
        stateHook,
        currentStateHook,
        actionStateReducer
      )[0];
      stateHook = updateReducer(basicStateReducer)[0];
      if ("object" === typeof currentStateHook && null !== currentStateHook && "function" === typeof currentStateHook.then)
        try {
          var state = useThenable(currentStateHook);
        } catch (x) {
          if (x === SuspenseException) throw SuspenseActionException;
          throw x;
        }
      else state = currentStateHook;
      currentStateHook = updateWorkInProgressHook();
      var actionQueue = currentStateHook.queue, dispatch = actionQueue.dispatch;
      action !== currentStateHook.memoizedState && (currentlyRenderingFiber.flags |= 2048, pushSimpleEffect(
        9,
        createEffectInstance(),
        actionStateActionEffect.bind(null, actionQueue, action),
        null
      ));
      return [state, dispatch, stateHook];
    }
    function actionStateActionEffect(actionQueue, action) {
      actionQueue.action = action;
    }
    function rerenderActionState(action) {
      var stateHook = updateWorkInProgressHook(), currentStateHook = currentHook;
      if (null !== currentStateHook)
        return updateActionStateImpl(stateHook, currentStateHook, action);
      updateWorkInProgressHook();
      stateHook = stateHook.memoizedState;
      currentStateHook = updateWorkInProgressHook();
      var dispatch = currentStateHook.queue.dispatch;
      currentStateHook.memoizedState = action;
      return [stateHook, dispatch, false];
    }
    function pushSimpleEffect(tag, inst, create, createDeps) {
      tag = { tag, create, deps: createDeps, inst, next: null };
      inst = currentlyRenderingFiber.updateQueue;
      null === inst && (inst = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = inst);
      create = inst.lastEffect;
      null === create ? inst.lastEffect = tag.next = tag : (createDeps = create.next, create.next = tag, tag.next = createDeps, inst.lastEffect = tag);
      return tag;
    }
    function createEffectInstance() {
      return { destroy: void 0, resource: void 0 };
    }
    function updateRef() {
      return updateWorkInProgressHook().memoizedState;
    }
    function mountEffectImpl(fiberFlags, hookFlags, create, createDeps) {
      var hook = mountWorkInProgressHook();
      createDeps = void 0 === createDeps ? null : createDeps;
      currentlyRenderingFiber.flags |= fiberFlags;
      hook.memoizedState = pushSimpleEffect(
        1 | hookFlags,
        createEffectInstance(),
        create,
        createDeps
      );
    }
    function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
      var hook = updateWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      var inst = hook.memoizedState.inst;
      null !== currentHook && null !== deps && areHookInputsEqual(deps, currentHook.memoizedState.deps) ? hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, deps) : (currentlyRenderingFiber.flags |= fiberFlags, hook.memoizedState = pushSimpleEffect(
        1 | hookFlags,
        inst,
        create,
        deps
      ));
    }
    function mountEffect(create, createDeps) {
      mountEffectImpl(8390656, 8, create, createDeps);
    }
    function updateEffect(create, createDeps) {
      updateEffectImpl(2048, 8, create, createDeps);
    }
    function updateInsertionEffect(create, deps) {
      return updateEffectImpl(4, 2, create, deps);
    }
    function updateLayoutEffect(create, deps) {
      return updateEffectImpl(4, 4, create, deps);
    }
    function imperativeHandleEffect(create, ref) {
      if ("function" === typeof ref) {
        create = create();
        var refCleanup = ref(create);
        return function() {
          "function" === typeof refCleanup ? refCleanup() : ref(null);
        };
      }
      if (null !== ref && void 0 !== ref)
        return create = create(), ref.current = create, function() {
          ref.current = null;
        };
    }
    function updateImperativeHandle(ref, create, deps) {
      deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
      updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
    }
    function mountDebugValue() {
    }
    function updateCallback(callback, deps) {
      var hook = updateWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      var prevState = hook.memoizedState;
      if (null !== deps && areHookInputsEqual(deps, prevState[1]))
        return prevState[0];
      hook.memoizedState = [callback, deps];
      return callback;
    }
    function updateMemo(nextCreate, deps) {
      var hook = updateWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      var prevState = hook.memoizedState;
      if (null !== deps && areHookInputsEqual(deps, prevState[1]))
        return prevState[0];
      prevState = nextCreate();
      if (shouldDoubleInvokeUserFnsInHooksDEV) {
        setIsStrictModeForDevtools(true);
        try {
          nextCreate();
        } finally {
          setIsStrictModeForDevtools(false);
        }
      }
      hook.memoizedState = [prevState, deps];
      return prevState;
    }
    function mountDeferredValueImpl(hook, value, initialValue) {
      if (void 0 === initialValue || 0 !== (renderLanes & 1073741824))
        return hook.memoizedState = value;
      hook.memoizedState = initialValue;
      hook = requestDeferredLane();
      currentlyRenderingFiber.lanes |= hook;
      workInProgressRootSkippedLanes |= hook;
      return initialValue;
    }
    function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
      if (objectIs(value, prevValue)) return value;
      if (null !== currentTreeHiddenStackCursor.current)
        return hook = mountDeferredValueImpl(hook, value, initialValue), objectIs(hook, prevValue) || (didReceiveUpdate = true), hook;
      if (0 === (renderLanes & 42))
        return didReceiveUpdate = true, hook.memoizedState = value;
      hook = requestDeferredLane();
      currentlyRenderingFiber.lanes |= hook;
      workInProgressRootSkippedLanes |= hook;
      return prevValue;
    }
    function startTransition(fiber, queue, pendingState, finishedState, callback) {
      var previousPriority = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      dispatchOptimisticSetState(fiber, false, queue, pendingState);
      try {
        var returnValue = callback(), onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
        if (null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then) {
          var thenableForFinishedState = chainThenableValue(
            returnValue,
            finishedState
          );
          dispatchSetStateInternal(
            fiber,
            queue,
            thenableForFinishedState,
            requestUpdateLane(fiber)
          );
        } else
          dispatchSetStateInternal(
            fiber,
            queue,
            finishedState,
            requestUpdateLane(fiber)
          );
      } catch (error) {
        dispatchSetStateInternal(
          fiber,
          queue,
          { then: function() {
          }, status: "rejected", reason: error },
          requestUpdateLane()
        );
      } finally {
        ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
      }
    }
    function noop$2() {
    }
    function startHostTransition(formFiber, pendingState, action, formData) {
      if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
      var queue = ensureFormComponentIsStateful(formFiber).queue;
      startTransition(
        formFiber,
        queue,
        pendingState,
        sharedNotPendingObject,
        null === action ? noop$2 : function() {
          requestFormReset$1(formFiber);
          return action(formData);
        }
      );
    }
    function ensureFormComponentIsStateful(formFiber) {
      var existingStateHook = formFiber.memoizedState;
      if (null !== existingStateHook) return existingStateHook;
      existingStateHook = {
        memoizedState: sharedNotPendingObject,
        baseState: sharedNotPendingObject,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: basicStateReducer,
          lastRenderedState: sharedNotPendingObject
        },
        next: null
      };
      var initialResetState = {};
      existingStateHook.next = {
        memoizedState: initialResetState,
        baseState: initialResetState,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: basicStateReducer,
          lastRenderedState: initialResetState
        },
        next: null
      };
      formFiber.memoizedState = existingStateHook;
      formFiber = formFiber.alternate;
      null !== formFiber && (formFiber.memoizedState = existingStateHook);
      return existingStateHook;
    }
    function requestFormReset$1(formFiber) {
      var resetStateQueue = ensureFormComponentIsStateful(formFiber).next.queue;
      dispatchSetStateInternal(formFiber, resetStateQueue, {}, requestUpdateLane());
    }
    function useHostTransitionStatus() {
      return readContext(HostTransitionContext);
    }
    function updateId() {
      return updateWorkInProgressHook().memoizedState;
    }
    function updateRefresh() {
      return updateWorkInProgressHook().memoizedState;
    }
    function refreshCache(fiber) {
      for (var provider = fiber.return; null !== provider; ) {
        switch (provider.tag) {
          case 24:
          case 3:
            var lane = requestUpdateLane();
            fiber = createUpdate(lane);
            var root$41 = enqueueUpdate(provider, fiber, lane);
            null !== root$41 && (scheduleUpdateOnFiber(root$41, provider, lane), entangleTransitions(root$41, provider, lane));
            provider = { cache: createCache() };
            fiber.payload = provider;
            return;
        }
        provider = provider.return;
      }
    }
    function dispatchReducerAction(fiber, queue, action) {
      var lane = requestUpdateLane();
      action = {
        lane,
        revertLane: 0,
        action,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      isRenderPhaseUpdate(fiber) ? enqueueRenderPhaseUpdate(queue, action) : (action = enqueueConcurrentHookUpdate(fiber, queue, action, lane), null !== action && (scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane)));
    }
    function dispatchSetState(fiber, queue, action) {
      var lane = requestUpdateLane();
      dispatchSetStateInternal(fiber, queue, action, lane);
    }
    function dispatchSetStateInternal(fiber, queue, action, lane) {
      var update = {
        lane,
        revertLane: 0,
        action,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
      else {
        var alternate = fiber.alternate;
        if (0 === fiber.lanes && (null === alternate || 0 === alternate.lanes) && (alternate = queue.lastRenderedReducer, null !== alternate))
          try {
            var currentState = queue.lastRenderedState, eagerState = alternate(currentState, action);
            update.hasEagerState = true;
            update.eagerState = eagerState;
            if (objectIs(eagerState, currentState))
              return enqueueUpdate$1(fiber, queue, update, 0), null === workInProgressRoot && finishQueueingConcurrentUpdates(), false;
          } catch (error) {
          } finally {
          }
        action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
        if (null !== action)
          return scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane), true;
      }
      return false;
    }
    function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
      action = {
        lane: 2,
        revertLane: requestTransitionLane(),
        action,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (isRenderPhaseUpdate(fiber)) {
        if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
      } else
        throwIfDuringRender = enqueueConcurrentHookUpdate(
          fiber,
          queue,
          action,
          2
        ), null !== throwIfDuringRender && scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
    }
    function isRenderPhaseUpdate(fiber) {
      var alternate = fiber.alternate;
      return fiber === currentlyRenderingFiber || null !== alternate && alternate === currentlyRenderingFiber;
    }
    function enqueueRenderPhaseUpdate(queue, update) {
      didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
      var pending = queue.pending;
      null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
      queue.pending = update;
    }
    function entangleTransitionUpdate(root2, queue, lane) {
      if (0 !== (lane & 4194048)) {
        var queueLanes = queue.lanes;
        queueLanes &= root2.pendingLanes;
        lane |= queueLanes;
        queue.lanes = lane;
        markRootEntangled(root2, lane);
      }
    }
    var ContextOnlyDispatcher = {
      readContext,
      use,
      useCallback: throwInvalidHookError,
      useContext: throwInvalidHookError,
      useEffect: throwInvalidHookError,
      useImperativeHandle: throwInvalidHookError,
      useLayoutEffect: throwInvalidHookError,
      useInsertionEffect: throwInvalidHookError,
      useMemo: throwInvalidHookError,
      useReducer: throwInvalidHookError,
      useRef: throwInvalidHookError,
      useState: throwInvalidHookError,
      useDebugValue: throwInvalidHookError,
      useDeferredValue: throwInvalidHookError,
      useTransition: throwInvalidHookError,
      useSyncExternalStore: throwInvalidHookError,
      useId: throwInvalidHookError,
      useHostTransitionStatus: throwInvalidHookError,
      useFormState: throwInvalidHookError,
      useActionState: throwInvalidHookError,
      useOptimistic: throwInvalidHookError,
      useMemoCache: throwInvalidHookError,
      useCacheRefresh: throwInvalidHookError
    }, HooksDispatcherOnMount = {
      readContext,
      use,
      useCallback: function(callback, deps) {
        mountWorkInProgressHook().memoizedState = [
          callback,
          void 0 === deps ? null : deps
        ];
        return callback;
      },
      useContext: readContext,
      useEffect: mountEffect,
      useImperativeHandle: function(ref, create, deps) {
        deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
        mountEffectImpl(
          4194308,
          4,
          imperativeHandleEffect.bind(null, create, ref),
          deps
        );
      },
      useLayoutEffect: function(create, deps) {
        return mountEffectImpl(4194308, 4, create, deps);
      },
      useInsertionEffect: function(create, deps) {
        mountEffectImpl(4, 2, create, deps);
      },
      useMemo: function(nextCreate, deps) {
        var hook = mountWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        var nextValue = nextCreate();
        if (shouldDoubleInvokeUserFnsInHooksDEV) {
          setIsStrictModeForDevtools(true);
          try {
            nextCreate();
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
        hook.memoizedState = [nextValue, deps];
        return nextValue;
      },
      useReducer: function(reducer, initialArg, init) {
        var hook = mountWorkInProgressHook();
        if (void 0 !== init) {
          var initialState = init(initialArg);
          if (shouldDoubleInvokeUserFnsInHooksDEV) {
            setIsStrictModeForDevtools(true);
            try {
              init(initialArg);
            } finally {
              setIsStrictModeForDevtools(false);
            }
          }
        } else initialState = initialArg;
        hook.memoizedState = hook.baseState = initialState;
        reducer = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: reducer,
          lastRenderedState: initialState
        };
        hook.queue = reducer;
        reducer = reducer.dispatch = dispatchReducerAction.bind(
          null,
          currentlyRenderingFiber,
          reducer
        );
        return [hook.memoizedState, reducer];
      },
      useRef: function(initialValue) {
        var hook = mountWorkInProgressHook();
        initialValue = { current: initialValue };
        return hook.memoizedState = initialValue;
      },
      useState: function(initialState) {
        initialState = mountStateImpl(initialState);
        var queue = initialState.queue, dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
        queue.dispatch = dispatch;
        return [initialState.memoizedState, dispatch];
      },
      useDebugValue: mountDebugValue,
      useDeferredValue: function(value, initialValue) {
        var hook = mountWorkInProgressHook();
        return mountDeferredValueImpl(hook, value, initialValue);
      },
      useTransition: function() {
        var stateHook = mountStateImpl(false);
        stateHook = startTransition.bind(
          null,
          currentlyRenderingFiber,
          stateHook.queue,
          true,
          false
        );
        mountWorkInProgressHook().memoizedState = stateHook;
        return [false, stateHook];
      },
      useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
        var fiber = currentlyRenderingFiber, hook = mountWorkInProgressHook();
        if (isHydrating) {
          if (void 0 === getServerSnapshot)
            throw Error(formatProdErrorMessage(407));
          getServerSnapshot = getServerSnapshot();
        } else {
          getServerSnapshot = getSnapshot();
          if (null === workInProgressRoot)
            throw Error(formatProdErrorMessage(349));
          0 !== (workInProgressRootRenderLanes & 124) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
        }
        hook.memoizedState = getServerSnapshot;
        var inst = { value: getServerSnapshot, getSnapshot };
        hook.queue = inst;
        mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [
          subscribe
        ]);
        fiber.flags |= 2048;
        pushSimpleEffect(
          9,
          createEffectInstance(),
          updateStoreInstance.bind(
            null,
            fiber,
            inst,
            getServerSnapshot,
            getSnapshot
          ),
          null
        );
        return getServerSnapshot;
      },
      useId: function() {
        var hook = mountWorkInProgressHook(), identifierPrefix = workInProgressRoot.identifierPrefix;
        if (isHydrating) {
          var JSCompiler_inline_result = treeContextOverflow;
          var idWithLeadingBit = treeContextId;
          JSCompiler_inline_result = (idWithLeadingBit & ~(1 << 32 - clz32(idWithLeadingBit) - 1)).toString(32) + JSCompiler_inline_result;
          identifierPrefix = "«" + identifierPrefix + "R" + JSCompiler_inline_result;
          JSCompiler_inline_result = localIdCounter++;
          0 < JSCompiler_inline_result && (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
          identifierPrefix += "»";
        } else
          JSCompiler_inline_result = globalClientIdCounter++, identifierPrefix = "«" + identifierPrefix + "r" + JSCompiler_inline_result.toString(32) + "»";
        return hook.memoizedState = identifierPrefix;
      },
      useHostTransitionStatus,
      useFormState: mountActionState,
      useActionState: mountActionState,
      useOptimistic: function(passthrough) {
        var hook = mountWorkInProgressHook();
        hook.memoizedState = hook.baseState = passthrough;
        var queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        hook.queue = queue;
        hook = dispatchOptimisticSetState.bind(
          null,
          currentlyRenderingFiber,
          true,
          queue
        );
        queue.dispatch = hook;
        return [passthrough, hook];
      },
      useMemoCache,
      useCacheRefresh: function() {
        return mountWorkInProgressHook().memoizedState = refreshCache.bind(
          null,
          currentlyRenderingFiber
        );
      }
    }, HooksDispatcherOnUpdate = {
      readContext,
      use,
      useCallback: updateCallback,
      useContext: readContext,
      useEffect: updateEffect,
      useImperativeHandle: updateImperativeHandle,
      useInsertionEffect: updateInsertionEffect,
      useLayoutEffect: updateLayoutEffect,
      useMemo: updateMemo,
      useReducer: updateReducer,
      useRef: updateRef,
      useState: function() {
        return updateReducer(basicStateReducer);
      },
      useDebugValue: mountDebugValue,
      useDeferredValue: function(value, initialValue) {
        var hook = updateWorkInProgressHook();
        return updateDeferredValueImpl(
          hook,
          currentHook.memoizedState,
          value,
          initialValue
        );
      },
      useTransition: function() {
        var booleanOrThenable = updateReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
        return [
          "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
          start
        ];
      },
      useSyncExternalStore: updateSyncExternalStore,
      useId: updateId,
      useHostTransitionStatus,
      useFormState: updateActionState,
      useActionState: updateActionState,
      useOptimistic: function(passthrough, reducer) {
        var hook = updateWorkInProgressHook();
        return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
      },
      useMemoCache,
      useCacheRefresh: updateRefresh
    }, HooksDispatcherOnRerender = {
      readContext,
      use,
      useCallback: updateCallback,
      useContext: readContext,
      useEffect: updateEffect,
      useImperativeHandle: updateImperativeHandle,
      useInsertionEffect: updateInsertionEffect,
      useLayoutEffect: updateLayoutEffect,
      useMemo: updateMemo,
      useReducer: rerenderReducer,
      useRef: updateRef,
      useState: function() {
        return rerenderReducer(basicStateReducer);
      },
      useDebugValue: mountDebugValue,
      useDeferredValue: function(value, initialValue) {
        var hook = updateWorkInProgressHook();
        return null === currentHook ? mountDeferredValueImpl(hook, value, initialValue) : updateDeferredValueImpl(
          hook,
          currentHook.memoizedState,
          value,
          initialValue
        );
      },
      useTransition: function() {
        var booleanOrThenable = rerenderReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
        return [
          "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
          start
        ];
      },
      useSyncExternalStore: updateSyncExternalStore,
      useId: updateId,
      useHostTransitionStatus,
      useFormState: rerenderActionState,
      useActionState: rerenderActionState,
      useOptimistic: function(passthrough, reducer) {
        var hook = updateWorkInProgressHook();
        if (null !== currentHook)
          return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
        hook.baseState = passthrough;
        return [passthrough, hook.queue.dispatch];
      },
      useMemoCache,
      useCacheRefresh: updateRefresh
    }, thenableState = null, thenableIndexCounter = 0;
    function unwrapThenable(thenable) {
      var index3 = thenableIndexCounter;
      thenableIndexCounter += 1;
      null === thenableState && (thenableState = []);
      return trackUsedThenable(thenableState, thenable, index3);
    }
    function coerceRef(workInProgress2, element) {
      element = element.props.ref;
      workInProgress2.ref = void 0 !== element ? element : null;
    }
    function throwOnInvalidObjectType(returnFiber, newChild) {
      if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
        throw Error(formatProdErrorMessage(525));
      returnFiber = Object.prototype.toString.call(newChild);
      throw Error(
        formatProdErrorMessage(
          31,
          "[object Object]" === returnFiber ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : returnFiber
        )
      );
    }
    function resolveLazy(lazyType) {
      var init = lazyType._init;
      return init(lazyType._payload);
    }
    function createChildReconciler(shouldTrackSideEffects) {
      function deleteChild(returnFiber, childToDelete) {
        if (shouldTrackSideEffects) {
          var deletions = returnFiber.deletions;
          null === deletions ? (returnFiber.deletions = [childToDelete], returnFiber.flags |= 16) : deletions.push(childToDelete);
        }
      }
      function deleteRemainingChildren(returnFiber, currentFirstChild) {
        if (!shouldTrackSideEffects) return null;
        for (; null !== currentFirstChild; )
          deleteChild(returnFiber, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
        return null;
      }
      function mapRemainingChildren(currentFirstChild) {
        for (var existingChildren = /* @__PURE__ */ new Map(); null !== currentFirstChild; )
          null !== currentFirstChild.key ? existingChildren.set(currentFirstChild.key, currentFirstChild) : existingChildren.set(currentFirstChild.index, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
        return existingChildren;
      }
      function useFiber(fiber, pendingProps) {
        fiber = createWorkInProgress(fiber, pendingProps);
        fiber.index = 0;
        fiber.sibling = null;
        return fiber;
      }
      function placeChild(newFiber, lastPlacedIndex, newIndex) {
        newFiber.index = newIndex;
        if (!shouldTrackSideEffects)
          return newFiber.flags |= 1048576, lastPlacedIndex;
        newIndex = newFiber.alternate;
        if (null !== newIndex)
          return newIndex = newIndex.index, newIndex < lastPlacedIndex ? (newFiber.flags |= 67108866, lastPlacedIndex) : newIndex;
        newFiber.flags |= 67108866;
        return lastPlacedIndex;
      }
      function placeSingleChild(newFiber) {
        shouldTrackSideEffects && null === newFiber.alternate && (newFiber.flags |= 67108866);
        return newFiber;
      }
      function updateTextNode(returnFiber, current, textContent, lanes) {
        if (null === current || 6 !== current.tag)
          return current = createFiberFromText(textContent, returnFiber.mode, lanes), current.return = returnFiber, current;
        current = useFiber(current, textContent);
        current.return = returnFiber;
        return current;
      }
      function updateElement(returnFiber, current, element, lanes) {
        var elementType = element.type;
        if (elementType === REACT_FRAGMENT_TYPE)
          return updateFragment(
            returnFiber,
            current,
            element.props.children,
            lanes,
            element.key
          );
        if (null !== current && (current.elementType === elementType || "object" === typeof elementType && null !== elementType && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === current.type))
          return current = useFiber(current, element.props), coerceRef(current, element), current.return = returnFiber, current;
        current = createFiberFromTypeAndProps(
          element.type,
          element.key,
          element.props,
          null,
          returnFiber.mode,
          lanes
        );
        coerceRef(current, element);
        current.return = returnFiber;
        return current;
      }
      function updatePortal(returnFiber, current, portal, lanes) {
        if (null === current || 4 !== current.tag || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation)
          return current = createFiberFromPortal(portal, returnFiber.mode, lanes), current.return = returnFiber, current;
        current = useFiber(current, portal.children || []);
        current.return = returnFiber;
        return current;
      }
      function updateFragment(returnFiber, current, fragment, lanes, key) {
        if (null === current || 7 !== current.tag)
          return current = createFiberFromFragment(
            fragment,
            returnFiber.mode,
            lanes,
            key
          ), current.return = returnFiber, current;
        current = useFiber(current, fragment);
        current.return = returnFiber;
        return current;
      }
      function createChild(returnFiber, newChild, lanes) {
        if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
          return newChild = createFiberFromText(
            "" + newChild,
            returnFiber.mode,
            lanes
          ), newChild.return = returnFiber, newChild;
        if ("object" === typeof newChild && null !== newChild) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              return lanes = createFiberFromTypeAndProps(
                newChild.type,
                newChild.key,
                newChild.props,
                null,
                returnFiber.mode,
                lanes
              ), coerceRef(lanes, newChild), lanes.return = returnFiber, lanes;
            case REACT_PORTAL_TYPE:
              return newChild = createFiberFromPortal(
                newChild,
                returnFiber.mode,
                lanes
              ), newChild.return = returnFiber, newChild;
            case REACT_LAZY_TYPE:
              var init = newChild._init;
              newChild = init(newChild._payload);
              return createChild(returnFiber, newChild, lanes);
          }
          if (isArrayImpl(newChild) || getIteratorFn(newChild))
            return newChild = createFiberFromFragment(
              newChild,
              returnFiber.mode,
              lanes,
              null
            ), newChild.return = returnFiber, newChild;
          if ("function" === typeof newChild.then)
            return createChild(returnFiber, unwrapThenable(newChild), lanes);
          if (newChild.$$typeof === REACT_CONTEXT_TYPE)
            return createChild(
              returnFiber,
              readContextDuringReconciliation(returnFiber, newChild),
              lanes
            );
          throwOnInvalidObjectType(returnFiber, newChild);
        }
        return null;
      }
      function updateSlot(returnFiber, oldFiber, newChild, lanes) {
        var key = null !== oldFiber ? oldFiber.key : null;
        if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
          return null !== key ? null : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
        if ("object" === typeof newChild && null !== newChild) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              return newChild.key === key ? updateElement(returnFiber, oldFiber, newChild, lanes) : null;
            case REACT_PORTAL_TYPE:
              return newChild.key === key ? updatePortal(returnFiber, oldFiber, newChild, lanes) : null;
            case REACT_LAZY_TYPE:
              return key = newChild._init, newChild = key(newChild._payload), updateSlot(returnFiber, oldFiber, newChild, lanes);
          }
          if (isArrayImpl(newChild) || getIteratorFn(newChild))
            return null !== key ? null : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
          if ("function" === typeof newChild.then)
            return updateSlot(
              returnFiber,
              oldFiber,
              unwrapThenable(newChild),
              lanes
            );
          if (newChild.$$typeof === REACT_CONTEXT_TYPE)
            return updateSlot(
              returnFiber,
              oldFiber,
              readContextDuringReconciliation(returnFiber, newChild),
              lanes
            );
          throwOnInvalidObjectType(returnFiber, newChild);
        }
        return null;
      }
      function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
        if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
          return existingChildren = existingChildren.get(newIdx) || null, updateTextNode(returnFiber, existingChildren, "" + newChild, lanes);
        if ("object" === typeof newChild && null !== newChild) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              return existingChildren = existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null, updateElement(returnFiber, existingChildren, newChild, lanes);
            case REACT_PORTAL_TYPE:
              return existingChildren = existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null, updatePortal(returnFiber, existingChildren, newChild, lanes);
            case REACT_LAZY_TYPE:
              var init = newChild._init;
              newChild = init(newChild._payload);
              return updateFromMap(
                existingChildren,
                returnFiber,
                newIdx,
                newChild,
                lanes
              );
          }
          if (isArrayImpl(newChild) || getIteratorFn(newChild))
            return existingChildren = existingChildren.get(newIdx) || null, updateFragment(returnFiber, existingChildren, newChild, lanes, null);
          if ("function" === typeof newChild.then)
            return updateFromMap(
              existingChildren,
              returnFiber,
              newIdx,
              unwrapThenable(newChild),
              lanes
            );
          if (newChild.$$typeof === REACT_CONTEXT_TYPE)
            return updateFromMap(
              existingChildren,
              returnFiber,
              newIdx,
              readContextDuringReconciliation(returnFiber, newChild),
              lanes
            );
          throwOnInvalidObjectType(returnFiber, newChild);
        }
        return null;
      }
      function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
        for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null; null !== oldFiber && newIdx < newChildren.length; newIdx++) {
          oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
          var newFiber = updateSlot(
            returnFiber,
            oldFiber,
            newChildren[newIdx],
            lanes
          );
          if (null === newFiber) {
            null === oldFiber && (oldFiber = nextOldFiber);
            break;
          }
          shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
          currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
          null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
          previousNewFiber = newFiber;
          oldFiber = nextOldFiber;
        }
        if (newIdx === newChildren.length)
          return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
        if (null === oldFiber) {
          for (; newIdx < newChildren.length; newIdx++)
            oldFiber = createChild(returnFiber, newChildren[newIdx], lanes), null !== oldFiber && (currentFirstChild = placeChild(
              oldFiber,
              currentFirstChild,
              newIdx
            ), null === previousNewFiber ? resultingFirstChild = oldFiber : previousNewFiber.sibling = oldFiber, previousNewFiber = oldFiber);
          isHydrating && pushTreeFork(returnFiber, newIdx);
          return resultingFirstChild;
        }
        for (oldFiber = mapRemainingChildren(oldFiber); newIdx < newChildren.length; newIdx++)
          nextOldFiber = updateFromMap(
            oldFiber,
            returnFiber,
            newIdx,
            newChildren[newIdx],
            lanes
          ), null !== nextOldFiber && (shouldTrackSideEffects && null !== nextOldFiber.alternate && oldFiber.delete(
            null === nextOldFiber.key ? newIdx : nextOldFiber.key
          ), currentFirstChild = placeChild(
            nextOldFiber,
            currentFirstChild,
            newIdx
          ), null === previousNewFiber ? resultingFirstChild = nextOldFiber : previousNewFiber.sibling = nextOldFiber, previousNewFiber = nextOldFiber);
        shouldTrackSideEffects && oldFiber.forEach(function(child) {
          return deleteChild(returnFiber, child);
        });
        isHydrating && pushTreeFork(returnFiber, newIdx);
        return resultingFirstChild;
      }
      function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildren, lanes) {
        if (null == newChildren) throw Error(formatProdErrorMessage(151));
        for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null, step = newChildren.next(); null !== oldFiber && !step.done; newIdx++, step = newChildren.next()) {
          oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
          var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
          if (null === newFiber) {
            null === oldFiber && (oldFiber = nextOldFiber);
            break;
          }
          shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
          currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
          null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
          previousNewFiber = newFiber;
          oldFiber = nextOldFiber;
        }
        if (step.done)
          return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
        if (null === oldFiber) {
          for (; !step.done; newIdx++, step = newChildren.next())
            step = createChild(returnFiber, step.value, lanes), null !== step && (currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
          isHydrating && pushTreeFork(returnFiber, newIdx);
          return resultingFirstChild;
        }
        for (oldFiber = mapRemainingChildren(oldFiber); !step.done; newIdx++, step = newChildren.next())
          step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes), null !== step && (shouldTrackSideEffects && null !== step.alternate && oldFiber.delete(null === step.key ? newIdx : step.key), currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
        shouldTrackSideEffects && oldFiber.forEach(function(child) {
          return deleteChild(returnFiber, child);
        });
        isHydrating && pushTreeFork(returnFiber, newIdx);
        return resultingFirstChild;
      }
      function reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes) {
        "object" === typeof newChild && null !== newChild && newChild.type === REACT_FRAGMENT_TYPE && null === newChild.key && (newChild = newChild.props.children);
        if ("object" === typeof newChild && null !== newChild) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              a: {
                for (var key = newChild.key; null !== currentFirstChild; ) {
                  if (currentFirstChild.key === key) {
                    key = newChild.type;
                    if (key === REACT_FRAGMENT_TYPE) {
                      if (7 === currentFirstChild.tag) {
                        deleteRemainingChildren(
                          returnFiber,
                          currentFirstChild.sibling
                        );
                        lanes = useFiber(
                          currentFirstChild,
                          newChild.props.children
                        );
                        lanes.return = returnFiber;
                        returnFiber = lanes;
                        break a;
                      }
                    } else if (currentFirstChild.elementType === key || "object" === typeof key && null !== key && key.$$typeof === REACT_LAZY_TYPE && resolveLazy(key) === currentFirstChild.type) {
                      deleteRemainingChildren(
                        returnFiber,
                        currentFirstChild.sibling
                      );
                      lanes = useFiber(currentFirstChild, newChild.props);
                      coerceRef(lanes, newChild);
                      lanes.return = returnFiber;
                      returnFiber = lanes;
                      break a;
                    }
                    deleteRemainingChildren(returnFiber, currentFirstChild);
                    break;
                  } else deleteChild(returnFiber, currentFirstChild);
                  currentFirstChild = currentFirstChild.sibling;
                }
                newChild.type === REACT_FRAGMENT_TYPE ? (lanes = createFiberFromFragment(
                  newChild.props.children,
                  returnFiber.mode,
                  lanes,
                  newChild.key
                ), lanes.return = returnFiber, returnFiber = lanes) : (lanes = createFiberFromTypeAndProps(
                  newChild.type,
                  newChild.key,
                  newChild.props,
                  null,
                  returnFiber.mode,
                  lanes
                ), coerceRef(lanes, newChild), lanes.return = returnFiber, returnFiber = lanes);
              }
              return placeSingleChild(returnFiber);
            case REACT_PORTAL_TYPE:
              a: {
                for (key = newChild.key; null !== currentFirstChild; ) {
                  if (currentFirstChild.key === key)
                    if (4 === currentFirstChild.tag && currentFirstChild.stateNode.containerInfo === newChild.containerInfo && currentFirstChild.stateNode.implementation === newChild.implementation) {
                      deleteRemainingChildren(
                        returnFiber,
                        currentFirstChild.sibling
                      );
                      lanes = useFiber(currentFirstChild, newChild.children || []);
                      lanes.return = returnFiber;
                      returnFiber = lanes;
                      break a;
                    } else {
                      deleteRemainingChildren(returnFiber, currentFirstChild);
                      break;
                    }
                  else deleteChild(returnFiber, currentFirstChild);
                  currentFirstChild = currentFirstChild.sibling;
                }
                lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
                lanes.return = returnFiber;
                returnFiber = lanes;
              }
              return placeSingleChild(returnFiber);
            case REACT_LAZY_TYPE:
              return key = newChild._init, newChild = key(newChild._payload), reconcileChildFibersImpl(
                returnFiber,
                currentFirstChild,
                newChild,
                lanes
              );
          }
          if (isArrayImpl(newChild))
            return reconcileChildrenArray(
              returnFiber,
              currentFirstChild,
              newChild,
              lanes
            );
          if (getIteratorFn(newChild)) {
            key = getIteratorFn(newChild);
            if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
            newChild = key.call(newChild);
            return reconcileChildrenIterator(
              returnFiber,
              currentFirstChild,
              newChild,
              lanes
            );
          }
          if ("function" === typeof newChild.then)
            return reconcileChildFibersImpl(
              returnFiber,
              currentFirstChild,
              unwrapThenable(newChild),
              lanes
            );
          if (newChild.$$typeof === REACT_CONTEXT_TYPE)
            return reconcileChildFibersImpl(
              returnFiber,
              currentFirstChild,
              readContextDuringReconciliation(returnFiber, newChild),
              lanes
            );
          throwOnInvalidObjectType(returnFiber, newChild);
        }
        return "string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild ? (newChild = "" + newChild, null !== currentFirstChild && 6 === currentFirstChild.tag ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling), lanes = useFiber(currentFirstChild, newChild), lanes.return = returnFiber, returnFiber = lanes) : (deleteRemainingChildren(returnFiber, currentFirstChild), lanes = createFiberFromText(newChild, returnFiber.mode, lanes), lanes.return = returnFiber, returnFiber = lanes), placeSingleChild(returnFiber)) : deleteRemainingChildren(returnFiber, currentFirstChild);
      }
      return function(returnFiber, currentFirstChild, newChild, lanes) {
        try {
          thenableIndexCounter = 0;
          var firstChildFiber = reconcileChildFibersImpl(
            returnFiber,
            currentFirstChild,
            newChild,
            lanes
          );
          thenableState = null;
          return firstChildFiber;
        } catch (x) {
          if (x === SuspenseException || x === SuspenseActionException) throw x;
          var fiber = createFiberImplClass(29, x, null, returnFiber.mode);
          fiber.lanes = lanes;
          fiber.return = returnFiber;
          return fiber;
        } finally {
        }
      };
    }
    var reconcileChildFibers = createChildReconciler(true), mountChildFibers = createChildReconciler(false), suspenseHandlerStackCursor = createCursor(null), shellBoundary = null;
    function pushPrimaryTreeSuspenseHandler(handler) {
      var current = handler.alternate;
      push(suspenseStackCursor, suspenseStackCursor.current & 1);
      push(suspenseHandlerStackCursor, handler);
      null === shellBoundary && (null === current || null !== currentTreeHiddenStackCursor.current ? shellBoundary = handler : null !== current.memoizedState && (shellBoundary = handler));
    }
    function pushOffscreenSuspenseHandler(fiber) {
      if (22 === fiber.tag) {
        if (push(suspenseStackCursor, suspenseStackCursor.current), push(suspenseHandlerStackCursor, fiber), null === shellBoundary) {
          var current = fiber.alternate;
          null !== current && null !== current.memoizedState && (shellBoundary = fiber);
        }
      } else reuseSuspenseHandlerOnStack();
    }
    function reuseSuspenseHandlerOnStack() {
      push(suspenseStackCursor, suspenseStackCursor.current);
      push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
    }
    function popSuspenseHandler(fiber) {
      pop(suspenseHandlerStackCursor);
      shellBoundary === fiber && (shellBoundary = null);
      pop(suspenseStackCursor);
    }
    var suspenseStackCursor = createCursor(0);
    function findFirstSuspended(row) {
      for (var node = row; null !== node; ) {
        if (13 === node.tag) {
          var state = node.memoizedState;
          if (null !== state && (state = state.dehydrated, null === state || "$?" === state.data || isSuspenseInstanceFallback(state)))
            return node;
        } else if (19 === node.tag && void 0 !== node.memoizedProps.revealOrder) {
          if (0 !== (node.flags & 128)) return node;
        } else if (null !== node.child) {
          node.child.return = node;
          node = node.child;
          continue;
        }
        if (node === row) break;
        for (; null === node.sibling; ) {
          if (null === node.return || node.return === row) return null;
          node = node.return;
        }
        node.sibling.return = node.return;
        node = node.sibling;
      }
      return null;
    }
    function applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, nextProps) {
      ctor = workInProgress2.memoizedState;
      getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
      getDerivedStateFromProps = null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps ? ctor : assign({}, ctor, getDerivedStateFromProps);
      workInProgress2.memoizedState = getDerivedStateFromProps;
      0 === workInProgress2.lanes && (workInProgress2.updateQueue.baseState = getDerivedStateFromProps);
    }
    var classComponentUpdater = {
      enqueueSetState: function(inst, payload, callback) {
        inst = inst._reactInternals;
        var lane = requestUpdateLane(), update = createUpdate(lane);
        update.payload = payload;
        void 0 !== callback && null !== callback && (update.callback = callback);
        payload = enqueueUpdate(inst, update, lane);
        null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
      },
      enqueueReplaceState: function(inst, payload, callback) {
        inst = inst._reactInternals;
        var lane = requestUpdateLane(), update = createUpdate(lane);
        update.tag = 1;
        update.payload = payload;
        void 0 !== callback && null !== callback && (update.callback = callback);
        payload = enqueueUpdate(inst, update, lane);
        null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
      },
      enqueueForceUpdate: function(inst, callback) {
        inst = inst._reactInternals;
        var lane = requestUpdateLane(), update = createUpdate(lane);
        update.tag = 2;
        void 0 !== callback && null !== callback && (update.callback = callback);
        callback = enqueueUpdate(inst, update, lane);
        null !== callback && (scheduleUpdateOnFiber(callback, inst, lane), entangleTransitions(callback, inst, lane));
      }
    };
    function checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext) {
      workInProgress2 = workInProgress2.stateNode;
      return "function" === typeof workInProgress2.shouldComponentUpdate ? workInProgress2.shouldComponentUpdate(newProps, newState, nextContext) : ctor.prototype && ctor.prototype.isPureReactComponent ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState) : true;
    }
    function callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext) {
      workInProgress2 = instance.state;
      "function" === typeof instance.componentWillReceiveProps && instance.componentWillReceiveProps(newProps, nextContext);
      "function" === typeof instance.UNSAFE_componentWillReceiveProps && instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
      instance.state !== workInProgress2 && classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
    }
    function resolveClassComponentProps(Component, baseProps) {
      var newProps = baseProps;
      if ("ref" in baseProps) {
        newProps = {};
        for (var propName in baseProps)
          "ref" !== propName && (newProps[propName] = baseProps[propName]);
      }
      if (Component = Component.defaultProps) {
        newProps === baseProps && (newProps = assign({}, newProps));
        for (var propName$73 in Component)
          void 0 === newProps[propName$73] && (newProps[propName$73] = Component[propName$73]);
      }
      return newProps;
    }
    var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
      if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event)) return;
      } else if ("object" === typeof process && "function" === typeof process.emit) {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    };
    function defaultOnUncaughtError(error) {
      reportGlobalError(error);
    }
    function defaultOnCaughtError(error) {
      console.error(error);
    }
    function defaultOnRecoverableError(error) {
      reportGlobalError(error);
    }
    function logUncaughtError(root2, errorInfo) {
      try {
        var onUncaughtError = root2.onUncaughtError;
        onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
      } catch (e$74) {
        setTimeout(function() {
          throw e$74;
        });
      }
    }
    function logCaughtError(root2, boundary, errorInfo) {
      try {
        var onCaughtError = root2.onCaughtError;
        onCaughtError(errorInfo.value, {
          componentStack: errorInfo.stack,
          errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
        });
      } catch (e$75) {
        setTimeout(function() {
          throw e$75;
        });
      }
    }
    function createRootErrorUpdate(root2, errorInfo, lane) {
      lane = createUpdate(lane);
      lane.tag = 3;
      lane.payload = { element: null };
      lane.callback = function() {
        logUncaughtError(root2, errorInfo);
      };
      return lane;
    }
    function createClassErrorUpdate(lane) {
      lane = createUpdate(lane);
      lane.tag = 3;
      return lane;
    }
    function initializeClassErrorUpdate(update, root2, fiber, errorInfo) {
      var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
      if ("function" === typeof getDerivedStateFromError) {
        var error = errorInfo.value;
        update.payload = function() {
          return getDerivedStateFromError(error);
        };
        update.callback = function() {
          logCaughtError(root2, fiber, errorInfo);
        };
      }
      var inst = fiber.stateNode;
      null !== inst && "function" === typeof inst.componentDidCatch && (update.callback = function() {
        logCaughtError(root2, fiber, errorInfo);
        "function" !== typeof getDerivedStateFromError && (null === legacyErrorBoundariesThatAlreadyFailed ? legacyErrorBoundariesThatAlreadyFailed = /* @__PURE__ */ new Set([this]) : legacyErrorBoundariesThatAlreadyFailed.add(this));
        var stack = errorInfo.stack;
        this.componentDidCatch(errorInfo.value, {
          componentStack: null !== stack ? stack : ""
        });
      });
    }
    function throwException(root2, returnFiber, sourceFiber, value, rootRenderLanes) {
      sourceFiber.flags |= 32768;
      if (null !== value && "object" === typeof value && "function" === typeof value.then) {
        returnFiber = sourceFiber.alternate;
        null !== returnFiber && propagateParentContextChanges(
          returnFiber,
          sourceFiber,
          rootRenderLanes,
          true
        );
        sourceFiber = suspenseHandlerStackCursor.current;
        if (null !== sourceFiber) {
          switch (sourceFiber.tag) {
            case 13:
              return null === shellBoundary ? renderDidSuspendDelayIfPossible() : null === sourceFiber.alternate && 0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 3), sourceFiber.flags &= -257, sourceFiber.flags |= 65536, sourceFiber.lanes = rootRenderLanes, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? sourceFiber.updateQueue = /* @__PURE__ */ new Set([value]) : returnFiber.add(value), attachPingListener(root2, value, rootRenderLanes)), false;
            case 22:
              return sourceFiber.flags |= 65536, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? (returnFiber = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([value])
              }, sourceFiber.updateQueue = returnFiber) : (sourceFiber = returnFiber.retryQueue, null === sourceFiber ? returnFiber.retryQueue = /* @__PURE__ */ new Set([value]) : sourceFiber.add(value)), attachPingListener(root2, value, rootRenderLanes)), false;
          }
          throw Error(formatProdErrorMessage(435, sourceFiber.tag));
        }
        attachPingListener(root2, value, rootRenderLanes);
        renderDidSuspendDelayIfPossible();
        return false;
      }
      if (isHydrating)
        return returnFiber = suspenseHandlerStackCursor.current, null !== returnFiber ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256), returnFiber.flags |= 65536, returnFiber.lanes = rootRenderLanes, value !== HydrationMismatchException && (root2 = Error(formatProdErrorMessage(422), { cause: value }), queueHydrationError(createCapturedValueAtFiber(root2, sourceFiber)))) : (value !== HydrationMismatchException && (returnFiber = Error(formatProdErrorMessage(423), {
          cause: value
        }), queueHydrationError(
          createCapturedValueAtFiber(returnFiber, sourceFiber)
        )), root2 = root2.current.alternate, root2.flags |= 65536, rootRenderLanes &= -rootRenderLanes, root2.lanes |= rootRenderLanes, value = createCapturedValueAtFiber(value, sourceFiber), rootRenderLanes = createRootErrorUpdate(
          root2.stateNode,
          value,
          rootRenderLanes
        ), enqueueCapturedUpdate(root2, rootRenderLanes), 4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2)), false;
      var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
      wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
      null === workInProgressRootConcurrentErrors ? workInProgressRootConcurrentErrors = [wrapperError] : workInProgressRootConcurrentErrors.push(wrapperError);
      4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
      if (null === returnFiber) return true;
      value = createCapturedValueAtFiber(value, sourceFiber);
      sourceFiber = returnFiber;
      do {
        switch (sourceFiber.tag) {
          case 3:
            return sourceFiber.flags |= 65536, root2 = rootRenderLanes & -rootRenderLanes, sourceFiber.lanes |= root2, root2 = createRootErrorUpdate(sourceFiber.stateNode, value, root2), enqueueCapturedUpdate(sourceFiber, root2), false;
          case 1:
            if (returnFiber = sourceFiber.type, wrapperError = sourceFiber.stateNode, 0 === (sourceFiber.flags & 128) && ("function" === typeof returnFiber.getDerivedStateFromError || null !== wrapperError && "function" === typeof wrapperError.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError))))
              return sourceFiber.flags |= 65536, rootRenderLanes &= -rootRenderLanes, sourceFiber.lanes |= rootRenderLanes, rootRenderLanes = createClassErrorUpdate(rootRenderLanes), initializeClassErrorUpdate(
                rootRenderLanes,
                root2,
                sourceFiber,
                value
              ), enqueueCapturedUpdate(sourceFiber, rootRenderLanes), false;
        }
        sourceFiber = sourceFiber.return;
      } while (null !== sourceFiber);
      return false;
    }
    var SelectiveHydrationException = Error(formatProdErrorMessage(461)), didReceiveUpdate = false;
    function reconcileChildren(current, workInProgress2, nextChildren, renderLanes2) {
      workInProgress2.child = null === current ? mountChildFibers(workInProgress2, null, nextChildren, renderLanes2) : reconcileChildFibers(
        workInProgress2,
        current.child,
        nextChildren,
        renderLanes2
      );
    }
    function updateForwardRef(current, workInProgress2, Component, nextProps, renderLanes2) {
      Component = Component.render;
      var ref = workInProgress2.ref;
      if ("ref" in nextProps) {
        var propsWithoutRef = {};
        for (var key in nextProps)
          "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
      } else propsWithoutRef = nextProps;
      prepareToReadContext(workInProgress2);
      nextProps = renderWithHooks(
        current,
        workInProgress2,
        Component,
        propsWithoutRef,
        ref,
        renderLanes2
      );
      key = checkDidRenderIdHook();
      if (null !== current && !didReceiveUpdate)
        return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      isHydrating && key && pushMaterializedTreeId(workInProgress2);
      workInProgress2.flags |= 1;
      reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
      return workInProgress2.child;
    }
    function updateMemoComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
      if (null === current) {
        var type = Component.type;
        if ("function" === typeof type && !shouldConstruct(type) && void 0 === type.defaultProps && null === Component.compare)
          return workInProgress2.tag = 15, workInProgress2.type = type, updateSimpleMemoComponent(
            current,
            workInProgress2,
            type,
            nextProps,
            renderLanes2
          );
        current = createFiberFromTypeAndProps(
          Component.type,
          null,
          nextProps,
          workInProgress2,
          workInProgress2.mode,
          renderLanes2
        );
        current.ref = workInProgress2.ref;
        current.return = workInProgress2;
        return workInProgress2.child = current;
      }
      type = current.child;
      if (!checkScheduledUpdateOrContext(current, renderLanes2)) {
        var prevProps = type.memoizedProps;
        Component = Component.compare;
        Component = null !== Component ? Component : shallowEqual;
        if (Component(prevProps, nextProps) && current.ref === workInProgress2.ref)
          return bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      }
      workInProgress2.flags |= 1;
      current = createWorkInProgress(type, nextProps);
      current.ref = workInProgress2.ref;
      current.return = workInProgress2;
      return workInProgress2.child = current;
    }
    function updateSimpleMemoComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
      if (null !== current) {
        var prevProps = current.memoizedProps;
        if (shallowEqual(prevProps, nextProps) && current.ref === workInProgress2.ref)
          if (didReceiveUpdate = false, workInProgress2.pendingProps = nextProps = prevProps, checkScheduledUpdateOrContext(current, renderLanes2))
            0 !== (current.flags & 131072) && (didReceiveUpdate = true);
          else
            return workInProgress2.lanes = current.lanes, bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      }
      return updateFunctionComponent(
        current,
        workInProgress2,
        Component,
        nextProps,
        renderLanes2
      );
    }
    function updateOffscreenComponent(current, workInProgress2, renderLanes2) {
      var nextProps = workInProgress2.pendingProps, nextChildren = nextProps.children, prevState = null !== current ? current.memoizedState : null;
      if ("hidden" === nextProps.mode) {
        if (0 !== (workInProgress2.flags & 128)) {
          nextProps = null !== prevState ? prevState.baseLanes | renderLanes2 : renderLanes2;
          if (null !== current) {
            nextChildren = workInProgress2.child = current.child;
            for (prevState = 0; null !== nextChildren; )
              prevState = prevState | nextChildren.lanes | nextChildren.childLanes, nextChildren = nextChildren.sibling;
            workInProgress2.childLanes = prevState & ~nextProps;
          } else workInProgress2.childLanes = 0, workInProgress2.child = null;
          return deferHiddenOffscreenComponent(
            current,
            workInProgress2,
            nextProps,
            renderLanes2
          );
        }
        if (0 !== (renderLanes2 & 536870912))
          workInProgress2.memoizedState = { baseLanes: 0, cachePool: null }, null !== current && pushTransition(
            workInProgress2,
            null !== prevState ? prevState.cachePool : null
          ), null !== prevState ? pushHiddenContext(workInProgress2, prevState) : reuseHiddenContextOnStack(), pushOffscreenSuspenseHandler(workInProgress2);
        else
          return workInProgress2.lanes = workInProgress2.childLanes = 536870912, deferHiddenOffscreenComponent(
            current,
            workInProgress2,
            null !== prevState ? prevState.baseLanes | renderLanes2 : renderLanes2,
            renderLanes2
          );
      } else
        null !== prevState ? (pushTransition(workInProgress2, prevState.cachePool), pushHiddenContext(workInProgress2, prevState), reuseSuspenseHandlerOnStack(), workInProgress2.memoizedState = null) : (null !== current && pushTransition(workInProgress2, null), reuseHiddenContextOnStack(), reuseSuspenseHandlerOnStack());
      reconcileChildren(current, workInProgress2, nextChildren, renderLanes2);
      return workInProgress2.child;
    }
    function deferHiddenOffscreenComponent(current, workInProgress2, nextBaseLanes, renderLanes2) {
      var JSCompiler_inline_result = peekCacheFromPool();
      JSCompiler_inline_result = null === JSCompiler_inline_result ? null : { parent: CacheContext._currentValue, pool: JSCompiler_inline_result };
      workInProgress2.memoizedState = {
        baseLanes: nextBaseLanes,
        cachePool: JSCompiler_inline_result
      };
      null !== current && pushTransition(workInProgress2, null);
      reuseHiddenContextOnStack();
      pushOffscreenSuspenseHandler(workInProgress2);
      null !== current && propagateParentContextChanges(current, workInProgress2, renderLanes2, true);
      return null;
    }
    function markRef(current, workInProgress2) {
      var ref = workInProgress2.ref;
      if (null === ref)
        null !== current && null !== current.ref && (workInProgress2.flags |= 4194816);
      else {
        if ("function" !== typeof ref && "object" !== typeof ref)
          throw Error(formatProdErrorMessage(284));
        if (null === current || current.ref !== ref)
          workInProgress2.flags |= 4194816;
      }
    }
    function updateFunctionComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
      prepareToReadContext(workInProgress2);
      Component = renderWithHooks(
        current,
        workInProgress2,
        Component,
        nextProps,
        void 0,
        renderLanes2
      );
      nextProps = checkDidRenderIdHook();
      if (null !== current && !didReceiveUpdate)
        return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      isHydrating && nextProps && pushMaterializedTreeId(workInProgress2);
      workInProgress2.flags |= 1;
      reconcileChildren(current, workInProgress2, Component, renderLanes2);
      return workInProgress2.child;
    }
    function replayFunctionComponent(current, workInProgress2, nextProps, Component, secondArg, renderLanes2) {
      prepareToReadContext(workInProgress2);
      workInProgress2.updateQueue = null;
      nextProps = renderWithHooksAgain(
        workInProgress2,
        Component,
        nextProps,
        secondArg
      );
      finishRenderingHooks(current);
      Component = checkDidRenderIdHook();
      if (null !== current && !didReceiveUpdate)
        return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      isHydrating && Component && pushMaterializedTreeId(workInProgress2);
      workInProgress2.flags |= 1;
      reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
      return workInProgress2.child;
    }
    function updateClassComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
      prepareToReadContext(workInProgress2);
      if (null === workInProgress2.stateNode) {
        var context = emptyContextObject, contextType = Component.contextType;
        "object" === typeof contextType && null !== contextType && (context = readContext(contextType));
        context = new Component(nextProps, context);
        workInProgress2.memoizedState = null !== context.state && void 0 !== context.state ? context.state : null;
        context.updater = classComponentUpdater;
        workInProgress2.stateNode = context;
        context._reactInternals = workInProgress2;
        context = workInProgress2.stateNode;
        context.props = nextProps;
        context.state = workInProgress2.memoizedState;
        context.refs = {};
        initializeUpdateQueue(workInProgress2);
        contextType = Component.contextType;
        context.context = "object" === typeof contextType && null !== contextType ? readContext(contextType) : emptyContextObject;
        context.state = workInProgress2.memoizedState;
        contextType = Component.getDerivedStateFromProps;
        "function" === typeof contextType && (applyDerivedStateFromProps(
          workInProgress2,
          Component,
          contextType,
          nextProps
        ), context.state = workInProgress2.memoizedState);
        "function" === typeof Component.getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || (contextType = context.state, "function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount(), contextType !== context.state && classComponentUpdater.enqueueReplaceState(context, context.state, null), processUpdateQueue(workInProgress2, nextProps, context, renderLanes2), suspendIfUpdateReadFromEntangledAsyncAction(), context.state = workInProgress2.memoizedState);
        "function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308);
        nextProps = true;
      } else if (null === current) {
        context = workInProgress2.stateNode;
        var unresolvedOldProps = workInProgress2.memoizedProps, oldProps = resolveClassComponentProps(Component, unresolvedOldProps);
        context.props = oldProps;
        var oldContext = context.context, contextType$jscomp$0 = Component.contextType;
        contextType = emptyContextObject;
        "object" === typeof contextType$jscomp$0 && null !== contextType$jscomp$0 && (contextType = readContext(contextType$jscomp$0));
        var getDerivedStateFromProps = Component.getDerivedStateFromProps;
        contextType$jscomp$0 = "function" === typeof getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate;
        unresolvedOldProps = workInProgress2.pendingProps !== unresolvedOldProps;
        contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (unresolvedOldProps || oldContext !== contextType) && callComponentWillReceiveProps(
          workInProgress2,
          context,
          nextProps,
          contextType
        );
        hasForceUpdate = false;
        var oldState = workInProgress2.memoizedState;
        context.state = oldState;
        processUpdateQueue(workInProgress2, nextProps, context, renderLanes2);
        suspendIfUpdateReadFromEntangledAsyncAction();
        oldContext = workInProgress2.memoizedState;
        unresolvedOldProps || oldState !== oldContext || hasForceUpdate ? ("function" === typeof getDerivedStateFromProps && (applyDerivedStateFromProps(
          workInProgress2,
          Component,
          getDerivedStateFromProps,
          nextProps
        ), oldContext = workInProgress2.memoizedState), (oldProps = hasForceUpdate || checkShouldComponentUpdate(
          workInProgress2,
          Component,
          oldProps,
          nextProps,
          oldState,
          oldContext,
          contextType
        )) ? (contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || ("function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount()), "function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308)) : ("function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308), workInProgress2.memoizedProps = nextProps, workInProgress2.memoizedState = oldContext), context.props = nextProps, context.state = oldContext, context.context = contextType, nextProps = oldProps) : ("function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308), nextProps = false);
      } else {
        context = workInProgress2.stateNode;
        cloneUpdateQueue(current, workInProgress2);
        contextType = workInProgress2.memoizedProps;
        contextType$jscomp$0 = resolveClassComponentProps(Component, contextType);
        context.props = contextType$jscomp$0;
        getDerivedStateFromProps = workInProgress2.pendingProps;
        oldState = context.context;
        oldContext = Component.contextType;
        oldProps = emptyContextObject;
        "object" === typeof oldContext && null !== oldContext && (oldProps = readContext(oldContext));
        unresolvedOldProps = Component.getDerivedStateFromProps;
        (oldContext = "function" === typeof unresolvedOldProps || "function" === typeof context.getSnapshotBeforeUpdate) || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (contextType !== getDerivedStateFromProps || oldState !== oldProps) && callComponentWillReceiveProps(
          workInProgress2,
          context,
          nextProps,
          oldProps
        );
        hasForceUpdate = false;
        oldState = workInProgress2.memoizedState;
        context.state = oldState;
        processUpdateQueue(workInProgress2, nextProps, context, renderLanes2);
        suspendIfUpdateReadFromEntangledAsyncAction();
        var newState = workInProgress2.memoizedState;
        contextType !== getDerivedStateFromProps || oldState !== newState || hasForceUpdate || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies) ? ("function" === typeof unresolvedOldProps && (applyDerivedStateFromProps(
          workInProgress2,
          Component,
          unresolvedOldProps,
          nextProps
        ), newState = workInProgress2.memoizedState), (contextType$jscomp$0 = hasForceUpdate || checkShouldComponentUpdate(
          workInProgress2,
          Component,
          contextType$jscomp$0,
          nextProps,
          oldState,
          newState,
          oldProps
        ) || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies)) ? (oldContext || "function" !== typeof context.UNSAFE_componentWillUpdate && "function" !== typeof context.componentWillUpdate || ("function" === typeof context.componentWillUpdate && context.componentWillUpdate(nextProps, newState, oldProps), "function" === typeof context.UNSAFE_componentWillUpdate && context.UNSAFE_componentWillUpdate(
          nextProps,
          newState,
          oldProps
        )), "function" === typeof context.componentDidUpdate && (workInProgress2.flags |= 4), "function" === typeof context.getSnapshotBeforeUpdate && (workInProgress2.flags |= 1024)) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 1024), workInProgress2.memoizedProps = nextProps, workInProgress2.memoizedState = newState), context.props = nextProps, context.state = newState, context.context = oldProps, nextProps = contextType$jscomp$0) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 1024), nextProps = false);
      }
      context = nextProps;
      markRef(current, workInProgress2);
      nextProps = 0 !== (workInProgress2.flags & 128);
      context || nextProps ? (context = workInProgress2.stateNode, Component = nextProps && "function" !== typeof Component.getDerivedStateFromError ? null : context.render(), workInProgress2.flags |= 1, null !== current && nextProps ? (workInProgress2.child = reconcileChildFibers(
        workInProgress2,
        current.child,
        null,
        renderLanes2
      ), workInProgress2.child = reconcileChildFibers(
        workInProgress2,
        null,
        Component,
        renderLanes2
      )) : reconcileChildren(current, workInProgress2, Component, renderLanes2), workInProgress2.memoizedState = context.state, current = workInProgress2.child) : current = bailoutOnAlreadyFinishedWork(
        current,
        workInProgress2,
        renderLanes2
      );
      return current;
    }
    function mountHostRootWithoutHydrating(current, workInProgress2, nextChildren, renderLanes2) {
      resetHydrationState();
      workInProgress2.flags |= 256;
      reconcileChildren(current, workInProgress2, nextChildren, renderLanes2);
      return workInProgress2.child;
    }
    var SUSPENDED_MARKER = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function mountSuspenseOffscreenState(renderLanes2) {
      return { baseLanes: renderLanes2, cachePool: getSuspendedCache() };
    }
    function getRemainingWorkInPrimaryTree(current, primaryTreeDidDefer, renderLanes2) {
      current = null !== current ? current.childLanes & ~renderLanes2 : 0;
      primaryTreeDidDefer && (current |= workInProgressDeferredLane);
      return current;
    }
    function updateSuspenseComponent(current, workInProgress2, renderLanes2) {
      var nextProps = workInProgress2.pendingProps, showFallback = false, didSuspend = 0 !== (workInProgress2.flags & 128), JSCompiler_temp;
      (JSCompiler_temp = didSuspend) || (JSCompiler_temp = null !== current && null === current.memoizedState ? false : 0 !== (suspenseStackCursor.current & 2));
      JSCompiler_temp && (showFallback = true, workInProgress2.flags &= -129);
      JSCompiler_temp = 0 !== (workInProgress2.flags & 32);
      workInProgress2.flags &= -33;
      if (null === current) {
        if (isHydrating) {
          showFallback ? pushPrimaryTreeSuspenseHandler(workInProgress2) : reuseSuspenseHandlerOnStack();
          if (isHydrating) {
            var nextInstance = nextHydratableInstance, JSCompiler_temp$jscomp$0;
            if (JSCompiler_temp$jscomp$0 = nextInstance) {
              c: {
                JSCompiler_temp$jscomp$0 = nextInstance;
                for (nextInstance = rootOrSingletonContext; 8 !== JSCompiler_temp$jscomp$0.nodeType; ) {
                  if (!nextInstance) {
                    nextInstance = null;
                    break c;
                  }
                  JSCompiler_temp$jscomp$0 = getNextHydratable(
                    JSCompiler_temp$jscomp$0.nextSibling
                  );
                  if (null === JSCompiler_temp$jscomp$0) {
                    nextInstance = null;
                    break c;
                  }
                }
                nextInstance = JSCompiler_temp$jscomp$0;
              }
              null !== nextInstance ? (workInProgress2.memoizedState = {
                dehydrated: nextInstance,
                treeContext: null !== treeContextProvider ? { id: treeContextId, overflow: treeContextOverflow } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, JSCompiler_temp$jscomp$0 = createFiberImplClass(
                18,
                null,
                null,
                0
              ), JSCompiler_temp$jscomp$0.stateNode = nextInstance, JSCompiler_temp$jscomp$0.return = workInProgress2, workInProgress2.child = JSCompiler_temp$jscomp$0, hydrationParentFiber = workInProgress2, nextHydratableInstance = null, JSCompiler_temp$jscomp$0 = true) : JSCompiler_temp$jscomp$0 = false;
            }
            JSCompiler_temp$jscomp$0 || throwOnHydrationMismatch(workInProgress2);
          }
          nextInstance = workInProgress2.memoizedState;
          if (null !== nextInstance && (nextInstance = nextInstance.dehydrated, null !== nextInstance))
            return isSuspenseInstanceFallback(nextInstance) ? workInProgress2.lanes = 32 : workInProgress2.lanes = 536870912, null;
          popSuspenseHandler(workInProgress2);
        }
        nextInstance = nextProps.children;
        nextProps = nextProps.fallback;
        if (showFallback)
          return reuseSuspenseHandlerOnStack(), showFallback = workInProgress2.mode, nextInstance = mountWorkInProgressOffscreenFiber(
            { mode: "hidden", children: nextInstance },
            showFallback
          ), nextProps = createFiberFromFragment(
            nextProps,
            showFallback,
            renderLanes2,
            null
          ), nextInstance.return = workInProgress2, nextProps.return = workInProgress2, nextInstance.sibling = nextProps, workInProgress2.child = nextInstance, showFallback = workInProgress2.child, showFallback.memoizedState = mountSuspenseOffscreenState(renderLanes2), showFallback.childLanes = getRemainingWorkInPrimaryTree(
            current,
            JSCompiler_temp,
            renderLanes2
          ), workInProgress2.memoizedState = SUSPENDED_MARKER, nextProps;
        pushPrimaryTreeSuspenseHandler(workInProgress2);
        return mountSuspensePrimaryChildren(workInProgress2, nextInstance);
      }
      JSCompiler_temp$jscomp$0 = current.memoizedState;
      if (null !== JSCompiler_temp$jscomp$0 && (nextInstance = JSCompiler_temp$jscomp$0.dehydrated, null !== nextInstance)) {
        if (didSuspend)
          workInProgress2.flags & 256 ? (pushPrimaryTreeSuspenseHandler(workInProgress2), workInProgress2.flags &= -257, workInProgress2 = retrySuspenseComponentWithoutHydrating(
            current,
            workInProgress2,
            renderLanes2
          )) : null !== workInProgress2.memoizedState ? (reuseSuspenseHandlerOnStack(), workInProgress2.child = current.child, workInProgress2.flags |= 128, workInProgress2 = null) : (reuseSuspenseHandlerOnStack(), showFallback = nextProps.fallback, nextInstance = workInProgress2.mode, nextProps = mountWorkInProgressOffscreenFiber(
            { mode: "visible", children: nextProps.children },
            nextInstance
          ), showFallback = createFiberFromFragment(
            showFallback,
            nextInstance,
            renderLanes2,
            null
          ), showFallback.flags |= 2, nextProps.return = workInProgress2, showFallback.return = workInProgress2, nextProps.sibling = showFallback, workInProgress2.child = nextProps, reconcileChildFibers(
            workInProgress2,
            current.child,
            null,
            renderLanes2
          ), nextProps = workInProgress2.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes2), nextProps.childLanes = getRemainingWorkInPrimaryTree(
            current,
            JSCompiler_temp,
            renderLanes2
          ), workInProgress2.memoizedState = SUSPENDED_MARKER, workInProgress2 = showFallback);
        else if (pushPrimaryTreeSuspenseHandler(workInProgress2), isSuspenseInstanceFallback(nextInstance)) {
          JSCompiler_temp = nextInstance.nextSibling && nextInstance.nextSibling.dataset;
          if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
          JSCompiler_temp = digest;
          nextProps = Error(formatProdErrorMessage(419));
          nextProps.stack = "";
          nextProps.digest = JSCompiler_temp;
          queueHydrationError({ value: nextProps, source: null, stack: null });
          workInProgress2 = retrySuspenseComponentWithoutHydrating(
            current,
            workInProgress2,
            renderLanes2
          );
        } else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress2, renderLanes2, false), JSCompiler_temp = 0 !== (renderLanes2 & current.childLanes), didReceiveUpdate || JSCompiler_temp) {
          JSCompiler_temp = workInProgressRoot;
          if (null !== JSCompiler_temp && (nextProps = renderLanes2 & -renderLanes2, nextProps = 0 !== (nextProps & 42) ? 1 : getBumpedLaneForHydrationByLane(nextProps), nextProps = 0 !== (nextProps & (JSCompiler_temp.suspendedLanes | renderLanes2)) ? 0 : nextProps, 0 !== nextProps && nextProps !== JSCompiler_temp$jscomp$0.retryLane))
            throw JSCompiler_temp$jscomp$0.retryLane = nextProps, enqueueConcurrentRenderForLane(current, nextProps), scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps), SelectiveHydrationException;
          "$?" === nextInstance.data || renderDidSuspendDelayIfPossible();
          workInProgress2 = retrySuspenseComponentWithoutHydrating(
            current,
            workInProgress2,
            renderLanes2
          );
        } else
          "$?" === nextInstance.data ? (workInProgress2.flags |= 192, workInProgress2.child = current.child, workInProgress2 = null) : (current = JSCompiler_temp$jscomp$0.treeContext, nextHydratableInstance = getNextHydratable(
            nextInstance.nextSibling
          ), hydrationParentFiber = workInProgress2, isHydrating = true, hydrationErrors = null, rootOrSingletonContext = false, null !== current && (idStack[idStackIndex++] = treeContextId, idStack[idStackIndex++] = treeContextOverflow, idStack[idStackIndex++] = treeContextProvider, treeContextId = current.id, treeContextOverflow = current.overflow, treeContextProvider = workInProgress2), workInProgress2 = mountSuspensePrimaryChildren(
            workInProgress2,
            nextProps.children
          ), workInProgress2.flags |= 4096);
        return workInProgress2;
      }
      if (showFallback)
        return reuseSuspenseHandlerOnStack(), showFallback = nextProps.fallback, nextInstance = workInProgress2.mode, JSCompiler_temp$jscomp$0 = current.child, digest = JSCompiler_temp$jscomp$0.sibling, nextProps = createWorkInProgress(JSCompiler_temp$jscomp$0, {
          mode: "hidden",
          children: nextProps.children
        }), nextProps.subtreeFlags = JSCompiler_temp$jscomp$0.subtreeFlags & 65011712, null !== digest ? showFallback = createWorkInProgress(digest, showFallback) : (showFallback = createFiberFromFragment(
          showFallback,
          nextInstance,
          renderLanes2,
          null
        ), showFallback.flags |= 2), showFallback.return = workInProgress2, nextProps.return = workInProgress2, nextProps.sibling = showFallback, workInProgress2.child = nextProps, nextProps = showFallback, showFallback = workInProgress2.child, nextInstance = current.child.memoizedState, null === nextInstance ? nextInstance = mountSuspenseOffscreenState(renderLanes2) : (JSCompiler_temp$jscomp$0 = nextInstance.cachePool, null !== JSCompiler_temp$jscomp$0 ? (digest = CacheContext._currentValue, JSCompiler_temp$jscomp$0 = JSCompiler_temp$jscomp$0.parent !== digest ? { parent: digest, pool: digest } : JSCompiler_temp$jscomp$0) : JSCompiler_temp$jscomp$0 = getSuspendedCache(), nextInstance = {
          baseLanes: nextInstance.baseLanes | renderLanes2,
          cachePool: JSCompiler_temp$jscomp$0
        }), showFallback.memoizedState = nextInstance, showFallback.childLanes = getRemainingWorkInPrimaryTree(
          current,
          JSCompiler_temp,
          renderLanes2
        ), workInProgress2.memoizedState = SUSPENDED_MARKER, nextProps;
      pushPrimaryTreeSuspenseHandler(workInProgress2);
      renderLanes2 = current.child;
      current = renderLanes2.sibling;
      renderLanes2 = createWorkInProgress(renderLanes2, {
        mode: "visible",
        children: nextProps.children
      });
      renderLanes2.return = workInProgress2;
      renderLanes2.sibling = null;
      null !== current && (JSCompiler_temp = workInProgress2.deletions, null === JSCompiler_temp ? (workInProgress2.deletions = [current], workInProgress2.flags |= 16) : JSCompiler_temp.push(current));
      workInProgress2.child = renderLanes2;
      workInProgress2.memoizedState = null;
      return renderLanes2;
    }
    function mountSuspensePrimaryChildren(workInProgress2, primaryChildren) {
      primaryChildren = mountWorkInProgressOffscreenFiber(
        { mode: "visible", children: primaryChildren },
        workInProgress2.mode
      );
      primaryChildren.return = workInProgress2;
      return workInProgress2.child = primaryChildren;
    }
    function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
      offscreenProps = createFiberImplClass(22, offscreenProps, null, mode);
      offscreenProps.lanes = 0;
      offscreenProps.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      };
      return offscreenProps;
    }
    function retrySuspenseComponentWithoutHydrating(current, workInProgress2, renderLanes2) {
      reconcileChildFibers(workInProgress2, current.child, null, renderLanes2);
      current = mountSuspensePrimaryChildren(
        workInProgress2,
        workInProgress2.pendingProps.children
      );
      current.flags |= 2;
      workInProgress2.memoizedState = null;
      return current;
    }
    function scheduleSuspenseWorkOnFiber(fiber, renderLanes2, propagationRoot) {
      fiber.lanes |= renderLanes2;
      var alternate = fiber.alternate;
      null !== alternate && (alternate.lanes |= renderLanes2);
      scheduleContextWorkOnParentPath(fiber.return, renderLanes2, propagationRoot);
    }
    function initSuspenseListRenderState(workInProgress2, isBackwards, tail, lastContentRow, tailMode) {
      var renderState = workInProgress2.memoizedState;
      null === renderState ? workInProgress2.memoizedState = {
        isBackwards,
        rendering: null,
        renderingStartTime: 0,
        last: lastContentRow,
        tail,
        tailMode
      } : (renderState.isBackwards = isBackwards, renderState.rendering = null, renderState.renderingStartTime = 0, renderState.last = lastContentRow, renderState.tail = tail, renderState.tailMode = tailMode);
    }
    function updateSuspenseListComponent(current, workInProgress2, renderLanes2) {
      var nextProps = workInProgress2.pendingProps, revealOrder = nextProps.revealOrder, tailMode = nextProps.tail;
      reconcileChildren(current, workInProgress2, nextProps.children, renderLanes2);
      nextProps = suspenseStackCursor.current;
      if (0 !== (nextProps & 2))
        nextProps = nextProps & 1 | 2, workInProgress2.flags |= 128;
      else {
        if (null !== current && 0 !== (current.flags & 128))
          a: for (current = workInProgress2.child; null !== current; ) {
            if (13 === current.tag)
              null !== current.memoizedState && scheduleSuspenseWorkOnFiber(current, renderLanes2, workInProgress2);
            else if (19 === current.tag)
              scheduleSuspenseWorkOnFiber(current, renderLanes2, workInProgress2);
            else if (null !== current.child) {
              current.child.return = current;
              current = current.child;
              continue;
            }
            if (current === workInProgress2) break a;
            for (; null === current.sibling; ) {
              if (null === current.return || current.return === workInProgress2)
                break a;
              current = current.return;
            }
            current.sibling.return = current.return;
            current = current.sibling;
          }
        nextProps &= 1;
      }
      push(suspenseStackCursor, nextProps);
      switch (revealOrder) {
        case "forwards":
          renderLanes2 = workInProgress2.child;
          for (revealOrder = null; null !== renderLanes2; )
            current = renderLanes2.alternate, null !== current && null === findFirstSuspended(current) && (revealOrder = renderLanes2), renderLanes2 = renderLanes2.sibling;
          renderLanes2 = revealOrder;
          null === renderLanes2 ? (revealOrder = workInProgress2.child, workInProgress2.child = null) : (revealOrder = renderLanes2.sibling, renderLanes2.sibling = null);
          initSuspenseListRenderState(
            workInProgress2,
            false,
            revealOrder,
            renderLanes2,
            tailMode
          );
          break;
        case "backwards":
          renderLanes2 = null;
          revealOrder = workInProgress2.child;
          for (workInProgress2.child = null; null !== revealOrder; ) {
            current = revealOrder.alternate;
            if (null !== current && null === findFirstSuspended(current)) {
              workInProgress2.child = revealOrder;
              break;
            }
            current = revealOrder.sibling;
            revealOrder.sibling = renderLanes2;
            renderLanes2 = revealOrder;
            revealOrder = current;
          }
          initSuspenseListRenderState(
            workInProgress2,
            true,
            renderLanes2,
            null,
            tailMode
          );
          break;
        case "together":
          initSuspenseListRenderState(workInProgress2, false, null, null, void 0);
          break;
        default:
          workInProgress2.memoizedState = null;
      }
      return workInProgress2.child;
    }
    function bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2) {
      null !== current && (workInProgress2.dependencies = current.dependencies);
      workInProgressRootSkippedLanes |= workInProgress2.lanes;
      if (0 === (renderLanes2 & workInProgress2.childLanes))
        if (null !== current) {
          if (propagateParentContextChanges(
            current,
            workInProgress2,
            renderLanes2,
            false
          ), 0 === (renderLanes2 & workInProgress2.childLanes))
            return null;
        } else return null;
      if (null !== current && workInProgress2.child !== current.child)
        throw Error(formatProdErrorMessage(153));
      if (null !== workInProgress2.child) {
        current = workInProgress2.child;
        renderLanes2 = createWorkInProgress(current, current.pendingProps);
        workInProgress2.child = renderLanes2;
        for (renderLanes2.return = workInProgress2; null !== current.sibling; )
          current = current.sibling, renderLanes2 = renderLanes2.sibling = createWorkInProgress(current, current.pendingProps), renderLanes2.return = workInProgress2;
        renderLanes2.sibling = null;
      }
      return workInProgress2.child;
    }
    function checkScheduledUpdateOrContext(current, renderLanes2) {
      if (0 !== (current.lanes & renderLanes2)) return true;
      current = current.dependencies;
      return null !== current && checkIfContextChanged(current) ? true : false;
    }
    function attemptEarlyBailoutIfNoScheduledUpdate(current, workInProgress2, renderLanes2) {
      switch (workInProgress2.tag) {
        case 3:
          pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
          pushProvider(workInProgress2, CacheContext, current.memoizedState.cache);
          resetHydrationState();
          break;
        case 27:
        case 5:
          pushHostContext(workInProgress2);
          break;
        case 4:
          pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
          break;
        case 10:
          pushProvider(
            workInProgress2,
            workInProgress2.type,
            workInProgress2.memoizedProps.value
          );
          break;
        case 13:
          var state = workInProgress2.memoizedState;
          if (null !== state) {
            if (null !== state.dehydrated)
              return pushPrimaryTreeSuspenseHandler(workInProgress2), workInProgress2.flags |= 128, null;
            if (0 !== (renderLanes2 & workInProgress2.child.childLanes))
              return updateSuspenseComponent(current, workInProgress2, renderLanes2);
            pushPrimaryTreeSuspenseHandler(workInProgress2);
            current = bailoutOnAlreadyFinishedWork(
              current,
              workInProgress2,
              renderLanes2
            );
            return null !== current ? current.sibling : null;
          }
          pushPrimaryTreeSuspenseHandler(workInProgress2);
          break;
        case 19:
          var didSuspendBefore = 0 !== (current.flags & 128);
          state = 0 !== (renderLanes2 & workInProgress2.childLanes);
          state || (propagateParentContextChanges(
            current,
            workInProgress2,
            renderLanes2,
            false
          ), state = 0 !== (renderLanes2 & workInProgress2.childLanes));
          if (didSuspendBefore) {
            if (state)
              return updateSuspenseListComponent(
                current,
                workInProgress2,
                renderLanes2
              );
            workInProgress2.flags |= 128;
          }
          didSuspendBefore = workInProgress2.memoizedState;
          null !== didSuspendBefore && (didSuspendBefore.rendering = null, didSuspendBefore.tail = null, didSuspendBefore.lastEffect = null);
          push(suspenseStackCursor, suspenseStackCursor.current);
          if (state) break;
          else return null;
        case 22:
        case 23:
          return workInProgress2.lanes = 0, updateOffscreenComponent(current, workInProgress2, renderLanes2);
        case 24:
          pushProvider(workInProgress2, CacheContext, current.memoizedState.cache);
      }
      return bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
    }
    function beginWork(current, workInProgress2, renderLanes2) {
      if (null !== current)
        if (current.memoizedProps !== workInProgress2.pendingProps)
          didReceiveUpdate = true;
        else {
          if (!checkScheduledUpdateOrContext(current, renderLanes2) && 0 === (workInProgress2.flags & 128))
            return didReceiveUpdate = false, attemptEarlyBailoutIfNoScheduledUpdate(
              current,
              workInProgress2,
              renderLanes2
            );
          didReceiveUpdate = 0 !== (current.flags & 131072) ? true : false;
        }
      else
        didReceiveUpdate = false, isHydrating && 0 !== (workInProgress2.flags & 1048576) && pushTreeId(workInProgress2, treeForkCount, workInProgress2.index);
      workInProgress2.lanes = 0;
      switch (workInProgress2.tag) {
        case 16:
          a: {
            current = workInProgress2.pendingProps;
            var lazyComponent = workInProgress2.elementType, init = lazyComponent._init;
            lazyComponent = init(lazyComponent._payload);
            workInProgress2.type = lazyComponent;
            if ("function" === typeof lazyComponent)
              shouldConstruct(lazyComponent) ? (current = resolveClassComponentProps(lazyComponent, current), workInProgress2.tag = 1, workInProgress2 = updateClassComponent(
                null,
                workInProgress2,
                lazyComponent,
                current,
                renderLanes2
              )) : (workInProgress2.tag = 0, workInProgress2 = updateFunctionComponent(
                null,
                workInProgress2,
                lazyComponent,
                current,
                renderLanes2
              ));
            else {
              if (void 0 !== lazyComponent && null !== lazyComponent) {
                if (init = lazyComponent.$$typeof, init === REACT_FORWARD_REF_TYPE) {
                  workInProgress2.tag = 11;
                  workInProgress2 = updateForwardRef(
                    null,
                    workInProgress2,
                    lazyComponent,
                    current,
                    renderLanes2
                  );
                  break a;
                } else if (init === REACT_MEMO_TYPE) {
                  workInProgress2.tag = 14;
                  workInProgress2 = updateMemoComponent(
                    null,
                    workInProgress2,
                    lazyComponent,
                    current,
                    renderLanes2
                  );
                  break a;
                }
              }
              workInProgress2 = getComponentNameFromType(lazyComponent) || lazyComponent;
              throw Error(formatProdErrorMessage(306, workInProgress2, ""));
            }
          }
          return workInProgress2;
        case 0:
          return updateFunctionComponent(
            current,
            workInProgress2,
            workInProgress2.type,
            workInProgress2.pendingProps,
            renderLanes2
          );
        case 1:
          return lazyComponent = workInProgress2.type, init = resolveClassComponentProps(
            lazyComponent,
            workInProgress2.pendingProps
          ), updateClassComponent(
            current,
            workInProgress2,
            lazyComponent,
            init,
            renderLanes2
          );
        case 3:
          a: {
            pushHostContainer(
              workInProgress2,
              workInProgress2.stateNode.containerInfo
            );
            if (null === current) throw Error(formatProdErrorMessage(387));
            lazyComponent = workInProgress2.pendingProps;
            var prevState = workInProgress2.memoizedState;
            init = prevState.element;
            cloneUpdateQueue(current, workInProgress2);
            processUpdateQueue(workInProgress2, lazyComponent, null, renderLanes2);
            var nextState = workInProgress2.memoizedState;
            lazyComponent = nextState.cache;
            pushProvider(workInProgress2, CacheContext, lazyComponent);
            lazyComponent !== prevState.cache && propagateContextChanges(
              workInProgress2,
              [CacheContext],
              renderLanes2,
              true
            );
            suspendIfUpdateReadFromEntangledAsyncAction();
            lazyComponent = nextState.element;
            if (prevState.isDehydrated)
              if (prevState = {
                element: lazyComponent,
                isDehydrated: false,
                cache: nextState.cache
              }, workInProgress2.updateQueue.baseState = prevState, workInProgress2.memoizedState = prevState, workInProgress2.flags & 256) {
                workInProgress2 = mountHostRootWithoutHydrating(
                  current,
                  workInProgress2,
                  lazyComponent,
                  renderLanes2
                );
                break a;
              } else if (lazyComponent !== init) {
                init = createCapturedValueAtFiber(
                  Error(formatProdErrorMessage(424)),
                  workInProgress2
                );
                queueHydrationError(init);
                workInProgress2 = mountHostRootWithoutHydrating(
                  current,
                  workInProgress2,
                  lazyComponent,
                  renderLanes2
                );
                break a;
              } else {
                current = workInProgress2.stateNode.containerInfo;
                switch (current.nodeType) {
                  case 9:
                    current = current.body;
                    break;
                  default:
                    current = "HTML" === current.nodeName ? current.ownerDocument.body : current;
                }
                nextHydratableInstance = getNextHydratable(current.firstChild);
                hydrationParentFiber = workInProgress2;
                isHydrating = true;
                hydrationErrors = null;
                rootOrSingletonContext = true;
                renderLanes2 = mountChildFibers(
                  workInProgress2,
                  null,
                  lazyComponent,
                  renderLanes2
                );
                for (workInProgress2.child = renderLanes2; renderLanes2; )
                  renderLanes2.flags = renderLanes2.flags & -3 | 4096, renderLanes2 = renderLanes2.sibling;
              }
            else {
              resetHydrationState();
              if (lazyComponent === init) {
                workInProgress2 = bailoutOnAlreadyFinishedWork(
                  current,
                  workInProgress2,
                  renderLanes2
                );
                break a;
              }
              reconcileChildren(
                current,
                workInProgress2,
                lazyComponent,
                renderLanes2
              );
            }
            workInProgress2 = workInProgress2.child;
          }
          return workInProgress2;
        case 26:
          return markRef(current, workInProgress2), null === current ? (renderLanes2 = getResource(
            workInProgress2.type,
            null,
            workInProgress2.pendingProps,
            null
          )) ? workInProgress2.memoizedState = renderLanes2 : isHydrating || (renderLanes2 = workInProgress2.type, current = workInProgress2.pendingProps, lazyComponent = getOwnerDocumentFromRootContainer(
            rootInstanceStackCursor.current
          ).createElement(renderLanes2), lazyComponent[internalInstanceKey] = workInProgress2, lazyComponent[internalPropsKey] = current, setInitialProperties(lazyComponent, renderLanes2, current), markNodeAsHoistable(lazyComponent), workInProgress2.stateNode = lazyComponent) : workInProgress2.memoizedState = getResource(
            workInProgress2.type,
            current.memoizedProps,
            workInProgress2.pendingProps,
            current.memoizedState
          ), null;
        case 27:
          return pushHostContext(workInProgress2), null === current && isHydrating && (lazyComponent = workInProgress2.stateNode = resolveSingletonInstance(
            workInProgress2.type,
            workInProgress2.pendingProps,
            rootInstanceStackCursor.current
          ), hydrationParentFiber = workInProgress2, rootOrSingletonContext = true, init = nextHydratableInstance, isSingletonScope(workInProgress2.type) ? (previousHydratableOnEnteringScopedSingleton = init, nextHydratableInstance = getNextHydratable(
            lazyComponent.firstChild
          )) : nextHydratableInstance = init), reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps.children,
            renderLanes2
          ), markRef(current, workInProgress2), null === current && (workInProgress2.flags |= 4194304), workInProgress2.child;
        case 5:
          if (null === current && isHydrating) {
            if (init = lazyComponent = nextHydratableInstance)
              lazyComponent = canHydrateInstance(
                lazyComponent,
                workInProgress2.type,
                workInProgress2.pendingProps,
                rootOrSingletonContext
              ), null !== lazyComponent ? (workInProgress2.stateNode = lazyComponent, hydrationParentFiber = workInProgress2, nextHydratableInstance = getNextHydratable(
                lazyComponent.firstChild
              ), rootOrSingletonContext = false, init = true) : init = false;
            init || throwOnHydrationMismatch(workInProgress2);
          }
          pushHostContext(workInProgress2);
          init = workInProgress2.type;
          prevState = workInProgress2.pendingProps;
          nextState = null !== current ? current.memoizedProps : null;
          lazyComponent = prevState.children;
          shouldSetTextContent(init, prevState) ? lazyComponent = null : null !== nextState && shouldSetTextContent(init, nextState) && (workInProgress2.flags |= 32);
          null !== workInProgress2.memoizedState && (init = renderWithHooks(
            current,
            workInProgress2,
            TransitionAwareHostComponent,
            null,
            null,
            renderLanes2
          ), HostTransitionContext._currentValue = init);
          markRef(current, workInProgress2);
          reconcileChildren(current, workInProgress2, lazyComponent, renderLanes2);
          return workInProgress2.child;
        case 6:
          if (null === current && isHydrating) {
            if (current = renderLanes2 = nextHydratableInstance)
              renderLanes2 = canHydrateTextInstance(
                renderLanes2,
                workInProgress2.pendingProps,
                rootOrSingletonContext
              ), null !== renderLanes2 ? (workInProgress2.stateNode = renderLanes2, hydrationParentFiber = workInProgress2, nextHydratableInstance = null, current = true) : current = false;
            current || throwOnHydrationMismatch(workInProgress2);
          }
          return null;
        case 13:
          return updateSuspenseComponent(current, workInProgress2, renderLanes2);
        case 4:
          return pushHostContainer(
            workInProgress2,
            workInProgress2.stateNode.containerInfo
          ), lazyComponent = workInProgress2.pendingProps, null === current ? workInProgress2.child = reconcileChildFibers(
            workInProgress2,
            null,
            lazyComponent,
            renderLanes2
          ) : reconcileChildren(
            current,
            workInProgress2,
            lazyComponent,
            renderLanes2
          ), workInProgress2.child;
        case 11:
          return updateForwardRef(
            current,
            workInProgress2,
            workInProgress2.type,
            workInProgress2.pendingProps,
            renderLanes2
          );
        case 7:
          return reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps,
            renderLanes2
          ), workInProgress2.child;
        case 8:
          return reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps.children,
            renderLanes2
          ), workInProgress2.child;
        case 12:
          return reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps.children,
            renderLanes2
          ), workInProgress2.child;
        case 10:
          return lazyComponent = workInProgress2.pendingProps, pushProvider(workInProgress2, workInProgress2.type, lazyComponent.value), reconcileChildren(
            current,
            workInProgress2,
            lazyComponent.children,
            renderLanes2
          ), workInProgress2.child;
        case 9:
          return init = workInProgress2.type._context, lazyComponent = workInProgress2.pendingProps.children, prepareToReadContext(workInProgress2), init = readContext(init), lazyComponent = lazyComponent(init), workInProgress2.flags |= 1, reconcileChildren(current, workInProgress2, lazyComponent, renderLanes2), workInProgress2.child;
        case 14:
          return updateMemoComponent(
            current,
            workInProgress2,
            workInProgress2.type,
            workInProgress2.pendingProps,
            renderLanes2
          );
        case 15:
          return updateSimpleMemoComponent(
            current,
            workInProgress2,
            workInProgress2.type,
            workInProgress2.pendingProps,
            renderLanes2
          );
        case 19:
          return updateSuspenseListComponent(current, workInProgress2, renderLanes2);
        case 31:
          return lazyComponent = workInProgress2.pendingProps, renderLanes2 = workInProgress2.mode, lazyComponent = {
            mode: lazyComponent.mode,
            children: lazyComponent.children
          }, null === current ? (renderLanes2 = mountWorkInProgressOffscreenFiber(
            lazyComponent,
            renderLanes2
          ), renderLanes2.ref = workInProgress2.ref, workInProgress2.child = renderLanes2, renderLanes2.return = workInProgress2, workInProgress2 = renderLanes2) : (renderLanes2 = createWorkInProgress(current.child, lazyComponent), renderLanes2.ref = workInProgress2.ref, workInProgress2.child = renderLanes2, renderLanes2.return = workInProgress2, workInProgress2 = renderLanes2), workInProgress2;
        case 22:
          return updateOffscreenComponent(current, workInProgress2, renderLanes2);
        case 24:
          return prepareToReadContext(workInProgress2), lazyComponent = readContext(CacheContext), null === current ? (init = peekCacheFromPool(), null === init && (init = workInProgressRoot, prevState = createCache(), init.pooledCache = prevState, prevState.refCount++, null !== prevState && (init.pooledCacheLanes |= renderLanes2), init = prevState), workInProgress2.memoizedState = {
            parent: lazyComponent,
            cache: init
          }, initializeUpdateQueue(workInProgress2), pushProvider(workInProgress2, CacheContext, init)) : (0 !== (current.lanes & renderLanes2) && (cloneUpdateQueue(current, workInProgress2), processUpdateQueue(workInProgress2, null, null, renderLanes2), suspendIfUpdateReadFromEntangledAsyncAction()), init = current.memoizedState, prevState = workInProgress2.memoizedState, init.parent !== lazyComponent ? (init = { parent: lazyComponent, cache: lazyComponent }, workInProgress2.memoizedState = init, 0 === workInProgress2.lanes && (workInProgress2.memoizedState = workInProgress2.updateQueue.baseState = init), pushProvider(workInProgress2, CacheContext, lazyComponent)) : (lazyComponent = prevState.cache, pushProvider(workInProgress2, CacheContext, lazyComponent), lazyComponent !== init.cache && propagateContextChanges(
            workInProgress2,
            [CacheContext],
            renderLanes2,
            true
          ))), reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps.children,
            renderLanes2
          ), workInProgress2.child;
        case 29:
          throw workInProgress2.pendingProps;
      }
      throw Error(formatProdErrorMessage(156, workInProgress2.tag));
    }
    function markUpdate(workInProgress2) {
      workInProgress2.flags |= 4;
    }
    function preloadResourceAndSuspendIfNeeded(workInProgress2, resource) {
      if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4))
        workInProgress2.flags &= -16777217;
      else if (workInProgress2.flags |= 16777216, !preloadResource(resource)) {
        resource = suspenseHandlerStackCursor.current;
        if (null !== resource && ((workInProgressRootRenderLanes & 4194048) === workInProgressRootRenderLanes ? null !== shellBoundary : (workInProgressRootRenderLanes & 62914560) !== workInProgressRootRenderLanes && 0 === (workInProgressRootRenderLanes & 536870912) || resource !== shellBoundary))
          throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
        workInProgress2.flags |= 8192;
      }
    }
    function scheduleRetryEffect(workInProgress2, retryQueue) {
      null !== retryQueue && (workInProgress2.flags |= 4);
      workInProgress2.flags & 16384 && (retryQueue = 22 !== workInProgress2.tag ? claimNextRetryLane() : 536870912, workInProgress2.lanes |= retryQueue, workInProgressSuspendedRetryLanes |= retryQueue);
    }
    function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
      if (!isHydrating)
        switch (renderState.tailMode) {
          case "hidden":
            hasRenderedATailFallback = renderState.tail;
            for (var lastTailNode = null; null !== hasRenderedATailFallback; )
              null !== hasRenderedATailFallback.alternate && (lastTailNode = hasRenderedATailFallback), hasRenderedATailFallback = hasRenderedATailFallback.sibling;
            null === lastTailNode ? renderState.tail = null : lastTailNode.sibling = null;
            break;
          case "collapsed":
            lastTailNode = renderState.tail;
            for (var lastTailNode$113 = null; null !== lastTailNode; )
              null !== lastTailNode.alternate && (lastTailNode$113 = lastTailNode), lastTailNode = lastTailNode.sibling;
            null === lastTailNode$113 ? hasRenderedATailFallback || null === renderState.tail ? renderState.tail = null : renderState.tail.sibling = null : lastTailNode$113.sibling = null;
        }
    }
    function bubbleProperties(completedWork) {
      var didBailout = null !== completedWork.alternate && completedWork.alternate.child === completedWork.child, newChildLanes = 0, subtreeFlags = 0;
      if (didBailout)
        for (var child$114 = completedWork.child; null !== child$114; )
          newChildLanes |= child$114.lanes | child$114.childLanes, subtreeFlags |= child$114.subtreeFlags & 65011712, subtreeFlags |= child$114.flags & 65011712, child$114.return = completedWork, child$114 = child$114.sibling;
      else
        for (child$114 = completedWork.child; null !== child$114; )
          newChildLanes |= child$114.lanes | child$114.childLanes, subtreeFlags |= child$114.subtreeFlags, subtreeFlags |= child$114.flags, child$114.return = completedWork, child$114 = child$114.sibling;
      completedWork.subtreeFlags |= subtreeFlags;
      completedWork.childLanes = newChildLanes;
      return didBailout;
    }
    function completeWork(current, workInProgress2, renderLanes2) {
      var newProps = workInProgress2.pendingProps;
      popTreeContext(workInProgress2);
      switch (workInProgress2.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return bubbleProperties(workInProgress2), null;
        case 1:
          return bubbleProperties(workInProgress2), null;
        case 3:
          renderLanes2 = workInProgress2.stateNode;
          newProps = null;
          null !== current && (newProps = current.memoizedState.cache);
          workInProgress2.memoizedState.cache !== newProps && (workInProgress2.flags |= 2048);
          popProvider(CacheContext);
          popHostContainer();
          renderLanes2.pendingContext && (renderLanes2.context = renderLanes2.pendingContext, renderLanes2.pendingContext = null);
          if (null === current || null === current.child)
            popHydrationState(workInProgress2) ? markUpdate(workInProgress2) : null === current || current.memoizedState.isDehydrated && 0 === (workInProgress2.flags & 256) || (workInProgress2.flags |= 1024, upgradeHydrationErrorsToRecoverable());
          bubbleProperties(workInProgress2);
          return null;
        case 26:
          return renderLanes2 = workInProgress2.memoizedState, null === current ? (markUpdate(workInProgress2), null !== renderLanes2 ? (bubbleProperties(workInProgress2), preloadResourceAndSuspendIfNeeded(workInProgress2, renderLanes2)) : (bubbleProperties(workInProgress2), workInProgress2.flags &= -16777217)) : renderLanes2 ? renderLanes2 !== current.memoizedState ? (markUpdate(workInProgress2), bubbleProperties(workInProgress2), preloadResourceAndSuspendIfNeeded(workInProgress2, renderLanes2)) : (bubbleProperties(workInProgress2), workInProgress2.flags &= -16777217) : (current.memoizedProps !== newProps && markUpdate(workInProgress2), bubbleProperties(workInProgress2), workInProgress2.flags &= -16777217), null;
        case 27:
          popHostContext(workInProgress2);
          renderLanes2 = rootInstanceStackCursor.current;
          var type = workInProgress2.type;
          if (null !== current && null != workInProgress2.stateNode)
            current.memoizedProps !== newProps && markUpdate(workInProgress2);
          else {
            if (!newProps) {
              if (null === workInProgress2.stateNode)
                throw Error(formatProdErrorMessage(166));
              bubbleProperties(workInProgress2);
              return null;
            }
            current = contextStackCursor.current;
            popHydrationState(workInProgress2) ? prepareToHydrateHostInstance(workInProgress2) : (current = resolveSingletonInstance(type, newProps, renderLanes2), workInProgress2.stateNode = current, markUpdate(workInProgress2));
          }
          bubbleProperties(workInProgress2);
          return null;
        case 5:
          popHostContext(workInProgress2);
          renderLanes2 = workInProgress2.type;
          if (null !== current && null != workInProgress2.stateNode)
            current.memoizedProps !== newProps && markUpdate(workInProgress2);
          else {
            if (!newProps) {
              if (null === workInProgress2.stateNode)
                throw Error(formatProdErrorMessage(166));
              bubbleProperties(workInProgress2);
              return null;
            }
            current = contextStackCursor.current;
            if (popHydrationState(workInProgress2))
              prepareToHydrateHostInstance(workInProgress2);
            else {
              type = getOwnerDocumentFromRootContainer(
                rootInstanceStackCursor.current
              );
              switch (current) {
                case 1:
                  current = type.createElementNS(
                    "http://www.w3.org/2000/svg",
                    renderLanes2
                  );
                  break;
                case 2:
                  current = type.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    renderLanes2
                  );
                  break;
                default:
                  switch (renderLanes2) {
                    case "svg":
                      current = type.createElementNS(
                        "http://www.w3.org/2000/svg",
                        renderLanes2
                      );
                      break;
                    case "math":
                      current = type.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        renderLanes2
                      );
                      break;
                    case "script":
                      current = type.createElement("div");
                      current.innerHTML = "<script><\/script>";
                      current = current.removeChild(current.firstChild);
                      break;
                    case "select":
                      current = "string" === typeof newProps.is ? type.createElement("select", { is: newProps.is }) : type.createElement("select");
                      newProps.multiple ? current.multiple = true : newProps.size && (current.size = newProps.size);
                      break;
                    default:
                      current = "string" === typeof newProps.is ? type.createElement(renderLanes2, { is: newProps.is }) : type.createElement(renderLanes2);
                  }
              }
              current[internalInstanceKey] = workInProgress2;
              current[internalPropsKey] = newProps;
              a: for (type = workInProgress2.child; null !== type; ) {
                if (5 === type.tag || 6 === type.tag)
                  current.appendChild(type.stateNode);
                else if (4 !== type.tag && 27 !== type.tag && null !== type.child) {
                  type.child.return = type;
                  type = type.child;
                  continue;
                }
                if (type === workInProgress2) break a;
                for (; null === type.sibling; ) {
                  if (null === type.return || type.return === workInProgress2)
                    break a;
                  type = type.return;
                }
                type.sibling.return = type.return;
                type = type.sibling;
              }
              workInProgress2.stateNode = current;
              a: switch (setInitialProperties(current, renderLanes2, newProps), renderLanes2) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  current = !!newProps.autoFocus;
                  break a;
                case "img":
                  current = true;
                  break a;
                default:
                  current = false;
              }
              current && markUpdate(workInProgress2);
            }
          }
          bubbleProperties(workInProgress2);
          workInProgress2.flags &= -16777217;
          return null;
        case 6:
          if (current && null != workInProgress2.stateNode)
            current.memoizedProps !== newProps && markUpdate(workInProgress2);
          else {
            if ("string" !== typeof newProps && null === workInProgress2.stateNode)
              throw Error(formatProdErrorMessage(166));
            current = rootInstanceStackCursor.current;
            if (popHydrationState(workInProgress2)) {
              current = workInProgress2.stateNode;
              renderLanes2 = workInProgress2.memoizedProps;
              newProps = null;
              type = hydrationParentFiber;
              if (null !== type)
                switch (type.tag) {
                  case 27:
                  case 5:
                    newProps = type.memoizedProps;
                }
              current[internalInstanceKey] = workInProgress2;
              current = current.nodeValue === renderLanes2 || null !== newProps && true === newProps.suppressHydrationWarning || checkForUnmatchedText(current.nodeValue, renderLanes2) ? true : false;
              current || throwOnHydrationMismatch(workInProgress2);
            } else
              current = getOwnerDocumentFromRootContainer(current).createTextNode(
                newProps
              ), current[internalInstanceKey] = workInProgress2, workInProgress2.stateNode = current;
          }
          bubbleProperties(workInProgress2);
          return null;
        case 13:
          newProps = workInProgress2.memoizedState;
          if (null === current || null !== current.memoizedState && null !== current.memoizedState.dehydrated) {
            type = popHydrationState(workInProgress2);
            if (null !== newProps && null !== newProps.dehydrated) {
              if (null === current) {
                if (!type) throw Error(formatProdErrorMessage(318));
                type = workInProgress2.memoizedState;
                type = null !== type ? type.dehydrated : null;
                if (!type) throw Error(formatProdErrorMessage(317));
                type[internalInstanceKey] = workInProgress2;
              } else
                resetHydrationState(), 0 === (workInProgress2.flags & 128) && (workInProgress2.memoizedState = null), workInProgress2.flags |= 4;
              bubbleProperties(workInProgress2);
              type = false;
            } else
              type = upgradeHydrationErrorsToRecoverable(), null !== current && null !== current.memoizedState && (current.memoizedState.hydrationErrors = type), type = true;
            if (!type) {
              if (workInProgress2.flags & 256)
                return popSuspenseHandler(workInProgress2), workInProgress2;
              popSuspenseHandler(workInProgress2);
              return null;
            }
          }
          popSuspenseHandler(workInProgress2);
          if (0 !== (workInProgress2.flags & 128))
            return workInProgress2.lanes = renderLanes2, workInProgress2;
          renderLanes2 = null !== newProps;
          current = null !== current && null !== current.memoizedState;
          if (renderLanes2) {
            newProps = workInProgress2.child;
            type = null;
            null !== newProps.alternate && null !== newProps.alternate.memoizedState && null !== newProps.alternate.memoizedState.cachePool && (type = newProps.alternate.memoizedState.cachePool.pool);
            var cache$127 = null;
            null !== newProps.memoizedState && null !== newProps.memoizedState.cachePool && (cache$127 = newProps.memoizedState.cachePool.pool);
            cache$127 !== type && (newProps.flags |= 2048);
          }
          renderLanes2 !== current && renderLanes2 && (workInProgress2.child.flags |= 8192);
          scheduleRetryEffect(workInProgress2, workInProgress2.updateQueue);
          bubbleProperties(workInProgress2);
          return null;
        case 4:
          return popHostContainer(), null === current && listenToAllSupportedEvents(workInProgress2.stateNode.containerInfo), bubbleProperties(workInProgress2), null;
        case 10:
          return popProvider(workInProgress2.type), bubbleProperties(workInProgress2), null;
        case 19:
          pop(suspenseStackCursor);
          type = workInProgress2.memoizedState;
          if (null === type) return bubbleProperties(workInProgress2), null;
          newProps = 0 !== (workInProgress2.flags & 128);
          cache$127 = type.rendering;
          if (null === cache$127)
            if (newProps) cutOffTailIfNeeded(type, false);
            else {
              if (0 !== workInProgressRootExitStatus || null !== current && 0 !== (current.flags & 128))
                for (current = workInProgress2.child; null !== current; ) {
                  cache$127 = findFirstSuspended(current);
                  if (null !== cache$127) {
                    workInProgress2.flags |= 128;
                    cutOffTailIfNeeded(type, false);
                    current = cache$127.updateQueue;
                    workInProgress2.updateQueue = current;
                    scheduleRetryEffect(workInProgress2, current);
                    workInProgress2.subtreeFlags = 0;
                    current = renderLanes2;
                    for (renderLanes2 = workInProgress2.child; null !== renderLanes2; )
                      resetWorkInProgress(renderLanes2, current), renderLanes2 = renderLanes2.sibling;
                    push(
                      suspenseStackCursor,
                      suspenseStackCursor.current & 1 | 2
                    );
                    return workInProgress2.child;
                  }
                  current = current.sibling;
                }
              null !== type.tail && now() > workInProgressRootRenderTargetTime && (workInProgress2.flags |= 128, newProps = true, cutOffTailIfNeeded(type, false), workInProgress2.lanes = 4194304);
            }
          else {
            if (!newProps)
              if (current = findFirstSuspended(cache$127), null !== current) {
                if (workInProgress2.flags |= 128, newProps = true, current = current.updateQueue, workInProgress2.updateQueue = current, scheduleRetryEffect(workInProgress2, current), cutOffTailIfNeeded(type, true), null === type.tail && "hidden" === type.tailMode && !cache$127.alternate && !isHydrating)
                  return bubbleProperties(workInProgress2), null;
              } else
                2 * now() - type.renderingStartTime > workInProgressRootRenderTargetTime && 536870912 !== renderLanes2 && (workInProgress2.flags |= 128, newProps = true, cutOffTailIfNeeded(type, false), workInProgress2.lanes = 4194304);
            type.isBackwards ? (cache$127.sibling = workInProgress2.child, workInProgress2.child = cache$127) : (current = type.last, null !== current ? current.sibling = cache$127 : workInProgress2.child = cache$127, type.last = cache$127);
          }
          if (null !== type.tail)
            return workInProgress2 = type.tail, type.rendering = workInProgress2, type.tail = workInProgress2.sibling, type.renderingStartTime = now(), workInProgress2.sibling = null, current = suspenseStackCursor.current, push(suspenseStackCursor, newProps ? current & 1 | 2 : current & 1), workInProgress2;
          bubbleProperties(workInProgress2);
          return null;
        case 22:
        case 23:
          return popSuspenseHandler(workInProgress2), popHiddenContext(), newProps = null !== workInProgress2.memoizedState, null !== current ? null !== current.memoizedState !== newProps && (workInProgress2.flags |= 8192) : newProps && (workInProgress2.flags |= 8192), newProps ? 0 !== (renderLanes2 & 536870912) && 0 === (workInProgress2.flags & 128) && (bubbleProperties(workInProgress2), workInProgress2.subtreeFlags & 6 && (workInProgress2.flags |= 8192)) : bubbleProperties(workInProgress2), renderLanes2 = workInProgress2.updateQueue, null !== renderLanes2 && scheduleRetryEffect(workInProgress2, renderLanes2.retryQueue), renderLanes2 = null, null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (renderLanes2 = current.memoizedState.cachePool.pool), newProps = null, null !== workInProgress2.memoizedState && null !== workInProgress2.memoizedState.cachePool && (newProps = workInProgress2.memoizedState.cachePool.pool), newProps !== renderLanes2 && (workInProgress2.flags |= 2048), null !== current && pop(resumedCache), null;
        case 24:
          return renderLanes2 = null, null !== current && (renderLanes2 = current.memoizedState.cache), workInProgress2.memoizedState.cache !== renderLanes2 && (workInProgress2.flags |= 2048), popProvider(CacheContext), bubbleProperties(workInProgress2), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(formatProdErrorMessage(156, workInProgress2.tag));
    }
    function unwindWork(current, workInProgress2) {
      popTreeContext(workInProgress2);
      switch (workInProgress2.tag) {
        case 1:
          return current = workInProgress2.flags, current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 3:
          return popProvider(CacheContext), popHostContainer(), current = workInProgress2.flags, 0 !== (current & 65536) && 0 === (current & 128) ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 26:
        case 27:
        case 5:
          return popHostContext(workInProgress2), null;
        case 13:
          popSuspenseHandler(workInProgress2);
          current = workInProgress2.memoizedState;
          if (null !== current && null !== current.dehydrated) {
            if (null === workInProgress2.alternate)
              throw Error(formatProdErrorMessage(340));
            resetHydrationState();
          }
          current = workInProgress2.flags;
          return current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 19:
          return pop(suspenseStackCursor), null;
        case 4:
          return popHostContainer(), null;
        case 10:
          return popProvider(workInProgress2.type), null;
        case 22:
        case 23:
          return popSuspenseHandler(workInProgress2), popHiddenContext(), null !== current && pop(resumedCache), current = workInProgress2.flags, current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 24:
          return popProvider(CacheContext), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function unwindInterruptedWork(current, interruptedWork) {
      popTreeContext(interruptedWork);
      switch (interruptedWork.tag) {
        case 3:
          popProvider(CacheContext);
          popHostContainer();
          break;
        case 26:
        case 27:
        case 5:
          popHostContext(interruptedWork);
          break;
        case 4:
          popHostContainer();
          break;
        case 13:
          popSuspenseHandler(interruptedWork);
          break;
        case 19:
          pop(suspenseStackCursor);
          break;
        case 10:
          popProvider(interruptedWork.type);
          break;
        case 22:
        case 23:
          popSuspenseHandler(interruptedWork);
          popHiddenContext();
          null !== current && pop(resumedCache);
          break;
        case 24:
          popProvider(CacheContext);
      }
    }
    function commitHookEffectListMount(flags, finishedWork) {
      try {
        var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
        if (null !== lastEffect) {
          var firstEffect = lastEffect.next;
          updateQueue = firstEffect;
          do {
            if ((updateQueue.tag & flags) === flags) {
              lastEffect = void 0;
              var create = updateQueue.create, inst = updateQueue.inst;
              lastEffect = create();
              inst.destroy = lastEffect;
            }
            updateQueue = updateQueue.next;
          } while (updateQueue !== firstEffect);
        }
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    function commitHookEffectListUnmount(flags, finishedWork, nearestMountedAncestor$jscomp$0) {
      try {
        var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
        if (null !== lastEffect) {
          var firstEffect = lastEffect.next;
          updateQueue = firstEffect;
          do {
            if ((updateQueue.tag & flags) === flags) {
              var inst = updateQueue.inst, destroy = inst.destroy;
              if (void 0 !== destroy) {
                inst.destroy = void 0;
                lastEffect = finishedWork;
                var nearestMountedAncestor = nearestMountedAncestor$jscomp$0, destroy_ = destroy;
                try {
                  destroy_();
                } catch (error) {
                  captureCommitPhaseError(
                    lastEffect,
                    nearestMountedAncestor,
                    error
                  );
                }
              }
            }
            updateQueue = updateQueue.next;
          } while (updateQueue !== firstEffect);
        }
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    function commitClassCallbacks(finishedWork) {
      var updateQueue = finishedWork.updateQueue;
      if (null !== updateQueue) {
        var instance = finishedWork.stateNode;
        try {
          commitCallbacks(updateQueue, instance);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
    }
    function safelyCallComponentWillUnmount(current, nearestMountedAncestor, instance) {
      instance.props = resolveClassComponentProps(
        current.type,
        current.memoizedProps
      );
      instance.state = current.memoizedState;
      try {
        instance.componentWillUnmount();
      } catch (error) {
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      }
    }
    function safelyAttachRef(current, nearestMountedAncestor) {
      try {
        var ref = current.ref;
        if (null !== ref) {
          switch (current.tag) {
            case 26:
            case 27:
            case 5:
              var instanceToUse = current.stateNode;
              break;
            case 30:
              instanceToUse = current.stateNode;
              break;
            default:
              instanceToUse = current.stateNode;
          }
          "function" === typeof ref ? current.refCleanup = ref(instanceToUse) : ref.current = instanceToUse;
        }
      } catch (error) {
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      }
    }
    function safelyDetachRef(current, nearestMountedAncestor) {
      var ref = current.ref, refCleanup = current.refCleanup;
      if (null !== ref)
        if ("function" === typeof refCleanup)
          try {
            refCleanup();
          } catch (error) {
            captureCommitPhaseError(current, nearestMountedAncestor, error);
          } finally {
            current.refCleanup = null, current = current.alternate, null != current && (current.refCleanup = null);
          }
        else if ("function" === typeof ref)
          try {
            ref(null);
          } catch (error$143) {
            captureCommitPhaseError(current, nearestMountedAncestor, error$143);
          }
        else ref.current = null;
    }
    function commitHostMount(finishedWork) {
      var type = finishedWork.type, props = finishedWork.memoizedProps, instance = finishedWork.stateNode;
      try {
        a: switch (type) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            props.autoFocus && instance.focus();
            break a;
          case "img":
            props.src ? instance.src = props.src : props.srcSet && (instance.srcset = props.srcSet);
        }
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    function commitHostUpdate(finishedWork, newProps, oldProps) {
      try {
        var domElement = finishedWork.stateNode;
        updateProperties(domElement, finishedWork.type, oldProps, newProps);
        domElement[internalPropsKey] = newProps;
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    function isHostParent(fiber) {
      return 5 === fiber.tag || 3 === fiber.tag || 26 === fiber.tag || 27 === fiber.tag && isSingletonScope(fiber.type) || 4 === fiber.tag;
    }
    function getHostSibling(fiber) {
      a: for (; ; ) {
        for (; null === fiber.sibling; ) {
          if (null === fiber.return || isHostParent(fiber.return)) return null;
          fiber = fiber.return;
        }
        fiber.sibling.return = fiber.return;
        for (fiber = fiber.sibling; 5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag; ) {
          if (27 === fiber.tag && isSingletonScope(fiber.type)) continue a;
          if (fiber.flags & 2) continue a;
          if (null === fiber.child || 4 === fiber.tag) continue a;
          else fiber.child.return = fiber, fiber = fiber.child;
        }
        if (!(fiber.flags & 2)) return fiber.stateNode;
      }
    }
    function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
      var tag = node.tag;
      if (5 === tag || 6 === tag)
        node = node.stateNode, before ? (9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent).insertBefore(node, before) : (before = 9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent, before.appendChild(node), parent = parent._reactRootContainer, null !== parent && void 0 !== parent || null !== before.onclick || (before.onclick = noop$1));
      else if (4 !== tag && (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode, before = null), node = node.child, null !== node))
        for (insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling; null !== node; )
          insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling;
    }
    function insertOrAppendPlacementNode(node, before, parent) {
      var tag = node.tag;
      if (5 === tag || 6 === tag)
        node = node.stateNode, before ? parent.insertBefore(node, before) : parent.appendChild(node);
      else if (4 !== tag && (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode), node = node.child, null !== node))
        for (insertOrAppendPlacementNode(node, before, parent), node = node.sibling; null !== node; )
          insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
    }
    function commitHostSingletonAcquisition(finishedWork) {
      var singleton = finishedWork.stateNode, props = finishedWork.memoizedProps;
      try {
        for (var type = finishedWork.type, attributes = singleton.attributes; attributes.length; )
          singleton.removeAttributeNode(attributes[0]);
        setInitialProperties(singleton, type, props);
        singleton[internalInstanceKey] = finishedWork;
        singleton[internalPropsKey] = props;
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    var offscreenSubtreeIsHidden = false, offscreenSubtreeWasHidden = false, needsFormReset = false, PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set, nextEffect = null;
    function commitBeforeMutationEffects(root2, firstChild) {
      root2 = root2.containerInfo;
      eventsEnabled = _enabled;
      root2 = getActiveElementDeep(root2);
      if (hasSelectionCapabilities(root2)) {
        if ("selectionStart" in root2)
          var JSCompiler_temp = {
            start: root2.selectionStart,
            end: root2.selectionEnd
          };
        else
          a: {
            JSCompiler_temp = (JSCompiler_temp = root2.ownerDocument) && JSCompiler_temp.defaultView || window;
            var selection = JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
            if (selection && 0 !== selection.rangeCount) {
              JSCompiler_temp = selection.anchorNode;
              var anchorOffset = selection.anchorOffset, focusNode = selection.focusNode;
              selection = selection.focusOffset;
              try {
                JSCompiler_temp.nodeType, focusNode.nodeType;
              } catch (e$20) {
                JSCompiler_temp = null;
                break a;
              }
              var length = 0, start = -1, end = -1, indexWithinAnchor = 0, indexWithinFocus = 0, node = root2, parentNode = null;
              b: for (; ; ) {
                for (var next; ; ) {
                  node !== JSCompiler_temp || 0 !== anchorOffset && 3 !== node.nodeType || (start = length + anchorOffset);
                  node !== focusNode || 0 !== selection && 3 !== node.nodeType || (end = length + selection);
                  3 === node.nodeType && (length += node.nodeValue.length);
                  if (null === (next = node.firstChild)) break;
                  parentNode = node;
                  node = next;
                }
                for (; ; ) {
                  if (node === root2) break b;
                  parentNode === JSCompiler_temp && ++indexWithinAnchor === anchorOffset && (start = length);
                  parentNode === focusNode && ++indexWithinFocus === selection && (end = length);
                  if (null !== (next = node.nextSibling)) break;
                  node = parentNode;
                  parentNode = node.parentNode;
                }
                node = next;
              }
              JSCompiler_temp = -1 === start || -1 === end ? null : { start, end };
            } else JSCompiler_temp = null;
          }
        JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
      } else JSCompiler_temp = null;
      selectionInformation = { focusedElem: root2, selectionRange: JSCompiler_temp };
      _enabled = false;
      for (nextEffect = firstChild; null !== nextEffect; )
        if (firstChild = nextEffect, root2 = firstChild.child, 0 !== (firstChild.subtreeFlags & 1024) && null !== root2)
          root2.return = firstChild, nextEffect = root2;
        else
          for (; null !== nextEffect; ) {
            firstChild = nextEffect;
            focusNode = firstChild.alternate;
            root2 = firstChild.flags;
            switch (firstChild.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (0 !== (root2 & 1024) && null !== focusNode) {
                  root2 = void 0;
                  JSCompiler_temp = firstChild;
                  anchorOffset = focusNode.memoizedProps;
                  focusNode = focusNode.memoizedState;
                  selection = JSCompiler_temp.stateNode;
                  try {
                    var resolvedPrevProps = resolveClassComponentProps(
                      JSCompiler_temp.type,
                      anchorOffset,
                      JSCompiler_temp.elementType === JSCompiler_temp.type
                    );
                    root2 = selection.getSnapshotBeforeUpdate(
                      resolvedPrevProps,
                      focusNode
                    );
                    selection.__reactInternalSnapshotBeforeUpdate = root2;
                  } catch (error) {
                    captureCommitPhaseError(
                      JSCompiler_temp,
                      JSCompiler_temp.return,
                      error
                    );
                  }
                }
                break;
              case 3:
                if (0 !== (root2 & 1024)) {
                  if (root2 = firstChild.stateNode.containerInfo, JSCompiler_temp = root2.nodeType, 9 === JSCompiler_temp)
                    clearContainerSparingly(root2);
                  else if (1 === JSCompiler_temp)
                    switch (root2.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        clearContainerSparingly(root2);
                        break;
                      default:
                        root2.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (0 !== (root2 & 1024)) throw Error(formatProdErrorMessage(163));
            }
            root2 = firstChild.sibling;
            if (null !== root2) {
              root2.return = firstChild.return;
              nextEffect = root2;
              break;
            }
            nextEffect = firstChild.return;
          }
    }
    function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
      var flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 0:
        case 11:
        case 15:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          flags & 4 && commitHookEffectListMount(5, finishedWork);
          break;
        case 1:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          if (flags & 4)
            if (finishedRoot = finishedWork.stateNode, null === current)
              try {
                finishedRoot.componentDidMount();
              } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
              }
            else {
              var prevProps = resolveClassComponentProps(
                finishedWork.type,
                current.memoizedProps
              );
              current = current.memoizedState;
              try {
                finishedRoot.componentDidUpdate(
                  prevProps,
                  current,
                  finishedRoot.__reactInternalSnapshotBeforeUpdate
                );
              } catch (error$142) {
                captureCommitPhaseError(
                  finishedWork,
                  finishedWork.return,
                  error$142
                );
              }
            }
          flags & 64 && commitClassCallbacks(finishedWork);
          flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
          break;
        case 3:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          if (flags & 64 && (finishedRoot = finishedWork.updateQueue, null !== finishedRoot)) {
            current = null;
            if (null !== finishedWork.child)
              switch (finishedWork.child.tag) {
                case 27:
                case 5:
                  current = finishedWork.child.stateNode;
                  break;
                case 1:
                  current = finishedWork.child.stateNode;
              }
            try {
              commitCallbacks(finishedRoot, current);
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          }
          break;
        case 27:
          null === current && flags & 4 && commitHostSingletonAcquisition(finishedWork);
        case 26:
        case 5:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          null === current && flags & 4 && commitHostMount(finishedWork);
          flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
          break;
        case 12:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          break;
        case 13:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
          flags & 64 && (finishedRoot = finishedWork.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot && (finishedWork = retryDehydratedSuspenseBoundary.bind(
            null,
            finishedWork
          ), registerSuspenseInstanceRetry(finishedRoot, finishedWork))));
          break;
        case 22:
          flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
          if (!flags) {
            current = null !== current && null !== current.memoizedState || offscreenSubtreeWasHidden;
            prevProps = offscreenSubtreeIsHidden;
            var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
            offscreenSubtreeIsHidden = flags;
            (offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden ? recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              0 !== (finishedWork.subtreeFlags & 8772)
            ) : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            offscreenSubtreeIsHidden = prevProps;
            offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
          }
          break;
        case 30:
          break;
        default:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      }
    }
    function detachFiberAfterEffects(fiber) {
      var alternate = fiber.alternate;
      null !== alternate && (fiber.alternate = null, detachFiberAfterEffects(alternate));
      fiber.child = null;
      fiber.deletions = null;
      fiber.sibling = null;
      5 === fiber.tag && (alternate = fiber.stateNode, null !== alternate && detachDeletedInstance(alternate));
      fiber.stateNode = null;
      fiber.return = null;
      fiber.dependencies = null;
      fiber.memoizedProps = null;
      fiber.memoizedState = null;
      fiber.pendingProps = null;
      fiber.stateNode = null;
      fiber.updateQueue = null;
    }
    var hostParent = null, hostParentIsContainer = false;
    function recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, parent) {
      for (parent = parent.child; null !== parent; )
        commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent), parent = parent.sibling;
    }
    function commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, deletedFiber) {
      if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
        try {
          injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
        } catch (err) {
        }
      switch (deletedFiber.tag) {
        case 26:
          offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          deletedFiber.memoizedState ? deletedFiber.memoizedState.count-- : deletedFiber.stateNode && (deletedFiber = deletedFiber.stateNode, deletedFiber.parentNode.removeChild(deletedFiber));
          break;
        case 27:
          offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
          var prevHostParent = hostParent, prevHostParentIsContainer = hostParentIsContainer;
          isSingletonScope(deletedFiber.type) && (hostParent = deletedFiber.stateNode, hostParentIsContainer = false);
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          releaseSingletonInstance(deletedFiber.stateNode);
          hostParent = prevHostParent;
          hostParentIsContainer = prevHostParentIsContainer;
          break;
        case 5:
          offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
        case 6:
          prevHostParent = hostParent;
          prevHostParentIsContainer = hostParentIsContainer;
          hostParent = null;
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          hostParent = prevHostParent;
          hostParentIsContainer = prevHostParentIsContainer;
          if (null !== hostParent)
            if (hostParentIsContainer)
              try {
                (9 === hostParent.nodeType ? hostParent.body : "HTML" === hostParent.nodeName ? hostParent.ownerDocument.body : hostParent).removeChild(deletedFiber.stateNode);
              } catch (error) {
                captureCommitPhaseError(
                  deletedFiber,
                  nearestMountedAncestor,
                  error
                );
              }
            else
              try {
                hostParent.removeChild(deletedFiber.stateNode);
              } catch (error) {
                captureCommitPhaseError(
                  deletedFiber,
                  nearestMountedAncestor,
                  error
                );
              }
          break;
        case 18:
          null !== hostParent && (hostParentIsContainer ? (finishedRoot = hostParent, clearSuspenseBoundary(
            9 === finishedRoot.nodeType ? finishedRoot.body : "HTML" === finishedRoot.nodeName ? finishedRoot.ownerDocument.body : finishedRoot,
            deletedFiber.stateNode
          ), retryIfBlockedOn(finishedRoot)) : clearSuspenseBoundary(hostParent, deletedFiber.stateNode));
          break;
        case 4:
          prevHostParent = hostParent;
          prevHostParentIsContainer = hostParentIsContainer;
          hostParent = deletedFiber.stateNode.containerInfo;
          hostParentIsContainer = true;
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          hostParent = prevHostParent;
          hostParentIsContainer = prevHostParentIsContainer;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          offscreenSubtreeWasHidden || commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
          offscreenSubtreeWasHidden || commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          break;
        case 1:
          offscreenSubtreeWasHidden || (safelyDetachRef(deletedFiber, nearestMountedAncestor), prevHostParent = deletedFiber.stateNode, "function" === typeof prevHostParent.componentWillUnmount && safelyCallComponentWillUnmount(
            deletedFiber,
            nearestMountedAncestor,
            prevHostParent
          ));
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          break;
        case 21:
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          break;
        case 22:
          offscreenSubtreeWasHidden = (prevHostParent = offscreenSubtreeWasHidden) || null !== deletedFiber.memoizedState;
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          offscreenSubtreeWasHidden = prevHostParent;
          break;
        default:
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
      }
    }
    function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
      if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot))))
        try {
          retryIfBlockedOn(finishedRoot);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
    }
    function getRetryCache(finishedWork) {
      switch (finishedWork.tag) {
        case 13:
        case 19:
          var retryCache = finishedWork.stateNode;
          null === retryCache && (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
          return retryCache;
        case 22:
          return finishedWork = finishedWork.stateNode, retryCache = finishedWork._retryCache, null === retryCache && (retryCache = finishedWork._retryCache = new PossiblyWeakSet()), retryCache;
        default:
          throw Error(formatProdErrorMessage(435, finishedWork.tag));
      }
    }
    function attachSuspenseRetryListeners(finishedWork, wakeables) {
      var retryCache = getRetryCache(finishedWork);
      wakeables.forEach(function(wakeable) {
        var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
        retryCache.has(wakeable) || (retryCache.add(wakeable), wakeable.then(retry, retry));
      });
    }
    function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
      var deletions = parentFiber.deletions;
      if (null !== deletions)
        for (var i = 0; i < deletions.length; i++) {
          var childToDelete = deletions[i], root2 = root$jscomp$0, returnFiber = parentFiber, parent = returnFiber;
          a: for (; null !== parent; ) {
            switch (parent.tag) {
              case 27:
                if (isSingletonScope(parent.type)) {
                  hostParent = parent.stateNode;
                  hostParentIsContainer = false;
                  break a;
                }
                break;
              case 5:
                hostParent = parent.stateNode;
                hostParentIsContainer = false;
                break a;
              case 3:
              case 4:
                hostParent = parent.stateNode.containerInfo;
                hostParentIsContainer = true;
                break a;
            }
            parent = parent.return;
          }
          if (null === hostParent) throw Error(formatProdErrorMessage(160));
          commitDeletionEffectsOnFiber(root2, returnFiber, childToDelete);
          hostParent = null;
          hostParentIsContainer = false;
          root2 = childToDelete.alternate;
          null !== root2 && (root2.return = null);
          childToDelete.return = null;
        }
      if (parentFiber.subtreeFlags & 13878)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          commitMutationEffectsOnFiber(parentFiber, root$jscomp$0), parentFiber = parentFiber.sibling;
    }
    var currentHoistableRoot = null;
    function commitMutationEffectsOnFiber(finishedWork, root2) {
      var current = finishedWork.alternate, flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 4 && (commitHookEffectListUnmount(3, finishedWork, finishedWork.return), commitHookEffectListMount(3, finishedWork), commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
          break;
        case 1:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
          flags & 64 && offscreenSubtreeIsHidden && (finishedWork = finishedWork.updateQueue, null !== finishedWork && (flags = finishedWork.callbacks, null !== flags && (current = finishedWork.shared.hiddenCallbacks, finishedWork.shared.hiddenCallbacks = null === current ? flags : current.concat(flags))));
          break;
        case 26:
          var hoistableRoot = currentHoistableRoot;
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
          if (flags & 4) {
            var currentResource = null !== current ? current.memoizedState : null;
            flags = finishedWork.memoizedState;
            if (null === current)
              if (null === flags)
                if (null === finishedWork.stateNode) {
                  a: {
                    flags = finishedWork.type;
                    current = finishedWork.memoizedProps;
                    hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
                    b: switch (flags) {
                      case "title":
                        currentResource = hoistableRoot.getElementsByTagName("title")[0];
                        if (!currentResource || currentResource[internalHoistableMarker] || currentResource[internalInstanceKey] || "http://www.w3.org/2000/svg" === currentResource.namespaceURI || currentResource.hasAttribute("itemprop"))
                          currentResource = hoistableRoot.createElement(flags), hoistableRoot.head.insertBefore(
                            currentResource,
                            hoistableRoot.querySelector("head > title")
                          );
                        setInitialProperties(currentResource, flags, current);
                        currentResource[internalInstanceKey] = finishedWork;
                        markNodeAsHoistable(currentResource);
                        flags = currentResource;
                        break a;
                      case "link":
                        var maybeNodes = getHydratableHoistableCache(
                          "link",
                          "href",
                          hoistableRoot
                        ).get(flags + (current.href || ""));
                        if (maybeNodes) {
                          for (var i = 0; i < maybeNodes.length; i++)
                            if (currentResource = maybeNodes[i], currentResource.getAttribute("href") === (null == current.href || "" === current.href ? null : current.href) && currentResource.getAttribute("rel") === (null == current.rel ? null : current.rel) && currentResource.getAttribute("title") === (null == current.title ? null : current.title) && currentResource.getAttribute("crossorigin") === (null == current.crossOrigin ? null : current.crossOrigin)) {
                              maybeNodes.splice(i, 1);
                              break b;
                            }
                        }
                        currentResource = hoistableRoot.createElement(flags);
                        setInitialProperties(currentResource, flags, current);
                        hoistableRoot.head.appendChild(currentResource);
                        break;
                      case "meta":
                        if (maybeNodes = getHydratableHoistableCache(
                          "meta",
                          "content",
                          hoistableRoot
                        ).get(flags + (current.content || ""))) {
                          for (i = 0; i < maybeNodes.length; i++)
                            if (currentResource = maybeNodes[i], currentResource.getAttribute("content") === (null == current.content ? null : "" + current.content) && currentResource.getAttribute("name") === (null == current.name ? null : current.name) && currentResource.getAttribute("property") === (null == current.property ? null : current.property) && currentResource.getAttribute("http-equiv") === (null == current.httpEquiv ? null : current.httpEquiv) && currentResource.getAttribute("charset") === (null == current.charSet ? null : current.charSet)) {
                              maybeNodes.splice(i, 1);
                              break b;
                            }
                        }
                        currentResource = hoistableRoot.createElement(flags);
                        setInitialProperties(currentResource, flags, current);
                        hoistableRoot.head.appendChild(currentResource);
                        break;
                      default:
                        throw Error(formatProdErrorMessage(468, flags));
                    }
                    currentResource[internalInstanceKey] = finishedWork;
                    markNodeAsHoistable(currentResource);
                    flags = currentResource;
                  }
                  finishedWork.stateNode = flags;
                } else
                  mountHoistable(
                    hoistableRoot,
                    finishedWork.type,
                    finishedWork.stateNode
                  );
              else
                finishedWork.stateNode = acquireResource(
                  hoistableRoot,
                  flags,
                  finishedWork.memoizedProps
                );
            else
              currentResource !== flags ? (null === currentResource ? null !== current.stateNode && (current = current.stateNode, current.parentNode.removeChild(current)) : currentResource.count--, null === flags ? mountHoistable(
                hoistableRoot,
                finishedWork.type,
                finishedWork.stateNode
              ) : acquireResource(
                hoistableRoot,
                flags,
                finishedWork.memoizedProps
              )) : null === flags && null !== finishedWork.stateNode && commitHostUpdate(
                finishedWork,
                finishedWork.memoizedProps,
                current.memoizedProps
              );
          }
          break;
        case 27:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
          null !== current && flags & 4 && commitHostUpdate(
            finishedWork,
            finishedWork.memoizedProps,
            current.memoizedProps
          );
          break;
        case 5:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
          if (finishedWork.flags & 32) {
            hoistableRoot = finishedWork.stateNode;
            try {
              setTextContent(hoistableRoot, "");
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          }
          flags & 4 && null != finishedWork.stateNode && (hoistableRoot = finishedWork.memoizedProps, commitHostUpdate(
            finishedWork,
            hoistableRoot,
            null !== current ? current.memoizedProps : hoistableRoot
          ));
          flags & 1024 && (needsFormReset = true);
          break;
        case 6:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          if (flags & 4) {
            if (null === finishedWork.stateNode)
              throw Error(formatProdErrorMessage(162));
            flags = finishedWork.memoizedProps;
            current = finishedWork.stateNode;
            try {
              current.nodeValue = flags;
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          }
          break;
        case 3:
          tagCaches = null;
          hoistableRoot = currentHoistableRoot;
          currentHoistableRoot = getHoistableRoot(root2.containerInfo);
          recursivelyTraverseMutationEffects(root2, finishedWork);
          currentHoistableRoot = hoistableRoot;
          commitReconciliationEffects(finishedWork);
          if (flags & 4 && null !== current && current.memoizedState.isDehydrated)
            try {
              retryIfBlockedOn(root2.containerInfo);
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          needsFormReset && (needsFormReset = false, recursivelyResetForms(finishedWork));
          break;
        case 4:
          flags = currentHoistableRoot;
          currentHoistableRoot = getHoistableRoot(
            finishedWork.stateNode.containerInfo
          );
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          currentHoistableRoot = flags;
          break;
        case 12:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          break;
        case 13:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          finishedWork.child.flags & 8192 && null !== finishedWork.memoizedState !== (null !== current && null !== current.memoizedState) && (globalMostRecentFallbackTime = now());
          flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
          break;
        case 22:
          hoistableRoot = null !== finishedWork.memoizedState;
          var wasHidden = null !== current && null !== current.memoizedState, prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden, prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
          offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
          offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
          recursivelyTraverseMutationEffects(root2, finishedWork);
          offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
          offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
          commitReconciliationEffects(finishedWork);
          if (flags & 8192)
            a: for (root2 = finishedWork.stateNode, root2._visibility = hoistableRoot ? root2._visibility & -2 : root2._visibility | 1, hoistableRoot && (null === current || wasHidden || offscreenSubtreeIsHidden || offscreenSubtreeWasHidden || recursivelyTraverseDisappearLayoutEffects(finishedWork)), current = null, root2 = finishedWork; ; ) {
              if (5 === root2.tag || 26 === root2.tag) {
                if (null === current) {
                  wasHidden = current = root2;
                  try {
                    if (currentResource = wasHidden.stateNode, hoistableRoot)
                      maybeNodes = currentResource.style, "function" === typeof maybeNodes.setProperty ? maybeNodes.setProperty("display", "none", "important") : maybeNodes.display = "none";
                    else {
                      i = wasHidden.stateNode;
                      var styleProp = wasHidden.memoizedProps.style, display = void 0 !== styleProp && null !== styleProp && styleProp.hasOwnProperty("display") ? styleProp.display : null;
                      i.style.display = null == display || "boolean" === typeof display ? "" : ("" + display).trim();
                    }
                  } catch (error) {
                    captureCommitPhaseError(wasHidden, wasHidden.return, error);
                  }
                }
              } else if (6 === root2.tag) {
                if (null === current) {
                  wasHidden = root2;
                  try {
                    wasHidden.stateNode.nodeValue = hoistableRoot ? "" : wasHidden.memoizedProps;
                  } catch (error) {
                    captureCommitPhaseError(wasHidden, wasHidden.return, error);
                  }
                }
              } else if ((22 !== root2.tag && 23 !== root2.tag || null === root2.memoizedState || root2 === finishedWork) && null !== root2.child) {
                root2.child.return = root2;
                root2 = root2.child;
                continue;
              }
              if (root2 === finishedWork) break a;
              for (; null === root2.sibling; ) {
                if (null === root2.return || root2.return === finishedWork) break a;
                current === root2 && (current = null);
                root2 = root2.return;
              }
              current === root2 && (current = null);
              root2.sibling.return = root2.return;
              root2 = root2.sibling;
            }
          flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (current = flags.retryQueue, null !== current && (flags.retryQueue = null, attachSuspenseRetryListeners(finishedWork, current))));
          break;
        case 19:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          recursivelyTraverseMutationEffects(root2, finishedWork), commitReconciliationEffects(finishedWork);
      }
    }
    function commitReconciliationEffects(finishedWork) {
      var flags = finishedWork.flags;
      if (flags & 2) {
        try {
          for (var hostParentFiber, parentFiber = finishedWork.return; null !== parentFiber; ) {
            if (isHostParent(parentFiber)) {
              hostParentFiber = parentFiber;
              break;
            }
            parentFiber = parentFiber.return;
          }
          if (null == hostParentFiber) throw Error(formatProdErrorMessage(160));
          switch (hostParentFiber.tag) {
            case 27:
              var parent = hostParentFiber.stateNode, before = getHostSibling(finishedWork);
              insertOrAppendPlacementNode(finishedWork, before, parent);
              break;
            case 5:
              var parent$144 = hostParentFiber.stateNode;
              hostParentFiber.flags & 32 && (setTextContent(parent$144, ""), hostParentFiber.flags &= -33);
              var before$145 = getHostSibling(finishedWork);
              insertOrAppendPlacementNode(finishedWork, before$145, parent$144);
              break;
            case 3:
            case 4:
              var parent$146 = hostParentFiber.stateNode.containerInfo, before$147 = getHostSibling(finishedWork);
              insertOrAppendPlacementNodeIntoContainer(
                finishedWork,
                before$147,
                parent$146
              );
              break;
            default:
              throw Error(formatProdErrorMessage(161));
          }
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
        finishedWork.flags &= -3;
      }
      flags & 4096 && (finishedWork.flags &= -4097);
    }
    function recursivelyResetForms(parentFiber) {
      if (parentFiber.subtreeFlags & 1024)
        for (parentFiber = parentFiber.child; null !== parentFiber; ) {
          var fiber = parentFiber;
          recursivelyResetForms(fiber);
          5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
          parentFiber = parentFiber.sibling;
        }
    }
    function recursivelyTraverseLayoutEffects(root2, parentFiber) {
      if (parentFiber.subtreeFlags & 8772)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          commitLayoutEffectOnFiber(root2, parentFiber.alternate, parentFiber), parentFiber = parentFiber.sibling;
    }
    function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
      for (parentFiber = parentFiber.child; null !== parentFiber; ) {
        var finishedWork = parentFiber;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 1:
            safelyDetachRef(finishedWork, finishedWork.return);
            var instance = finishedWork.stateNode;
            "function" === typeof instance.componentWillUnmount && safelyCallComponentWillUnmount(
              finishedWork,
              finishedWork.return,
              instance
            );
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 27:
            releaseSingletonInstance(finishedWork.stateNode);
          case 26:
          case 5:
            safelyDetachRef(finishedWork, finishedWork.return);
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 22:
            null === finishedWork.memoizedState && recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 30:
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          default:
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
        }
        parentFiber = parentFiber.sibling;
      }
    }
    function recursivelyTraverseReappearLayoutEffects(finishedRoot$jscomp$0, parentFiber, includeWorkInProgressEffects) {
      includeWorkInProgressEffects = includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
      for (parentFiber = parentFiber.child; null !== parentFiber; ) {
        var current = parentFiber.alternate, finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            commitHookEffectListMount(4, finishedWork);
            break;
          case 1:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            current = finishedWork;
            finishedRoot = current.stateNode;
            if ("function" === typeof finishedRoot.componentDidMount)
              try {
                finishedRoot.componentDidMount();
              } catch (error) {
                captureCommitPhaseError(current, current.return, error);
              }
            current = finishedWork;
            finishedRoot = current.updateQueue;
            if (null !== finishedRoot) {
              var instance = current.stateNode;
              try {
                var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
                if (null !== hiddenCallbacks)
                  for (finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0; finishedRoot < hiddenCallbacks.length; finishedRoot++)
                    callCallback(hiddenCallbacks[finishedRoot], instance);
              } catch (error) {
                captureCommitPhaseError(current, current.return, error);
              }
            }
            includeWorkInProgressEffects && flags & 64 && commitClassCallbacks(finishedWork);
            safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 27:
            commitHostSingletonAcquisition(finishedWork);
          case 26:
          case 5:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && null === current && flags & 4 && commitHostMount(finishedWork);
            safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 12:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            break;
          case 13:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
            break;
          case 22:
            null === finishedWork.memoizedState && recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 30:
            break;
          default:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
        }
        parentFiber = parentFiber.sibling;
      }
    }
    function commitOffscreenPassiveMountEffects(current, finishedWork) {
      var previousCache = null;
      null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (previousCache = current.memoizedState.cachePool.pool);
      current = null;
      null !== finishedWork.memoizedState && null !== finishedWork.memoizedState.cachePool && (current = finishedWork.memoizedState.cachePool.pool);
      current !== previousCache && (null != current && current.refCount++, null != previousCache && releaseCache(previousCache));
    }
    function commitCachePassiveMountEffect(current, finishedWork) {
      current = null;
      null !== finishedWork.alternate && (current = finishedWork.alternate.memoizedState.cache);
      finishedWork = finishedWork.memoizedState.cache;
      finishedWork !== current && (finishedWork.refCount++, null != current && releaseCache(current));
    }
    function recursivelyTraversePassiveMountEffects(root2, parentFiber, committedLanes, committedTransitions) {
      if (parentFiber.subtreeFlags & 10256)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          commitPassiveMountOnFiber(
            root2,
            parentFiber,
            committedLanes,
            committedTransitions
          ), parentFiber = parentFiber.sibling;
    }
    function commitPassiveMountOnFiber(finishedRoot, finishedWork, committedLanes, committedTransitions) {
      var flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 0:
        case 11:
        case 15:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          flags & 2048 && commitHookEffectListMount(9, finishedWork);
          break;
        case 1:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          break;
        case 3:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          flags & 2048 && (finishedRoot = null, null !== finishedWork.alternate && (finishedRoot = finishedWork.alternate.memoizedState.cache), finishedWork = finishedWork.memoizedState.cache, finishedWork !== finishedRoot && (finishedWork.refCount++, null != finishedRoot && releaseCache(finishedRoot)));
          break;
        case 12:
          if (flags & 2048) {
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
            finishedRoot = finishedWork.stateNode;
            try {
              var _finishedWork$memoize2 = finishedWork.memoizedProps, id = _finishedWork$memoize2.id, onPostCommit = _finishedWork$memoize2.onPostCommit;
              "function" === typeof onPostCommit && onPostCommit(
                id,
                null === finishedWork.alternate ? "mount" : "update",
                finishedRoot.passiveEffectDuration,
                -0
              );
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          } else
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
          break;
        case 13:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          break;
        case 23:
          break;
        case 22:
          _finishedWork$memoize2 = finishedWork.stateNode;
          id = finishedWork.alternate;
          null !== finishedWork.memoizedState ? _finishedWork$memoize2._visibility & 2 ? recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          ) : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork) : _finishedWork$memoize2._visibility & 2 ? recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          ) : (_finishedWork$memoize2._visibility |= 2, recursivelyTraverseReconnectPassiveEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions,
            0 !== (finishedWork.subtreeFlags & 10256)
          ));
          flags & 2048 && commitOffscreenPassiveMountEffects(id, finishedWork);
          break;
        case 24:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
          break;
        default:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
      }
    }
    function recursivelyTraverseReconnectPassiveEffects(finishedRoot$jscomp$0, parentFiber, committedLanes$jscomp$0, committedTransitions$jscomp$0, includeWorkInProgressEffects) {
      includeWorkInProgressEffects = includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 10256);
      for (parentFiber = parentFiber.child; null !== parentFiber; ) {
        var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, committedLanes = committedLanes$jscomp$0, committedTransitions = committedTransitions$jscomp$0, flags = finishedWork.flags;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            );
            commitHookEffectListMount(8, finishedWork);
            break;
          case 23:
            break;
          case 22:
            var instance = finishedWork.stateNode;
            null !== finishedWork.memoizedState ? instance._visibility & 2 ? recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            ) : recursivelyTraverseAtomicPassiveEffects(
              finishedRoot,
              finishedWork
            ) : (instance._visibility |= 2, recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            ));
            includeWorkInProgressEffects && flags & 2048 && commitOffscreenPassiveMountEffects(
              finishedWork.alternate,
              finishedWork
            );
            break;
          case 24:
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
            break;
          default:
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            );
        }
        parentFiber = parentFiber.sibling;
      }
    }
    function recursivelyTraverseAtomicPassiveEffects(finishedRoot$jscomp$0, parentFiber) {
      if (parentFiber.subtreeFlags & 10256)
        for (parentFiber = parentFiber.child; null !== parentFiber; ) {
          var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
          switch (finishedWork.tag) {
            case 22:
              recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
              flags & 2048 && commitOffscreenPassiveMountEffects(
                finishedWork.alternate,
                finishedWork
              );
              break;
            case 24:
              recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
              flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
              break;
            default:
              recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          }
          parentFiber = parentFiber.sibling;
        }
    }
    var suspenseyCommitFlag = 8192;
    function recursivelyAccumulateSuspenseyCommit(parentFiber) {
      if (parentFiber.subtreeFlags & suspenseyCommitFlag)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          accumulateSuspenseyCommitOnFiber(parentFiber), parentFiber = parentFiber.sibling;
    }
    function accumulateSuspenseyCommitOnFiber(fiber) {
      switch (fiber.tag) {
        case 26:
          recursivelyAccumulateSuspenseyCommit(fiber);
          fiber.flags & suspenseyCommitFlag && null !== fiber.memoizedState && suspendResource(
            currentHoistableRoot,
            fiber.memoizedState,
            fiber.memoizedProps
          );
          break;
        case 5:
          recursivelyAccumulateSuspenseyCommit(fiber);
          break;
        case 3:
        case 4:
          var previousHoistableRoot = currentHoistableRoot;
          currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
          recursivelyAccumulateSuspenseyCommit(fiber);
          currentHoistableRoot = previousHoistableRoot;
          break;
        case 22:
          null === fiber.memoizedState && (previousHoistableRoot = fiber.alternate, null !== previousHoistableRoot && null !== previousHoistableRoot.memoizedState ? (previousHoistableRoot = suspenseyCommitFlag, suspenseyCommitFlag = 16777216, recursivelyAccumulateSuspenseyCommit(fiber), suspenseyCommitFlag = previousHoistableRoot) : recursivelyAccumulateSuspenseyCommit(fiber));
          break;
        default:
          recursivelyAccumulateSuspenseyCommit(fiber);
      }
    }
    function detachAlternateSiblings(parentFiber) {
      var previousFiber = parentFiber.alternate;
      if (null !== previousFiber && (parentFiber = previousFiber.child, null !== parentFiber)) {
        previousFiber.child = null;
        do
          previousFiber = parentFiber.sibling, parentFiber.sibling = null, parentFiber = previousFiber;
        while (null !== parentFiber);
      }
    }
    function recursivelyTraversePassiveUnmountEffects(parentFiber) {
      var deletions = parentFiber.deletions;
      if (0 !== (parentFiber.flags & 16)) {
        if (null !== deletions)
          for (var i = 0; i < deletions.length; i++) {
            var childToDelete = deletions[i];
            nextEffect = childToDelete;
            commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
              childToDelete,
              parentFiber
            );
          }
        detachAlternateSiblings(parentFiber);
      }
      if (parentFiber.subtreeFlags & 10256)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          commitPassiveUnmountOnFiber(parentFiber), parentFiber = parentFiber.sibling;
    }
    function commitPassiveUnmountOnFiber(finishedWork) {
      switch (finishedWork.tag) {
        case 0:
        case 11:
        case 15:
          recursivelyTraversePassiveUnmountEffects(finishedWork);
          finishedWork.flags & 2048 && commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
          break;
        case 3:
          recursivelyTraversePassiveUnmountEffects(finishedWork);
          break;
        case 12:
          recursivelyTraversePassiveUnmountEffects(finishedWork);
          break;
        case 22:
          var instance = finishedWork.stateNode;
          null !== finishedWork.memoizedState && instance._visibility & 2 && (null === finishedWork.return || 13 !== finishedWork.return.tag) ? (instance._visibility &= -3, recursivelyTraverseDisconnectPassiveEffects(finishedWork)) : recursivelyTraversePassiveUnmountEffects(finishedWork);
          break;
        default:
          recursivelyTraversePassiveUnmountEffects(finishedWork);
      }
    }
    function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
      var deletions = parentFiber.deletions;
      if (0 !== (parentFiber.flags & 16)) {
        if (null !== deletions)
          for (var i = 0; i < deletions.length; i++) {
            var childToDelete = deletions[i];
            nextEffect = childToDelete;
            commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
              childToDelete,
              parentFiber
            );
          }
        detachAlternateSiblings(parentFiber);
      }
      for (parentFiber = parentFiber.child; null !== parentFiber; ) {
        deletions = parentFiber;
        switch (deletions.tag) {
          case 0:
          case 11:
          case 15:
            commitHookEffectListUnmount(8, deletions, deletions.return);
            recursivelyTraverseDisconnectPassiveEffects(deletions);
            break;
          case 22:
            i = deletions.stateNode;
            i._visibility & 2 && (i._visibility &= -3, recursivelyTraverseDisconnectPassiveEffects(deletions));
            break;
          default:
            recursivelyTraverseDisconnectPassiveEffects(deletions);
        }
        parentFiber = parentFiber.sibling;
      }
    }
    function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(deletedSubtreeRoot, nearestMountedAncestor) {
      for (; null !== nextEffect; ) {
        var fiber = nextEffect;
        switch (fiber.tag) {
          case 0:
          case 11:
          case 15:
            commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
            break;
          case 23:
          case 22:
            if (null !== fiber.memoizedState && null !== fiber.memoizedState.cachePool) {
              var cache = fiber.memoizedState.cachePool.pool;
              null != cache && cache.refCount++;
            }
            break;
          case 24:
            releaseCache(fiber.memoizedState.cache);
        }
        cache = fiber.child;
        if (null !== cache) cache.return = fiber, nextEffect = cache;
        else
          a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
            cache = nextEffect;
            var sibling = cache.sibling, returnFiber = cache.return;
            detachFiberAfterEffects(cache);
            if (cache === fiber) {
              nextEffect = null;
              break a;
            }
            if (null !== sibling) {
              sibling.return = returnFiber;
              nextEffect = sibling;
              break a;
            }
            nextEffect = returnFiber;
          }
      }
    }
    var DefaultAsyncDispatcher = {
      getCacheForType: function(resourceType) {
        var cache = readContext(CacheContext), cacheForType = cache.data.get(resourceType);
        void 0 === cacheForType && (cacheForType = resourceType(), cache.data.set(resourceType, cacheForType));
        return cacheForType;
      }
    }, PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map, executionContext = 0, workInProgressRoot = null, workInProgress = null, workInProgressRootRenderLanes = 0, workInProgressSuspendedReason = 0, workInProgressThrownValue = null, workInProgressRootDidSkipSuspendedSiblings = false, workInProgressRootIsPrerendering = false, workInProgressRootDidAttachPingListener = false, entangledRenderLanes = 0, workInProgressRootExitStatus = 0, workInProgressRootSkippedLanes = 0, workInProgressRootInterleavedUpdatedLanes = 0, workInProgressRootPingedLanes = 0, workInProgressDeferredLane = 0, workInProgressSuspendedRetryLanes = 0, workInProgressRootConcurrentErrors = null, workInProgressRootRecoverableErrors = null, workInProgressRootDidIncludeRecursiveRenderUpdate = false, globalMostRecentFallbackTime = 0, workInProgressRootRenderTargetTime = Infinity, workInProgressTransitions = null, legacyErrorBoundariesThatAlreadyFailed = null, pendingEffectsStatus = 0, pendingEffectsRoot = null, pendingFinishedWork = null, pendingEffectsLanes = 0, pendingEffectsRemainingLanes = 0, pendingPassiveTransitions = null, pendingRecoverableErrors = null, nestedUpdateCount = 0, rootWithNestedUpdates = null;
    function requestUpdateLane() {
      if (0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes)
        return workInProgressRootRenderLanes & -workInProgressRootRenderLanes;
      if (null !== ReactSharedInternals.T) {
        var actionScopeLane = currentEntangledLane;
        return 0 !== actionScopeLane ? actionScopeLane : requestTransitionLane();
      }
      return resolveUpdatePriority();
    }
    function requestDeferredLane() {
      0 === workInProgressDeferredLane && (workInProgressDeferredLane = 0 === (workInProgressRootRenderLanes & 536870912) || isHydrating ? claimNextTransitionLane() : 536870912);
      var suspenseHandler = suspenseHandlerStackCursor.current;
      null !== suspenseHandler && (suspenseHandler.flags |= 32);
      return workInProgressDeferredLane;
    }
    function scheduleUpdateOnFiber(root2, fiber, lane) {
      if (root2 === workInProgressRoot && (2 === workInProgressSuspendedReason || 9 === workInProgressSuspendedReason) || null !== root2.cancelPendingCommit)
        prepareFreshStack(root2, 0), markRootSuspended(
          root2,
          workInProgressRootRenderLanes,
          workInProgressDeferredLane,
          false
        );
      markRootUpdated$1(root2, lane);
      if (0 === (executionContext & 2) || root2 !== workInProgressRoot)
        root2 === workInProgressRoot && (0 === (executionContext & 2) && (workInProgressRootInterleavedUpdatedLanes |= lane), 4 === workInProgressRootExitStatus && markRootSuspended(
          root2,
          workInProgressRootRenderLanes,
          workInProgressDeferredLane,
          false
        )), ensureRootIsScheduled(root2);
    }
    function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
      if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
      var shouldTimeSlice = !forceSync && 0 === (lanes & 124) && 0 === (lanes & root$jscomp$0.expiredLanes) || checkIfRootIsPrerendering(root$jscomp$0, lanes), exitStatus = shouldTimeSlice ? renderRootConcurrent(root$jscomp$0, lanes) : renderRootSync(root$jscomp$0, lanes, true), renderWasConcurrent = shouldTimeSlice;
      do {
        if (0 === exitStatus) {
          workInProgressRootIsPrerendering && !shouldTimeSlice && markRootSuspended(root$jscomp$0, lanes, 0, false);
          break;
        } else {
          forceSync = root$jscomp$0.current.alternate;
          if (renderWasConcurrent && !isRenderConsistentWithExternalStores(forceSync)) {
            exitStatus = renderRootSync(root$jscomp$0, lanes, false);
            renderWasConcurrent = false;
            continue;
          }
          if (2 === exitStatus) {
            renderWasConcurrent = lanes;
            if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent)
              var JSCompiler_inline_result = 0;
            else
              JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913, JSCompiler_inline_result = 0 !== JSCompiler_inline_result ? JSCompiler_inline_result : JSCompiler_inline_result & 536870912 ? 536870912 : 0;
            if (0 !== JSCompiler_inline_result) {
              lanes = JSCompiler_inline_result;
              a: {
                var root2 = root$jscomp$0;
                exitStatus = workInProgressRootConcurrentErrors;
                var wasRootDehydrated = root2.current.memoizedState.isDehydrated;
                wasRootDehydrated && (prepareFreshStack(root2, JSCompiler_inline_result).flags |= 256);
                JSCompiler_inline_result = renderRootSync(
                  root2,
                  JSCompiler_inline_result,
                  false
                );
                if (2 !== JSCompiler_inline_result) {
                  if (workInProgressRootDidAttachPingListener && !wasRootDehydrated) {
                    root2.errorRecoveryDisabledLanes |= renderWasConcurrent;
                    workInProgressRootInterleavedUpdatedLanes |= renderWasConcurrent;
                    exitStatus = 4;
                    break a;
                  }
                  renderWasConcurrent = workInProgressRootRecoverableErrors;
                  workInProgressRootRecoverableErrors = exitStatus;
                  null !== renderWasConcurrent && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = renderWasConcurrent : workInProgressRootRecoverableErrors.push.apply(
                    workInProgressRootRecoverableErrors,
                    renderWasConcurrent
                  ));
                }
                exitStatus = JSCompiler_inline_result;
              }
              renderWasConcurrent = false;
              if (2 !== exitStatus) continue;
            }
          }
          if (1 === exitStatus) {
            prepareFreshStack(root$jscomp$0, 0);
            markRootSuspended(root$jscomp$0, lanes, 0, true);
            break;
          }
          a: {
            shouldTimeSlice = root$jscomp$0;
            renderWasConcurrent = exitStatus;
            switch (renderWasConcurrent) {
              case 0:
              case 1:
                throw Error(formatProdErrorMessage(345));
              case 4:
                if ((lanes & 4194048) !== lanes) break;
              case 6:
                markRootSuspended(
                  shouldTimeSlice,
                  lanes,
                  workInProgressDeferredLane,
                  !workInProgressRootDidSkipSuspendedSiblings
                );
                break a;
              case 2:
                workInProgressRootRecoverableErrors = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(formatProdErrorMessage(329));
            }
            if ((lanes & 62914560) === lanes && (exitStatus = globalMostRecentFallbackTime + 300 - now(), 10 < exitStatus)) {
              markRootSuspended(
                shouldTimeSlice,
                lanes,
                workInProgressDeferredLane,
                !workInProgressRootDidSkipSuspendedSiblings
              );
              if (0 !== getNextLanes(shouldTimeSlice, 0, true)) break a;
              shouldTimeSlice.timeoutHandle = scheduleTimeout(
                commitRootWhenReady.bind(
                  null,
                  shouldTimeSlice,
                  forceSync,
                  workInProgressRootRecoverableErrors,
                  workInProgressTransitions,
                  workInProgressRootDidIncludeRecursiveRenderUpdate,
                  lanes,
                  workInProgressDeferredLane,
                  workInProgressRootInterleavedUpdatedLanes,
                  workInProgressSuspendedRetryLanes,
                  workInProgressRootDidSkipSuspendedSiblings,
                  renderWasConcurrent,
                  2,
                  -0,
                  0
                ),
                exitStatus
              );
              break a;
            }
            commitRootWhenReady(
              shouldTimeSlice,
              forceSync,
              workInProgressRootRecoverableErrors,
              workInProgressTransitions,
              workInProgressRootDidIncludeRecursiveRenderUpdate,
              lanes,
              workInProgressDeferredLane,
              workInProgressRootInterleavedUpdatedLanes,
              workInProgressSuspendedRetryLanes,
              workInProgressRootDidSkipSuspendedSiblings,
              renderWasConcurrent,
              0,
              -0,
              0
            );
          }
        }
        break;
      } while (1);
      ensureRootIsScheduled(root$jscomp$0);
    }
    function commitRootWhenReady(root2, finishedWork, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, lanes, spawnedLane, updatedLanes, suspendedRetryLanes, didSkipSuspendedSiblings, exitStatus, suspendedCommitReason, completedRenderStartTime, completedRenderEndTime) {
      root2.timeoutHandle = -1;
      suspendedCommitReason = finishedWork.subtreeFlags;
      if (suspendedCommitReason & 8192 || 16785408 === (suspendedCommitReason & 16785408)) {
        if (suspendedState = { stylesheets: null, count: 0, unsuspend: noop }, accumulateSuspenseyCommitOnFiber(finishedWork), suspendedCommitReason = waitForCommitToBeReady(), null !== suspendedCommitReason) {
          root2.cancelPendingCommit = suspendedCommitReason(
            commitRoot.bind(
              null,
              root2,
              finishedWork,
              lanes,
              recoverableErrors,
              transitions,
              didIncludeRenderPhaseUpdate,
              spawnedLane,
              updatedLanes,
              suspendedRetryLanes,
              exitStatus,
              1,
              completedRenderStartTime,
              completedRenderEndTime
            )
          );
          markRootSuspended(root2, lanes, spawnedLane, !didSkipSuspendedSiblings);
          return;
        }
      }
      commitRoot(
        root2,
        finishedWork,
        lanes,
        recoverableErrors,
        transitions,
        didIncludeRenderPhaseUpdate,
        spawnedLane,
        updatedLanes,
        suspendedRetryLanes
      );
    }
    function isRenderConsistentWithExternalStores(finishedWork) {
      for (var node = finishedWork; ; ) {
        var tag = node.tag;
        if ((0 === tag || 11 === tag || 15 === tag) && node.flags & 16384 && (tag = node.updateQueue, null !== tag && (tag = tag.stores, null !== tag)))
          for (var i = 0; i < tag.length; i++) {
            var check = tag[i], getSnapshot = check.getSnapshot;
            check = check.value;
            try {
              if (!objectIs(getSnapshot(), check)) return false;
            } catch (error) {
              return false;
            }
          }
        tag = node.child;
        if (node.subtreeFlags & 16384 && null !== tag)
          tag.return = node, node = tag;
        else {
          if (node === finishedWork) break;
          for (; null === node.sibling; ) {
            if (null === node.return || node.return === finishedWork) return true;
            node = node.return;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
      }
      return true;
    }
    function markRootSuspended(root2, suspendedLanes, spawnedLane, didAttemptEntireTree) {
      suspendedLanes &= ~workInProgressRootPingedLanes;
      suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
      root2.suspendedLanes |= suspendedLanes;
      root2.pingedLanes &= ~suspendedLanes;
      didAttemptEntireTree && (root2.warmLanes |= suspendedLanes);
      didAttemptEntireTree = root2.expirationTimes;
      for (var lanes = suspendedLanes; 0 < lanes; ) {
        var index$4 = 31 - clz32(lanes), lane = 1 << index$4;
        didAttemptEntireTree[index$4] = -1;
        lanes &= ~lane;
      }
      0 !== spawnedLane && markSpawnedDeferredLane(root2, spawnedLane, suspendedLanes);
    }
    function flushSyncWork$1() {
      return 0 === (executionContext & 6) ? (flushSyncWorkAcrossRoots_impl(0), false) : true;
    }
    function resetWorkInProgressStack() {
      if (null !== workInProgress) {
        if (0 === workInProgressSuspendedReason)
          var interruptedWork = workInProgress.return;
        else
          interruptedWork = workInProgress, lastContextDependency = currentlyRenderingFiber$1 = null, resetHooksOnUnwind(interruptedWork), thenableState = null, thenableIndexCounter = 0, interruptedWork = workInProgress;
        for (; null !== interruptedWork; )
          unwindInterruptedWork(interruptedWork.alternate, interruptedWork), interruptedWork = interruptedWork.return;
        workInProgress = null;
      }
    }
    function prepareFreshStack(root2, lanes) {
      var timeoutHandle = root2.timeoutHandle;
      -1 !== timeoutHandle && (root2.timeoutHandle = -1, cancelTimeout(timeoutHandle));
      timeoutHandle = root2.cancelPendingCommit;
      null !== timeoutHandle && (root2.cancelPendingCommit = null, timeoutHandle());
      resetWorkInProgressStack();
      workInProgressRoot = root2;
      workInProgress = timeoutHandle = createWorkInProgress(root2.current, null);
      workInProgressRootRenderLanes = lanes;
      workInProgressSuspendedReason = 0;
      workInProgressThrownValue = null;
      workInProgressRootDidSkipSuspendedSiblings = false;
      workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root2, lanes);
      workInProgressRootDidAttachPingListener = false;
      workInProgressSuspendedRetryLanes = workInProgressDeferredLane = workInProgressRootPingedLanes = workInProgressRootInterleavedUpdatedLanes = workInProgressRootSkippedLanes = workInProgressRootExitStatus = 0;
      workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors = null;
      workInProgressRootDidIncludeRecursiveRenderUpdate = false;
      0 !== (lanes & 8) && (lanes |= lanes & 32);
      var allEntangledLanes = root2.entangledLanes;
      if (0 !== allEntangledLanes)
        for (root2 = root2.entanglements, allEntangledLanes &= lanes; 0 < allEntangledLanes; ) {
          var index$2 = 31 - clz32(allEntangledLanes), lane = 1 << index$2;
          lanes |= root2[index$2];
          allEntangledLanes &= ~lane;
        }
      entangledRenderLanes = lanes;
      finishQueueingConcurrentUpdates();
      return timeoutHandle;
    }
    function handleThrow(root2, thrownValue) {
      currentlyRenderingFiber = null;
      ReactSharedInternals.H = ContextOnlyDispatcher;
      thrownValue === SuspenseException || thrownValue === SuspenseActionException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 3) : thrownValue === SuspenseyCommitException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 4) : workInProgressSuspendedReason = thrownValue === SelectiveHydrationException ? 8 : null !== thrownValue && "object" === typeof thrownValue && "function" === typeof thrownValue.then ? 6 : 1;
      workInProgressThrownValue = thrownValue;
      null === workInProgress && (workInProgressRootExitStatus = 1, logUncaughtError(
        root2,
        createCapturedValueAtFiber(thrownValue, root2.current)
      ));
    }
    function pushDispatcher() {
      var prevDispatcher = ReactSharedInternals.H;
      ReactSharedInternals.H = ContextOnlyDispatcher;
      return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
    }
    function pushAsyncDispatcher() {
      var prevAsyncDispatcher = ReactSharedInternals.A;
      ReactSharedInternals.A = DefaultAsyncDispatcher;
      return prevAsyncDispatcher;
    }
    function renderDidSuspendDelayIfPossible() {
      workInProgressRootExitStatus = 4;
      workInProgressRootDidSkipSuspendedSiblings || (workInProgressRootRenderLanes & 4194048) !== workInProgressRootRenderLanes && null !== suspenseHandlerStackCursor.current || (workInProgressRootIsPrerendering = true);
      0 === (workInProgressRootSkippedLanes & 134217727) && 0 === (workInProgressRootInterleavedUpdatedLanes & 134217727) || null === workInProgressRoot || markRootSuspended(
        workInProgressRoot,
        workInProgressRootRenderLanes,
        workInProgressDeferredLane,
        false
      );
    }
    function renderRootSync(root2, lanes, shouldYieldForPrerendering) {
      var prevExecutionContext = executionContext;
      executionContext |= 2;
      var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
      if (workInProgressRoot !== root2 || workInProgressRootRenderLanes !== lanes)
        workInProgressTransitions = null, prepareFreshStack(root2, lanes);
      lanes = false;
      var exitStatus = workInProgressRootExitStatus;
      a: do
        try {
          if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
            var unitOfWork = workInProgress, thrownValue = workInProgressThrownValue;
            switch (workInProgressSuspendedReason) {
              case 8:
                resetWorkInProgressStack();
                exitStatus = 6;
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                null === suspenseHandlerStackCursor.current && (lanes = true);
                var reason = workInProgressSuspendedReason;
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, reason);
                if (shouldYieldForPrerendering && workInProgressRootIsPrerendering) {
                  exitStatus = 0;
                  break a;
                }
                break;
              default:
                reason = workInProgressSuspendedReason, workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, reason);
            }
          }
          workLoopSync();
          exitStatus = workInProgressRootExitStatus;
          break;
        } catch (thrownValue$167) {
          handleThrow(root2, thrownValue$167);
        }
      while (1);
      lanes && root2.shellSuspendCounter++;
      lastContextDependency = currentlyRenderingFiber$1 = null;
      executionContext = prevExecutionContext;
      ReactSharedInternals.H = prevDispatcher;
      ReactSharedInternals.A = prevAsyncDispatcher;
      null === workInProgress && (workInProgressRoot = null, workInProgressRootRenderLanes = 0, finishQueueingConcurrentUpdates());
      return exitStatus;
    }
    function workLoopSync() {
      for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
    }
    function renderRootConcurrent(root2, lanes) {
      var prevExecutionContext = executionContext;
      executionContext |= 2;
      var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
      workInProgressRoot !== root2 || workInProgressRootRenderLanes !== lanes ? (workInProgressTransitions = null, workInProgressRootRenderTargetTime = now() + 500, prepareFreshStack(root2, lanes)) : workInProgressRootIsPrerendering = checkIfRootIsPrerendering(
        root2,
        lanes
      );
      a: do
        try {
          if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
            lanes = workInProgress;
            var thrownValue = workInProgressThrownValue;
            b: switch (workInProgressSuspendedReason) {
              case 1:
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                throwAndUnwindWorkLoop(root2, lanes, thrownValue, 1);
                break;
              case 2:
              case 9:
                if (isThenableResolved(thrownValue)) {
                  workInProgressSuspendedReason = 0;
                  workInProgressThrownValue = null;
                  replaySuspendedUnitOfWork(lanes);
                  break;
                }
                lanes = function() {
                  2 !== workInProgressSuspendedReason && 9 !== workInProgressSuspendedReason || workInProgressRoot !== root2 || (workInProgressSuspendedReason = 7);
                  ensureRootIsScheduled(root2);
                };
                thrownValue.then(lanes, lanes);
                break a;
              case 3:
                workInProgressSuspendedReason = 7;
                break a;
              case 4:
                workInProgressSuspendedReason = 5;
                break a;
              case 7:
                isThenableResolved(thrownValue) ? (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, replaySuspendedUnitOfWork(lanes)) : (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root2, lanes, thrownValue, 7));
                break;
              case 5:
                var resource = null;
                switch (workInProgress.tag) {
                  case 26:
                    resource = workInProgress.memoizedState;
                  case 5:
                  case 27:
                    var hostFiber = workInProgress;
                    if (resource ? preloadResource(resource) : 1) {
                      workInProgressSuspendedReason = 0;
                      workInProgressThrownValue = null;
                      var sibling = hostFiber.sibling;
                      if (null !== sibling) workInProgress = sibling;
                      else {
                        var returnFiber = hostFiber.return;
                        null !== returnFiber ? (workInProgress = returnFiber, completeUnitOfWork(returnFiber)) : workInProgress = null;
                      }
                      break b;
                    }
                }
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                throwAndUnwindWorkLoop(root2, lanes, thrownValue, 5);
                break;
              case 6:
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                throwAndUnwindWorkLoop(root2, lanes, thrownValue, 6);
                break;
              case 8:
                resetWorkInProgressStack();
                workInProgressRootExitStatus = 6;
                break a;
              default:
                throw Error(formatProdErrorMessage(462));
            }
          }
          workLoopConcurrentByScheduler();
          break;
        } catch (thrownValue$169) {
          handleThrow(root2, thrownValue$169);
        }
      while (1);
      lastContextDependency = currentlyRenderingFiber$1 = null;
      ReactSharedInternals.H = prevDispatcher;
      ReactSharedInternals.A = prevAsyncDispatcher;
      executionContext = prevExecutionContext;
      if (null !== workInProgress) return 0;
      workInProgressRoot = null;
      workInProgressRootRenderLanes = 0;
      finishQueueingConcurrentUpdates();
      return workInProgressRootExitStatus;
    }
    function workLoopConcurrentByScheduler() {
      for (; null !== workInProgress && !shouldYield(); )
        performUnitOfWork(workInProgress);
    }
    function performUnitOfWork(unitOfWork) {
      var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
      unitOfWork.memoizedProps = unitOfWork.pendingProps;
      null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
    }
    function replaySuspendedUnitOfWork(unitOfWork) {
      var next = unitOfWork;
      var current = next.alternate;
      switch (next.tag) {
        case 15:
        case 0:
          next = replayFunctionComponent(
            current,
            next,
            next.pendingProps,
            next.type,
            void 0,
            workInProgressRootRenderLanes
          );
          break;
        case 11:
          next = replayFunctionComponent(
            current,
            next,
            next.pendingProps,
            next.type.render,
            next.ref,
            workInProgressRootRenderLanes
          );
          break;
        case 5:
          resetHooksOnUnwind(next);
        default:
          unwindInterruptedWork(current, next), next = workInProgress = resetWorkInProgress(next, entangledRenderLanes), next = beginWork(current, next, entangledRenderLanes);
      }
      unitOfWork.memoizedProps = unitOfWork.pendingProps;
      null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
    }
    function throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, suspendedReason) {
      lastContextDependency = currentlyRenderingFiber$1 = null;
      resetHooksOnUnwind(unitOfWork);
      thenableState = null;
      thenableIndexCounter = 0;
      var returnFiber = unitOfWork.return;
      try {
        if (throwException(
          root2,
          returnFiber,
          unitOfWork,
          thrownValue,
          workInProgressRootRenderLanes
        )) {
          workInProgressRootExitStatus = 1;
          logUncaughtError(
            root2,
            createCapturedValueAtFiber(thrownValue, root2.current)
          );
          workInProgress = null;
          return;
        }
      } catch (error) {
        if (null !== returnFiber) throw workInProgress = returnFiber, error;
        workInProgressRootExitStatus = 1;
        logUncaughtError(
          root2,
          createCapturedValueAtFiber(thrownValue, root2.current)
        );
        workInProgress = null;
        return;
      }
      if (unitOfWork.flags & 32768) {
        if (isHydrating || 1 === suspendedReason) root2 = true;
        else if (workInProgressRootIsPrerendering || 0 !== (workInProgressRootRenderLanes & 536870912))
          root2 = false;
        else if (workInProgressRootDidSkipSuspendedSiblings = root2 = true, 2 === suspendedReason || 9 === suspendedReason || 3 === suspendedReason || 6 === suspendedReason)
          suspendedReason = suspenseHandlerStackCursor.current, null !== suspendedReason && 13 === suspendedReason.tag && (suspendedReason.flags |= 16384);
        unwindUnitOfWork(unitOfWork, root2);
      } else completeUnitOfWork(unitOfWork);
    }
    function completeUnitOfWork(unitOfWork) {
      var completedWork = unitOfWork;
      do {
        if (0 !== (completedWork.flags & 32768)) {
          unwindUnitOfWork(
            completedWork,
            workInProgressRootDidSkipSuspendedSiblings
          );
          return;
        }
        unitOfWork = completedWork.return;
        var next = completeWork(
          completedWork.alternate,
          completedWork,
          entangledRenderLanes
        );
        if (null !== next) {
          workInProgress = next;
          return;
        }
        completedWork = completedWork.sibling;
        if (null !== completedWork) {
          workInProgress = completedWork;
          return;
        }
        workInProgress = completedWork = unitOfWork;
      } while (null !== completedWork);
      0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
    }
    function unwindUnitOfWork(unitOfWork, skipSiblings) {
      do {
        var next = unwindWork(unitOfWork.alternate, unitOfWork);
        if (null !== next) {
          next.flags &= 32767;
          workInProgress = next;
          return;
        }
        next = unitOfWork.return;
        null !== next && (next.flags |= 32768, next.subtreeFlags = 0, next.deletions = null);
        if (!skipSiblings && (unitOfWork = unitOfWork.sibling, null !== unitOfWork)) {
          workInProgress = unitOfWork;
          return;
        }
        workInProgress = unitOfWork = next;
      } while (null !== unitOfWork);
      workInProgressRootExitStatus = 6;
      workInProgress = null;
    }
    function commitRoot(root2, finishedWork, lanes, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes) {
      root2.cancelPendingCommit = null;
      do
        flushPendingEffects();
      while (0 !== pendingEffectsStatus);
      if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
      if (null !== finishedWork) {
        if (finishedWork === root2.current) throw Error(formatProdErrorMessage(177));
        didIncludeRenderPhaseUpdate = finishedWork.lanes | finishedWork.childLanes;
        didIncludeRenderPhaseUpdate |= concurrentlyUpdatedLanes;
        markRootFinished(
          root2,
          lanes,
          didIncludeRenderPhaseUpdate,
          spawnedLane,
          updatedLanes,
          suspendedRetryLanes
        );
        root2 === workInProgressRoot && (workInProgress = workInProgressRoot = null, workInProgressRootRenderLanes = 0);
        pendingFinishedWork = finishedWork;
        pendingEffectsRoot = root2;
        pendingEffectsLanes = lanes;
        pendingEffectsRemainingLanes = didIncludeRenderPhaseUpdate;
        pendingPassiveTransitions = transitions;
        pendingRecoverableErrors = recoverableErrors;
        0 !== (finishedWork.subtreeFlags & 10256) || 0 !== (finishedWork.flags & 10256) ? (root2.callbackNode = null, root2.callbackPriority = 0, scheduleCallback$1(NormalPriority$1, function() {
          flushPassiveEffects();
          return null;
        })) : (root2.callbackNode = null, root2.callbackPriority = 0);
        recoverableErrors = 0 !== (finishedWork.flags & 13878);
        if (0 !== (finishedWork.subtreeFlags & 13878) || recoverableErrors) {
          recoverableErrors = ReactSharedInternals.T;
          ReactSharedInternals.T = null;
          transitions = ReactDOMSharedInternals.p;
          ReactDOMSharedInternals.p = 2;
          spawnedLane = executionContext;
          executionContext |= 4;
          try {
            commitBeforeMutationEffects(root2, finishedWork, lanes);
          } finally {
            executionContext = spawnedLane, ReactDOMSharedInternals.p = transitions, ReactSharedInternals.T = recoverableErrors;
          }
        }
        pendingEffectsStatus = 1;
        flushMutationEffects();
        flushLayoutEffects();
        flushSpawnedWork();
      }
    }
    function flushMutationEffects() {
      if (1 === pendingEffectsStatus) {
        pendingEffectsStatus = 0;
        var root2 = pendingEffectsRoot, finishedWork = pendingFinishedWork, rootMutationHasEffect = 0 !== (finishedWork.flags & 13878);
        if (0 !== (finishedWork.subtreeFlags & 13878) || rootMutationHasEffect) {
          rootMutationHasEffect = ReactSharedInternals.T;
          ReactSharedInternals.T = null;
          var previousPriority = ReactDOMSharedInternals.p;
          ReactDOMSharedInternals.p = 2;
          var prevExecutionContext = executionContext;
          executionContext |= 4;
          try {
            commitMutationEffectsOnFiber(finishedWork, root2);
            var priorSelectionInformation = selectionInformation, curFocusedElem = getActiveElementDeep(root2.containerInfo), priorFocusedElem = priorSelectionInformation.focusedElem, priorSelectionRange = priorSelectionInformation.selectionRange;
            if (curFocusedElem !== priorFocusedElem && priorFocusedElem && priorFocusedElem.ownerDocument && containsNode(
              priorFocusedElem.ownerDocument.documentElement,
              priorFocusedElem
            )) {
              if (null !== priorSelectionRange && hasSelectionCapabilities(priorFocusedElem)) {
                var start = priorSelectionRange.start, end = priorSelectionRange.end;
                void 0 === end && (end = start);
                if ("selectionStart" in priorFocusedElem)
                  priorFocusedElem.selectionStart = start, priorFocusedElem.selectionEnd = Math.min(
                    end,
                    priorFocusedElem.value.length
                  );
                else {
                  var doc = priorFocusedElem.ownerDocument || document, win = doc && doc.defaultView || window;
                  if (win.getSelection) {
                    var selection = win.getSelection(), length = priorFocusedElem.textContent.length, start$jscomp$0 = Math.min(priorSelectionRange.start, length), end$jscomp$0 = void 0 === priorSelectionRange.end ? start$jscomp$0 : Math.min(priorSelectionRange.end, length);
                    !selection.extend && start$jscomp$0 > end$jscomp$0 && (curFocusedElem = end$jscomp$0, end$jscomp$0 = start$jscomp$0, start$jscomp$0 = curFocusedElem);
                    var startMarker = getNodeForCharacterOffset(
                      priorFocusedElem,
                      start$jscomp$0
                    ), endMarker = getNodeForCharacterOffset(
                      priorFocusedElem,
                      end$jscomp$0
                    );
                    if (startMarker && endMarker && (1 !== selection.rangeCount || selection.anchorNode !== startMarker.node || selection.anchorOffset !== startMarker.offset || selection.focusNode !== endMarker.node || selection.focusOffset !== endMarker.offset)) {
                      var range = doc.createRange();
                      range.setStart(startMarker.node, startMarker.offset);
                      selection.removeAllRanges();
                      start$jscomp$0 > end$jscomp$0 ? (selection.addRange(range), selection.extend(endMarker.node, endMarker.offset)) : (range.setEnd(endMarker.node, endMarker.offset), selection.addRange(range));
                    }
                  }
                }
              }
              doc = [];
              for (selection = priorFocusedElem; selection = selection.parentNode; )
                1 === selection.nodeType && doc.push({
                  element: selection,
                  left: selection.scrollLeft,
                  top: selection.scrollTop
                });
              "function" === typeof priorFocusedElem.focus && priorFocusedElem.focus();
              for (priorFocusedElem = 0; priorFocusedElem < doc.length; priorFocusedElem++) {
                var info = doc[priorFocusedElem];
                info.element.scrollLeft = info.left;
                info.element.scrollTop = info.top;
              }
            }
            _enabled = !!eventsEnabled;
            selectionInformation = eventsEnabled = null;
          } finally {
            executionContext = prevExecutionContext, ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = rootMutationHasEffect;
          }
        }
        root2.current = finishedWork;
        pendingEffectsStatus = 2;
      }
    }
    function flushLayoutEffects() {
      if (2 === pendingEffectsStatus) {
        pendingEffectsStatus = 0;
        var root2 = pendingEffectsRoot, finishedWork = pendingFinishedWork, rootHasLayoutEffect = 0 !== (finishedWork.flags & 8772);
        if (0 !== (finishedWork.subtreeFlags & 8772) || rootHasLayoutEffect) {
          rootHasLayoutEffect = ReactSharedInternals.T;
          ReactSharedInternals.T = null;
          var previousPriority = ReactDOMSharedInternals.p;
          ReactDOMSharedInternals.p = 2;
          var prevExecutionContext = executionContext;
          executionContext |= 4;
          try {
            commitLayoutEffectOnFiber(root2, finishedWork.alternate, finishedWork);
          } finally {
            executionContext = prevExecutionContext, ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = rootHasLayoutEffect;
          }
        }
        pendingEffectsStatus = 3;
      }
    }
    function flushSpawnedWork() {
      if (4 === pendingEffectsStatus || 3 === pendingEffectsStatus) {
        pendingEffectsStatus = 0;
        requestPaint();
        var root2 = pendingEffectsRoot, finishedWork = pendingFinishedWork, lanes = pendingEffectsLanes, recoverableErrors = pendingRecoverableErrors;
        0 !== (finishedWork.subtreeFlags & 10256) || 0 !== (finishedWork.flags & 10256) ? pendingEffectsStatus = 5 : (pendingEffectsStatus = 0, pendingFinishedWork = pendingEffectsRoot = null, releaseRootPooledCache(root2, root2.pendingLanes));
        var remainingLanes = root2.pendingLanes;
        0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
        lanesToEventPriority(lanes);
        finishedWork = finishedWork.stateNode;
        if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
          try {
            injectedHook.onCommitFiberRoot(
              rendererID,
              finishedWork,
              void 0,
              128 === (finishedWork.current.flags & 128)
            );
          } catch (err) {
          }
        if (null !== recoverableErrors) {
          finishedWork = ReactSharedInternals.T;
          remainingLanes = ReactDOMSharedInternals.p;
          ReactDOMSharedInternals.p = 2;
          ReactSharedInternals.T = null;
          try {
            for (var onRecoverableError = root2.onRecoverableError, i = 0; i < recoverableErrors.length; i++) {
              var recoverableError = recoverableErrors[i];
              onRecoverableError(recoverableError.value, {
                componentStack: recoverableError.stack
              });
            }
          } finally {
            ReactSharedInternals.T = finishedWork, ReactDOMSharedInternals.p = remainingLanes;
          }
        }
        0 !== (pendingEffectsLanes & 3) && flushPendingEffects();
        ensureRootIsScheduled(root2);
        remainingLanes = root2.pendingLanes;
        0 !== (lanes & 4194090) && 0 !== (remainingLanes & 42) ? root2 === rootWithNestedUpdates ? nestedUpdateCount++ : (nestedUpdateCount = 0, rootWithNestedUpdates = root2) : nestedUpdateCount = 0;
        flushSyncWorkAcrossRoots_impl(0);
      }
    }
    function releaseRootPooledCache(root2, remainingLanes) {
      0 === (root2.pooledCacheLanes &= remainingLanes) && (remainingLanes = root2.pooledCache, null != remainingLanes && (root2.pooledCache = null, releaseCache(remainingLanes)));
    }
    function flushPendingEffects(wasDelayedCommit) {
      flushMutationEffects();
      flushLayoutEffects();
      flushSpawnedWork();
      return flushPassiveEffects();
    }
    function flushPassiveEffects() {
      if (5 !== pendingEffectsStatus) return false;
      var root2 = pendingEffectsRoot, remainingLanes = pendingEffectsRemainingLanes;
      pendingEffectsRemainingLanes = 0;
      var renderPriority = lanesToEventPriority(pendingEffectsLanes), prevTransition = ReactSharedInternals.T, previousPriority = ReactDOMSharedInternals.p;
      try {
        ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
        ReactSharedInternals.T = null;
        renderPriority = pendingPassiveTransitions;
        pendingPassiveTransitions = null;
        var root$jscomp$0 = pendingEffectsRoot, lanes = pendingEffectsLanes;
        pendingEffectsStatus = 0;
        pendingFinishedWork = pendingEffectsRoot = null;
        pendingEffectsLanes = 0;
        if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
        var prevExecutionContext = executionContext;
        executionContext |= 4;
        commitPassiveUnmountOnFiber(root$jscomp$0.current);
        commitPassiveMountOnFiber(
          root$jscomp$0,
          root$jscomp$0.current,
          lanes,
          renderPriority
        );
        executionContext = prevExecutionContext;
        flushSyncWorkAcrossRoots_impl(0, false);
        if (injectedHook && "function" === typeof injectedHook.onPostCommitFiberRoot)
          try {
            injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
          } catch (err) {
          }
        return true;
      } finally {
        ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition, releaseRootPooledCache(root2, remainingLanes);
      }
    }
    function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
      sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
      sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
      rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
      null !== rootFiber && (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
    }
    function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
      if (3 === sourceFiber.tag)
        captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
      else
        for (; null !== nearestMountedAncestor; ) {
          if (3 === nearestMountedAncestor.tag) {
            captureCommitPhaseErrorOnRoot(
              nearestMountedAncestor,
              sourceFiber,
              error
            );
            break;
          } else if (1 === nearestMountedAncestor.tag) {
            var instance = nearestMountedAncestor.stateNode;
            if ("function" === typeof nearestMountedAncestor.type.getDerivedStateFromError || "function" === typeof instance.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(instance))) {
              sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
              error = createClassErrorUpdate(2);
              instance = enqueueUpdate(nearestMountedAncestor, error, 2);
              null !== instance && (initializeClassErrorUpdate(
                error,
                instance,
                nearestMountedAncestor,
                sourceFiber
              ), markRootUpdated$1(instance, 2), ensureRootIsScheduled(instance));
              break;
            }
          }
          nearestMountedAncestor = nearestMountedAncestor.return;
        }
    }
    function attachPingListener(root2, wakeable, lanes) {
      var pingCache = root2.pingCache;
      if (null === pingCache) {
        pingCache = root2.pingCache = new PossiblyWeakMap();
        var threadIDs = /* @__PURE__ */ new Set();
        pingCache.set(wakeable, threadIDs);
      } else
        threadIDs = pingCache.get(wakeable), void 0 === threadIDs && (threadIDs = /* @__PURE__ */ new Set(), pingCache.set(wakeable, threadIDs));
      threadIDs.has(lanes) || (workInProgressRootDidAttachPingListener = true, threadIDs.add(lanes), root2 = pingSuspendedRoot.bind(null, root2, wakeable, lanes), wakeable.then(root2, root2));
    }
    function pingSuspendedRoot(root2, wakeable, pingedLanes) {
      var pingCache = root2.pingCache;
      null !== pingCache && pingCache.delete(wakeable);
      root2.pingedLanes |= root2.suspendedLanes & pingedLanes;
      root2.warmLanes &= ~pingedLanes;
      workInProgressRoot === root2 && (workInProgressRootRenderLanes & pingedLanes) === pingedLanes && (4 === workInProgressRootExitStatus || 3 === workInProgressRootExitStatus && (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes && 300 > now() - globalMostRecentFallbackTime ? 0 === (executionContext & 2) && prepareFreshStack(root2, 0) : workInProgressRootPingedLanes |= pingedLanes, workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes && (workInProgressSuspendedRetryLanes = 0));
      ensureRootIsScheduled(root2);
    }
    function retryTimedOutBoundary(boundaryFiber, retryLane) {
      0 === retryLane && (retryLane = claimNextRetryLane());
      boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
      null !== boundaryFiber && (markRootUpdated$1(boundaryFiber, retryLane), ensureRootIsScheduled(boundaryFiber));
    }
    function retryDehydratedSuspenseBoundary(boundaryFiber) {
      var suspenseState = boundaryFiber.memoizedState, retryLane = 0;
      null !== suspenseState && (retryLane = suspenseState.retryLane);
      retryTimedOutBoundary(boundaryFiber, retryLane);
    }
    function resolveRetryWakeable(boundaryFiber, wakeable) {
      var retryLane = 0;
      switch (boundaryFiber.tag) {
        case 13:
          var retryCache = boundaryFiber.stateNode;
          var suspenseState = boundaryFiber.memoizedState;
          null !== suspenseState && (retryLane = suspenseState.retryLane);
          break;
        case 19:
          retryCache = boundaryFiber.stateNode;
          break;
        case 22:
          retryCache = boundaryFiber.stateNode._retryCache;
          break;
        default:
          throw Error(formatProdErrorMessage(314));
      }
      null !== retryCache && retryCache.delete(wakeable);
      retryTimedOutBoundary(boundaryFiber, retryLane);
    }
    function scheduleCallback$1(priorityLevel, callback) {
      return scheduleCallback$3(priorityLevel, callback);
    }
    var firstScheduledRoot = null, lastScheduledRoot = null, didScheduleMicrotask = false, mightHavePendingSyncWork = false, isFlushingWork = false, currentEventTransitionLane = 0;
    function ensureRootIsScheduled(root2) {
      root2 !== lastScheduledRoot && null === root2.next && (null === lastScheduledRoot ? firstScheduledRoot = lastScheduledRoot = root2 : lastScheduledRoot = lastScheduledRoot.next = root2);
      mightHavePendingSyncWork = true;
      didScheduleMicrotask || (didScheduleMicrotask = true, scheduleImmediateRootScheduleTask());
    }
    function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
      if (!isFlushingWork && mightHavePendingSyncWork) {
        isFlushingWork = true;
        do {
          var didPerformSomeWork = false;
          for (var root$174 = firstScheduledRoot; null !== root$174; ) {
            if (0 !== syncTransitionLanes) {
              var pendingLanes = root$174.pendingLanes;
              if (0 === pendingLanes) var JSCompiler_inline_result = 0;
              else {
                var suspendedLanes = root$174.suspendedLanes, pingedLanes = root$174.pingedLanes;
                JSCompiler_inline_result = (1 << 31 - clz32(42 | syncTransitionLanes) + 1) - 1;
                JSCompiler_inline_result &= pendingLanes & ~(suspendedLanes & ~pingedLanes);
                JSCompiler_inline_result = JSCompiler_inline_result & 201326741 ? JSCompiler_inline_result & 201326741 | 1 : JSCompiler_inline_result ? JSCompiler_inline_result | 2 : 0;
              }
              0 !== JSCompiler_inline_result && (didPerformSomeWork = true, performSyncWorkOnRoot(root$174, JSCompiler_inline_result));
            } else
              JSCompiler_inline_result = workInProgressRootRenderLanes, JSCompiler_inline_result = getNextLanes(
                root$174,
                root$174 === workInProgressRoot ? JSCompiler_inline_result : 0,
                null !== root$174.cancelPendingCommit || -1 !== root$174.timeoutHandle
              ), 0 === (JSCompiler_inline_result & 3) || checkIfRootIsPrerendering(root$174, JSCompiler_inline_result) || (didPerformSomeWork = true, performSyncWorkOnRoot(root$174, JSCompiler_inline_result));
            root$174 = root$174.next;
          }
        } while (didPerformSomeWork);
        isFlushingWork = false;
      }
    }
    function processRootScheduleInImmediateTask() {
      processRootScheduleInMicrotask();
    }
    function processRootScheduleInMicrotask() {
      mightHavePendingSyncWork = didScheduleMicrotask = false;
      var syncTransitionLanes = 0;
      0 !== currentEventTransitionLane && (shouldAttemptEagerTransition() && (syncTransitionLanes = currentEventTransitionLane), currentEventTransitionLane = 0);
      for (var currentTime = now(), prev = null, root2 = firstScheduledRoot; null !== root2; ) {
        var next = root2.next, nextLanes = scheduleTaskForRootDuringMicrotask(root2, currentTime);
        if (0 === nextLanes)
          root2.next = null, null === prev ? firstScheduledRoot = next : prev.next = next, null === next && (lastScheduledRoot = prev);
        else if (prev = root2, 0 !== syncTransitionLanes || 0 !== (nextLanes & 3))
          mightHavePendingSyncWork = true;
        root2 = next;
      }
      flushSyncWorkAcrossRoots_impl(syncTransitionLanes);
    }
    function scheduleTaskForRootDuringMicrotask(root2, currentTime) {
      for (var suspendedLanes = root2.suspendedLanes, pingedLanes = root2.pingedLanes, expirationTimes = root2.expirationTimes, lanes = root2.pendingLanes & -62914561; 0 < lanes; ) {
        var index$3 = 31 - clz32(lanes), lane = 1 << index$3, expirationTime = expirationTimes[index$3];
        if (-1 === expirationTime) {
          if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
            expirationTimes[index$3] = computeExpirationTime(lane, currentTime);
        } else expirationTime <= currentTime && (root2.expiredLanes |= lane);
        lanes &= ~lane;
      }
      currentTime = workInProgressRoot;
      suspendedLanes = workInProgressRootRenderLanes;
      suspendedLanes = getNextLanes(
        root2,
        root2 === currentTime ? suspendedLanes : 0,
        null !== root2.cancelPendingCommit || -1 !== root2.timeoutHandle
      );
      pingedLanes = root2.callbackNode;
      if (0 === suspendedLanes || root2 === currentTime && (2 === workInProgressSuspendedReason || 9 === workInProgressSuspendedReason) || null !== root2.cancelPendingCommit)
        return null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes), root2.callbackNode = null, root2.callbackPriority = 0;
      if (0 === (suspendedLanes & 3) || checkIfRootIsPrerendering(root2, suspendedLanes)) {
        currentTime = suspendedLanes & -suspendedLanes;
        if (currentTime === root2.callbackPriority) return currentTime;
        null !== pingedLanes && cancelCallback$1(pingedLanes);
        switch (lanesToEventPriority(suspendedLanes)) {
          case 2:
          case 8:
            suspendedLanes = UserBlockingPriority;
            break;
          case 32:
            suspendedLanes = NormalPriority$1;
            break;
          case 268435456:
            suspendedLanes = IdlePriority;
            break;
          default:
            suspendedLanes = NormalPriority$1;
        }
        pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root2);
        suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
        root2.callbackPriority = currentTime;
        root2.callbackNode = suspendedLanes;
        return currentTime;
      }
      null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
      root2.callbackPriority = 2;
      root2.callbackNode = null;
      return 2;
    }
    function performWorkOnRootViaSchedulerTask(root2, didTimeout) {
      if (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus)
        return root2.callbackNode = null, root2.callbackPriority = 0, null;
      var originalCallbackNode = root2.callbackNode;
      if (flushPendingEffects() && root2.callbackNode !== originalCallbackNode)
        return null;
      var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
      workInProgressRootRenderLanes$jscomp$0 = getNextLanes(
        root2,
        root2 === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0,
        null !== root2.cancelPendingCommit || -1 !== root2.timeoutHandle
      );
      if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
      performWorkOnRoot(root2, workInProgressRootRenderLanes$jscomp$0, didTimeout);
      scheduleTaskForRootDuringMicrotask(root2, now());
      return null != root2.callbackNode && root2.callbackNode === originalCallbackNode ? performWorkOnRootViaSchedulerTask.bind(null, root2) : null;
    }
    function performSyncWorkOnRoot(root2, lanes) {
      if (flushPendingEffects()) return null;
      performWorkOnRoot(root2, lanes, true);
    }
    function scheduleImmediateRootScheduleTask() {
      scheduleMicrotask(function() {
        0 !== (executionContext & 6) ? scheduleCallback$3(
          ImmediatePriority,
          processRootScheduleInImmediateTask
        ) : processRootScheduleInMicrotask();
      });
    }
    function requestTransitionLane() {
      0 === currentEventTransitionLane && (currentEventTransitionLane = claimNextTransitionLane());
      return currentEventTransitionLane;
    }
    function coerceFormActionProp(actionProp) {
      return null == actionProp || "symbol" === typeof actionProp || "boolean" === typeof actionProp ? null : "function" === typeof actionProp ? actionProp : sanitizeURL("" + actionProp);
    }
    function createFormDataWithSubmitter(form, submitter) {
      var temp = submitter.ownerDocument.createElement("input");
      temp.name = submitter.name;
      temp.value = submitter.value;
      form.id && temp.setAttribute("form", form.id);
      submitter.parentNode.insertBefore(temp, submitter);
      form = new FormData(form);
      temp.parentNode.removeChild(temp);
      return form;
    }
    function extractEvents$1(dispatchQueue, domEventName, maybeTargetInst, nativeEvent, nativeEventTarget) {
      if ("submit" === domEventName && maybeTargetInst && maybeTargetInst.stateNode === nativeEventTarget) {
        var action = coerceFormActionProp(
          (nativeEventTarget[internalPropsKey] || null).action
        ), submitter = nativeEvent.submitter;
        submitter && (domEventName = (domEventName = submitter[internalPropsKey] || null) ? coerceFormActionProp(domEventName.formAction) : submitter.getAttribute("formAction"), null !== domEventName && (action = domEventName, submitter = null));
        var event = new SyntheticEvent(
          "action",
          "action",
          null,
          nativeEvent,
          nativeEventTarget
        );
        dispatchQueue.push({
          event,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (nativeEvent.defaultPrevented) {
                  if (0 !== currentEventTransitionLane) {
                    var formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget);
                    startHostTransition(
                      maybeTargetInst,
                      {
                        pending: true,
                        data: formData,
                        method: nativeEventTarget.method,
                        action
                      },
                      null,
                      formData
                    );
                  }
                } else
                  "function" === typeof action && (event.preventDefault(), formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget), startHostTransition(
                    maybeTargetInst,
                    {
                      pending: true,
                      data: formData,
                      method: nativeEventTarget.method,
                      action
                    },
                    action,
                    formData
                  ));
              },
              currentTarget: nativeEventTarget
            }
          ]
        });
      }
    }
    for (var i$jscomp$inline_1528 = 0; i$jscomp$inline_1528 < simpleEventPluginEvents.length; i$jscomp$inline_1528++) {
      var eventName$jscomp$inline_1529 = simpleEventPluginEvents[i$jscomp$inline_1528], domEventName$jscomp$inline_1530 = eventName$jscomp$inline_1529.toLowerCase(), capitalizedEvent$jscomp$inline_1531 = eventName$jscomp$inline_1529[0].toUpperCase() + eventName$jscomp$inline_1529.slice(1);
      registerSimpleEvent(
        domEventName$jscomp$inline_1530,
        "on" + capitalizedEvent$jscomp$inline_1531
      );
    }
    registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
    registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
    registerSimpleEvent(ANIMATION_START, "onAnimationStart");
    registerSimpleEvent("dblclick", "onDoubleClick");
    registerSimpleEvent("focusin", "onFocus");
    registerSimpleEvent("focusout", "onBlur");
    registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
    registerSimpleEvent(TRANSITION_START, "onTransitionStart");
    registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
    registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
    registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
    registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
    registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
    registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
    registerTwoPhaseEvent(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(" ")
    );
    registerTwoPhaseEvent(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    );
    registerTwoPhaseEvent("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]);
    registerTwoPhaseEvent(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    );
    registerTwoPhaseEvent(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    );
    registerTwoPhaseEvent(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var mediaEventTypes = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), nonDelegatedEvents = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mediaEventTypes)
    );
    function processDispatchQueue(dispatchQueue, eventSystemFlags) {
      eventSystemFlags = 0 !== (eventSystemFlags & 4);
      for (var i = 0; i < dispatchQueue.length; i++) {
        var _dispatchQueue$i = dispatchQueue[i], event = _dispatchQueue$i.event;
        _dispatchQueue$i = _dispatchQueue$i.listeners;
        a: {
          var previousInstance = void 0;
          if (eventSystemFlags)
            for (var i$jscomp$0 = _dispatchQueue$i.length - 1; 0 <= i$jscomp$0; i$jscomp$0--) {
              var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0], instance = _dispatchListeners$i.instance, currentTarget = _dispatchListeners$i.currentTarget;
              _dispatchListeners$i = _dispatchListeners$i.listener;
              if (instance !== previousInstance && event.isPropagationStopped())
                break a;
              previousInstance = _dispatchListeners$i;
              event.currentTarget = currentTarget;
              try {
                previousInstance(event);
              } catch (error) {
                reportGlobalError(error);
              }
              event.currentTarget = null;
              previousInstance = instance;
            }
          else
            for (i$jscomp$0 = 0; i$jscomp$0 < _dispatchQueue$i.length; i$jscomp$0++) {
              _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
              instance = _dispatchListeners$i.instance;
              currentTarget = _dispatchListeners$i.currentTarget;
              _dispatchListeners$i = _dispatchListeners$i.listener;
              if (instance !== previousInstance && event.isPropagationStopped())
                break a;
              previousInstance = _dispatchListeners$i;
              event.currentTarget = currentTarget;
              try {
                previousInstance(event);
              } catch (error) {
                reportGlobalError(error);
              }
              event.currentTarget = null;
              previousInstance = instance;
            }
        }
      }
    }
    function listenToNonDelegatedEvent(domEventName, targetElement) {
      var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
      void 0 === JSCompiler_inline_result && (JSCompiler_inline_result = targetElement[internalEventHandlersKey] = /* @__PURE__ */ new Set());
      var listenerSetKey = domEventName + "__bubble";
      JSCompiler_inline_result.has(listenerSetKey) || (addTrappedEventListener(targetElement, domEventName, 2, false), JSCompiler_inline_result.add(listenerSetKey));
    }
    function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
      var eventSystemFlags = 0;
      isCapturePhaseListener && (eventSystemFlags |= 4);
      addTrappedEventListener(
        target,
        domEventName,
        eventSystemFlags,
        isCapturePhaseListener
      );
    }
    var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
    function listenToAllSupportedEvents(rootContainerElement) {
      if (!rootContainerElement[listeningMarker]) {
        rootContainerElement[listeningMarker] = true;
        allNativeEvents.forEach(function(domEventName) {
          "selectionchange" !== domEventName && (nonDelegatedEvents.has(domEventName) || listenToNativeEvent(domEventName, false, rootContainerElement), listenToNativeEvent(domEventName, true, rootContainerElement));
        });
        var ownerDocument = 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
        null === ownerDocument || ownerDocument[listeningMarker] || (ownerDocument[listeningMarker] = true, listenToNativeEvent("selectionchange", false, ownerDocument));
      }
    }
    function addTrappedEventListener(targetContainer, domEventName, eventSystemFlags, isCapturePhaseListener) {
      switch (getEventPriority(domEventName)) {
        case 2:
          var listenerWrapper = dispatchDiscreteEvent;
          break;
        case 8:
          listenerWrapper = dispatchContinuousEvent;
          break;
        default:
          listenerWrapper = dispatchEvent;
      }
      eventSystemFlags = listenerWrapper.bind(
        null,
        domEventName,
        eventSystemFlags,
        targetContainer
      );
      listenerWrapper = void 0;
      !passiveBrowserEventsSupported || "touchstart" !== domEventName && "touchmove" !== domEventName && "wheel" !== domEventName || (listenerWrapper = true);
      isCapturePhaseListener ? void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
        capture: true,
        passive: listenerWrapper
      }) : targetContainer.addEventListener(domEventName, eventSystemFlags, true) : void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
        passive: listenerWrapper
      }) : targetContainer.addEventListener(domEventName, eventSystemFlags, false);
    }
    function dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst$jscomp$0, targetContainer) {
      var ancestorInst = targetInst$jscomp$0;
      if (0 === (eventSystemFlags & 1) && 0 === (eventSystemFlags & 2) && null !== targetInst$jscomp$0)
        a: for (; ; ) {
          if (null === targetInst$jscomp$0) return;
          var nodeTag = targetInst$jscomp$0.tag;
          if (3 === nodeTag || 4 === nodeTag) {
            var container = targetInst$jscomp$0.stateNode.containerInfo;
            if (container === targetContainer) break;
            if (4 === nodeTag)
              for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
                var grandTag = nodeTag.tag;
                if ((3 === grandTag || 4 === grandTag) && nodeTag.stateNode.containerInfo === targetContainer)
                  return;
                nodeTag = nodeTag.return;
              }
            for (; null !== container; ) {
              nodeTag = getClosestInstanceFromNode(container);
              if (null === nodeTag) return;
              grandTag = nodeTag.tag;
              if (5 === grandTag || 6 === grandTag || 26 === grandTag || 27 === grandTag) {
                targetInst$jscomp$0 = ancestorInst = nodeTag;
                continue a;
              }
              container = container.parentNode;
            }
          }
          targetInst$jscomp$0 = targetInst$jscomp$0.return;
        }
      batchedUpdates$1(function() {
        var targetInst = ancestorInst, nativeEventTarget = getEventTarget(nativeEvent), dispatchQueue = [];
        a: {
          var reactName = topLevelEventsToReactNames.get(domEventName);
          if (void 0 !== reactName) {
            var SyntheticEventCtor = SyntheticEvent, reactEventType = domEventName;
            switch (domEventName) {
              case "keypress":
                if (0 === getEventCharCode(nativeEvent)) break a;
              case "keydown":
              case "keyup":
                SyntheticEventCtor = SyntheticKeyboardEvent;
                break;
              case "focusin":
                reactEventType = "focus";
                SyntheticEventCtor = SyntheticFocusEvent;
                break;
              case "focusout":
                reactEventType = "blur";
                SyntheticEventCtor = SyntheticFocusEvent;
                break;
              case "beforeblur":
              case "afterblur":
                SyntheticEventCtor = SyntheticFocusEvent;
                break;
              case "click":
                if (2 === nativeEvent.button) break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                SyntheticEventCtor = SyntheticMouseEvent;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                SyntheticEventCtor = SyntheticDragEvent;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                SyntheticEventCtor = SyntheticTouchEvent;
                break;
              case ANIMATION_END:
              case ANIMATION_ITERATION:
              case ANIMATION_START:
                SyntheticEventCtor = SyntheticAnimationEvent;
                break;
              case TRANSITION_END:
                SyntheticEventCtor = SyntheticTransitionEvent;
                break;
              case "scroll":
              case "scrollend":
                SyntheticEventCtor = SyntheticUIEvent;
                break;
              case "wheel":
                SyntheticEventCtor = SyntheticWheelEvent;
                break;
              case "copy":
              case "cut":
              case "paste":
                SyntheticEventCtor = SyntheticClipboardEvent;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                SyntheticEventCtor = SyntheticPointerEvent;
                break;
              case "toggle":
              case "beforetoggle":
                SyntheticEventCtor = SyntheticToggleEvent;
            }
            var inCapturePhase = 0 !== (eventSystemFlags & 4), accumulateTargetOnly = !inCapturePhase && ("scroll" === domEventName || "scrollend" === domEventName), reactEventName = inCapturePhase ? null !== reactName ? reactName + "Capture" : null : reactName;
            inCapturePhase = [];
            for (var instance = targetInst, lastHostComponent; null !== instance; ) {
              var _instance = instance;
              lastHostComponent = _instance.stateNode;
              _instance = _instance.tag;
              5 !== _instance && 26 !== _instance && 27 !== _instance || null === lastHostComponent || null === reactEventName || (_instance = getListener(instance, reactEventName), null != _instance && inCapturePhase.push(
                createDispatchListener(instance, _instance, lastHostComponent)
              ));
              if (accumulateTargetOnly) break;
              instance = instance.return;
            }
            0 < inCapturePhase.length && (reactName = new SyntheticEventCtor(
              reactName,
              reactEventType,
              null,
              nativeEvent,
              nativeEventTarget
            ), dispatchQueue.push({ event: reactName, listeners: inCapturePhase }));
          }
        }
        if (0 === (eventSystemFlags & 7)) {
          a: {
            reactName = "mouseover" === domEventName || "pointerover" === domEventName;
            SyntheticEventCtor = "mouseout" === domEventName || "pointerout" === domEventName;
            if (reactName && nativeEvent !== currentReplayingEvent && (reactEventType = nativeEvent.relatedTarget || nativeEvent.fromElement) && (getClosestInstanceFromNode(reactEventType) || reactEventType[internalContainerInstanceKey]))
              break a;
            if (SyntheticEventCtor || reactName) {
              reactName = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget : (reactName = nativeEventTarget.ownerDocument) ? reactName.defaultView || reactName.parentWindow : window;
              if (SyntheticEventCtor) {
                if (reactEventType = nativeEvent.relatedTarget || nativeEvent.toElement, SyntheticEventCtor = targetInst, reactEventType = reactEventType ? getClosestInstanceFromNode(reactEventType) : null, null !== reactEventType && (accumulateTargetOnly = getNearestMountedFiber(reactEventType), inCapturePhase = reactEventType.tag, reactEventType !== accumulateTargetOnly || 5 !== inCapturePhase && 27 !== inCapturePhase && 6 !== inCapturePhase))
                  reactEventType = null;
              } else SyntheticEventCtor = null, reactEventType = targetInst;
              if (SyntheticEventCtor !== reactEventType) {
                inCapturePhase = SyntheticMouseEvent;
                _instance = "onMouseLeave";
                reactEventName = "onMouseEnter";
                instance = "mouse";
                if ("pointerout" === domEventName || "pointerover" === domEventName)
                  inCapturePhase = SyntheticPointerEvent, _instance = "onPointerLeave", reactEventName = "onPointerEnter", instance = "pointer";
                accumulateTargetOnly = null == SyntheticEventCtor ? reactName : getNodeFromInstance(SyntheticEventCtor);
                lastHostComponent = null == reactEventType ? reactName : getNodeFromInstance(reactEventType);
                reactName = new inCapturePhase(
                  _instance,
                  instance + "leave",
                  SyntheticEventCtor,
                  nativeEvent,
                  nativeEventTarget
                );
                reactName.target = accumulateTargetOnly;
                reactName.relatedTarget = lastHostComponent;
                _instance = null;
                getClosestInstanceFromNode(nativeEventTarget) === targetInst && (inCapturePhase = new inCapturePhase(
                  reactEventName,
                  instance + "enter",
                  reactEventType,
                  nativeEvent,
                  nativeEventTarget
                ), inCapturePhase.target = lastHostComponent, inCapturePhase.relatedTarget = accumulateTargetOnly, _instance = inCapturePhase);
                accumulateTargetOnly = _instance;
                if (SyntheticEventCtor && reactEventType)
                  b: {
                    inCapturePhase = SyntheticEventCtor;
                    reactEventName = reactEventType;
                    instance = 0;
                    for (lastHostComponent = inCapturePhase; lastHostComponent; lastHostComponent = getParent(lastHostComponent))
                      instance++;
                    lastHostComponent = 0;
                    for (_instance = reactEventName; _instance; _instance = getParent(_instance))
                      lastHostComponent++;
                    for (; 0 < instance - lastHostComponent; )
                      inCapturePhase = getParent(inCapturePhase), instance--;
                    for (; 0 < lastHostComponent - instance; )
                      reactEventName = getParent(reactEventName), lastHostComponent--;
                    for (; instance--; ) {
                      if (inCapturePhase === reactEventName || null !== reactEventName && inCapturePhase === reactEventName.alternate)
                        break b;
                      inCapturePhase = getParent(inCapturePhase);
                      reactEventName = getParent(reactEventName);
                    }
                    inCapturePhase = null;
                  }
                else inCapturePhase = null;
                null !== SyntheticEventCtor && accumulateEnterLeaveListenersForEvent(
                  dispatchQueue,
                  reactName,
                  SyntheticEventCtor,
                  inCapturePhase,
                  false
                );
                null !== reactEventType && null !== accumulateTargetOnly && accumulateEnterLeaveListenersForEvent(
                  dispatchQueue,
                  accumulateTargetOnly,
                  reactEventType,
                  inCapturePhase,
                  true
                );
              }
            }
          }
          a: {
            reactName = targetInst ? getNodeFromInstance(targetInst) : window;
            SyntheticEventCtor = reactName.nodeName && reactName.nodeName.toLowerCase();
            if ("select" === SyntheticEventCtor || "input" === SyntheticEventCtor && "file" === reactName.type)
              var getTargetInstFunc = getTargetInstForChangeEvent;
            else if (isTextInputElement(reactName))
              if (isInputEventSupported)
                getTargetInstFunc = getTargetInstForInputOrChangeEvent;
              else {
                getTargetInstFunc = getTargetInstForInputEventPolyfill;
                var handleEventFunc = handleEventsForInputEventPolyfill;
              }
            else
              SyntheticEventCtor = reactName.nodeName, !SyntheticEventCtor || "input" !== SyntheticEventCtor.toLowerCase() || "checkbox" !== reactName.type && "radio" !== reactName.type ? targetInst && isCustomElement(targetInst.elementType) && (getTargetInstFunc = getTargetInstForChangeEvent) : getTargetInstFunc = getTargetInstForClickEvent;
            if (getTargetInstFunc && (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))) {
              createAndAccumulateChangeEvent(
                dispatchQueue,
                getTargetInstFunc,
                nativeEvent,
                nativeEventTarget
              );
              break a;
            }
            handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
            "focusout" === domEventName && targetInst && "number" === reactName.type && null != targetInst.memoizedProps.value && setDefaultValue(reactName, "number", reactName.value);
          }
          handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
          switch (domEventName) {
            case "focusin":
              if (isTextInputElement(handleEventFunc) || "true" === handleEventFunc.contentEditable)
                activeElement = handleEventFunc, activeElementInst = targetInst, lastSelection = null;
              break;
            case "focusout":
              lastSelection = activeElementInst = activeElement = null;
              break;
            case "mousedown":
              mouseDown = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              mouseDown = false;
              constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
              break;
            case "selectionchange":
              if (skipSelectionChangeEvent) break;
            case "keydown":
            case "keyup":
              constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
          }
          var fallbackData;
          if (canUseCompositionEvent)
            b: {
              switch (domEventName) {
                case "compositionstart":
                  var eventType = "onCompositionStart";
                  break b;
                case "compositionend":
                  eventType = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  eventType = "onCompositionUpdate";
                  break b;
              }
              eventType = void 0;
            }
          else
            isComposing ? isFallbackCompositionEnd(domEventName, nativeEvent) && (eventType = "onCompositionEnd") : "keydown" === domEventName && 229 === nativeEvent.keyCode && (eventType = "onCompositionStart");
          eventType && (useFallbackCompositionData && "ko" !== nativeEvent.locale && (isComposing || "onCompositionStart" !== eventType ? "onCompositionEnd" === eventType && isComposing && (fallbackData = getData()) : (root = nativeEventTarget, startText = "value" in root ? root.value : root.textContent, isComposing = true)), handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType), 0 < handleEventFunc.length && (eventType = new SyntheticCompositionEvent(
            eventType,
            domEventName,
            null,
            nativeEvent,
            nativeEventTarget
          ), dispatchQueue.push({ event: eventType, listeners: handleEventFunc }), fallbackData ? eventType.data = fallbackData : (fallbackData = getDataFromCustomEvent(nativeEvent), null !== fallbackData && (eventType.data = fallbackData))));
          if (fallbackData = canUseTextInputEvent ? getNativeBeforeInputChars(domEventName, nativeEvent) : getFallbackBeforeInputChars(domEventName, nativeEvent))
            eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput"), 0 < eventType.length && (handleEventFunc = new SyntheticCompositionEvent(
              "onBeforeInput",
              "beforeinput",
              null,
              nativeEvent,
              nativeEventTarget
            ), dispatchQueue.push({
              event: handleEventFunc,
              listeners: eventType
            }), handleEventFunc.data = fallbackData);
          extractEvents$1(
            dispatchQueue,
            domEventName,
            targetInst,
            nativeEvent,
            nativeEventTarget
          );
        }
        processDispatchQueue(dispatchQueue, eventSystemFlags);
      });
    }
    function createDispatchListener(instance, listener, currentTarget) {
      return {
        instance,
        listener,
        currentTarget
      };
    }
    function accumulateTwoPhaseListeners(targetFiber, reactName) {
      for (var captureName = reactName + "Capture", listeners = []; null !== targetFiber; ) {
        var _instance2 = targetFiber, stateNode = _instance2.stateNode;
        _instance2 = _instance2.tag;
        5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2 || null === stateNode || (_instance2 = getListener(targetFiber, captureName), null != _instance2 && listeners.unshift(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ), _instance2 = getListener(targetFiber, reactName), null != _instance2 && listeners.push(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ));
        if (3 === targetFiber.tag) return listeners;
        targetFiber = targetFiber.return;
      }
      return [];
    }
    function getParent(inst) {
      if (null === inst) return null;
      do
        inst = inst.return;
      while (inst && 5 !== inst.tag && 27 !== inst.tag);
      return inst ? inst : null;
    }
    function accumulateEnterLeaveListenersForEvent(dispatchQueue, event, target, common2, inCapturePhase) {
      for (var registrationName = event._reactName, listeners = []; null !== target && target !== common2; ) {
        var _instance3 = target, alternate = _instance3.alternate, stateNode = _instance3.stateNode;
        _instance3 = _instance3.tag;
        if (null !== alternate && alternate === common2) break;
        5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3 || null === stateNode || (alternate = stateNode, inCapturePhase ? (stateNode = getListener(target, registrationName), null != stateNode && listeners.unshift(
          createDispatchListener(target, stateNode, alternate)
        )) : inCapturePhase || (stateNode = getListener(target, registrationName), null != stateNode && listeners.push(
          createDispatchListener(target, stateNode, alternate)
        )));
        target = target.return;
      }
      0 !== listeners.length && dispatchQueue.push({ event, listeners });
    }
    var NORMALIZE_NEWLINES_REGEX = /\r\n?/g, NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
    function normalizeMarkupForTextOrAttribute(markup) {
      return ("string" === typeof markup ? markup : "" + markup).replace(NORMALIZE_NEWLINES_REGEX, "\n").replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
    }
    function checkForUnmatchedText(serverText, clientText) {
      clientText = normalizeMarkupForTextOrAttribute(clientText);
      return normalizeMarkupForTextOrAttribute(serverText) === clientText ? true : false;
    }
    function noop$1() {
    }
    function setProp(domElement, tag, key, value, props, prevValue) {
      switch (key) {
        case "children":
          "string" === typeof value ? "body" === tag || "textarea" === tag && "" === value || setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && "body" !== tag && setTextContent(domElement, "" + value);
          break;
        case "className":
          setValueForKnownAttribute(domElement, "class", value);
          break;
        case "tabIndex":
          setValueForKnownAttribute(domElement, "tabindex", value);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          setValueForKnownAttribute(domElement, key, value);
          break;
        case "style":
          setValueForStyles(domElement, value, prevValue);
          break;
        case "data":
          if ("object" !== tag) {
            setValueForKnownAttribute(domElement, "data", value);
            break;
          }
        case "src":
        case "href":
          if ("" === value && ("a" !== tag || "href" !== key)) {
            domElement.removeAttribute(key);
            break;
          }
          if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) {
            domElement.removeAttribute(key);
            break;
          }
          value = sanitizeURL("" + value);
          domElement.setAttribute(key, value);
          break;
        case "action":
        case "formAction":
          if ("function" === typeof value) {
            domElement.setAttribute(
              key,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            "function" === typeof prevValue && ("formAction" === key ? ("input" !== tag && setProp(domElement, tag, "name", props.name, props, null), setProp(
              domElement,
              tag,
              "formEncType",
              props.formEncType,
              props,
              null
            ), setProp(
              domElement,
              tag,
              "formMethod",
              props.formMethod,
              props,
              null
            ), setProp(
              domElement,
              tag,
              "formTarget",
              props.formTarget,
              props,
              null
            )) : (setProp(domElement, tag, "encType", props.encType, props, null), setProp(domElement, tag, "method", props.method, props, null), setProp(domElement, tag, "target", props.target, props, null)));
          if (null == value || "symbol" === typeof value || "boolean" === typeof value) {
            domElement.removeAttribute(key);
            break;
          }
          value = sanitizeURL("" + value);
          domElement.setAttribute(key, value);
          break;
        case "onClick":
          null != value && (domElement.onclick = noop$1);
          break;
        case "onScroll":
          null != value && listenToNonDelegatedEvent("scroll", domElement);
          break;
        case "onScrollEnd":
          null != value && listenToNonDelegatedEvent("scrollend", domElement);
          break;
        case "dangerouslySetInnerHTML":
          if (null != value) {
            if ("object" !== typeof value || !("__html" in value))
              throw Error(formatProdErrorMessage(61));
            key = value.__html;
            if (null != key) {
              if (null != props.children) throw Error(formatProdErrorMessage(60));
              domElement.innerHTML = key;
            }
          }
          break;
        case "multiple":
          domElement.multiple = value && "function" !== typeof value && "symbol" !== typeof value;
          break;
        case "muted":
          domElement.muted = value && "function" !== typeof value && "symbol" !== typeof value;
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (null == value || "function" === typeof value || "boolean" === typeof value || "symbol" === typeof value) {
            domElement.removeAttribute("xlink:href");
            break;
          }
          key = sanitizeURL("" + value);
          domElement.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            key
          );
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "" + value) : domElement.removeAttribute(key);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "") : domElement.removeAttribute(key);
          break;
        case "capture":
        case "download":
          true === value ? domElement.setAttribute(key, "") : false !== value && null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          null != value && "function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
          break;
        case "rowSpan":
        case "start":
          null == value || "function" === typeof value || "symbol" === typeof value || isNaN(value) ? domElement.removeAttribute(key) : domElement.setAttribute(key, value);
          break;
        case "popover":
          listenToNonDelegatedEvent("beforetoggle", domElement);
          listenToNonDelegatedEvent("toggle", domElement);
          setValueForAttribute(domElement, "popover", value);
          break;
        case "xlinkActuate":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:actuate",
            value
          );
          break;
        case "xlinkArcrole":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:arcrole",
            value
          );
          break;
        case "xlinkRole":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:role",
            value
          );
          break;
        case "xlinkShow":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:show",
            value
          );
          break;
        case "xlinkTitle":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:title",
            value
          );
          break;
        case "xlinkType":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:type",
            value
          );
          break;
        case "xmlBase":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/XML/1998/namespace",
            "xml:base",
            value
          );
          break;
        case "xmlLang":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/XML/1998/namespace",
            "xml:lang",
            value
          );
          break;
        case "xmlSpace":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/XML/1998/namespace",
            "xml:space",
            value
          );
          break;
        case "is":
          setValueForAttribute(domElement, "is", value);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!(2 < key.length) || "o" !== key[0] && "O" !== key[0] || "n" !== key[1] && "N" !== key[1])
            key = aliases.get(key) || key, setValueForAttribute(domElement, key, value);
      }
    }
    function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
      switch (key) {
        case "style":
          setValueForStyles(domElement, value, prevValue);
          break;
        case "dangerouslySetInnerHTML":
          if (null != value) {
            if ("object" !== typeof value || !("__html" in value))
              throw Error(formatProdErrorMessage(61));
            key = value.__html;
            if (null != key) {
              if (null != props.children) throw Error(formatProdErrorMessage(60));
              domElement.innerHTML = key;
            }
          }
          break;
        case "children":
          "string" === typeof value ? setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && setTextContent(domElement, "" + value);
          break;
        case "onScroll":
          null != value && listenToNonDelegatedEvent("scroll", domElement);
          break;
        case "onScrollEnd":
          null != value && listenToNonDelegatedEvent("scrollend", domElement);
          break;
        case "onClick":
          null != value && (domElement.onclick = noop$1);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!registrationNameDependencies.hasOwnProperty(key))
            a: {
              if ("o" === key[0] && "n" === key[1] && (props = key.endsWith("Capture"), tag = key.slice(2, props ? key.length - 7 : void 0), prevValue = domElement[internalPropsKey] || null, prevValue = null != prevValue ? prevValue[key] : null, "function" === typeof prevValue && domElement.removeEventListener(tag, prevValue, props), "function" === typeof value)) {
                "function" !== typeof prevValue && null !== prevValue && (key in domElement ? domElement[key] = null : domElement.hasAttribute(key) && domElement.removeAttribute(key));
                domElement.addEventListener(tag, value, props);
                break a;
              }
              key in domElement ? domElement[key] = value : true === value ? domElement.setAttribute(key, "") : setValueForAttribute(domElement, key, value);
            }
      }
    }
    function setInitialProperties(domElement, tag, props) {
      switch (tag) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          listenToNonDelegatedEvent("error", domElement);
          listenToNonDelegatedEvent("load", domElement);
          var hasSrc = false, hasSrcSet = false, propKey;
          for (propKey in props)
            if (props.hasOwnProperty(propKey)) {
              var propValue = props[propKey];
              if (null != propValue)
                switch (propKey) {
                  case "src":
                    hasSrc = true;
                    break;
                  case "srcSet":
                    hasSrcSet = true;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(formatProdErrorMessage(137, tag));
                  default:
                    setProp(domElement, tag, propKey, propValue, props, null);
                }
            }
          hasSrcSet && setProp(domElement, tag, "srcSet", props.srcSet, props, null);
          hasSrc && setProp(domElement, tag, "src", props.src, props, null);
          return;
        case "input":
          listenToNonDelegatedEvent("invalid", domElement);
          var defaultValue = propKey = propValue = hasSrcSet = null, checked = null, defaultChecked = null;
          for (hasSrc in props)
            if (props.hasOwnProperty(hasSrc)) {
              var propValue$188 = props[hasSrc];
              if (null != propValue$188)
                switch (hasSrc) {
                  case "name":
                    hasSrcSet = propValue$188;
                    break;
                  case "type":
                    propValue = propValue$188;
                    break;
                  case "checked":
                    checked = propValue$188;
                    break;
                  case "defaultChecked":
                    defaultChecked = propValue$188;
                    break;
                  case "value":
                    propKey = propValue$188;
                    break;
                  case "defaultValue":
                    defaultValue = propValue$188;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (null != propValue$188)
                      throw Error(formatProdErrorMessage(137, tag));
                    break;
                  default:
                    setProp(domElement, tag, hasSrc, propValue$188, props, null);
                }
            }
          initInput(
            domElement,
            propKey,
            defaultValue,
            checked,
            defaultChecked,
            propValue,
            hasSrcSet,
            false
          );
          track(domElement);
          return;
        case "select":
          listenToNonDelegatedEvent("invalid", domElement);
          hasSrc = propValue = propKey = null;
          for (hasSrcSet in props)
            if (props.hasOwnProperty(hasSrcSet) && (defaultValue = props[hasSrcSet], null != defaultValue))
              switch (hasSrcSet) {
                case "value":
                  propKey = defaultValue;
                  break;
                case "defaultValue":
                  propValue = defaultValue;
                  break;
                case "multiple":
                  hasSrc = defaultValue;
                default:
                  setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
              }
          tag = propKey;
          props = propValue;
          domElement.multiple = !!hasSrc;
          null != tag ? updateOptions(domElement, !!hasSrc, tag, false) : null != props && updateOptions(domElement, !!hasSrc, props, true);
          return;
        case "textarea":
          listenToNonDelegatedEvent("invalid", domElement);
          propKey = hasSrcSet = hasSrc = null;
          for (propValue in props)
            if (props.hasOwnProperty(propValue) && (defaultValue = props[propValue], null != defaultValue))
              switch (propValue) {
                case "value":
                  hasSrc = defaultValue;
                  break;
                case "defaultValue":
                  hasSrcSet = defaultValue;
                  break;
                case "children":
                  propKey = defaultValue;
                  break;
                case "dangerouslySetInnerHTML":
                  if (null != defaultValue) throw Error(formatProdErrorMessage(91));
                  break;
                default:
                  setProp(domElement, tag, propValue, defaultValue, props, null);
              }
          initTextarea(domElement, hasSrc, hasSrcSet, propKey);
          track(domElement);
          return;
        case "option":
          for (checked in props)
            if (props.hasOwnProperty(checked) && (hasSrc = props[checked], null != hasSrc))
              switch (checked) {
                case "selected":
                  domElement.selected = hasSrc && "function" !== typeof hasSrc && "symbol" !== typeof hasSrc;
                  break;
                default:
                  setProp(domElement, tag, checked, hasSrc, props, null);
              }
          return;
        case "dialog":
          listenToNonDelegatedEvent("beforetoggle", domElement);
          listenToNonDelegatedEvent("toggle", domElement);
          listenToNonDelegatedEvent("cancel", domElement);
          listenToNonDelegatedEvent("close", domElement);
          break;
        case "iframe":
        case "object":
          listenToNonDelegatedEvent("load", domElement);
          break;
        case "video":
        case "audio":
          for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++)
            listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
          break;
        case "image":
          listenToNonDelegatedEvent("error", domElement);
          listenToNonDelegatedEvent("load", domElement);
          break;
        case "details":
          listenToNonDelegatedEvent("toggle", domElement);
          break;
        case "embed":
        case "source":
        case "link":
          listenToNonDelegatedEvent("error", domElement), listenToNonDelegatedEvent("load", domElement);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (defaultChecked in props)
            if (props.hasOwnProperty(defaultChecked) && (hasSrc = props[defaultChecked], null != hasSrc))
              switch (defaultChecked) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(formatProdErrorMessage(137, tag));
                default:
                  setProp(domElement, tag, defaultChecked, hasSrc, props, null);
              }
          return;
        default:
          if (isCustomElement(tag)) {
            for (propValue$188 in props)
              props.hasOwnProperty(propValue$188) && (hasSrc = props[propValue$188], void 0 !== hasSrc && setPropOnCustomElement(
                domElement,
                tag,
                propValue$188,
                hasSrc,
                props,
                void 0
              ));
            return;
          }
      }
      for (defaultValue in props)
        props.hasOwnProperty(defaultValue) && (hasSrc = props[defaultValue], null != hasSrc && setProp(domElement, tag, defaultValue, hasSrc, props, null));
    }
    function updateProperties(domElement, tag, lastProps, nextProps) {
      switch (tag) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var name = null, type = null, value = null, defaultValue = null, lastDefaultValue = null, checked = null, defaultChecked = null;
          for (propKey in lastProps) {
            var lastProp = lastProps[propKey];
            if (lastProps.hasOwnProperty(propKey) && null != lastProp)
              switch (propKey) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  lastDefaultValue = lastProp;
                default:
                  nextProps.hasOwnProperty(propKey) || setProp(domElement, tag, propKey, null, nextProps, lastProp);
              }
          }
          for (var propKey$205 in nextProps) {
            var propKey = nextProps[propKey$205];
            lastProp = lastProps[propKey$205];
            if (nextProps.hasOwnProperty(propKey$205) && (null != propKey || null != lastProp))
              switch (propKey$205) {
                case "type":
                  type = propKey;
                  break;
                case "name":
                  name = propKey;
                  break;
                case "checked":
                  checked = propKey;
                  break;
                case "defaultChecked":
                  defaultChecked = propKey;
                  break;
                case "value":
                  value = propKey;
                  break;
                case "defaultValue":
                  defaultValue = propKey;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (null != propKey)
                    throw Error(formatProdErrorMessage(137, tag));
                  break;
                default:
                  propKey !== lastProp && setProp(
                    domElement,
                    tag,
                    propKey$205,
                    propKey,
                    nextProps,
                    lastProp
                  );
              }
          }
          updateInput(
            domElement,
            value,
            defaultValue,
            lastDefaultValue,
            checked,
            defaultChecked,
            type,
            name
          );
          return;
        case "select":
          propKey = value = defaultValue = propKey$205 = null;
          for (type in lastProps)
            if (lastDefaultValue = lastProps[type], lastProps.hasOwnProperty(type) && null != lastDefaultValue)
              switch (type) {
                case "value":
                  break;
                case "multiple":
                  propKey = lastDefaultValue;
                default:
                  nextProps.hasOwnProperty(type) || setProp(
                    domElement,
                    tag,
                    type,
                    null,
                    nextProps,
                    lastDefaultValue
                  );
              }
          for (name in nextProps)
            if (type = nextProps[name], lastDefaultValue = lastProps[name], nextProps.hasOwnProperty(name) && (null != type || null != lastDefaultValue))
              switch (name) {
                case "value":
                  propKey$205 = type;
                  break;
                case "defaultValue":
                  defaultValue = type;
                  break;
                case "multiple":
                  value = type;
                default:
                  type !== lastDefaultValue && setProp(
                    domElement,
                    tag,
                    name,
                    type,
                    nextProps,
                    lastDefaultValue
                  );
              }
          tag = defaultValue;
          lastProps = value;
          nextProps = propKey;
          null != propKey$205 ? updateOptions(domElement, !!lastProps, propKey$205, false) : !!nextProps !== !!lastProps && (null != tag ? updateOptions(domElement, !!lastProps, tag, true) : updateOptions(domElement, !!lastProps, lastProps ? [] : "", false));
          return;
        case "textarea":
          propKey = propKey$205 = null;
          for (defaultValue in lastProps)
            if (name = lastProps[defaultValue], lastProps.hasOwnProperty(defaultValue) && null != name && !nextProps.hasOwnProperty(defaultValue))
              switch (defaultValue) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  setProp(domElement, tag, defaultValue, null, nextProps, name);
              }
          for (value in nextProps)
            if (name = nextProps[value], type = lastProps[value], nextProps.hasOwnProperty(value) && (null != name || null != type))
              switch (value) {
                case "value":
                  propKey$205 = name;
                  break;
                case "defaultValue":
                  propKey = name;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (null != name) throw Error(formatProdErrorMessage(91));
                  break;
                default:
                  name !== type && setProp(domElement, tag, value, name, nextProps, type);
              }
          updateTextarea(domElement, propKey$205, propKey);
          return;
        case "option":
          for (var propKey$221 in lastProps)
            if (propKey$205 = lastProps[propKey$221], lastProps.hasOwnProperty(propKey$221) && null != propKey$205 && !nextProps.hasOwnProperty(propKey$221))
              switch (propKey$221) {
                case "selected":
                  domElement.selected = false;
                  break;
                default:
                  setProp(
                    domElement,
                    tag,
                    propKey$221,
                    null,
                    nextProps,
                    propKey$205
                  );
              }
          for (lastDefaultValue in nextProps)
            if (propKey$205 = nextProps[lastDefaultValue], propKey = lastProps[lastDefaultValue], nextProps.hasOwnProperty(lastDefaultValue) && propKey$205 !== propKey && (null != propKey$205 || null != propKey))
              switch (lastDefaultValue) {
                case "selected":
                  domElement.selected = propKey$205 && "function" !== typeof propKey$205 && "symbol" !== typeof propKey$205;
                  break;
                default:
                  setProp(
                    domElement,
                    tag,
                    lastDefaultValue,
                    propKey$205,
                    nextProps,
                    propKey
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var propKey$226 in lastProps)
            propKey$205 = lastProps[propKey$226], lastProps.hasOwnProperty(propKey$226) && null != propKey$205 && !nextProps.hasOwnProperty(propKey$226) && setProp(domElement, tag, propKey$226, null, nextProps, propKey$205);
          for (checked in nextProps)
            if (propKey$205 = nextProps[checked], propKey = lastProps[checked], nextProps.hasOwnProperty(checked) && propKey$205 !== propKey && (null != propKey$205 || null != propKey))
              switch (checked) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (null != propKey$205)
                    throw Error(formatProdErrorMessage(137, tag));
                  break;
                default:
                  setProp(
                    domElement,
                    tag,
                    checked,
                    propKey$205,
                    nextProps,
                    propKey
                  );
              }
          return;
        default:
          if (isCustomElement(tag)) {
            for (var propKey$231 in lastProps)
              propKey$205 = lastProps[propKey$231], lastProps.hasOwnProperty(propKey$231) && void 0 !== propKey$205 && !nextProps.hasOwnProperty(propKey$231) && setPropOnCustomElement(
                domElement,
                tag,
                propKey$231,
                void 0,
                nextProps,
                propKey$205
              );
            for (defaultChecked in nextProps)
              propKey$205 = nextProps[defaultChecked], propKey = lastProps[defaultChecked], !nextProps.hasOwnProperty(defaultChecked) || propKey$205 === propKey || void 0 === propKey$205 && void 0 === propKey || setPropOnCustomElement(
                domElement,
                tag,
                defaultChecked,
                propKey$205,
                nextProps,
                propKey
              );
            return;
          }
      }
      for (var propKey$236 in lastProps)
        propKey$205 = lastProps[propKey$236], lastProps.hasOwnProperty(propKey$236) && null != propKey$205 && !nextProps.hasOwnProperty(propKey$236) && setProp(domElement, tag, propKey$236, null, nextProps, propKey$205);
      for (lastProp in nextProps)
        propKey$205 = nextProps[lastProp], propKey = lastProps[lastProp], !nextProps.hasOwnProperty(lastProp) || propKey$205 === propKey || null == propKey$205 && null == propKey || setProp(domElement, tag, lastProp, propKey$205, nextProps, propKey);
    }
    var eventsEnabled = null, selectionInformation = null;
    function getOwnerDocumentFromRootContainer(rootContainerElement) {
      return 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
    }
    function getOwnHostContext(namespaceURI) {
      switch (namespaceURI) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function getChildHostContextProd(parentNamespace, type) {
      if (0 === parentNamespace)
        switch (type) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return 1 === parentNamespace && "foreignObject" === type ? 0 : parentNamespace;
    }
    function shouldSetTextContent(type, props) {
      return "textarea" === type || "noscript" === type || "string" === typeof props.children || "number" === typeof props.children || "bigint" === typeof props.children || "object" === typeof props.dangerouslySetInnerHTML && null !== props.dangerouslySetInnerHTML && null != props.dangerouslySetInnerHTML.__html;
    }
    var currentPopstateTransitionEvent = null;
    function shouldAttemptEagerTransition() {
      var event = window.event;
      if (event && "popstate" === event.type) {
        if (event === currentPopstateTransitionEvent) return false;
        currentPopstateTransitionEvent = event;
        return true;
      }
      currentPopstateTransitionEvent = null;
      return false;
    }
    var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0, cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0, localPromise = "function" === typeof Promise ? Promise : void 0, scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof localPromise ? function(callback) {
      return localPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
    } : scheduleTimeout;
    function handleErrorInNextTick(error) {
      setTimeout(function() {
        throw error;
      });
    }
    function isSingletonScope(type) {
      return "head" === type;
    }
    function clearSuspenseBoundary(parentInstance, suspenseInstance) {
      var node = suspenseInstance, possiblePreambleContribution = 0, depth = 0;
      do {
        var nextNode = node.nextSibling;
        parentInstance.removeChild(node);
        if (nextNode && 8 === nextNode.nodeType)
          if (node = nextNode.data, "/$" === node) {
            if (0 < possiblePreambleContribution && 8 > possiblePreambleContribution) {
              node = possiblePreambleContribution;
              var ownerDocument = parentInstance.ownerDocument;
              node & 1 && releaseSingletonInstance(ownerDocument.documentElement);
              node & 2 && releaseSingletonInstance(ownerDocument.body);
              if (node & 4)
                for (node = ownerDocument.head, releaseSingletonInstance(node), ownerDocument = node.firstChild; ownerDocument; ) {
                  var nextNode$jscomp$0 = ownerDocument.nextSibling, nodeName = ownerDocument.nodeName;
                  ownerDocument[internalHoistableMarker] || "SCRIPT" === nodeName || "STYLE" === nodeName || "LINK" === nodeName && "stylesheet" === ownerDocument.rel.toLowerCase() || node.removeChild(ownerDocument);
                  ownerDocument = nextNode$jscomp$0;
                }
            }
            if (0 === depth) {
              parentInstance.removeChild(nextNode);
              retryIfBlockedOn(suspenseInstance);
              return;
            }
            depth--;
          } else
            "$" === node || "$?" === node || "$!" === node ? depth++ : possiblePreambleContribution = node.charCodeAt(0) - 48;
        else possiblePreambleContribution = 0;
        node = nextNode;
      } while (node);
      retryIfBlockedOn(suspenseInstance);
    }
    function clearContainerSparingly(container) {
      var nextNode = container.firstChild;
      nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
      for (; nextNode; ) {
        var node = nextNode;
        nextNode = nextNode.nextSibling;
        switch (node.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            clearContainerSparingly(node);
            detachDeletedInstance(node);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if ("stylesheet" === node.rel.toLowerCase()) continue;
        }
        container.removeChild(node);
      }
    }
    function canHydrateInstance(instance, type, props, inRootOrSingleton) {
      for (; 1 === instance.nodeType; ) {
        var anyProps = props;
        if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
          if (!inRootOrSingleton && ("INPUT" !== instance.nodeName || "hidden" !== instance.type))
            break;
        } else if (!inRootOrSingleton)
          if ("input" === type && "hidden" === instance.type) {
            var name = null == anyProps.name ? null : "" + anyProps.name;
            if ("hidden" === anyProps.type && instance.getAttribute("name") === name)
              return instance;
          } else return instance;
        else if (!instance[internalHoistableMarker])
          switch (type) {
            case "meta":
              if (!instance.hasAttribute("itemprop")) break;
              return instance;
            case "link":
              name = instance.getAttribute("rel");
              if ("stylesheet" === name && instance.hasAttribute("data-precedence"))
                break;
              else if (name !== anyProps.rel || instance.getAttribute("href") !== (null == anyProps.href || "" === anyProps.href ? null : anyProps.href) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) || instance.getAttribute("title") !== (null == anyProps.title ? null : anyProps.title))
                break;
              return instance;
            case "style":
              if (instance.hasAttribute("data-precedence")) break;
              return instance;
            case "script":
              name = instance.getAttribute("src");
              if ((name !== (null == anyProps.src ? null : anyProps.src) || instance.getAttribute("type") !== (null == anyProps.type ? null : anyProps.type) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) && name && instance.hasAttribute("async") && !instance.hasAttribute("itemprop"))
                break;
              return instance;
            default:
              return instance;
          }
        instance = getNextHydratable(instance.nextSibling);
        if (null === instance) break;
      }
      return null;
    }
    function canHydrateTextInstance(instance, text, inRootOrSingleton) {
      if ("" === text) return null;
      for (; 3 !== instance.nodeType; ) {
        if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton)
          return null;
        instance = getNextHydratable(instance.nextSibling);
        if (null === instance) return null;
      }
      return instance;
    }
    function isSuspenseInstanceFallback(instance) {
      return "$!" === instance.data || "$?" === instance.data && "complete" === instance.ownerDocument.readyState;
    }
    function registerSuspenseInstanceRetry(instance, callback) {
      var ownerDocument = instance.ownerDocument;
      if ("$?" !== instance.data || "complete" === ownerDocument.readyState)
        callback();
      else {
        var listener = function() {
          callback();
          ownerDocument.removeEventListener("DOMContentLoaded", listener);
        };
        ownerDocument.addEventListener("DOMContentLoaded", listener);
        instance._reactRetry = listener;
      }
    }
    function getNextHydratable(node) {
      for (; null != node; node = node.nextSibling) {
        var nodeType = node.nodeType;
        if (1 === nodeType || 3 === nodeType) break;
        if (8 === nodeType) {
          nodeType = node.data;
          if ("$" === nodeType || "$!" === nodeType || "$?" === nodeType || "F!" === nodeType || "F" === nodeType)
            break;
          if ("/$" === nodeType) return null;
        }
      }
      return node;
    }
    var previousHydratableOnEnteringScopedSingleton = null;
    function getParentSuspenseInstance(targetInstance) {
      targetInstance = targetInstance.previousSibling;
      for (var depth = 0; targetInstance; ) {
        if (8 === targetInstance.nodeType) {
          var data = targetInstance.data;
          if ("$" === data || "$!" === data || "$?" === data) {
            if (0 === depth) return targetInstance;
            depth--;
          } else "/$" === data && depth++;
        }
        targetInstance = targetInstance.previousSibling;
      }
      return null;
    }
    function resolveSingletonInstance(type, props, rootContainerInstance) {
      props = getOwnerDocumentFromRootContainer(rootContainerInstance);
      switch (type) {
        case "html":
          type = props.documentElement;
          if (!type) throw Error(formatProdErrorMessage(452));
          return type;
        case "head":
          type = props.head;
          if (!type) throw Error(formatProdErrorMessage(453));
          return type;
        case "body":
          type = props.body;
          if (!type) throw Error(formatProdErrorMessage(454));
          return type;
        default:
          throw Error(formatProdErrorMessage(451));
      }
    }
    function releaseSingletonInstance(instance) {
      for (var attributes = instance.attributes; attributes.length; )
        instance.removeAttributeNode(attributes[0]);
      detachDeletedInstance(instance);
    }
    var preloadPropsMap = /* @__PURE__ */ new Map(), preconnectsSet = /* @__PURE__ */ new Set();
    function getHoistableRoot(container) {
      return "function" === typeof container.getRootNode ? container.getRootNode() : 9 === container.nodeType ? container : container.ownerDocument;
    }
    var previousDispatcher = ReactDOMSharedInternals.d;
    ReactDOMSharedInternals.d = {
      f: flushSyncWork,
      r: requestFormReset,
      D: prefetchDNS,
      C: preconnect,
      L: preload,
      m: preloadModule,
      X: preinitScript,
      S: preinitStyle,
      M: preinitModuleScript
    };
    function flushSyncWork() {
      var previousWasRendering = previousDispatcher.f(), wasRendering = flushSyncWork$1();
      return previousWasRendering || wasRendering;
    }
    function requestFormReset(form) {
      var formInst = getInstanceFromNode(form);
      null !== formInst && 5 === formInst.tag && "form" === formInst.type ? requestFormReset$1(formInst) : previousDispatcher.r(form);
    }
    var globalDocument = "undefined" === typeof document ? null : document;
    function preconnectAs(rel, href, crossOrigin) {
      var ownerDocument = globalDocument;
      if (ownerDocument && "string" === typeof href && href) {
        var limitedEscapedHref = escapeSelectorAttributeValueInsideDoubleQuotes(href);
        limitedEscapedHref = 'link[rel="' + rel + '"][href="' + limitedEscapedHref + '"]';
        "string" === typeof crossOrigin && (limitedEscapedHref += '[crossorigin="' + crossOrigin + '"]');
        preconnectsSet.has(limitedEscapedHref) || (preconnectsSet.add(limitedEscapedHref), rel = { rel, crossOrigin, href }, null === ownerDocument.querySelector(limitedEscapedHref) && (href = ownerDocument.createElement("link"), setInitialProperties(href, "link", rel), markNodeAsHoistable(href), ownerDocument.head.appendChild(href)));
      }
    }
    function prefetchDNS(href) {
      previousDispatcher.D(href);
      preconnectAs("dns-prefetch", href, null);
    }
    function preconnect(href, crossOrigin) {
      previousDispatcher.C(href, crossOrigin);
      preconnectAs("preconnect", href, crossOrigin);
    }
    function preload(href, as, options2) {
      previousDispatcher.L(href, as, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && href && as) {
        var preloadSelector = 'link[rel="preload"][as="' + escapeSelectorAttributeValueInsideDoubleQuotes(as) + '"]';
        "image" === as ? options2 && options2.imageSrcSet ? (preloadSelector += '[imagesrcset="' + escapeSelectorAttributeValueInsideDoubleQuotes(
          options2.imageSrcSet
        ) + '"]', "string" === typeof options2.imageSizes && (preloadSelector += '[imagesizes="' + escapeSelectorAttributeValueInsideDoubleQuotes(
          options2.imageSizes
        ) + '"]')) : preloadSelector += '[href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]' : preloadSelector += '[href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]';
        var key = preloadSelector;
        switch (as) {
          case "style":
            key = getStyleKey(href);
            break;
          case "script":
            key = getScriptKey(href);
        }
        preloadPropsMap.has(key) || (href = assign(
          {
            rel: "preload",
            href: "image" === as && options2 && options2.imageSrcSet ? void 0 : href,
            as
          },
          options2
        ), preloadPropsMap.set(key, href), null !== ownerDocument.querySelector(preloadSelector) || "style" === as && ownerDocument.querySelector(getStylesheetSelectorFromKey(key)) || "script" === as && ownerDocument.querySelector(getScriptSelectorFromKey(key)) || (as = ownerDocument.createElement("link"), setInitialProperties(as, "link", href), markNodeAsHoistable(as), ownerDocument.head.appendChild(as)));
      }
    }
    function preloadModule(href, options2) {
      previousDispatcher.m(href, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && href) {
        var as = options2 && "string" === typeof options2.as ? options2.as : "script", preloadSelector = 'link[rel="modulepreload"][as="' + escapeSelectorAttributeValueInsideDoubleQuotes(as) + '"][href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]', key = preloadSelector;
        switch (as) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            key = getScriptKey(href);
        }
        if (!preloadPropsMap.has(key) && (href = assign({ rel: "modulepreload", href }, options2), preloadPropsMap.set(key, href), null === ownerDocument.querySelector(preloadSelector))) {
          switch (as) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (ownerDocument.querySelector(getScriptSelectorFromKey(key)))
                return;
          }
          as = ownerDocument.createElement("link");
          setInitialProperties(as, "link", href);
          markNodeAsHoistable(as);
          ownerDocument.head.appendChild(as);
        }
      }
    }
    function preinitStyle(href, precedence, options2) {
      previousDispatcher.S(href, precedence, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && href) {
        var styles2 = getResourcesFromRoot(ownerDocument).hoistableStyles, key = getStyleKey(href);
        precedence = precedence || "default";
        var resource = styles2.get(key);
        if (!resource) {
          var state = { loading: 0, preload: null };
          if (resource = ownerDocument.querySelector(
            getStylesheetSelectorFromKey(key)
          ))
            state.loading = 5;
          else {
            href = assign(
              { rel: "stylesheet", href, "data-precedence": precedence },
              options2
            );
            (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(href, options2);
            var link = resource = ownerDocument.createElement("link");
            markNodeAsHoistable(link);
            setInitialProperties(link, "link", href);
            link._p = new Promise(function(resolve, reject) {
              link.onload = resolve;
              link.onerror = reject;
            });
            link.addEventListener("load", function() {
              state.loading |= 1;
            });
            link.addEventListener("error", function() {
              state.loading |= 2;
            });
            state.loading |= 4;
            insertStylesheet(resource, precedence, ownerDocument);
          }
          resource = {
            type: "stylesheet",
            instance: resource,
            count: 1,
            state
          };
          styles2.set(key, resource);
        }
      }
    }
    function preinitScript(src, options2) {
      previousDispatcher.X(src, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && src) {
        var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
        resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({ src, async: true }, options2), (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options2), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
          type: "script",
          instance: resource,
          count: 1,
          state: null
        }, scripts.set(key, resource));
      }
    }
    function preinitModuleScript(src, options2) {
      previousDispatcher.M(src, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && src) {
        var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
        resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({ src, async: true, type: "module" }, options2), (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options2), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
          type: "script",
          instance: resource,
          count: 1,
          state: null
        }, scripts.set(key, resource));
      }
    }
    function getResource(type, currentProps, pendingProps, currentResource) {
      var JSCompiler_inline_result = (JSCompiler_inline_result = rootInstanceStackCursor.current) ? getHoistableRoot(JSCompiler_inline_result) : null;
      if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
      switch (type) {
        case "meta":
        case "title":
          return null;
        case "style":
          return "string" === typeof pendingProps.precedence && "string" === typeof pendingProps.href ? (currentProps = getStyleKey(pendingProps.href), pendingProps = getResourcesFromRoot(
            JSCompiler_inline_result
          ).hoistableStyles, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, pendingProps.set(currentProps, currentResource)), currentResource) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if ("stylesheet" === pendingProps.rel && "string" === typeof pendingProps.href && "string" === typeof pendingProps.precedence) {
            type = getStyleKey(pendingProps.href);
            var styles$244 = getResourcesFromRoot(
              JSCompiler_inline_result
            ).hoistableStyles, resource$245 = styles$244.get(type);
            resource$245 || (JSCompiler_inline_result = JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result, resource$245 = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: 0, preload: null }
            }, styles$244.set(type, resource$245), (styles$244 = JSCompiler_inline_result.querySelector(
              getStylesheetSelectorFromKey(type)
            )) && !styles$244._p && (resource$245.instance = styles$244, resource$245.state.loading = 5), preloadPropsMap.has(type) || (pendingProps = {
              rel: "preload",
              as: "style",
              href: pendingProps.href,
              crossOrigin: pendingProps.crossOrigin,
              integrity: pendingProps.integrity,
              media: pendingProps.media,
              hrefLang: pendingProps.hrefLang,
              referrerPolicy: pendingProps.referrerPolicy
            }, preloadPropsMap.set(type, pendingProps), styles$244 || preloadStylesheet(
              JSCompiler_inline_result,
              type,
              pendingProps,
              resource$245.state
            )));
            if (currentProps && null === currentResource)
              throw Error(formatProdErrorMessage(528, ""));
            return resource$245;
          }
          if (currentProps && null !== currentResource)
            throw Error(formatProdErrorMessage(529, ""));
          return null;
        case "script":
          return currentProps = pendingProps.async, pendingProps = pendingProps.src, "string" === typeof pendingProps && currentProps && "function" !== typeof currentProps && "symbol" !== typeof currentProps ? (currentProps = getScriptKey(pendingProps), pendingProps = getResourcesFromRoot(
            JSCompiler_inline_result
          ).hoistableScripts, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, pendingProps.set(currentProps, currentResource)), currentResource) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(formatProdErrorMessage(444, type));
      }
    }
    function getStyleKey(href) {
      return 'href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"';
    }
    function getStylesheetSelectorFromKey(key) {
      return 'link[rel="stylesheet"][' + key + "]";
    }
    function stylesheetPropsFromRawProps(rawProps) {
      return assign({}, rawProps, {
        "data-precedence": rawProps.precedence,
        precedence: null
      });
    }
    function preloadStylesheet(ownerDocument, key, preloadProps, state) {
      ownerDocument.querySelector('link[rel="preload"][as="style"][' + key + "]") ? state.loading = 1 : (key = ownerDocument.createElement("link"), state.preload = key, key.addEventListener("load", function() {
        return state.loading |= 1;
      }), key.addEventListener("error", function() {
        return state.loading |= 2;
      }), setInitialProperties(key, "link", preloadProps), markNodeAsHoistable(key), ownerDocument.head.appendChild(key));
    }
    function getScriptKey(src) {
      return '[src="' + escapeSelectorAttributeValueInsideDoubleQuotes(src) + '"]';
    }
    function getScriptSelectorFromKey(key) {
      return "script[async]" + key;
    }
    function acquireResource(hoistableRoot, resource, props) {
      resource.count++;
      if (null === resource.instance)
        switch (resource.type) {
          case "style":
            var instance = hoistableRoot.querySelector(
              'style[data-href~="' + escapeSelectorAttributeValueInsideDoubleQuotes(props.href) + '"]'
            );
            if (instance)
              return resource.instance = instance, markNodeAsHoistable(instance), instance;
            var styleProps = assign({}, props, {
              "data-href": props.href,
              "data-precedence": props.precedence,
              href: null,
              precedence: null
            });
            instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement(
              "style"
            );
            markNodeAsHoistable(instance);
            setInitialProperties(instance, "style", styleProps);
            insertStylesheet(instance, props.precedence, hoistableRoot);
            return resource.instance = instance;
          case "stylesheet":
            styleProps = getStyleKey(props.href);
            var instance$250 = hoistableRoot.querySelector(
              getStylesheetSelectorFromKey(styleProps)
            );
            if (instance$250)
              return resource.state.loading |= 4, resource.instance = instance$250, markNodeAsHoistable(instance$250), instance$250;
            instance = stylesheetPropsFromRawProps(props);
            (styleProps = preloadPropsMap.get(styleProps)) && adoptPreloadPropsForStylesheet(instance, styleProps);
            instance$250 = (hoistableRoot.ownerDocument || hoistableRoot).createElement("link");
            markNodeAsHoistable(instance$250);
            var linkInstance = instance$250;
            linkInstance._p = new Promise(function(resolve, reject) {
              linkInstance.onload = resolve;
              linkInstance.onerror = reject;
            });
            setInitialProperties(instance$250, "link", instance);
            resource.state.loading |= 4;
            insertStylesheet(instance$250, props.precedence, hoistableRoot);
            return resource.instance = instance$250;
          case "script":
            instance$250 = getScriptKey(props.src);
            if (styleProps = hoistableRoot.querySelector(
              getScriptSelectorFromKey(instance$250)
            ))
              return resource.instance = styleProps, markNodeAsHoistable(styleProps), styleProps;
            instance = props;
            if (styleProps = preloadPropsMap.get(instance$250))
              instance = assign({}, props), adoptPreloadPropsForScript(instance, styleProps);
            hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
            styleProps = hoistableRoot.createElement("script");
            markNodeAsHoistable(styleProps);
            setInitialProperties(styleProps, "link", instance);
            hoistableRoot.head.appendChild(styleProps);
            return resource.instance = styleProps;
          case "void":
            return null;
          default:
            throw Error(formatProdErrorMessage(443, resource.type));
        }
      else
        "stylesheet" === resource.type && 0 === (resource.state.loading & 4) && (instance = resource.instance, resource.state.loading |= 4, insertStylesheet(instance, props.precedence, hoistableRoot));
      return resource.instance;
    }
    function insertStylesheet(instance, precedence, root2) {
      for (var nodes = root2.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), last = nodes.length ? nodes[nodes.length - 1] : null, prior = last, i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node.dataset.precedence === precedence) prior = node;
        else if (prior !== last) break;
      }
      prior ? prior.parentNode.insertBefore(instance, prior.nextSibling) : (precedence = 9 === root2.nodeType ? root2.head : root2, precedence.insertBefore(instance, precedence.firstChild));
    }
    function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
      null == stylesheetProps.crossOrigin && (stylesheetProps.crossOrigin = preloadProps.crossOrigin);
      null == stylesheetProps.referrerPolicy && (stylesheetProps.referrerPolicy = preloadProps.referrerPolicy);
      null == stylesheetProps.title && (stylesheetProps.title = preloadProps.title);
    }
    function adoptPreloadPropsForScript(scriptProps, preloadProps) {
      null == scriptProps.crossOrigin && (scriptProps.crossOrigin = preloadProps.crossOrigin);
      null == scriptProps.referrerPolicy && (scriptProps.referrerPolicy = preloadProps.referrerPolicy);
      null == scriptProps.integrity && (scriptProps.integrity = preloadProps.integrity);
    }
    var tagCaches = null;
    function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
      if (null === tagCaches) {
        var cache = /* @__PURE__ */ new Map();
        var caches = tagCaches = /* @__PURE__ */ new Map();
        caches.set(ownerDocument, cache);
      } else
        caches = tagCaches, cache = caches.get(ownerDocument), cache || (cache = /* @__PURE__ */ new Map(), caches.set(ownerDocument, cache));
      if (cache.has(type)) return cache;
      cache.set(type, null);
      ownerDocument = ownerDocument.getElementsByTagName(type);
      for (caches = 0; caches < ownerDocument.length; caches++) {
        var node = ownerDocument[caches];
        if (!(node[internalHoistableMarker] || node[internalInstanceKey] || "link" === type && "stylesheet" === node.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== node.namespaceURI) {
          var nodeKey = node.getAttribute(keyAttribute) || "";
          nodeKey = type + nodeKey;
          var existing = cache.get(nodeKey);
          existing ? existing.push(node) : cache.set(nodeKey, [node]);
        }
      }
      return cache;
    }
    function mountHoistable(hoistableRoot, type, instance) {
      hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
      hoistableRoot.head.insertBefore(
        instance,
        "title" === type ? hoistableRoot.querySelector("head > title") : null
      );
    }
    function isHostHoistableType(type, props, hostContext) {
      if (1 === hostContext || null != props.itemProp) return false;
      switch (type) {
        case "meta":
        case "title":
          return true;
        case "style":
          if ("string" !== typeof props.precedence || "string" !== typeof props.href || "" === props.href)
            break;
          return true;
        case "link":
          if ("string" !== typeof props.rel || "string" !== typeof props.href || "" === props.href || props.onLoad || props.onError)
            break;
          switch (props.rel) {
            case "stylesheet":
              return type = props.disabled, "string" === typeof props.precedence && null == type;
            default:
              return true;
          }
        case "script":
          if (props.async && "function" !== typeof props.async && "symbol" !== typeof props.async && !props.onLoad && !props.onError && props.src && "string" === typeof props.src)
            return true;
      }
      return false;
    }
    function preloadResource(resource) {
      return "stylesheet" === resource.type && 0 === (resource.state.loading & 3) ? false : true;
    }
    var suspendedState = null;
    function noop() {
    }
    function suspendResource(hoistableRoot, resource, props) {
      if (null === suspendedState) throw Error(formatProdErrorMessage(475));
      var state = suspendedState;
      if ("stylesheet" === resource.type && ("string" !== typeof props.media || false !== matchMedia(props.media).matches) && 0 === (resource.state.loading & 4)) {
        if (null === resource.instance) {
          var key = getStyleKey(props.href), instance = hoistableRoot.querySelector(
            getStylesheetSelectorFromKey(key)
          );
          if (instance) {
            hoistableRoot = instance._p;
            null !== hoistableRoot && "object" === typeof hoistableRoot && "function" === typeof hoistableRoot.then && (state.count++, state = onUnsuspend.bind(state), hoistableRoot.then(state, state));
            resource.state.loading |= 4;
            resource.instance = instance;
            markNodeAsHoistable(instance);
            return;
          }
          instance = hoistableRoot.ownerDocument || hoistableRoot;
          props = stylesheetPropsFromRawProps(props);
          (key = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(props, key);
          instance = instance.createElement("link");
          markNodeAsHoistable(instance);
          var linkInstance = instance;
          linkInstance._p = new Promise(function(resolve, reject) {
            linkInstance.onload = resolve;
            linkInstance.onerror = reject;
          });
          setInitialProperties(instance, "link", props);
          resource.instance = instance;
        }
        null === state.stylesheets && (state.stylesheets = /* @__PURE__ */ new Map());
        state.stylesheets.set(resource, hoistableRoot);
        (hoistableRoot = resource.state.preload) && 0 === (resource.state.loading & 3) && (state.count++, resource = onUnsuspend.bind(state), hoistableRoot.addEventListener("load", resource), hoistableRoot.addEventListener("error", resource));
      }
    }
    function waitForCommitToBeReady() {
      if (null === suspendedState) throw Error(formatProdErrorMessage(475));
      var state = suspendedState;
      state.stylesheets && 0 === state.count && insertSuspendedStylesheets(state, state.stylesheets);
      return 0 < state.count ? function(commit) {
        var stylesheetTimer = setTimeout(function() {
          state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets);
          if (state.unsuspend) {
            var unsuspend = state.unsuspend;
            state.unsuspend = null;
            unsuspend();
          }
        }, 6e4);
        state.unsuspend = commit;
        return function() {
          state.unsuspend = null;
          clearTimeout(stylesheetTimer);
        };
      } : null;
    }
    function onUnsuspend() {
      this.count--;
      if (0 === this.count) {
        if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
        else if (this.unsuspend) {
          var unsuspend = this.unsuspend;
          this.unsuspend = null;
          unsuspend();
        }
      }
    }
    var precedencesByRoot = null;
    function insertSuspendedStylesheets(state, resources) {
      state.stylesheets = null;
      null !== state.unsuspend && (state.count++, precedencesByRoot = /* @__PURE__ */ new Map(), resources.forEach(insertStylesheetIntoRoot, state), precedencesByRoot = null, onUnsuspend.call(state));
    }
    function insertStylesheetIntoRoot(root2, resource) {
      if (!(resource.state.loading & 4)) {
        var precedences = precedencesByRoot.get(root2);
        if (precedences) var last = precedences.get(null);
        else {
          precedences = /* @__PURE__ */ new Map();
          precedencesByRoot.set(root2, precedences);
          for (var nodes = root2.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if ("LINK" === node.nodeName || "not all" !== node.getAttribute("media"))
              precedences.set(node.dataset.precedence, node), last = node;
          }
          last && precedences.set(null, last);
        }
        nodes = resource.instance;
        node = nodes.getAttribute("data-precedence");
        i = precedences.get(node) || last;
        i === last && precedences.set(null, nodes);
        precedences.set(node, nodes);
        this.count++;
        last = onUnsuspend.bind(this);
        nodes.addEventListener("load", last);
        nodes.addEventListener("error", last);
        i ? i.parentNode.insertBefore(nodes, i.nextSibling) : (root2 = 9 === root2.nodeType ? root2.head : root2, root2.insertBefore(nodes, root2.firstChild));
        resource.state.loading |= 4;
      }
    }
    var HostTransitionContext = {
      $$typeof: REACT_CONTEXT_TYPE,
      Provider: null,
      Consumer: null,
      _currentValue: sharedNotPendingObject,
      _currentValue2: sharedNotPendingObject,
      _threadCount: 0
    };
    function FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, formState) {
      this.tag = 1;
      this.containerInfo = containerInfo;
      this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
      this.callbackPriority = 0;
      this.expirationTimes = createLaneMap(-1);
      this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = createLaneMap(0);
      this.hiddenUpdates = createLaneMap(null);
      this.identifierPrefix = identifierPrefix;
      this.onUncaughtError = onUncaughtError;
      this.onCaughtError = onCaughtError;
      this.onRecoverableError = onRecoverableError;
      this.pooledCache = null;
      this.pooledCacheLanes = 0;
      this.formState = formState;
      this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, transitionCallbacks, formState) {
      containerInfo = new FiberRootNode(
        containerInfo,
        tag,
        hydrate,
        identifierPrefix,
        onUncaughtError,
        onCaughtError,
        onRecoverableError,
        formState
      );
      tag = 1;
      true === isStrictMode && (tag |= 24);
      isStrictMode = createFiberImplClass(3, null, null, tag);
      containerInfo.current = isStrictMode;
      isStrictMode.stateNode = containerInfo;
      tag = createCache();
      tag.refCount++;
      containerInfo.pooledCache = tag;
      tag.refCount++;
      isStrictMode.memoizedState = {
        element: initialChildren,
        isDehydrated: hydrate,
        cache: tag
      };
      initializeUpdateQueue(isStrictMode);
      return containerInfo;
    }
    function getContextForSubtree(parentComponent) {
      if (!parentComponent) return emptyContextObject;
      parentComponent = emptyContextObject;
      return parentComponent;
    }
    function updateContainerImpl(rootFiber, lane, element, container, parentComponent, callback) {
      parentComponent = getContextForSubtree(parentComponent);
      null === container.context ? container.context = parentComponent : container.pendingContext = parentComponent;
      container = createUpdate(lane);
      container.payload = { element };
      callback = void 0 === callback ? null : callback;
      null !== callback && (container.callback = callback);
      element = enqueueUpdate(rootFiber, container, lane);
      null !== element && (scheduleUpdateOnFiber(element, rootFiber, lane), entangleTransitions(element, rootFiber, lane));
    }
    function markRetryLaneImpl(fiber, retryLane) {
      fiber = fiber.memoizedState;
      if (null !== fiber && null !== fiber.dehydrated) {
        var a = fiber.retryLane;
        fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
      }
    }
    function markRetryLaneIfNotHydrated(fiber, retryLane) {
      markRetryLaneImpl(fiber, retryLane);
      (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
    }
    function attemptContinuousHydration(fiber) {
      if (13 === fiber.tag) {
        var root2 = enqueueConcurrentRenderForLane(fiber, 67108864);
        null !== root2 && scheduleUpdateOnFiber(root2, fiber, 67108864);
        markRetryLaneIfNotHydrated(fiber, 67108864);
      }
    }
    var _enabled = true;
    function dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent) {
      var prevTransition = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = ReactDOMSharedInternals.p;
      try {
        ReactDOMSharedInternals.p = 2, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
      } finally {
        ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
      }
    }
    function dispatchContinuousEvent(domEventName, eventSystemFlags, container, nativeEvent) {
      var prevTransition = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = ReactDOMSharedInternals.p;
      try {
        ReactDOMSharedInternals.p = 8, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
      } finally {
        ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
      }
    }
    function dispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
      if (_enabled) {
        var blockedOn = findInstanceBlockingEvent(nativeEvent);
        if (null === blockedOn)
          dispatchEventForPluginEventSystem(
            domEventName,
            eventSystemFlags,
            nativeEvent,
            return_targetInst,
            targetContainer
          ), clearIfContinuousEvent(domEventName, nativeEvent);
        else if (queueIfContinuousEvent(
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        ))
          nativeEvent.stopPropagation();
        else if (clearIfContinuousEvent(domEventName, nativeEvent), eventSystemFlags & 4 && -1 < discreteReplayableEvents.indexOf(domEventName)) {
          for (; null !== blockedOn; ) {
            var fiber = getInstanceFromNode(blockedOn);
            if (null !== fiber)
              switch (fiber.tag) {
                case 3:
                  fiber = fiber.stateNode;
                  if (fiber.current.memoizedState.isDehydrated) {
                    var lanes = getHighestPriorityLanes(fiber.pendingLanes);
                    if (0 !== lanes) {
                      var root2 = fiber;
                      root2.pendingLanes |= 2;
                      for (root2.entangledLanes |= 2; lanes; ) {
                        var lane = 1 << 31 - clz32(lanes);
                        root2.entanglements[1] |= lane;
                        lanes &= ~lane;
                      }
                      ensureRootIsScheduled(fiber);
                      0 === (executionContext & 6) && (workInProgressRootRenderTargetTime = now() + 500, flushSyncWorkAcrossRoots_impl(0));
                    }
                  }
                  break;
                case 13:
                  root2 = enqueueConcurrentRenderForLane(fiber, 2), null !== root2 && scheduleUpdateOnFiber(root2, fiber, 2), flushSyncWork$1(), markRetryLaneIfNotHydrated(fiber, 2);
              }
            fiber = findInstanceBlockingEvent(nativeEvent);
            null === fiber && dispatchEventForPluginEventSystem(
              domEventName,
              eventSystemFlags,
              nativeEvent,
              return_targetInst,
              targetContainer
            );
            if (fiber === blockedOn) break;
            blockedOn = fiber;
          }
          null !== blockedOn && nativeEvent.stopPropagation();
        } else
          dispatchEventForPluginEventSystem(
            domEventName,
            eventSystemFlags,
            nativeEvent,
            null,
            targetContainer
          );
      }
    }
    function findInstanceBlockingEvent(nativeEvent) {
      nativeEvent = getEventTarget(nativeEvent);
      return findInstanceBlockingTarget(nativeEvent);
    }
    var return_targetInst = null;
    function findInstanceBlockingTarget(targetNode) {
      return_targetInst = null;
      targetNode = getClosestInstanceFromNode(targetNode);
      if (null !== targetNode) {
        var nearestMounted = getNearestMountedFiber(targetNode);
        if (null === nearestMounted) targetNode = null;
        else {
          var tag = nearestMounted.tag;
          if (13 === tag) {
            targetNode = getSuspenseInstanceFromFiber(nearestMounted);
            if (null !== targetNode) return targetNode;
            targetNode = null;
          } else if (3 === tag) {
            if (nearestMounted.stateNode.current.memoizedState.isDehydrated)
              return 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
            targetNode = null;
          } else nearestMounted !== targetNode && (targetNode = null);
        }
      }
      return_targetInst = targetNode;
      return null;
    }
    function getEventPriority(domEventName) {
      switch (domEventName) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (getCurrentPriorityLevel()) {
            case ImmediatePriority:
              return 2;
            case UserBlockingPriority:
              return 8;
            case NormalPriority$1:
            case LowPriority:
              return 32;
            case IdlePriority:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hasScheduledReplayAttempt = false, queuedFocus = null, queuedDrag = null, queuedMouse = null, queuedPointers = /* @__PURE__ */ new Map(), queuedPointerCaptures = /* @__PURE__ */ new Map(), queuedExplicitHydrationTargets = [], discreteReplayableEvents = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    );
    function clearIfContinuousEvent(domEventName, nativeEvent) {
      switch (domEventName) {
        case "focusin":
        case "focusout":
          queuedFocus = null;
          break;
        case "dragenter":
        case "dragleave":
          queuedDrag = null;
          break;
        case "mouseover":
        case "mouseout":
          queuedMouse = null;
          break;
        case "pointerover":
        case "pointerout":
          queuedPointers.delete(nativeEvent.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          queuedPointerCaptures.delete(nativeEvent.pointerId);
      }
    }
    function accumulateOrCreateContinuousQueuedReplayableEvent(existingQueuedEvent, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
      if (null === existingQueuedEvent || existingQueuedEvent.nativeEvent !== nativeEvent)
        return existingQueuedEvent = {
          blockedOn,
          domEventName,
          eventSystemFlags,
          nativeEvent,
          targetContainers: [targetContainer]
        }, null !== blockedOn && (blockedOn = getInstanceFromNode(blockedOn), null !== blockedOn && attemptContinuousHydration(blockedOn)), existingQueuedEvent;
      existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
      blockedOn = existingQueuedEvent.targetContainers;
      null !== targetContainer && -1 === blockedOn.indexOf(targetContainer) && blockedOn.push(targetContainer);
      return existingQueuedEvent;
    }
    function queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
      switch (domEventName) {
        case "focusin":
          return queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedFocus,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          ), true;
        case "dragenter":
          return queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedDrag,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          ), true;
        case "mouseover":
          return queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedMouse,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          ), true;
        case "pointerover":
          var pointerId = nativeEvent.pointerId;
          queuedPointers.set(
            pointerId,
            accumulateOrCreateContinuousQueuedReplayableEvent(
              queuedPointers.get(pointerId) || null,
              blockedOn,
              domEventName,
              eventSystemFlags,
              targetContainer,
              nativeEvent
            )
          );
          return true;
        case "gotpointercapture":
          return pointerId = nativeEvent.pointerId, queuedPointerCaptures.set(
            pointerId,
            accumulateOrCreateContinuousQueuedReplayableEvent(
              queuedPointerCaptures.get(pointerId) || null,
              blockedOn,
              domEventName,
              eventSystemFlags,
              targetContainer,
              nativeEvent
            )
          ), true;
      }
      return false;
    }
    function attemptExplicitHydrationTarget(queuedTarget) {
      var targetInst = getClosestInstanceFromNode(queuedTarget.target);
      if (null !== targetInst) {
        var nearestMounted = getNearestMountedFiber(targetInst);
        if (null !== nearestMounted) {
          if (targetInst = nearestMounted.tag, 13 === targetInst) {
            if (targetInst = getSuspenseInstanceFromFiber(nearestMounted), null !== targetInst) {
              queuedTarget.blockedOn = targetInst;
              runWithPriority(queuedTarget.priority, function() {
                if (13 === nearestMounted.tag) {
                  var lane = requestUpdateLane();
                  lane = getBumpedLaneForHydrationByLane(lane);
                  var root2 = enqueueConcurrentRenderForLane(nearestMounted, lane);
                  null !== root2 && scheduleUpdateOnFiber(root2, nearestMounted, lane);
                  markRetryLaneIfNotHydrated(nearestMounted, lane);
                }
              });
              return;
            }
          } else if (3 === targetInst && nearestMounted.stateNode.current.memoizedState.isDehydrated) {
            queuedTarget.blockedOn = 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
            return;
          }
        }
      }
      queuedTarget.blockedOn = null;
    }
    function attemptReplayContinuousQueuedEvent(queuedEvent) {
      if (null !== queuedEvent.blockedOn) return false;
      for (var targetContainers = queuedEvent.targetContainers; 0 < targetContainers.length; ) {
        var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
        if (null === nextBlockedOn) {
          nextBlockedOn = queuedEvent.nativeEvent;
          var nativeEventClone = new nextBlockedOn.constructor(
            nextBlockedOn.type,
            nextBlockedOn
          );
          currentReplayingEvent = nativeEventClone;
          nextBlockedOn.target.dispatchEvent(nativeEventClone);
          currentReplayingEvent = null;
        } else
          return targetContainers = getInstanceFromNode(nextBlockedOn), null !== targetContainers && attemptContinuousHydration(targetContainers), queuedEvent.blockedOn = nextBlockedOn, false;
        targetContainers.shift();
      }
      return true;
    }
    function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
      attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
    }
    function replayUnblockedEvents() {
      hasScheduledReplayAttempt = false;
      null !== queuedFocus && attemptReplayContinuousQueuedEvent(queuedFocus) && (queuedFocus = null);
      null !== queuedDrag && attemptReplayContinuousQueuedEvent(queuedDrag) && (queuedDrag = null);
      null !== queuedMouse && attemptReplayContinuousQueuedEvent(queuedMouse) && (queuedMouse = null);
      queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
      queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
    }
    function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
      queuedEvent.blockedOn === unblocked && (queuedEvent.blockedOn = null, hasScheduledReplayAttempt || (hasScheduledReplayAttempt = true, Scheduler.unstable_scheduleCallback(
        Scheduler.unstable_NormalPriority,
        replayUnblockedEvents
      )));
    }
    var lastScheduledReplayQueue = null;
    function scheduleReplayQueueIfNeeded(formReplayingQueue) {
      lastScheduledReplayQueue !== formReplayingQueue && (lastScheduledReplayQueue = formReplayingQueue, Scheduler.unstable_scheduleCallback(
        Scheduler.unstable_NormalPriority,
        function() {
          lastScheduledReplayQueue === formReplayingQueue && (lastScheduledReplayQueue = null);
          for (var i = 0; i < formReplayingQueue.length; i += 3) {
            var form = formReplayingQueue[i], submitterOrAction = formReplayingQueue[i + 1], formData = formReplayingQueue[i + 2];
            if ("function" !== typeof submitterOrAction)
              if (null === findInstanceBlockingTarget(submitterOrAction || form))
                continue;
              else break;
            var formInst = getInstanceFromNode(form);
            null !== formInst && (formReplayingQueue.splice(i, 3), i -= 3, startHostTransition(
              formInst,
              {
                pending: true,
                data: formData,
                method: form.method,
                action: submitterOrAction
              },
              submitterOrAction,
              formData
            ));
          }
        }
      ));
    }
    function retryIfBlockedOn(unblocked) {
      function unblock(queuedEvent) {
        return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
      }
      null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
      null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
      null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
      queuedPointers.forEach(unblock);
      queuedPointerCaptures.forEach(unblock);
      for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
        var queuedTarget = queuedExplicitHydrationTargets[i];
        queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
      }
      for (; 0 < queuedExplicitHydrationTargets.length && (i = queuedExplicitHydrationTargets[0], null === i.blockedOn); )
        attemptExplicitHydrationTarget(i), null === i.blockedOn && queuedExplicitHydrationTargets.shift();
      i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
      if (null != i)
        for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
          var form = i[queuedTarget], submitterOrAction = i[queuedTarget + 1], formProps = form[internalPropsKey] || null;
          if ("function" === typeof submitterOrAction)
            formProps || scheduleReplayQueueIfNeeded(i);
          else if (formProps) {
            var action = null;
            if (submitterOrAction && submitterOrAction.hasAttribute("formAction"))
              if (form = submitterOrAction, formProps = submitterOrAction[internalPropsKey] || null)
                action = formProps.formAction;
              else {
                if (null !== findInstanceBlockingTarget(form)) continue;
              }
            else action = formProps.action;
            "function" === typeof action ? i[queuedTarget + 1] = action : (i.splice(queuedTarget, 3), queuedTarget -= 3);
            scheduleReplayQueueIfNeeded(i);
          }
        }
    }
    function ReactDOMRoot(internalRoot) {
      this._internalRoot = internalRoot;
    }
    ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render = function(children) {
      var root2 = this._internalRoot;
      if (null === root2) throw Error(formatProdErrorMessage(409));
      var current = root2.current, lane = requestUpdateLane();
      updateContainerImpl(current, lane, children, root2, null, null);
    };
    ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount = function() {
      var root2 = this._internalRoot;
      if (null !== root2) {
        this._internalRoot = null;
        var container = root2.containerInfo;
        updateContainerImpl(root2.current, 2, null, root2, null, null);
        flushSyncWork$1();
        container[internalContainerInstanceKey] = null;
      }
    };
    function ReactDOMHydrationRoot(internalRoot) {
      this._internalRoot = internalRoot;
    }
    ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function(target) {
      if (target) {
        var updatePriority = resolveUpdatePriority();
        target = { blockedOn: null, target, priority: updatePriority };
        for (var i = 0; i < queuedExplicitHydrationTargets.length && 0 !== updatePriority && updatePriority < queuedExplicitHydrationTargets[i].priority; i++) ;
        queuedExplicitHydrationTargets.splice(i, 0, target);
        0 === i && attemptExplicitHydrationTarget(target);
      }
    };
    var isomorphicReactPackageVersion$jscomp$inline_1785 = React.version;
    if ("19.1.1" !== isomorphicReactPackageVersion$jscomp$inline_1785)
      throw Error(
        formatProdErrorMessage(
          527,
          isomorphicReactPackageVersion$jscomp$inline_1785,
          "19.1.1"
        )
      );
    ReactDOMSharedInternals.findDOMNode = function(componentOrElement) {
      var fiber = componentOrElement._reactInternals;
      if (void 0 === fiber) {
        if ("function" === typeof componentOrElement.render)
          throw Error(formatProdErrorMessage(188));
        componentOrElement = Object.keys(componentOrElement).join(",");
        throw Error(formatProdErrorMessage(268, componentOrElement));
      }
      componentOrElement = findCurrentFiberUsingSlowPath(fiber);
      componentOrElement = null !== componentOrElement ? findCurrentHostFiberImpl(componentOrElement) : null;
      componentOrElement = null === componentOrElement ? null : componentOrElement.stateNode;
      return componentOrElement;
    };
    var internals$jscomp$inline_2256 = {
      bundleType: 0,
      version: "19.1.1",
      rendererPackageName: "react-dom",
      currentDispatcherRef: ReactSharedInternals,
      reconcilerVersion: "19.1.1"
    };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var hook$jscomp$inline_2257 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!hook$jscomp$inline_2257.isDisabled && hook$jscomp$inline_2257.supportsFiber)
        try {
          rendererID = hook$jscomp$inline_2257.inject(
            internals$jscomp$inline_2256
          ), injectedHook = hook$jscomp$inline_2257;
        } catch (err) {
        }
    }
    reactDomClient_production.createRoot = function(container, options2) {
      if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
      var isStrictMode = false, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError, transitionCallbacks = null;
      null !== options2 && void 0 !== options2 && (true === options2.unstable_strictMode && (isStrictMode = true), void 0 !== options2.identifierPrefix && (identifierPrefix = options2.identifierPrefix), void 0 !== options2.onUncaughtError && (onUncaughtError = options2.onUncaughtError), void 0 !== options2.onCaughtError && (onCaughtError = options2.onCaughtError), void 0 !== options2.onRecoverableError && (onRecoverableError = options2.onRecoverableError), void 0 !== options2.unstable_transitionCallbacks && (transitionCallbacks = options2.unstable_transitionCallbacks));
      options2 = createFiberRoot(
        container,
        1,
        false,
        null,
        null,
        isStrictMode,
        identifierPrefix,
        onUncaughtError,
        onCaughtError,
        onRecoverableError,
        transitionCallbacks,
        null
      );
      container[internalContainerInstanceKey] = options2.current;
      listenToAllSupportedEvents(container);
      return new ReactDOMRoot(options2);
    };
    reactDomClient_production.hydrateRoot = function(container, initialChildren, options2) {
      if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
      var isStrictMode = false, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError, transitionCallbacks = null, formState = null;
      null !== options2 && void 0 !== options2 && (true === options2.unstable_strictMode && (isStrictMode = true), void 0 !== options2.identifierPrefix && (identifierPrefix = options2.identifierPrefix), void 0 !== options2.onUncaughtError && (onUncaughtError = options2.onUncaughtError), void 0 !== options2.onCaughtError && (onCaughtError = options2.onCaughtError), void 0 !== options2.onRecoverableError && (onRecoverableError = options2.onRecoverableError), void 0 !== options2.unstable_transitionCallbacks && (transitionCallbacks = options2.unstable_transitionCallbacks), void 0 !== options2.formState && (formState = options2.formState));
      initialChildren = createFiberRoot(
        container,
        1,
        true,
        initialChildren,
        null != options2 ? options2 : null,
        isStrictMode,
        identifierPrefix,
        onUncaughtError,
        onCaughtError,
        onRecoverableError,
        transitionCallbacks,
        formState
      );
      initialChildren.context = getContextForSubtree(null);
      options2 = initialChildren.current;
      isStrictMode = requestUpdateLane();
      isStrictMode = getBumpedLaneForHydrationByLane(isStrictMode);
      identifierPrefix = createUpdate(isStrictMode);
      identifierPrefix.callback = null;
      enqueueUpdate(options2, identifierPrefix, isStrictMode);
      options2 = isStrictMode;
      initialChildren.current.lanes = options2;
      markRootUpdated$1(initialChildren, options2);
      ensureRootIsScheduled(initialChildren);
      container[internalContainerInstanceKey] = initialChildren.current;
      listenToAllSupportedEvents(container);
      return new ReactDOMHydrationRoot(initialChildren);
    };
    reactDomClient_production.version = "19.1.1";
    return reactDomClient_production;
  }
  var hasRequiredClient;
  function requireClient() {
    if (hasRequiredClient) return client.exports;
    hasRequiredClient = 1;
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    {
      checkDCE();
      client.exports = requireReactDomClient_production();
    }
    return client.exports;
  }
  var clientExports = requireClient();
  const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(clientExports);
  const useCompRef = (_component) => {
    const initObj = {};
    const proxy = new Proxy(initObj, {
      get: (target, prop) => {
        console.log("target", target);
        console.log("prop", prop);
        if (target === initObj) {
          console.warn("是否忘记了传递组件Ref?");
        }
        return null;
      }
    });
    return require$$1.useRef(proxy);
  };
  function useFilter(list, config) {
    const [filteredList, setFilteredList] = require$$1.useState(list);
    require$$1.useEffect(() => {
      setFilteredList(list);
    }, [list]);
    const handleFilter = (values) => {
      const filtered = list.filter((item) => {
        return Object.entries(config.fields).every(([field, fieldConfig]) => {
          const filterValue = values[field];
          if (!filterValue?.length) return true;
          const itemValue = fieldConfig.getValue(item);
          if (!itemValue) return false;
          return filterValue.some(
            (keyword) => itemValue.toLowerCase().includes(keyword.toLowerCase())
          );
        });
      });
      setFilteredList(filtered);
    };
    return { filteredList, setFilteredList, handleFilter };
  }
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  const yURL = "https://y.qq.com";
  const cURL = "https://c.y.qq.com";
  const uURL = "https://u.y.qq.com";
  const getBaseURL = (url, type = "c") => {
    let baseURL = "";
    switch (type) {
      case "y":
        baseURL = yURL + url;
        break;
      case "u":
        baseURL = uURL + url;
        break;
      case "c":
        baseURL = cURL + url;
        break;
      default:
        baseURL = cURL + url;
        break;
    }
    return baseURL;
  };
  const getDefaultHeaders = (type = "c") => {
    switch (type) {
      case "y":
        return { referer: "https://y.qq.com/", host: "y.qq.com" };
      case "u":
        return {
          referer: "https://y.qq.com/portal/player.html",
          host: "u.y.qq.com",
          "content-type": "application/x-www-form-urlencoded"
        };
      case "c":
        return { referer: "https://c.y.qq.com/", host: "c.y.qq.com" };
      default:
        return { referer: "https://c.y.qq.com/", host: "c.y.qq.com" };
    }
  };
  const qqMusicRequest = async (url, config, type = "c") => {
    const baseURL = getBaseURL(url, type);
    const { headers, method = "GET", responseType = "json", ...rest } = config;
    const cookie = document.cookie;
    return new Promise((resolve, reject) => {
      _GM_xmlhttpRequest({
        method,
        url: baseURL,
        responseType,
        headers: { ...getDefaultHeaders(type), cookie, ...headers },
        cookie,
        onload: (res) => resolve(res.response),
        onerror: reject,
        ...rest
      });
    });
  };
  const getAlbumInfo = async (albummid) => {
    const params = {
      albummid,
      format: "json",
      outCharset: "utf-8"
    };
    const res = await qqMusicRequest(
      `/v8/fcg-bin/fcg_v8_album_info_cp.fcg?${new URLSearchParams(params).toString()}`,
      {}
    );
    if (res.code === 0) {
      return res.data;
    }
    throw new Error("获取专辑信息失败");
  };
  const getAlbumPicUrl = (albummid, options) => {
    const { size = "800x800", maxAge = 2592e3 } = {};
    return `https://y.gtimg.cn/music/photo_new/T002R${size}M000${albummid}.jpg?max_age=${maxAge}`;
  };
  const searchAlbums = async (options = {}) => {
    const { keyword = "", artist = "", page = 1, limit = 20 } = options;
    const mockData = [
      {
        albumId: "1",
        albumName: keyword || "示例专辑1",
        singerName: artist || "示例歌手1",
        publishDate: "2023-01-01",
        songCount: 12,
        albumType: "专辑",
        albumPic: "https://via.placeholder.com/50x50",
        albumMid: "001CLC7W2Gpz4J"
      },
      {
        albumId: "2",
        albumName: keyword || "示例专辑2",
        singerName: artist || "示例歌手2",
        publishDate: "2023-02-01",
        songCount: 8,
        albumType: "EP",
        albumPic: "https://via.placeholder.com/50x50",
        albumMid: "002J4UUk29y8BY"
      },
      {
        albumId: "3",
        albumName: keyword || "示例专辑3",
        singerName: artist || "示例歌手3",
        publishDate: "2023-03-01",
        songCount: 15,
        albumType: "专辑",
        albumPic: "https://via.placeholder.com/50x50",
        albumMid: "003rJSwm3TechU"
      }
    ];
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedData = mockData.slice(start, end);
    return {
      list: paginatedData,
      total: mockData.length
    };
  };
  const uniqueArrayByKey = (arr, key) => {
    if (!Array.isArray(arr)) return [];
    const seen = /* @__PURE__ */ new Map();
    return arr.filter((item) => {
      if (!item || typeof item !== "object") return false;
      const val = item[key];
      if (seen.has(val)) return false;
      seen.set(val, true);
      return true;
    });
  };
  const promiseLimit = (promiseArray, limit = 6) => {
    if (!Array.isArray(promiseArray)) {
      throw new Error("第一个参数必须是数组");
    }
    if (!Number.isInteger(limit) || limit < 1) {
      throw new Error("并发限制必须是正整数");
    }
    if (promiseArray.length === 0) {
      return Promise.resolve([]);
    }
    return new Promise((resolve, reject) => {
      const results = new Array(promiseArray.length);
      let completed = 0;
      let currentIndex = 0;
      const runTask = async () => {
        const index2 = currentIndex++;
        if (index2 >= promiseArray.length) {
          return;
        }
        try {
          const promise = promiseArray[index2];
          if (typeof promise !== "function") {
            throw new Error(`数组中索引为 ${index2} 的元素不是函数`);
          }
          results[index2] = await promise();
        } catch (error) {
          results[index2] = error;
        }
        completed++;
        if (currentIndex < promiseArray.length) {
          runTask();
        } else if (completed === promiseArray.length) {
          resolve(results);
        }
      };
      const tasksToStart = Math.min(limit, promiseArray.length);
      for (let i = 0; i < tasksToStart; i++) {
        try {
          runTask();
        } catch (error) {
          reject(error);
        }
      }
    });
  };
  const getCookie = (key) => {
    const cookie = document.cookie;
    const cookieMap = {};
    cookie.split("; ").forEach((row) => {
      const [key2, value] = row.split("=");
      cookieMap[key2] = value;
    });
    return cookieMap[key];
  };
  const downloadWithFileName = async (url, name) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const suffix = url.split("?")[0].split(".").pop();
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `${name}.${suffix}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("下载失败:", error);
    }
  };
  const downloadAsJson = (data, filename, options = {}) => {
    try {
      const { space = 2, timestamp = false } = options;
      const jsonString = JSON.stringify(data, null, space);
      const blob = new Blob([jsonString], { type: "application/json" });
      const blobUrl = window.URL.createObjectURL(blob);
      let finalFilename = filename;
      if (timestamp) {
        const date = /* @__PURE__ */ new Date();
        const timeString = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(
        date.getDate()
      ).padStart(2, "0")}_${String(date.getHours()).padStart(2, "0")}${String(
        date.getMinutes()
      ).padStart(2, "0")}${String(date.getSeconds()).padStart(2, "0")}`;
        finalFilename = `${filename}_${timeString}`;
      }
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `${finalFilename}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
      return true;
    } catch (error) {
      console.error("JSON数据下载失败:", error);
      return false;
    }
  };
  const mapToList = (map) => {
    return Object.entries(map).map(([key, value]) => ({
      label: key,
      value
    }));
  };
  const Area = {
    全部: -100,
    内地: 200,
    港台: 2,
    欧美: 5,
    日本: 4,
    韩国: 3,
    其他: 6
  };
  const AreaList = mapToList(Area);
  const Genre = {
    全部: -100,
    流行: 1,
    嘻哈: 6,
    摇滚: 2,
    电子: 4,
    民谣: 3,
    "R&B": 8,
    民歌: 10,
    轻音乐: 9,
    爵士: 5,
    古典: 14,
    乡村: 25,
    蓝调: 20
  };
  const GenreList = mapToList(Genre);
  const Sex = {
    全部: -100,
    男: 0,
    女: 1,
    组合: 2
  };
  const SexList = mapToList(Sex);
  const getCommonParams = () => ({
    g_tk: 1124214810,
    loginUin: getCookie("uin") || "0",
    hostUin: 0,
    inCharset: "utf8",
    outCharset: "utf-8",
    // format: 'json',
    notice: 0,
    platform: "yqq.json",
    needNewCode: 0
  });
  const _guid = Math.round(2147483647 * Math.random()) * (/* @__PURE__ */ new Date()).getUTCMilliseconds() % 1e10;
  const FileType = {
    m4a: {
      s: "C400",
      e: ".m4a"
    },
    128: {
      s: "M500",
      e: ".mp3"
    },
    320: {
      s: "M800",
      e: ".mp3"
    },
    ape: {
      s: "A000",
      e: ".ape"
    },
    flac: {
      s: "F000",
      e: ".flac"
    }
  };
  const ResourceType = {
    歌曲: "song",
    专辑: "album",
    视频: "mv",
    歌单: "playlist",
    歌手: "user",
    歌词: "lyric"
  };
  var dayjs_min$1 = { exports: {} };
  var dayjs_min = dayjs_min$1.exports;
  var hasRequiredDayjs_min;
  function requireDayjs_min() {
    if (hasRequiredDayjs_min) return dayjs_min$1.exports;
    hasRequiredDayjs_min = 1;
    (function(module, exports) {
      !(function(t, e) {
        module.exports = e();
      })(dayjs_min, (function() {
        var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
          var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
          return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
        } }, m = function(t2, e2, n2) {
          var r2 = String(t2);
          return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
        }, v = { s: m, z: function(t2) {
          var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
          return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
        }, m: function t2(e2, n2) {
          if (e2.date() < n2.date()) return -t2(n2, e2);
          var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
          return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
        }, a: function(t2) {
          return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
        }, p: function(t2) {
          return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t2) {
          return void 0 === t2;
        } }, g = "en", D = {};
        D[g] = M;
        var p = "$isDayjsObject", S = function(t2) {
          return t2 instanceof _ || !(!t2 || !t2[p]);
        }, w = function t2(e2, n2, r2) {
          var i2;
          if (!e2) return g;
          if ("string" == typeof e2) {
            var s2 = e2.toLowerCase();
            D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
            var u2 = e2.split("-");
            if (!i2 && u2.length > 1) return t2(u2[0]);
          } else {
            var a2 = e2.name;
            D[a2] = e2, i2 = a2;
          }
          return !r2 && i2 && (g = i2), i2 || !r2 && g;
        }, O = function(t2, e2) {
          if (S(t2)) return t2.clone();
          var n2 = "object" == typeof e2 ? e2 : {};
          return n2.date = t2, n2.args = arguments, new _(n2);
        }, b = v;
        b.l = w, b.i = S, b.w = function(t2, e2) {
          return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
        };
        var _ = (function() {
          function M2(t2) {
            this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
          }
          var m2 = M2.prototype;
          return m2.parse = function(t2) {
            this.$d = (function(t3) {
              var e2 = t3.date, n2 = t3.utc;
              if (null === e2) return /* @__PURE__ */ new Date(NaN);
              if (b.u(e2)) return /* @__PURE__ */ new Date();
              if (e2 instanceof Date) return new Date(e2);
              if ("string" == typeof e2 && !/Z$/i.test(e2)) {
                var r2 = e2.match($);
                if (r2) {
                  var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                  return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
                }
              }
              return new Date(e2);
            })(t2), this.init();
          }, m2.init = function() {
            var t2 = this.$d;
            this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
          }, m2.$utils = function() {
            return b;
          }, m2.isValid = function() {
            return !(this.$d.toString() === l);
          }, m2.isSame = function(t2, e2) {
            var n2 = O(t2);
            return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
          }, m2.isAfter = function(t2, e2) {
            return O(t2) < this.startOf(e2);
          }, m2.isBefore = function(t2, e2) {
            return this.endOf(e2) < O(t2);
          }, m2.$g = function(t2, e2, n2) {
            return b.u(t2) ? this[e2] : this.set(n2, t2);
          }, m2.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m2.valueOf = function() {
            return this.$d.getTime();
          }, m2.startOf = function(t2, e2) {
            var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
              var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
              return r2 ? i2 : i2.endOf(a);
            }, $2 = function(t3, e3) {
              return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
            }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
            switch (f2) {
              case h:
                return r2 ? l2(1, 0) : l2(31, 11);
              case c:
                return r2 ? l2(1, M3) : l2(0, M3 + 1);
              case o:
                var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
                return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
              case a:
              case d:
                return $2(v2 + "Hours", 0);
              case u:
                return $2(v2 + "Minutes", 1);
              case s:
                return $2(v2 + "Seconds", 2);
              case i:
                return $2(v2 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m2.endOf = function(t2) {
            return this.startOf(t2, false);
          }, m2.$set = function(t2, e2) {
            var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
            if (o2 === c || o2 === h) {
              var y2 = this.clone().set(d, 1);
              y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
            } else l2 && this.$d[l2]($2);
            return this.init(), this;
          }, m2.set = function(t2, e2) {
            return this.clone().$set(t2, e2);
          }, m2.get = function(t2) {
            return this[b.p(t2)]();
          }, m2.add = function(r2, f2) {
            var d2, l2 = this;
            r2 = Number(r2);
            var $2 = b.p(f2), y2 = function(t2) {
              var e2 = O(l2);
              return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
            };
            if ($2 === c) return this.set(c, this.$M + r2);
            if ($2 === h) return this.set(h, this.$y + r2);
            if ($2 === a) return y2(1);
            if ($2 === o) return y2(7);
            var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
            return b.w(m3, this);
          }, m2.subtract = function(t2, e2) {
            return this.add(-1 * t2, e2);
          }, m2.format = function(t2) {
            var e2 = this, n2 = this.$locale();
            if (!this.isValid()) return n2.invalidDate || l;
            var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
              return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
            }, d2 = function(t3) {
              return b.s(s2 % 12 || 12, t3, "0");
            }, $2 = f2 || function(t3, e3, n3) {
              var r3 = t3 < 12 ? "AM" : "PM";
              return n3 ? r3.toLowerCase() : r3;
            };
            return r2.replace(y, (function(t3, r3) {
              return r3 || (function(t4) {
                switch (t4) {
                  case "YY":
                    return String(e2.$y).slice(-2);
                  case "YYYY":
                    return b.s(e2.$y, 4, "0");
                  case "M":
                    return a2 + 1;
                  case "MM":
                    return b.s(a2 + 1, 2, "0");
                  case "MMM":
                    return h2(n2.monthsShort, a2, c2, 3);
                  case "MMMM":
                    return h2(c2, a2);
                  case "D":
                    return e2.$D;
                  case "DD":
                    return b.s(e2.$D, 2, "0");
                  case "d":
                    return String(e2.$W);
                  case "dd":
                    return h2(n2.weekdaysMin, e2.$W, o2, 2);
                  case "ddd":
                    return h2(n2.weekdaysShort, e2.$W, o2, 3);
                  case "dddd":
                    return o2[e2.$W];
                  case "H":
                    return String(s2);
                  case "HH":
                    return b.s(s2, 2, "0");
                  case "h":
                    return d2(1);
                  case "hh":
                    return d2(2);
                  case "a":
                    return $2(s2, u2, true);
                  case "A":
                    return $2(s2, u2, false);
                  case "m":
                    return String(u2);
                  case "mm":
                    return b.s(u2, 2, "0");
                  case "s":
                    return String(e2.$s);
                  case "ss":
                    return b.s(e2.$s, 2, "0");
                  case "SSS":
                    return b.s(e2.$ms, 3, "0");
                  case "Z":
                    return i2;
                }
                return null;
              })(t3) || i2.replace(":", "");
            }));
          }, m2.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m2.diff = function(r2, d2, l2) {
            var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
              return b.m(y2, m3);
            };
            switch (M3) {
              case h:
                $2 = D2() / 12;
                break;
              case c:
                $2 = D2();
                break;
              case f:
                $2 = D2() / 3;
                break;
              case o:
                $2 = (g2 - v2) / 6048e5;
                break;
              case a:
                $2 = (g2 - v2) / 864e5;
                break;
              case u:
                $2 = g2 / n;
                break;
              case s:
                $2 = g2 / e;
                break;
              case i:
                $2 = g2 / t;
                break;
              default:
                $2 = g2;
            }
            return l2 ? $2 : b.a($2);
          }, m2.daysInMonth = function() {
            return this.endOf(c).$D;
          }, m2.$locale = function() {
            return D[this.$L];
          }, m2.locale = function(t2, e2) {
            if (!t2) return this.$L;
            var n2 = this.clone(), r2 = w(t2, e2, true);
            return r2 && (n2.$L = r2), n2;
          }, m2.clone = function() {
            return b.w(this.$d, this);
          }, m2.toDate = function() {
            return new Date(this.valueOf());
          }, m2.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m2.toISOString = function() {
            return this.$d.toISOString();
          }, m2.toString = function() {
            return this.$d.toUTCString();
          }, M2;
        })(), k = _.prototype;
        return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach((function(t2) {
          k[t2[1]] = function(e2) {
            return this.$g(e2, t2[0], t2[1]);
          };
        })), O.extend = function(t2, e2) {
          return t2.$i || (t2(e2, _, O), t2.$i = true), O;
        }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
          return O(1e3 * t2);
        }, O.en = D[g], O.Ls = D, O.p = {}, O;
      }));
    })(dayjs_min$1);
    return dayjs_min$1.exports;
  }
  var dayjs_minExports = requireDayjs_min();
  const dayjs = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
  const getSongInfo = async (songmid, options = {}) => {
    const { songid = "" } = options;
    const params = {
      ...getCommonParams(),
      format: "json",
      inCharset: "utf8",
      outCharset: "utf-8",
      notice: 0,
      platform: "yqq.json",
      needNewCode: 0,
      data: JSON.stringify({
        comm: {
          ct: 24,
          cv: 0
        },
        songinfo: {
          method: "get_song_detail_yqq",
          param: {
            song_type: 0,
            song_mid: songmid,
            song_id: songid
          },
          module: "music.pf_song_detail_svr"
        }
      })
    };
    const res = await qqMusicRequest(
      `/cgi-bin/musicu.fcg?${new URLSearchParams(params).toString()}`,
      {},
      "u"
    );
    if (res.code === 0) {
      return res.songinfo?.data;
    }
    throw new Error("获取歌曲信息失败");
  };
  const getSongLyric = async (songmid) => {
    const params = {
      songmid,
      format: "json",
      outCharset: "utf-8",
      pcachetime: dayjs().valueOf()
    };
    const res = await qqMusicRequest(
      `/lyric/fcgi-bin/fcg_query_lyric_new.fcg?${new URLSearchParams(params)}`,
      {}
    );
    if (res.code === 0) {
      const lyric = window.atob(res.lyric);
      const bytes = Uint8Array.from(lyric, (c) => c.charCodeAt(0));
      const decoder = new TextDecoder();
      const decodedText = decoder.decode(bytes);
      return decodedText;
    }
    throw new Error("获取歌曲歌词失败");
  };
  const getSongPlayUrl = async (songmid, options = {}) => {
    const { quality = "flac" } = options;
    const songmidList = Array.isArray(songmid) ? songmid : [songmid];
    const fileInfo = FileType[quality];
    const fileNames = songmidList.map((item, index2) => `${fileInfo.s}${item}${item}${fileInfo.e}`);
    const uin = getCookie("uin");
    const params = {
      format: "json",
      sign: "zzannc1o6o9b4i971602f3554385022046ab796512b7012",
      data: JSON.stringify({
        req_0: {
          module: "vkey.GetVkeyServer",
          method: "CgiGetVkey",
          param: {
            filename: fileNames,
            guid: _guid + "",
            songmid: songmidList,
            songtype: [0],
            uin,
            loginflag: 1,
            platform: "20"
          }
        },
        loginUin: uin,
        comm: {
          uin,
          format: "json",
          ct: 24,
          cv: 0
        }
      })
    };
    const res = await qqMusicRequest(
      `/cgi-bin/musicu.fcg?${new URLSearchParams(params)}`,
      {},
      "u"
    );
    console.log("res", res);
    if (res.code === 0) {
      const data = res.req_0.data;
      const domain = data.sip?.find((i) => !i.startsWith("http://ws")) || data.sip[0];
      let playUrl = {};
      data.midurlinfo.forEach((item) => {
        playUrl[item.songmid] = {
          url: item.purl ? `${domain}${item.purl}` : "",
          error: !item.purl && "暂无播放链接"
        };
      });
      return playUrl;
    }
    throw new Error("获取歌曲播放链接失败");
  };
  const audio = new Audio();
  const usePlayMusic = () => {
    const [currentMid, setCurrentMid] = require$$1.useState("");
    const [url, setUrl] = require$$1.useState("");
    const [isPlaying, setIsPlaying] = require$$1.useState();
    const [currentTime, setCurrentTime] = require$$1.useState(0);
    const [duration2, setDuration] = require$$1.useState(0);
    const urlMap = require$$1.useRef({});
    const getUrl = async (mid, quality = "flac") => {
      if (urlMap.current[mid]) {
        return urlMap.current[mid];
      }
      const res = await getSongPlayUrl(mid, quality && { quality });
      urlMap.current[mid] = res[mid].url;
      return res[mid].url;
    };
    const play = async (mid, quality = "flac") => {
      try {
        if (mid === currentMid) {
          audio.play();
          return;
        }
        const url2 = await getUrl(mid, quality);
        audio.src = url2;
        audio.play();
        setCurrentMid(mid);
        urlMap.current[mid] = url2;
        return new Promise((resolve) => {
          audio.onended = () => {
            resolve(true);
            setIsPlaying(void 0);
          };
        });
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsPlaying(mid);
      }
    };
    const playList = async (midList) => {
      for (const mid of midList) {
        await play(mid);
      }
    };
    const download = async (mid, name, quality = "flac") => {
      try {
        const url2 = await getUrl(mid, quality);
        await downloadWithFileName(url2.replace("http://", "https://"), name);
      } catch (error) {
        console.log("error", error);
      }
    };
    const getLyric = async (mid) => {
      const res = await getSongLyric(mid);
      return res;
    };
    const pause = () => {
      audio.pause();
      setIsPlaying(void 0);
    };
    const stop = () => {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(void 0);
    };
    require$$1.useEffect(() => {
      audio.onloadedmetadata = () => {
        setDuration(audio.duration);
      };
      audio.onpause = () => {
        setIsPlaying(void 0);
      };
    }, [currentMid]);
    return {
      url,
      isPlaying,
      currentTime,
      duration: duration2,
      play,
      pause,
      stop,
      audio,
      download,
      playList,
      getUrl,
      getLyric
    };
  };
  const useGetAlbumDetail = () => {
    const [currentMid, setCurrentMid] = require$$1.useState("");
    const [albumInfo, setAlbumInfo] = require$$1.useState();
    const [isLoading, setIsLoading] = require$$1.useState(false);
    const albumInfoMap = require$$1.useRef({});
    const { play, getUrl, getLyric } = usePlayMusic();
    const getAlbumDetail = async (mid) => {
      try {
        setIsLoading(true);
        if (albumInfoMap.current[mid]) {
          return albumInfoMap.current[mid];
        }
        const res = await getAlbumInfo(mid);
        console.log("res", res);
        albumInfoMap.current[mid] = res;
        return res;
      } catch (error) {
        console.error("获取专辑详情失败:", error);
      } finally {
        setIsLoading(false);
      }
    };
    const getAlbumSongList = async (mid) => {
      try {
        setIsLoading(true);
        const res = await getAlbumDetail(mid);
        return res?.list;
      } catch (error) {
        console.error("获取专辑歌曲列表失败:", error);
      } finally {
        setIsLoading(false);
      }
    };
    const getAlbumSongUrl = async (mid) => {
      const res = await getAlbumSongList(mid);
      const ids = res?.map((item) => {
        const quality = getHighestQuality(item);
        return {
          id: item.songmid,
          name: item.songname,
          quality
        };
      });
      const promiseArr = ids?.map((item) => async () => {
        const url = await getUrl(item.id, item.quality);
        return {
          ...item,
          url
        };
      });
      const urls = await promiseLimit(promiseArr, 6);
      console.log("urls", urls);
      return urls;
    };
    const downloadAlbumSong = async (mid) => {
      try {
        const urls = await getAlbumSongUrl(mid);
        console.log("urls", urls);
        for (const item of urls) {
          const { id, name, url } = item;
          console.log("id", id);
          console.log("name", name);
          console.log("url", url);
          console.log(`当前正在下载${name}...`);
          await downloadWithFileName(url.replace("http://", "https://"), name);
        }
      } catch (error) {
        console.error("下载专辑歌曲失败:", error);
      }
    };
    const getDownLoadJson = async (mid) => {
      const albumDetail = await getAlbumDetail(mid);
      const { name, list } = albumDetail || {};
      const promiseArr = list?.map((item) => async () => {
        const lrcContent = await getLyric(item.songmid);
        const url = await getUrl(item.songmid, getHighestQuality(item));
        return {
          songName: item.songname,
          url,
          lrcContent
        };
      });
      const songList = await promiseLimit(promiseArr, 6);
      return {
        albumName: name,
        albumCover: getAlbumPicUrl(mid),
        songList
      };
    };
    const playAlbum = async (mid) => {
      const songList = await getAlbumSongList(mid);
      console.log("songList", songList);
      if (!songList?.length) return;
      for (const item of songList) {
        console.log("当前正在播放", item.songname);
        await play(item.songmid);
      }
    };
    return {
      albumInfo,
      isLoading,
      getAlbumDetail,
      getAlbumSongList,
      playAlbum,
      getAlbumSongUrl,
      downloadAlbumSong,
      getDownLoadJson
    };
  };
  const getHighestQuality = (file) => {
    if (file.sizeflac > 0) return "flac";
    if (file.sizeape > 0) return "ape";
    if (file.size320 > 0) return 320;
    if (file.size128 > 0) return 128;
    return 128;
  };
  const useGetData = (api, params, options) => {
    const {
      // 监控项
      monitors,
      // 终止函数，什么条件下不执行
      returnFunction,
      // 初始值
      initialValue = {},
      // 拿到数据后执行的函数
      callback
    } = options || {};
    const [data, setData] = require$$1.useState(initialValue);
    const [loading2, setLoading] = require$$1.useState(false);
    const getData = async () => {
      try {
        setLoading(true);
        const res = await api(params);
        setData(res || {});
        callback && callback(res || {});
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    require$$1.useEffect(() => {
      if (returnFunction && returnFunction()) return;
      getData();
    }, monitors || []);
    return {
      /** 数据 */
      data,
      /** 手动更改数据 */
      setData,
      /** 是否加载中 */
      loading: loading2,
      /** 手动获取数据 */
      getData
    };
  };
  const useVisible = (props = {}, ref) => {
    const {
      onOpen = NOOP,
      onClose = NOOP,
      onReset = NOOP,
      resetOnOpen = true,
      resetOnClose = false
    } = props;
    const [visible, setVisible] = require$$1.useState(false);
    const open = (params) => {
      resetOnOpen && reset();
      setVisible(true);
      onOpen(params);
    };
    const close = () => {
      resetOnClose && reset();
      setVisible(false);
      onClose();
    };
    const reset = () => {
      setVisible(false);
      onReset();
    };
    const resolve = require$$1.useRef(null);
    const reject = require$$1.useRef(null);
    const submit = () => {
      return new Promise((_resolve, _reject) => {
        resolve.current = _resolve;
        reject.current = _reject;
      });
    };
    ref && require$$1.useImperativeHandle(ref, () => ({
      open,
      close,
      reset,
      submit,
      resolve,
      reject
    }));
    return {
      visible,
      open,
      close,
      reset,
      submit,
      resolve,
      reject
    };
  };
  const NOOP = () => {
  };
  const Demo = require$$1.forwardRef((props, ref) => {
    const { visible, close } = useVisible({}, ref);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      antd.Modal,
      {
        title: "demo",
        open: visible,
        onCancel: close,
        footer: null,
        centered: true
      }
    );
  });
  const styles$7 = {
    "button-group": "_button-group_y8t3i_1"
  };
  const getSearchResult = async (keyword, type = "song", options) => {
    const { pageNum = 1, pageSize = 20 } = {};
    const params = {
      w: keyword,
      n: pageSize,
      p: pageNum,
      catZhida: 1,
      format: "json",
      outCharset: "utf-8",
      ct: 24,
      qqmusic_ver: 1298,
      remoteplace: `txt.yqq.${type}`,
      t: 0,
      aggr: 1,
      cr: 1,
      lossless: 0,
      flag_qc: 0,
      platform: "yqq.json"
    };
    const res = await qqMusicRequest(
      `/soso/fcgi-bin/client_search_cp?${new URLSearchParams(params).toString()}`,
      {
        method: "GET"
      },
      "c"
    );
    return res;
  };
  const getSingerInfo = async (singermid) => {
    const params = {
      singermid,
      format: "xml",
      outCharset: "utf-8",
      utf8: "1",
      r: dayjs().valueOf() + ""
    };
    return qqMusicRequest(
      `/splcloud/fcgi-bin/fcg_get_singer_desc.fcg?${new URLSearchParams(params).toString()}`,
      {
        method: "GET",
        responseType: "text"
        // 改为 text 因为返回的是 XML
      }
    );
  };
  const getSingerAlbum = async (singermid, options = {}) => {
    const { begin = 0, num = 80 } = options;
    const params = {
      format: "json",
      singermid,
      data: JSON.stringify({
        comm: {
          ct: 24,
          cv: 0
        },
        singer: {
          method: "GetAlbumList",
          param: {
            sort: 5,
            singermid,
            begin,
            num
          },
          module: "music.musichallAlbum.AlbumListServer"
        }
      })
    };
    const res = await qqMusicRequest(
      `/cgi-bin/musicu.fcg?${new URLSearchParams(params).toString()}`,
      {},
      "u"
    );
    if (res.code === 0) {
      return res.singer?.data;
    }
    throw new Error("获取歌手专辑失败");
  };
  const getSingerAllAlbum = async (singermid) => {
    const allAlbum = [];
    let begin = 0;
    const num = 80;
    let hasMore = true;
    while (hasMore) {
      const res = await getSingerAlbum(singermid, { begin, num });
      if (res) {
        allAlbum.push(...res.albumList);
        hasMore = allAlbum.length < res.total;
      } else {
        hasMore = false;
      }
      begin += num;
    }
    return allAlbum;
  };
  const getSingerList = async (options) => {
    const { area = -100, sex = -100, genre = -100, cur_page = 1 } = options;
    const params = {
      format: "json",
      data: JSON.stringify({
        comm: {
          ct: 24,
          cv: 0
        },
        singerList: {
          module: "Music.SingerListServer",
          method: "get_singer_list",
          param: {
            area: +area,
            sex: +sex,
            genre: +genre,
            index: -100,
            sin: (cur_page - 1) * 80,
            num: 80,
            cur_page
          }
        }
      })
    };
    const res = await qqMusicRequest(
      `/cgi-bin/musicu.fcg?${new URLSearchParams(params).toString()}`,
      {},
      "u"
    );
    if (res.code === 0) {
      return res.singerList?.data;
    }
    throw new Error("获取歌手列表失败");
  };
  const getSingerFollowCount = async (singermid) => {
    const params = {
      singermid,
      format: "json",
      outCharset: "utf-8",
      utf8: "1",
      rnd: dayjs().valueOf() + ""
    };
    return qqMusicRequest(
      `/rsc/fcgi-bin/fcg_order_singer_getnum.fcg?${new URLSearchParams(params).toString()}`,
      {},
      "c"
    );
  };
  const getSingerHotSong = async (singermid, options = {}) => {
    const { sin = 0, num = 80 } = options;
    const params = {
      singermid,
      format: "json",
      data: JSON.stringify({
        comm: {
          ct: 24,
          cv: 0
        },
        singer: {
          method: "get_singer_detail_info",
          param: {
            sort: 5,
            singermid,
            sin,
            num
          },
          module: "music.web_singer_info_svr"
        }
      })
    };
    const res = await qqMusicRequest(
      `/cgi-bin/musicu.fcg?${new URLSearchParams(params).toString()}`,
      {},
      "u"
    );
    if (res.code === 0) {
      return res.singer?.data;
    }
    throw new Error("获取歌手热门歌曲失败");
  };
  const getSimilarSinger = async (singer_mid, options = {}) => {
    const { start = 0, num = 5 } = options;
    const params = {
      singer_mid,
      format: "json",
      outCharset: "utf-8",
      utf8: "1",
      start: start + "",
      num: num + ""
    };
    const res = await qqMusicRequest(
      `/v8/fcg-bin/fcg_v8_simsinger.fcg?${new URLSearchParams(params).toString()}`,
      {}
    );
    return res.singers;
  };
  const getSongListCategory = async () => {
    const params = {
      format: "json",
      outCharset: "utf-8"
    };
    const res = await qqMusicRequest(
      `/splcloud/fcgi-bin/fcg_get_diss_tag_conf.fcg?${new URLSearchParams(params)}`,
      {}
    );
    if (res.code === 0) {
      return res.data?.categories;
    }
    throw new Error("获取歌单分类列表失败");
  };
  const getSongList = async (options = {}) => {
    const { limit = 20, page = 0, sortId = 5, categoryId = 1e7 } = options;
    const sin = page * limit;
    const ein = limit * (page + 1) - 1;
    const params = {
      categoryId,
      sortId,
      sin,
      ein,
      format: "json",
      outCharset: "utf-8",
      picmid: 1
    };
    const res = await qqMusicRequest(
      `/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg?${new URLSearchParams(params).toString()}`,
      {}
    );
    if (res.code === 0) {
      return res.data;
    }
    throw new Error("获取歌单列表失败");
  };
  const getSongListDetail = async (disstid) => {
    const disstidStr = Array.isArray(disstid) ? disstid.join(",") : disstid;
    const params = {
      disstid: disstidStr,
      format: "json",
      outCharset: "utf-8",
      type: "1",
      json: "1",
      utf8: "1",
      onlysong: "0",
      new_format: "1"
    };
    const res = await qqMusicRequest(
      `/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?${new URLSearchParams(params).toString()}`,
      {}
    );
    if (res.code === 0) {
      return res.cdlist;
    }
    throw new Error("获取歌单详情失败");
  };
  const TestModal = require$$1.forwardRef((props, ref) => {
    const { visible, close } = useVisible({}, ref);
    const [getSingerListLoading, setGetSingerListLoading] = require$$1.useState(false);
    const [getSingerListParams, setGetSingerListParams] = require$$1.useState({
      area: -100,
      sex: -100,
      genre: -100,
      cur_page: 1
    });
    const handleGetSingerList = async () => {
      try {
        setGetSingerListLoading(true);
        const res = await getSingerList(getSingerListParams);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetSingerListLoading(false);
      }
    };
    const [mid, setMid] = require$$1.useState("003fA5G40k6hKc");
    const [getSingerInfoLoading, setGetSingerInfoLoading] = require$$1.useState(false);
    const handleGetSingerInfo = async () => {
      try {
        setGetSingerInfoLoading(true);
        const res = await getSingerInfo(mid);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetSingerInfoLoading(false);
      }
    };
    const [getSingerAlbumLoading, setGetSingerAlbumLoading] = require$$1.useState(false);
    const handleGetSingerAlbum = async () => {
      try {
        setGetSingerAlbumLoading(true);
        const res = await getSingerAlbum(mid);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetSingerAlbumLoading(false);
      }
    };
    const [getSingerAllAlbumLoading, setGetSingerAllAlbumLoading] = require$$1.useState(false);
    const handleGetSingerAllAlbum = async () => {
      try {
        setGetSingerAllAlbumLoading(true);
        const res = await getSingerAllAlbum(mid);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetSingerAllAlbumLoading(false);
      }
    };
    const [getSingerFollowCountLoading, setGetSingerFollowCountLoading] = require$$1.useState(false);
    const handleGetSingerFollowCount = async () => {
      try {
        setGetSingerFollowCountLoading(true);
        const res = await getSingerFollowCount(mid);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetSingerFollowCountLoading(false);
      }
    };
    const [getSingerHotSongLoading, setGetSingerHotSongLoading] = require$$1.useState(false);
    const handleGetSingerHotSong = async () => {
      try {
        setGetSingerHotSongLoading(true);
        const res = await getSingerHotSong(mid);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetSingerHotSongLoading(false);
      }
    };
    const [getSimilarSingerLoading, setGetSimilarSingerLoading] = require$$1.useState(false);
    const handleGetSimilarSinger = async () => {
      try {
        setGetSimilarSingerLoading(true);
        const res = await getSimilarSinger(mid);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetSimilarSingerLoading(false);
      }
    };
    const [albummid, setAlbummid] = require$$1.useState("0016l2F430zMux");
    const [getAlbumInfoLoading, setGetAlbumInfoLoading] = require$$1.useState(false);
    const handleGetAlbumInfo = async () => {
      try {
        setGetAlbumInfoLoading(true);
        const res = await getAlbumInfo(albummid);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetAlbumInfoLoading(false);
      }
    };
    const [getAlbumPicUrlLoading, setGetAlbumPicUrlLoading] = require$$1.useState(false);
    const handleGetAlbumPicUrl = async () => {
      try {
        setGetAlbumPicUrlLoading(true);
        const res = getAlbumPicUrl(albummid);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetAlbumPicUrlLoading(false);
      }
    };
    const [getSongListLoading, setGetSongListLoading] = require$$1.useState(false);
    const [getSongListCategoryLoading, setGetSongListCategoryLoading] = require$$1.useState(false);
    const handleGetSongListCategory = async () => {
      try {
        setGetSongListCategoryLoading(true);
        const res = await getSongListCategory();
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetSongListCategoryLoading(false);
      }
    };
    const handleGetSongList = async () => {
      try {
        setGetSongListLoading(true);
        const res = await getSongList();
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetSongListLoading(false);
      }
    };
    const [disstid, setDisstid] = require$$1.useState("7011264340");
    const [getSongListDetailLoading, setGetSongListDetailLoading] = require$$1.useState(false);
    const handleGetSongListDetail = async () => {
      try {
        setGetSongListDetailLoading(true);
        const res = await getSongListDetail(disstid);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetSongListDetailLoading(false);
      }
    };
    const [getSongLyricLoading, setGetSongLyricLoading] = require$$1.useState(false);
    const [songmid, setSongmid] = require$$1.useState("003rJSwm3TechU");
    const handleGetSongLyric = async () => {
      try {
        setGetSongLyricLoading(true);
        const res = await getSongLyric(songmid);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetSongLyricLoading(false);
      }
    };
    const [getSongPlayUrlLoading, setGetSongPlayUrlLoading] = require$$1.useState(false);
    const handleGetSongPlayUrl = async () => {
      try {
        setGetSongPlayUrlLoading(true);
        const res = await getSongPlayUrl(songmid.split(","));
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetSongPlayUrlLoading(false);
      }
    };
    const [getSongInfoLoading, setGetSongInfoLoading] = require$$1.useState(false);
    const handleGetSongInfo = async () => {
      try {
        setGetSongInfoLoading(true);
        const res = await getSongInfo(songmid);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetSongInfoLoading(false);
      }
    };
    const [getSearchResultLoading, setGetSearchResultLoading] = require$$1.useState(false);
    const [getSearchResultParams, setGetSearchResultParams] = require$$1.useState({
      keyword: "",
      type: "song"
    });
    const handleGetSearchResult = async () => {
      try {
        setGetSearchResultLoading(true);
        const res = await getSearchResult(getSearchResultParams.keyword, getSearchResultParams.type);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetSearchResultLoading(false);
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Modal, { title: "测试Modal", open: visible, onCancel: close, width: 1e3, footer: null, centered: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Form, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { label: "获取歌手列表", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Select,
          {
            options: AreaList,
            style: {
              width: 150
            },
            value: getSingerListParams.area,
            onChange: (value) => setGetSingerListParams({ ...getSingerListParams, area: value })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Select,
          {
            options: GenreList,
            style: {
              width: 150
            },
            value: getSingerListParams.genre,
            onChange: (value) => setGetSingerListParams({ ...getSingerListParams, genre: value })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Select,
          {
            options: SexList,
            style: {
              width: 150
            },
            value: getSingerListParams.sex,
            onChange: (value) => setGetSingerListParams({ ...getSingerListParams, sex: value })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "primary", onClick: handleGetSingerList, loading: getSingerListLoading, children: "获取歌手列表" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { label: "获取歌手信息", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { wrap: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Input,
          {
            placeholder: "请输入歌手mid",
            style: { width: 300 },
            value: mid,
            onChange: (e) => setMid(e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "primary", onClick: handleGetSingerInfo, loading: getSingerInfoLoading, children: "获取歌手信息" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "primary", onClick: handleGetSingerAlbum, loading: getSingerAlbumLoading, children: "获取歌手专辑" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Button,
          {
            type: "primary",
            onClick: handleGetSingerAllAlbum,
            loading: getSingerAllAlbumLoading,
            children: "获取歌手所有专辑"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Button,
          {
            type: "primary",
            onClick: handleGetSingerFollowCount,
            loading: getSingerFollowCountLoading,
            children: "获取歌手被关注数量"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Button,
          {
            type: "primary",
            onClick: handleGetSingerHotSong,
            loading: getSingerHotSongLoading,
            children: "获取歌手热门歌曲"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Button,
          {
            type: "primary",
            onClick: handleGetSimilarSinger,
            loading: getSimilarSingerLoading,
            children: "获取相似歌手"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { label: "获取专辑信息", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Input,
          {
            placeholder: "请输入专辑mid",
            style: { width: 300 },
            value: albummid,
            onChange: (e) => setAlbummid(e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "primary", onClick: handleGetAlbumInfo, loading: getAlbumInfoLoading, children: "获取专辑信息" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "primary", onClick: handleGetAlbumPicUrl, loading: getAlbumPicUrlLoading, children: "获取专辑图片" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { label: "获取歌单列表", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Button,
          {
            type: "primary",
            onClick: handleGetSongListCategory,
            loading: getSongListCategoryLoading,
            children: "获取歌单分类列表"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "primary", onClick: handleGetSongList, loading: getSongListLoading, children: "获取歌单列表" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { label: "获取歌单详情", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Input,
          {
            placeholder: "请输入歌单id",
            style: { width: 300 },
            value: disstid,
            onChange: (e) => setDisstid(e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Button,
          {
            type: "primary",
            onClick: handleGetSongListDetail,
            loading: getSongListDetailLoading,
            children: "获取歌单详情"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { label: "获取歌曲歌词", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Input,
          {
            placeholder: "请输入歌曲mid",
            style: { width: 300 },
            value: songmid,
            onChange: (e) => setSongmid(e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "primary", onClick: handleGetSongLyric, loading: getSongLyricLoading, children: "获取歌曲歌词" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "primary", onClick: handleGetSongPlayUrl, loading: getSongPlayUrlLoading, children: "获取歌曲播放链接" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "primary", onClick: handleGetSongInfo, loading: getSongInfoLoading, children: "获取歌曲信息" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { label: "获取搜索结果", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Input,
          {
            placeholder: "请输入搜索关键词",
            style: { width: 300 },
            value: getSearchResultParams.keyword,
            onChange: (e) => setGetSearchResultParams({ ...getSearchResultParams, keyword: e.target.value })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Select,
          {
            options: Object.entries(ResourceType).map(([key, value]) => ({
              label: key,
              value
            })),
            style: { width: 150 },
            value: getSearchResultParams.type,
            onChange: (value) => setGetSearchResultParams({ ...getSearchResultParams, type: value }),
            allowClear: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "primary", onClick: handleGetSearchResult, loading: getSearchResultLoading, children: "获取搜索结果" })
      ] }) })
    ] }) });
  });
  const copy = async (text, options = {}) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        if (options.html) {
          const type = "text/html";
          const blob = new Blob([text], { type });
          const data = [new ClipboardItem({ [type]: blob })];
          await navigator.clipboard.write(data);
        } else {
          await navigator.clipboard.writeText(text);
        }
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.cssText = "position: fixed; top: -9999px; left: -9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand("copy");
        } catch (err) {
          throw new Error("复制失败，请检查浏览器权限设置");
        } finally {
          document.body.removeChild(textArea);
        }
      }
    } catch (err) {
      throw new Error(
        err instanceof Error ? err.message : "复制失败，请重试"
      );
    }
  };
  const urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  let nanoid = (size = 21) => {
    let id = "";
    let bytes = crypto.getRandomValues(new Uint8Array(size |= 0));
    while (size--) {
      id += urlAlphabet[bytes[size] & 63];
    }
    return id;
  };
  let message;
  const ModalUtils = () => {
    const staticFunction = antd.App.useApp();
    message = staticFunction.message;
    staticFunction.modal;
    staticFunction.notification;
    return null;
  };
  const msgSuccess = (content) => {
    return message.success(content);
  };
  const msgWarning = (content) => {
    return message.warning(content);
  };
  const msgError = (content) => {
    return message.error(content);
  };
  const msgLoading = (loadingContent, completeCallBack) => {
    const key = nanoid();
    message.loading({
      key,
      content: loadingContent
    }).then(() => {
    });
    return () => message.destroy(key);
  };
  const styles$6 = {
    "copy-text": "_copy-text_1att4_1",
    "copy-btn": "_copy-btn_1att4_12"
  };
  var classnames = { exports: {} };
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  var hasRequiredClassnames;
  function requireClassnames() {
    if (hasRequiredClassnames) return classnames.exports;
    hasRequiredClassnames = 1;
    (function(module) {
      (function() {
        var hasOwn = {}.hasOwnProperty;
        function classNames2() {
          var classes = "";
          for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (arg) {
              classes = appendClass(classes, parseValue(arg));
            }
          }
          return classes;
        }
        function parseValue(arg) {
          if (typeof arg === "string" || typeof arg === "number") {
            return arg;
          }
          if (typeof arg !== "object") {
            return "";
          }
          if (Array.isArray(arg)) {
            return classNames2.apply(null, arg);
          }
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            return arg.toString();
          }
          var classes = "";
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes = appendClass(classes, key);
            }
          }
          return classes;
        }
        function appendClass(value, newClass) {
          if (!newClass) {
            return value;
          }
          if (value) {
            return value + " " + newClass;
          }
          return value + newClass;
        }
        if (module.exports) {
          classNames2.default = classNames2;
          module.exports = classNames2;
        } else {
          window.classNames = classNames2;
        }
      })();
    })(classnames);
    return classnames.exports;
  }
  var classnamesExports = requireClassnames();
  const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
  const styles$5 = {
    "text-overflow-show-tips-container": "_text-overflow-show-tips-container_btabq_1"
  };
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }
  typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message2) {
    var e = new Error(message2);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };
  var isFunction = function(value) {
    return typeof value === "function";
  };
  function depsAreSame(oldDeps, deps) {
    if (oldDeps === deps) {
      return true;
    }
    for (var i = 0; i < oldDeps.length; i++) {
      if (!Object.is(oldDeps[i], deps[i])) {
        return false;
      }
    }
    return true;
  }
  function useLatest(value) {
    var ref = require$$1.useRef(value);
    ref.current = value;
    return ref;
  }
  var useUnmount = function(fn) {
    var fnRef = useLatest(fn);
    require$$1.useEffect(function() {
      return function() {
        fnRef.current();
      };
    }, []);
  };
  var isBrowser$1 = !!(typeof window !== "undefined" && window.document && window.document.createElement);
  function getTargetElement(target, defaultElement) {
    if (!isBrowser$1) {
      return void 0;
    }
    if (!target) {
      return defaultElement;
    }
    var targetElement;
    if (isFunction(target)) {
      targetElement = target();
    } else if ("current" in target) {
      targetElement = target.current;
    } else {
      targetElement = target;
    }
    return targetElement;
  }
  var createEffectWithTarget = function(useEffectType) {
    var useEffectWithTarget2 = function(effect, deps, target) {
      var hasInitRef = require$$1.useRef(false);
      var lastElementRef = require$$1.useRef([]);
      var lastDepsRef = require$$1.useRef([]);
      var unLoadRef = require$$1.useRef(void 0);
      useEffectType(function() {
        var _a;
        var targets = Array.isArray(target) ? target : [target];
        var els = targets.map(function(item) {
          return getTargetElement(item);
        });
        if (!hasInitRef.current) {
          hasInitRef.current = true;
          lastElementRef.current = els;
          lastDepsRef.current = deps;
          unLoadRef.current = effect();
          return;
        }
        if (els.length !== lastElementRef.current.length || !depsAreSame(lastElementRef.current, els) || !depsAreSame(lastDepsRef.current, deps)) {
          (_a = unLoadRef.current) === null || _a === void 0 ? void 0 : _a.call(unLoadRef);
          lastElementRef.current = els;
          lastDepsRef.current = deps;
          unLoadRef.current = effect();
        }
      });
      useUnmount(function() {
        var _a;
        (_a = unLoadRef.current) === null || _a === void 0 ? void 0 : _a.call(unLoadRef);
        hasInitRef.current = false;
      });
    };
    return useEffectWithTarget2;
  };
  var useEffectWithTarget$1 = createEffectWithTarget(require$$1.useEffect);
  function useRafState(initialState) {
    var ref = require$$1.useRef(0);
    var _a = __read(require$$1.useState(initialState), 2), state = _a[0], setState = _a[1];
    var setRafState = require$$1.useCallback(function(value) {
      cancelAnimationFrame(ref.current);
      ref.current = requestAnimationFrame(function() {
        setState(value);
      });
    }, []);
    useUnmount(function() {
      cancelAnimationFrame(ref.current);
    });
    return [state, setRafState];
  }
  var MapShim = (function() {
    if (typeof Map !== "undefined") {
      return Map;
    }
    function getIndex(arr, key) {
      var result = -1;
      arr.some(function(entry, index2) {
        if (entry[0] === key) {
          result = index2;
          return true;
        }
        return false;
      });
      return result;
    }
    return (
      /** @class */
      (function() {
        function class_1() {
          this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
          /**
           * @returns {boolean}
           */
          get: function() {
            return this.__entries__.length;
          },
          enumerable: true,
          configurable: true
        });
        class_1.prototype.get = function(key) {
          var index2 = getIndex(this.__entries__, key);
          var entry = this.__entries__[index2];
          return entry && entry[1];
        };
        class_1.prototype.set = function(key, value) {
          var index2 = getIndex(this.__entries__, key);
          if (~index2) {
            this.__entries__[index2][1] = value;
          } else {
            this.__entries__.push([key, value]);
          }
        };
        class_1.prototype.delete = function(key) {
          var entries = this.__entries__;
          var index2 = getIndex(entries, key);
          if (~index2) {
            entries.splice(index2, 1);
          }
        };
        class_1.prototype.has = function(key) {
          return !!~getIndex(this.__entries__, key);
        };
        class_1.prototype.clear = function() {
          this.__entries__.splice(0);
        };
        class_1.prototype.forEach = function(callback, ctx) {
          if (ctx === void 0) {
            ctx = null;
          }
          for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
            var entry = _a[_i];
            callback.call(ctx, entry[1], entry[0]);
          }
        };
        return class_1;
      })()
    );
  })();
  var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
  var global$1 = (function() {
    if (typeof global !== "undefined" && global.Math === Math) {
      return global;
    }
    if (typeof self !== "undefined" && self.Math === Math) {
      return self;
    }
    if (typeof window !== "undefined" && window.Math === Math) {
      return window;
    }
    return Function("return this")();
  })();
  var requestAnimationFrame$1 = (function() {
    if (typeof requestAnimationFrame === "function") {
      return requestAnimationFrame.bind(global$1);
    }
    return function(callback) {
      return setTimeout(function() {
        return callback(Date.now());
      }, 1e3 / 60);
    };
  })();
  var trailingTimeout = 2;
  function throttle(callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    function resolvePending() {
      if (leadingCall) {
        leadingCall = false;
        callback();
      }
      if (trailingCall) {
        proxy();
      }
    }
    function timeoutCallback() {
      requestAnimationFrame$1(resolvePending);
    }
    function proxy() {
      var timeStamp = Date.now();
      if (leadingCall) {
        if (timeStamp - lastCallTime < trailingTimeout) {
          return;
        }
        trailingCall = true;
      } else {
        leadingCall = true;
        trailingCall = false;
        setTimeout(timeoutCallback, delay);
      }
      lastCallTime = timeStamp;
    }
    return proxy;
  }
  var REFRESH_DELAY = 20;
  var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
  var mutationObserverSupported = typeof MutationObserver !== "undefined";
  var ResizeObserverController = (
    /** @class */
    (function() {
      function ResizeObserverController2() {
        this.connected_ = false;
        this.mutationEventsAdded_ = false;
        this.mutationsObserver_ = null;
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
      }
      ResizeObserverController2.prototype.addObserver = function(observer) {
        if (!~this.observers_.indexOf(observer)) {
          this.observers_.push(observer);
        }
        if (!this.connected_) {
          this.connect_();
        }
      };
      ResizeObserverController2.prototype.removeObserver = function(observer) {
        var observers2 = this.observers_;
        var index2 = observers2.indexOf(observer);
        if (~index2) {
          observers2.splice(index2, 1);
        }
        if (!observers2.length && this.connected_) {
          this.disconnect_();
        }
      };
      ResizeObserverController2.prototype.refresh = function() {
        var changesDetected = this.updateObservers_();
        if (changesDetected) {
          this.refresh();
        }
      };
      ResizeObserverController2.prototype.updateObservers_ = function() {
        var activeObservers = this.observers_.filter(function(observer) {
          return observer.gatherActive(), observer.hasActive();
        });
        activeObservers.forEach(function(observer) {
          return observer.broadcastActive();
        });
        return activeObservers.length > 0;
      };
      ResizeObserverController2.prototype.connect_ = function() {
        if (!isBrowser || this.connected_) {
          return;
        }
        document.addEventListener("transitionend", this.onTransitionEnd_);
        window.addEventListener("resize", this.refresh);
        if (mutationObserverSupported) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);
          this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        } else {
          document.addEventListener("DOMSubtreeModified", this.refresh);
          this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
      };
      ResizeObserverController2.prototype.disconnect_ = function() {
        if (!isBrowser || !this.connected_) {
          return;
        }
        document.removeEventListener("transitionend", this.onTransitionEnd_);
        window.removeEventListener("resize", this.refresh);
        if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
          document.removeEventListener("DOMSubtreeModified", this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
      };
      ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
        var isReflowProperty = transitionKeys.some(function(key) {
          return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
          this.refresh();
        }
      };
      ResizeObserverController2.getInstance = function() {
        if (!this.instance_) {
          this.instance_ = new ResizeObserverController2();
        }
        return this.instance_;
      };
      ResizeObserverController2.instance_ = null;
      return ResizeObserverController2;
    })()
  );
  var defineConfigurable = (function(target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
      var key = _a[_i];
      Object.defineProperty(target, key, {
        value: props[key],
        enumerable: false,
        writable: false,
        configurable: true
      });
    }
    return target;
  });
  var getWindowOf = (function(target) {
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    return ownerGlobal || global$1;
  });
  var emptyRect = createRectInit(0, 0, 0, 0);
  function toFloat(value) {
    return parseFloat(value) || 0;
  }
  function getBordersSize(styles2) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function(size, position) {
      var value = styles2["border-" + position + "-width"];
      return size + toFloat(value);
    }, 0);
  }
  function getPaddings(styles2) {
    var positions = ["top", "right", "bottom", "left"];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
      var position = positions_1[_i];
      var value = styles2["padding-" + position];
      paddings[position] = toFloat(value);
    }
    return paddings;
  }
  function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
  }
  function getHTMLElementContentRect(target) {
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    if (!clientWidth && !clientHeight) {
      return emptyRect;
    }
    var styles2 = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles2);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    var width = toFloat(styles2.width), height = toFloat(styles2.height);
    if (styles2.boxSizing === "border-box") {
      if (Math.round(width + horizPad) !== clientWidth) {
        width -= getBordersSize(styles2, "left", "right") + horizPad;
      }
      if (Math.round(height + vertPad) !== clientHeight) {
        height -= getBordersSize(styles2, "top", "bottom") + vertPad;
      }
    }
    if (!isDocumentElement(target)) {
      var vertScrollbar = Math.round(width + horizPad) - clientWidth;
      var horizScrollbar = Math.round(height + vertPad) - clientHeight;
      if (Math.abs(vertScrollbar) !== 1) {
        width -= vertScrollbar;
      }
      if (Math.abs(horizScrollbar) !== 1) {
        height -= horizScrollbar;
      }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
  }
  var isSVGGraphicsElement = (function() {
    if (typeof SVGGraphicsElement !== "undefined") {
      return function(target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement;
      };
    }
    return function(target) {
      return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
    };
  })();
  function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
  }
  function getContentRect(target) {
    if (!isBrowser) {
      return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
      return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
  }
  function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    defineConfigurable(rect, {
      x,
      y,
      width,
      height,
      top: y,
      right: x + width,
      bottom: height + y,
      left: x
    });
    return rect;
  }
  function createRectInit(x, y, width, height) {
    return { x, y, width, height };
  }
  var ResizeObservation = (
    /** @class */
    (function() {
      function ResizeObservation2(target) {
        this.broadcastWidth = 0;
        this.broadcastHeight = 0;
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
      }
      ResizeObservation2.prototype.isActive = function() {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
      };
      ResizeObservation2.prototype.broadcastRect = function() {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
      };
      return ResizeObservation2;
    })()
  );
  var ResizeObserverEntry = (
    /** @class */
    /* @__PURE__ */ (function() {
      function ResizeObserverEntry2(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        defineConfigurable(this, { target, contentRect });
      }
      return ResizeObserverEntry2;
    })()
  );
  var ResizeObserverSPI = (
    /** @class */
    (function() {
      function ResizeObserverSPI2(callback, controller, callbackCtx) {
        this.activeObservations_ = [];
        this.observations_ = new MapShim();
        if (typeof callback !== "function") {
          throw new TypeError("The callback provided as parameter 1 is not a function.");
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
      }
      ResizeObserverSPI2.prototype.observe = function(target) {
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        if (typeof Element === "undefined" || !(Element instanceof Object)) {
          return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        if (observations.has(target)) {
          return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        this.controller_.refresh();
      };
      ResizeObserverSPI2.prototype.unobserve = function(target) {
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        if (typeof Element === "undefined" || !(Element instanceof Object)) {
          return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        if (!observations.has(target)) {
          return;
        }
        observations.delete(target);
        if (!observations.size) {
          this.controller_.removeObserver(this);
        }
      };
      ResizeObserverSPI2.prototype.disconnect = function() {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
      };
      ResizeObserverSPI2.prototype.gatherActive = function() {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function(observation) {
          if (observation.isActive()) {
            _this.activeObservations_.push(observation);
          }
        });
      };
      ResizeObserverSPI2.prototype.broadcastActive = function() {
        if (!this.hasActive()) {
          return;
        }
        var ctx = this.callbackCtx_;
        var entries = this.activeObservations_.map(function(observation) {
          return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
      };
      ResizeObserverSPI2.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
      };
      ResizeObserverSPI2.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
      };
      return ResizeObserverSPI2;
    })()
  );
  var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
  var ResizeObserver = (
    /** @class */
    /* @__PURE__ */ (function() {
      function ResizeObserver2(callback) {
        if (!(this instanceof ResizeObserver2)) {
          throw new TypeError("Cannot call a class as a function.");
        }
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
      }
      return ResizeObserver2;
    })()
  );
  [
    "observe",
    "unobserve",
    "disconnect"
  ].forEach(function(method) {
    ResizeObserver.prototype[method] = function() {
      var _a;
      return (_a = observers.get(this))[method].apply(_a, arguments);
    };
  });
  var index = (function() {
    if (typeof global$1.ResizeObserver !== "undefined") {
      return global$1.ResizeObserver;
    }
    return ResizeObserver;
  })();
  var useEffectWithTarget = createEffectWithTarget(require$$1.useLayoutEffect);
  var useIsomorphicLayoutEffectWithTarget = isBrowser$1 ? useEffectWithTarget : useEffectWithTarget$1;
  function useSize(target) {
    var _a = __read(useRafState(function() {
      var el = getTargetElement(target);
      return el ? { width: el.clientWidth, height: el.clientHeight } : void 0;
    }), 2), state = _a[0], setState = _a[1];
    useIsomorphicLayoutEffectWithTarget(function() {
      var el = getTargetElement(target);
      if (!el) {
        return;
      }
      var resizeObserver = new index(function(entries) {
        entries.forEach(function(entry) {
          var _a2 = entry.target, clientWidth = _a2.clientWidth, clientHeight = _a2.clientHeight;
          setState({ width: clientWidth, height: clientHeight });
        });
      });
      resizeObserver.observe(el);
      return function() {
        resizeObserver.disconnect();
      };
    }, [], target);
    return state;
  }
  function TextOverflowShowTips({
    text,
    tooltipProps,
    className,
    ...restProps
  }) {
    const containerRef = require$$1.useRef(null);
    const { width: containerWidth } = useSize(containerRef) || {};
    const isTooLong = require$$1.useMemo(() => {
      if (containerWidth) {
        const textWidth = getTextWidth(text);
        return containerWidth < textWidth;
      }
      return false;
    }, [text, containerWidth]);
    const containerStyle = {
      maxWidth: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    };
    return isTooLong ? /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: text, ...tooltipProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ...restProps,
        className: classNames(styles$5["text-overflow-show-tips-container"], className),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, style: containerStyle, children: text })
      }
    ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, style: containerStyle, ...restProps, className, children: text });
  }
  function getTextWidth(text, font = "14px Arial") {
    const span = document.createElement("span");
    span.style.visibility = "hidden";
    span.style.whiteSpace = "nowrap";
    span.style.font = font;
    span.style.position = "absolute";
    span.style.top = "-9999px";
    span.style.left = "-9999px";
    span.innerText = text;
    document.body.appendChild(span);
    const width = span.offsetWidth;
    document.body.removeChild(span);
    return width;
  }
  function CopyText(props) {
    const { text, className, ...rest } = props;
    const handleCopy = () => {
      copy(text);
      msgSuccess("复制成功");
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(styles$6["copy-text"], className), ...rest, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextOverflowShowTips,
        {
          text: text + "",
          tooltipProps: {
            getPopupContainer: (node) => {
              return document.body;
            }
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Button,
        {
          type: "link",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.CopyOutlined, {}),
          onClick: handleCopy,
          className: styles$6["copy-btn"]
        }
      )
    ] });
  }
  const Styles$1 = {
    "select-search": "_select-search_19wb1_1"
  };
  const { Group } = antd.Input;
  const defaultSearchParams$2 = {
    prop: "xm",
    value: ""
  };
  function SelectSearch(props) {
    const {
      value,
      onChange,
      defaultValue,
      SearchSelectOptions,
      selectProps,
      inputProps,
      width = 300,
      selectWidth = 80,
      inputWidth = 180
    } = props;
    const [searchParams, setSearchParams] = require$$1.useState(() => {
      if (value?.prop == void 0) return defaultValue || defaultSearchParams$2;
      return {
        ...defaultValue || defaultSearchParams$2,
        ...value
      };
    });
    require$$1.useEffect(() => {
      if (value?.prop == void 0) return;
      if (typeof value !== "object") return console.warn("value类型错误,必须为对象");
      setSearchParams({
        ...value
      });
    }, [value]);
    const handleSearchSelectChange = (value2) => {
      const newSearchParams = {
        ...searchParams,
        prop: value2
      };
      setSearchParams(newSearchParams);
      onChange?.(newSearchParams, searchParams);
    };
    const handleSearchInputChange = (e) => {
      const value2 = e.target.value;
      const newSearchParams = {
        ...searchParams,
        value: value2
      };
      setSearchParams(newSearchParams);
      onChange?.(newSearchParams, searchParams);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Group,
      {
        compact: true,
        style: {
          width
        },
        className: Styles$1["select-search"],
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Select,
            {
              options: SearchSelectOptions || defaultSearchSelectOptions,
              placeholder: "请选择",
              value: searchParams.prop,
              onChange: handleSearchSelectChange,
              style: {
                width: selectWidth,
                borderRadius: "6px 0 0 6px"
              },
              ...selectProps
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Input,
            {
              placeholder: `请输入`,
              style: { width: inputWidth, height: 32 },
              value: searchParams.value,
              onChange: handleSearchInputChange,
              allowClear: true,
              ...inputProps
            }
          )
        ]
      }
    );
  }
  const defaultSearchSelectOptions = [
    {
      value: "xh",
      label: "学号"
    },
    {
      value: "xm",
      label: "姓名"
    }
  ];
  const styles$4 = {};
  const { RangePicker: AntRangePicker } = antd.DatePicker;
  const RangePicker = ({
    value,
    onChange,
    format = "YYYY-MM-DD",
    className,
    placeholder = ["开始日期", "结束日期"],
    ...rest
  }) => {
    const toDayjs = (val) => {
      if (!val) return null;
      if (dayjs.isDayjs(val)) return val;
      return dayjs(val);
    };
    const rangeValue = Array.isArray(value) ? [toDayjs(value[0]), toDayjs(value[1])] : null;
    const handleChange = (dates, dateStrings) => {
      console.log("dates", dates);
      console.log("dateStrings", dateStrings);
      if (dates && onChange) {
        onChange(
          dates.map((date) => date ? date.format(format) : ""),
          dateStrings
        );
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AntRangePicker,
      {
        value: rangeValue,
        onChange: handleChange,
        format,
        className: classNames(styles$4["rangePicker"], className),
        placeholder,
        ...rest
      }
    );
  };
  const filterOption = (inputValue, option) => {
    return option.label.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0;
  };
  const COMPONENT_TYPE_MAP = {
    input: antd.Input,
    select: antd.Select,
    selectSearch: SelectSearch,
    rangePicker: RangePicker,
    treeSelect: antd.TreeSelect
  };
  const defaultComponentProps = {
    input: {
      placeholder: "请输入",
      style: { width: "200px" },
      allowClear: true
    },
    select: {
      placeholder: "请选择",
      style: { width: "200px" },
      allowClear: true,
      maxTagCount: 2,
      showSearch: true,
      filterOption
    },
    selectSearch: {},
    rangePicker: {},
    treeSelect: {
      treeCheckable: true,
      allowClear: true,
      treeExpandAction: "click",
      filterTreeNode: (inputValue, treeNode) => {
        return treeNode.props.title.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0;
      },
      placeholder: "请选择",
      style: {
        width: "200px"
      }
    }
  };
  const { Item: Item$1 } = antd.Form;
  const SearchFormItem = (props) => {
    const { name, type = "input", label = "", inputProps = {}, ...formItemProps } = props;
    const InputComponent = COMPONENT_TYPE_MAP[type];
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Item$1, { name, label, ...formItemProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InputComponent, { ...{ ...defaultComponentProps[type], ...inputProps } }) });
  };
  function AdvancedSearch(props) {
    antd.Form.useFormInstance();
    const { params, items = [] } = props;
    const [optionsMap, setOptionsMap] = require$$1.useState({});
    require$$1.useEffect(() => {
      const asyncFn = async () => {
        try {
          items.map(async (item) => {
            if (!item.getOptionsApi) return;
            const res = await item.getOptionsApi(params);
            setOptionsMap((prev) => {
              return {
                ...prev,
                [item.name]: res.data
              };
            });
            item.getOptionsApiAfter?.(res.data);
          });
        } catch (error) {
          console.log("error", error);
        }
      };
      asyncFn();
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: items.map((item) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        SearchFormItem,
        {
          name: item.name,
          label: item.label,
          type: item.type,
          inputProps: {
            ...item.inputProps,
            options: optionsMap[item.name] || item.options
          }
        },
        item.name
      );
    }) });
  }
  const Styles = {
    "search-form": "_search-form_10eg9_1"
  };
  const { Item } = antd.Form;
  const SearchForm = (props, ref) => {
    const [formRef] = antd.Form.useForm();
    const {
      options = [],
      advancedOptions = [],
      searchParams = {},
      onSearch = () => {
      },
      loading: loading2 = false,
      keepAdvancedSearchValue = true,
      ...restFormProps
    } = props;
    require$$1.useEffect(() => {
      !keepAdvancedSearchValue && formRef.resetFields();
      formRef.setFieldsValue(searchParams);
    }, [searchParams]);
    const [optionsMap, setOptionsMap] = require$$1.useState({});
    require$$1.useEffect(() => {
      const asyncFn = async () => {
        try {
          options.map(async (item) => {
            if (!item.getOptionsApi || !item.name) return;
            const res = await item.getOptionsApi(searchParams);
            setOptionsMap((prev) => {
              return {
                ...prev,
                [item.name]: res.data
              };
            });
            item.getOptionsApiAfter?.(res.data);
          });
        } catch (error) {
          console.log("error", error);
        }
      };
      asyncFn();
    }, []);
    const [isAdvancedSearch, setIsAdvancedSearch] = require$$1.useState(false);
    const handleSearch = () => {
      const values = formRef.getFieldsValue();
      console.log("values", values);
      onSearch(values);
    };
    const handleReset = () => {
      formRef.resetFields();
      handleSearch();
    };
    require$$1.useImperativeHandle(ref, () => ({
      reset: handleReset,
      search: handleSearch,
      getValues: formRef.getFieldsValue
    }));
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      antd.Form,
      {
        layout: "inline",
        form: formRef,
        className: Styles["search-form"],
        ...restFormProps,
        children: [
          options.map((item) => {
            const { getOptionsApi, getOptionsApiAfter, ...rest } = item;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              SearchFormItem,
              {
                ...rest,
                inputProps: {
                  ...item.inputProps,
                  options: optionsMap[item.name] || item.options
                }
              },
              item.name || item.label
            );
          }),
          isAdvancedSearch && /* @__PURE__ */ jsxRuntimeExports.jsx(AdvancedSearch, { params: searchParams, items: advancedOptions }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "primary", onClick: handleSearch, shape: "round", loading: loading2, children: "查询" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { onClick: handleReset, shape: "round", children: "重置" }) }),
          advancedOptions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "link", onClick: () => setIsAdvancedSearch(!isAdvancedSearch), children: isAdvancedSearch ? "关闭" : "高级搜索" }) })
        ]
      }
    );
  };
  const SearchForm$1 = require$$1.forwardRef(SearchForm);
  var lodash$1 = { exports: {} };
  /**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */
  var lodash = lodash$1.exports;
  var hasRequiredLodash;
  function requireLodash() {
    if (hasRequiredLodash) return lodash$1.exports;
    hasRequiredLodash = 1;
    (function(module, exports) {
      (function() {
        var undefined$1;
        var VERSION = "4.17.21";
        var LARGE_ARRAY_SIZE = 200;
        var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var MAX_MEMOIZE_SIZE = 500;
        var PLACEHOLDER = "__lodash_placeholder__";
        var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
        var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
        var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
        var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
        var HOT_COUNT = 800, HOT_SPAN = 16;
        var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
        var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
        var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
        var wrapFlags = [
          ["ary", WRAP_ARY_FLAG],
          ["bind", WRAP_BIND_FLAG],
          ["bindKey", WRAP_BIND_KEY_FLAG],
          ["curry", WRAP_CURRY_FLAG],
          ["curryRight", WRAP_CURRY_RIGHT_FLAG],
          ["flip", WRAP_FLIP_FLAG],
          ["partial", WRAP_PARTIAL_FLAG],
          ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
          ["rearg", WRAP_REARG_FLAG]
        ];
        var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
        var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
        var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
        var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
        var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
        var reTrimStart = /^\s+/;
        var reWhitespace = /\s/;
        var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
        var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
        var reEscapeChar = /\\(\\)?/g;
        var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
        var reFlags = /\w*$/;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var reIsOctal = /^0o[0-7]+$/i;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
        var reNoMatch = /($^)/;
        var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
        var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
        var rsApos = "['’]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
        var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
        var reApos = RegExp(rsApos, "g");
        var reComboMark = RegExp(rsCombo, "g");
        var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
        var reUnicodeWord = RegExp([
          rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
          rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
          rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
          rsUpper + "+" + rsOptContrUpper,
          rsOrdUpper,
          rsOrdLower,
          rsDigits,
          rsEmoji
        ].join("|"), "g");
        var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
        var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        var contextProps = [
          "Array",
          "Buffer",
          "DataView",
          "Date",
          "Error",
          "Float32Array",
          "Float64Array",
          "Function",
          "Int8Array",
          "Int16Array",
          "Int32Array",
          "Map",
          "Math",
          "Object",
          "Promise",
          "RegExp",
          "Set",
          "String",
          "Symbol",
          "TypeError",
          "Uint8Array",
          "Uint8ClampedArray",
          "Uint16Array",
          "Uint32Array",
          "WeakMap",
          "_",
          "clearTimeout",
          "isFinite",
          "parseInt",
          "setTimeout"
        ];
        var templateCounter = -1;
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
        var cloneableTags = {};
        cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
        cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
        var deburredLetters = {
          // Latin-1 Supplement block.
          "À": "A",
          "Á": "A",
          "Â": "A",
          "Ã": "A",
          "Ä": "A",
          "Å": "A",
          "à": "a",
          "á": "a",
          "â": "a",
          "ã": "a",
          "ä": "a",
          "å": "a",
          "Ç": "C",
          "ç": "c",
          "Ð": "D",
          "ð": "d",
          "È": "E",
          "É": "E",
          "Ê": "E",
          "Ë": "E",
          "è": "e",
          "é": "e",
          "ê": "e",
          "ë": "e",
          "Ì": "I",
          "Í": "I",
          "Î": "I",
          "Ï": "I",
          "ì": "i",
          "í": "i",
          "î": "i",
          "ï": "i",
          "Ñ": "N",
          "ñ": "n",
          "Ò": "O",
          "Ó": "O",
          "Ô": "O",
          "Õ": "O",
          "Ö": "O",
          "Ø": "O",
          "ò": "o",
          "ó": "o",
          "ô": "o",
          "õ": "o",
          "ö": "o",
          "ø": "o",
          "Ù": "U",
          "Ú": "U",
          "Û": "U",
          "Ü": "U",
          "ù": "u",
          "ú": "u",
          "û": "u",
          "ü": "u",
          "Ý": "Y",
          "ý": "y",
          "ÿ": "y",
          "Æ": "Ae",
          "æ": "ae",
          "Þ": "Th",
          "þ": "th",
          "ß": "ss",
          // Latin Extended-A block.
          "Ā": "A",
          "Ă": "A",
          "Ą": "A",
          "ā": "a",
          "ă": "a",
          "ą": "a",
          "Ć": "C",
          "Ĉ": "C",
          "Ċ": "C",
          "Č": "C",
          "ć": "c",
          "ĉ": "c",
          "ċ": "c",
          "č": "c",
          "Ď": "D",
          "Đ": "D",
          "ď": "d",
          "đ": "d",
          "Ē": "E",
          "Ĕ": "E",
          "Ė": "E",
          "Ę": "E",
          "Ě": "E",
          "ē": "e",
          "ĕ": "e",
          "ė": "e",
          "ę": "e",
          "ě": "e",
          "Ĝ": "G",
          "Ğ": "G",
          "Ġ": "G",
          "Ģ": "G",
          "ĝ": "g",
          "ğ": "g",
          "ġ": "g",
          "ģ": "g",
          "Ĥ": "H",
          "Ħ": "H",
          "ĥ": "h",
          "ħ": "h",
          "Ĩ": "I",
          "Ī": "I",
          "Ĭ": "I",
          "Į": "I",
          "İ": "I",
          "ĩ": "i",
          "ī": "i",
          "ĭ": "i",
          "į": "i",
          "ı": "i",
          "Ĵ": "J",
          "ĵ": "j",
          "Ķ": "K",
          "ķ": "k",
          "ĸ": "k",
          "Ĺ": "L",
          "Ļ": "L",
          "Ľ": "L",
          "Ŀ": "L",
          "Ł": "L",
          "ĺ": "l",
          "ļ": "l",
          "ľ": "l",
          "ŀ": "l",
          "ł": "l",
          "Ń": "N",
          "Ņ": "N",
          "Ň": "N",
          "Ŋ": "N",
          "ń": "n",
          "ņ": "n",
          "ň": "n",
          "ŋ": "n",
          "Ō": "O",
          "Ŏ": "O",
          "Ő": "O",
          "ō": "o",
          "ŏ": "o",
          "ő": "o",
          "Ŕ": "R",
          "Ŗ": "R",
          "Ř": "R",
          "ŕ": "r",
          "ŗ": "r",
          "ř": "r",
          "Ś": "S",
          "Ŝ": "S",
          "Ş": "S",
          "Š": "S",
          "ś": "s",
          "ŝ": "s",
          "ş": "s",
          "š": "s",
          "Ţ": "T",
          "Ť": "T",
          "Ŧ": "T",
          "ţ": "t",
          "ť": "t",
          "ŧ": "t",
          "Ũ": "U",
          "Ū": "U",
          "Ŭ": "U",
          "Ů": "U",
          "Ű": "U",
          "Ų": "U",
          "ũ": "u",
          "ū": "u",
          "ŭ": "u",
          "ů": "u",
          "ű": "u",
          "ų": "u",
          "Ŵ": "W",
          "ŵ": "w",
          "Ŷ": "Y",
          "ŷ": "y",
          "Ÿ": "Y",
          "Ź": "Z",
          "Ż": "Z",
          "Ž": "Z",
          "ź": "z",
          "ż": "z",
          "ž": "z",
          "Ĳ": "IJ",
          "ĳ": "ij",
          "Œ": "Oe",
          "œ": "oe",
          "ŉ": "'n",
          "ſ": "s"
        };
        var htmlEscapes = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        };
        var htmlUnescapes = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'"
        };
        var stringEscapes = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var freeParseFloat = parseFloat, freeParseInt = parseInt;
        var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        var freeExports = exports && !exports.nodeType && exports;
        var freeModule = freeExports && true && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var freeProcess = moduleExports && freeGlobal.process;
        var nodeUtil = (function() {
          try {
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) {
              return types;
            }
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
          } catch (e) {
          }
        })();
        var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }
        function arrayAggregator(array, setter, iteratee, accumulator) {
          var index2 = -1, length = array == null ? 0 : array.length;
          while (++index2 < length) {
            var value = array[index2];
            setter(accumulator, value, iteratee(value), array);
          }
          return accumulator;
        }
        function arrayEach(array, iteratee) {
          var index2 = -1, length = array == null ? 0 : array.length;
          while (++index2 < length) {
            if (iteratee(array[index2], index2, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEachRight(array, iteratee) {
          var length = array == null ? 0 : array.length;
          while (length--) {
            if (iteratee(array[length], length, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEvery(array, predicate) {
          var index2 = -1, length = array == null ? 0 : array.length;
          while (++index2 < length) {
            if (!predicate(array[index2], index2, array)) {
              return false;
            }
          }
          return true;
        }
        function arrayFilter(array, predicate) {
          var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
          while (++index2 < length) {
            var value = array[index2];
            if (predicate(value, index2, array)) {
              result[resIndex++] = value;
            }
          }
          return result;
        }
        function arrayIncludes(array, value) {
          var length = array == null ? 0 : array.length;
          return !!length && baseIndexOf(array, value, 0) > -1;
        }
        function arrayIncludesWith(array, value, comparator) {
          var index2 = -1, length = array == null ? 0 : array.length;
          while (++index2 < length) {
            if (comparator(value, array[index2])) {
              return true;
            }
          }
          return false;
        }
        function arrayMap(array, iteratee) {
          var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
          while (++index2 < length) {
            result[index2] = iteratee(array[index2], index2, array);
          }
          return result;
        }
        function arrayPush(array, values) {
          var index2 = -1, length = values.length, offset = array.length;
          while (++index2 < length) {
            array[offset + index2] = values[index2];
          }
          return array;
        }
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index2 = -1, length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[++index2];
          }
          while (++index2 < length) {
            accumulator = iteratee(accumulator, array[index2], index2, array);
          }
          return accumulator;
        }
        function arrayReduceRight(array, iteratee, accumulator, initAccum) {
          var length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[--length];
          }
          while (length--) {
            accumulator = iteratee(accumulator, array[length], length, array);
          }
          return accumulator;
        }
        function arraySome(array, predicate) {
          var index2 = -1, length = array == null ? 0 : array.length;
          while (++index2 < length) {
            if (predicate(array[index2], index2, array)) {
              return true;
            }
          }
          return false;
        }
        var asciiSize = baseProperty("length");
        function asciiToArray(string) {
          return string.split("");
        }
        function asciiWords(string) {
          return string.match(reAsciiWord) || [];
        }
        function baseFindKey(collection, predicate, eachFunc) {
          var result;
          eachFunc(collection, function(value, key, collection2) {
            if (predicate(value, key, collection2)) {
              result = key;
              return false;
            }
          });
          return result;
        }
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
          var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
          while (fromRight ? index2-- : ++index2 < length) {
            if (predicate(array[index2], index2, array)) {
              return index2;
            }
          }
          return -1;
        }
        function baseIndexOf(array, value, fromIndex) {
          return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
        }
        function baseIndexOfWith(array, value, fromIndex, comparator) {
          var index2 = fromIndex - 1, length = array.length;
          while (++index2 < length) {
            if (comparator(array[index2], value)) {
              return index2;
            }
          }
          return -1;
        }
        function baseIsNaN(value) {
          return value !== value;
        }
        function baseMean(array, iteratee) {
          var length = array == null ? 0 : array.length;
          return length ? baseSum(array, iteratee) / length : NAN;
        }
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined$1 : object[key];
          };
        }
        function basePropertyOf(object) {
          return function(key) {
            return object == null ? undefined$1 : object[key];
          };
        }
        function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
          eachFunc(collection, function(value, index2, collection2) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index2, collection2);
          });
          return accumulator;
        }
        function baseSortBy(array, comparer) {
          var length = array.length;
          array.sort(comparer);
          while (length--) {
            array[length] = array[length].value;
          }
          return array;
        }
        function baseSum(array, iteratee) {
          var result, index2 = -1, length = array.length;
          while (++index2 < length) {
            var current = iteratee(array[index2]);
            if (current !== undefined$1) {
              result = result === undefined$1 ? current : result + current;
            }
          }
          return result;
        }
        function baseTimes(n, iteratee) {
          var index2 = -1, result = Array(n);
          while (++index2 < n) {
            result[index2] = iteratee(index2);
          }
          return result;
        }
        function baseToPairs(object, props) {
          return arrayMap(props, function(key) {
            return [key, object[key]];
          });
        }
        function baseTrim(string) {
          return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
        }
        function baseUnary(func) {
          return function(value) {
            return func(value);
          };
        }
        function baseValues(object, props) {
          return arrayMap(props, function(key) {
            return object[key];
          });
        }
        function cacheHas(cache, key) {
          return cache.has(key);
        }
        function charsStartIndex(strSymbols, chrSymbols) {
          var index2 = -1, length = strSymbols.length;
          while (++index2 < length && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
          }
          return index2;
        }
        function charsEndIndex(strSymbols, chrSymbols) {
          var index2 = strSymbols.length;
          while (index2-- && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
          }
          return index2;
        }
        function countHolders(array, placeholder) {
          var length = array.length, result = 0;
          while (length--) {
            if (array[length] === placeholder) {
              ++result;
            }
          }
          return result;
        }
        var deburrLetter = basePropertyOf(deburredLetters);
        var escapeHtmlChar = basePropertyOf(htmlEscapes);
        function escapeStringChar(chr) {
          return "\\" + stringEscapes[chr];
        }
        function getValue(object, key) {
          return object == null ? undefined$1 : object[key];
        }
        function hasUnicode(string) {
          return reHasUnicode.test(string);
        }
        function hasUnicodeWord(string) {
          return reHasUnicodeWord.test(string);
        }
        function iteratorToArray(iterator) {
          var data, result = [];
          while (!(data = iterator.next()).done) {
            result.push(data.value);
          }
          return result;
        }
        function mapToArray(map) {
          var index2 = -1, result = Array(map.size);
          map.forEach(function(value, key) {
            result[++index2] = [key, value];
          });
          return result;
        }
        function overArg(func, transform) {
          return function(arg) {
            return func(transform(arg));
          };
        }
        function replaceHolders(array, placeholder) {
          var index2 = -1, length = array.length, resIndex = 0, result = [];
          while (++index2 < length) {
            var value = array[index2];
            if (value === placeholder || value === PLACEHOLDER) {
              array[index2] = PLACEHOLDER;
              result[resIndex++] = index2;
            }
          }
          return result;
        }
        function setToArray(set) {
          var index2 = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index2] = value;
          });
          return result;
        }
        function setToPairs(set) {
          var index2 = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index2] = [value, value];
          });
          return result;
        }
        function strictIndexOf(array, value, fromIndex) {
          var index2 = fromIndex - 1, length = array.length;
          while (++index2 < length) {
            if (array[index2] === value) {
              return index2;
            }
          }
          return -1;
        }
        function strictLastIndexOf(array, value, fromIndex) {
          var index2 = fromIndex + 1;
          while (index2--) {
            if (array[index2] === value) {
              return index2;
            }
          }
          return index2;
        }
        function stringSize(string) {
          return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
        }
        function stringToArray(string) {
          return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
        }
        function trimmedEndIndex(string) {
          var index2 = string.length;
          while (index2-- && reWhitespace.test(string.charAt(index2))) {
          }
          return index2;
        }
        var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
        function unicodeSize(string) {
          var result = reUnicode.lastIndex = 0;
          while (reUnicode.test(string)) {
            ++result;
          }
          return result;
        }
        function unicodeToArray(string) {
          return string.match(reUnicode) || [];
        }
        function unicodeWords(string) {
          return string.match(reUnicodeWord) || [];
        }
        var runInContext = (function runInContext2(context) {
          context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
          var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
          var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
          var coreJsData = context["__core-js_shared__"];
          var funcToString = funcProto.toString;
          var hasOwnProperty = objectProto.hasOwnProperty;
          var idCounter = 0;
          var maskSrcKey = (function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
            return uid ? "Symbol(src)_1." + uid : "";
          })();
          var nativeObjectToString = objectProto.toString;
          var objectCtorString = funcToString.call(Object2);
          var oldDash = root._;
          var reIsNative = RegExp2(
            "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
          );
          var Buffer = moduleExports ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined$1;
          var defineProperty2 = (function() {
            try {
              var func = getNative(Object2, "defineProperty");
              func({}, "", {});
              return func;
            } catch (e) {
            }
          })();
          var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
          var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
          var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
          var metaMap = WeakMap2 && new WeakMap2();
          var realNames = {};
          var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
          var symbolProto = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
          function lodash2(value) {
            if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
              if (value instanceof LodashWrapper) {
                return value;
              }
              if (hasOwnProperty.call(value, "__wrapped__")) {
                return wrapperClone(value);
              }
            }
            return new LodashWrapper(value);
          }
          var baseCreate = /* @__PURE__ */ (function() {
            function object() {
            }
            return function(proto) {
              if (!isObject(proto)) {
                return {};
              }
              if (objectCreate) {
                return objectCreate(proto);
              }
              object.prototype = proto;
              var result2 = new object();
              object.prototype = undefined$1;
              return result2;
            };
          })();
          function baseLodash() {
          }
          function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
            this.__index__ = 0;
            this.__values__ = undefined$1;
          }
          lodash2.templateSettings = {
            /**
             * Used to detect `data` property values to be HTML-escaped.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            "escape": reEscape,
            /**
             * Used to detect code to be evaluated.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            "evaluate": reEvaluate,
            /**
             * Used to detect `data` property values to inject.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            "interpolate": reInterpolate,
            /**
             * Used to reference the data object in the template text.
             *
             * @memberOf _.templateSettings
             * @type {string}
             */
            "variable": "",
            /**
             * Used to import variables into the compiled template.
             *
             * @memberOf _.templateSettings
             * @type {Object}
             */
            "imports": {
              /**
               * A reference to the `lodash` function.
               *
               * @memberOf _.templateSettings.imports
               * @type {Function}
               */
              "_": lodash2
            }
          };
          lodash2.prototype = baseLodash.prototype;
          lodash2.prototype.constructor = lodash2;
          LodashWrapper.prototype = baseCreate(baseLodash.prototype);
          LodashWrapper.prototype.constructor = LodashWrapper;
          function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = MAX_ARRAY_LENGTH;
            this.__views__ = [];
          }
          function lazyClone() {
            var result2 = new LazyWrapper(this.__wrapped__);
            result2.__actions__ = copyArray(this.__actions__);
            result2.__dir__ = this.__dir__;
            result2.__filtered__ = this.__filtered__;
            result2.__iteratees__ = copyArray(this.__iteratees__);
            result2.__takeCount__ = this.__takeCount__;
            result2.__views__ = copyArray(this.__views__);
            return result2;
          }
          function lazyReverse() {
            if (this.__filtered__) {
              var result2 = new LazyWrapper(this);
              result2.__dir__ = -1;
              result2.__filtered__ = true;
            } else {
              result2 = this.clone();
              result2.__dir__ *= -1;
            }
            return result2;
          }
          function lazyValue() {
            var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index2 = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
            if (!isArr || !isRight && arrLength == length && takeCount == length) {
              return baseWrapperValue(array, this.__actions__);
            }
            var result2 = [];
            outer:
              while (length-- && resIndex < takeCount) {
                index2 += dir;
                var iterIndex = -1, value = array[index2];
                while (++iterIndex < iterLength) {
                  var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                  if (type == LAZY_MAP_FLAG) {
                    value = computed;
                  } else if (!computed) {
                    if (type == LAZY_FILTER_FLAG) {
                      continue outer;
                    } else {
                      break outer;
                    }
                  }
                }
                result2[resIndex++] = value;
              }
            return result2;
          }
          LazyWrapper.prototype = baseCreate(baseLodash.prototype);
          LazyWrapper.prototype.constructor = LazyWrapper;
          function Hash(entries) {
            var index2 = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index2 < length) {
              var entry = entries[index2];
              this.set(entry[0], entry[1]);
            }
          }
          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
          }
          function hashDelete(key) {
            var result2 = this.has(key) && delete this.__data__[key];
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
              var result2 = data[key];
              return result2 === HASH_UNDEFINED ? undefined$1 : result2;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
          }
          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty.call(data, key);
          }
          function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
            return this;
          }
          Hash.prototype.clear = hashClear;
          Hash.prototype["delete"] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;
          function ListCache(entries) {
            var index2 = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index2 < length) {
              var entry = entries[index2];
              this.set(entry[0], entry[1]);
            }
          }
          function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
          }
          function listCacheDelete(key) {
            var data = this.__data__, index2 = assocIndexOf(data, key);
            if (index2 < 0) {
              return false;
            }
            var lastIndex = data.length - 1;
            if (index2 == lastIndex) {
              data.pop();
            } else {
              splice.call(data, index2, 1);
            }
            --this.size;
            return true;
          }
          function listCacheGet(key) {
            var data = this.__data__, index2 = assocIndexOf(data, key);
            return index2 < 0 ? undefined$1 : data[index2][1];
          }
          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }
          function listCacheSet(key, value) {
            var data = this.__data__, index2 = assocIndexOf(data, key);
            if (index2 < 0) {
              ++this.size;
              data.push([key, value]);
            } else {
              data[index2][1] = value;
            }
            return this;
          }
          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype["delete"] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;
          function MapCache(entries) {
            var index2 = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index2 < length) {
              var entry = entries[index2];
              this.set(entry[0], entry[1]);
            }
          }
          function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
              "hash": new Hash(),
              "map": new (Map2 || ListCache)(),
              "string": new Hash()
            };
          }
          function mapCacheDelete(key) {
            var result2 = getMapData(this, key)["delete"](key);
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }
          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }
          function mapCacheSet(key, value) {
            var data = getMapData(this, key), size2 = data.size;
            data.set(key, value);
            this.size += data.size == size2 ? 0 : 1;
            return this;
          }
          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype["delete"] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;
          function SetCache(values2) {
            var index2 = -1, length = values2 == null ? 0 : values2.length;
            this.__data__ = new MapCache();
            while (++index2 < length) {
              this.add(values2[index2]);
            }
          }
          function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
          }
          function setCacheHas(value) {
            return this.__data__.has(value);
          }
          SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
          SetCache.prototype.has = setCacheHas;
          function Stack(entries) {
            var data = this.__data__ = new ListCache(entries);
            this.size = data.size;
          }
          function stackClear() {
            this.__data__ = new ListCache();
            this.size = 0;
          }
          function stackDelete(key) {
            var data = this.__data__, result2 = data["delete"](key);
            this.size = data.size;
            return result2;
          }
          function stackGet(key) {
            return this.__data__.get(key);
          }
          function stackHas(key) {
            return this.__data__.has(key);
          }
          function stackSet(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache) {
              var pairs = data.__data__;
              if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
                pairs.push([key, value]);
                this.size = ++data.size;
                return this;
              }
              data = this.__data__ = new MapCache(pairs);
            }
            data.set(key, value);
            this.size = data.size;
            return this;
          }
          Stack.prototype.clear = stackClear;
          Stack.prototype["delete"] = stackDelete;
          Stack.prototype.get = stackGet;
          Stack.prototype.has = stackHas;
          Stack.prototype.set = stackSet;
          function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
            for (var key in value) {
              if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
              (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
              isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
              isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
              isIndex(key, length)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function arraySample(array) {
            var length = array.length;
            return length ? array[baseRandom(0, length - 1)] : undefined$1;
          }
          function arraySampleSize(array, n) {
            return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
          }
          function arrayShuffle(array) {
            return shuffleSelf(copyArray(array));
          }
          function assignMergeValue(object, key, value) {
            if (value !== undefined$1 && !eq(object[key], value) || value === undefined$1 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined$1 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
              if (eq(array[length][0], key)) {
                return length;
              }
            }
            return -1;
          }
          function baseAggregator(collection, setter, iteratee2, accumulator) {
            baseEach(collection, function(value, key, collection2) {
              setter(accumulator, value, iteratee2(value), collection2);
            });
            return accumulator;
          }
          function baseAssign(object, source) {
            return object && copyObject(source, keys(source), object);
          }
          function baseAssignIn(object, source) {
            return object && copyObject(source, keysIn(source), object);
          }
          function baseAssignValue(object, key, value) {
            if (key == "__proto__" && defineProperty2) {
              defineProperty2(object, key, {
                "configurable": true,
                "enumerable": true,
                "value": value,
                "writable": true
              });
            } else {
              object[key] = value;
            }
          }
          function baseAt(object, paths) {
            var index2 = -1, length = paths.length, result2 = Array2(length), skip = object == null;
            while (++index2 < length) {
              result2[index2] = skip ? undefined$1 : get(object, paths[index2]);
            }
            return result2;
          }
          function baseClamp(number, lower, upper) {
            if (number === number) {
              if (upper !== undefined$1) {
                number = number <= upper ? number : upper;
              }
              if (lower !== undefined$1) {
                number = number >= lower ? number : lower;
              }
            }
            return number;
          }
          function baseClone(value, bitmask, customizer, key, object, stack) {
            var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
            if (customizer) {
              result2 = object ? customizer(value, key, object, stack) : customizer(value);
            }
            if (result2 !== undefined$1) {
              return result2;
            }
            if (!isObject(value)) {
              return value;
            }
            var isArr = isArray(value);
            if (isArr) {
              result2 = initCloneArray(value);
              if (!isDeep) {
                return copyArray(value, result2);
              }
            } else {
              var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
              if (isBuffer(value)) {
                return cloneBuffer(value, isDeep);
              }
              if (tag == objectTag || tag == argsTag || isFunc && !object) {
                result2 = isFlat || isFunc ? {} : initCloneObject(value);
                if (!isDeep) {
                  return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
                }
              } else {
                if (!cloneableTags[tag]) {
                  return object ? value : {};
                }
                result2 = initCloneByTag(value, tag, isDeep);
              }
            }
            stack || (stack = new Stack());
            var stacked = stack.get(value);
            if (stacked) {
              return stacked;
            }
            stack.set(value, result2);
            if (isSet(value)) {
              value.forEach(function(subValue) {
                result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
              });
            } else if (isMap(value)) {
              value.forEach(function(subValue, key2) {
                result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
              });
            }
            var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
            var props = isArr ? undefined$1 : keysFunc(value);
            arrayEach(props || value, function(subValue, key2) {
              if (props) {
                key2 = subValue;
                subValue = value[key2];
              }
              assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
            return result2;
          }
          function baseConforms(source) {
            var props = keys(source);
            return function(object) {
              return baseConformsTo(object, source, props);
            };
          }
          function baseConformsTo(object, source, props) {
            var length = props.length;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (length--) {
              var key = props[length], predicate = source[key], value = object[key];
              if (value === undefined$1 && !(key in object) || !predicate(value)) {
                return false;
              }
            }
            return true;
          }
          function baseDelay(func, wait, args) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return setTimeout2(function() {
              func.apply(undefined$1, args);
            }, wait);
          }
          function baseDifference(array, values2, iteratee2, comparator) {
            var index2 = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
            if (!length) {
              return result2;
            }
            if (iteratee2) {
              values2 = arrayMap(values2, baseUnary(iteratee2));
            }
            if (comparator) {
              includes2 = arrayIncludesWith;
              isCommon = false;
            } else if (values2.length >= LARGE_ARRAY_SIZE) {
              includes2 = cacheHas;
              isCommon = false;
              values2 = new SetCache(values2);
            }
            outer:
              while (++index2 < length) {
                var value = array[index2], computed = iteratee2 == null ? value : iteratee2(value);
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var valuesIndex = valuesLength;
                  while (valuesIndex--) {
                    if (values2[valuesIndex] === computed) {
                      continue outer;
                    }
                  }
                  result2.push(value);
                } else if (!includes2(values2, computed, comparator)) {
                  result2.push(value);
                }
              }
            return result2;
          }
          var baseEach = createBaseEach(baseForOwn);
          var baseEachRight = createBaseEach(baseForOwnRight, true);
          function baseEvery(collection, predicate) {
            var result2 = true;
            baseEach(collection, function(value, index2, collection2) {
              result2 = !!predicate(value, index2, collection2);
              return result2;
            });
            return result2;
          }
          function baseExtremum(array, iteratee2, comparator) {
            var index2 = -1, length = array.length;
            while (++index2 < length) {
              var value = array[index2], current = iteratee2(value);
              if (current != null && (computed === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed))) {
                var computed = current, result2 = value;
              }
            }
            return result2;
          }
          function baseFill(array, value, start, end) {
            var length = array.length;
            start = toInteger(start);
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end === undefined$1 || end > length ? length : toInteger(end);
            if (end < 0) {
              end += length;
            }
            end = start > end ? 0 : toLength(end);
            while (start < end) {
              array[start++] = value;
            }
            return array;
          }
          function baseFilter(collection, predicate) {
            var result2 = [];
            baseEach(collection, function(value, index2, collection2) {
              if (predicate(value, index2, collection2)) {
                result2.push(value);
              }
            });
            return result2;
          }
          function baseFlatten(array, depth, predicate, isStrict, result2) {
            var index2 = -1, length = array.length;
            predicate || (predicate = isFlattenable);
            result2 || (result2 = []);
            while (++index2 < length) {
              var value = array[index2];
              if (depth > 0 && predicate(value)) {
                if (depth > 1) {
                  baseFlatten(value, depth - 1, predicate, isStrict, result2);
                } else {
                  arrayPush(result2, value);
                }
              } else if (!isStrict) {
                result2[result2.length] = value;
              }
            }
            return result2;
          }
          var baseFor = createBaseFor();
          var baseForRight = createBaseFor(true);
          function baseForOwn(object, iteratee2) {
            return object && baseFor(object, iteratee2, keys);
          }
          function baseForOwnRight(object, iteratee2) {
            return object && baseForRight(object, iteratee2, keys);
          }
          function baseFunctions(object, props) {
            return arrayFilter(props, function(key) {
              return isFunction2(object[key]);
            });
          }
          function baseGet(object, path) {
            path = castPath(path, object);
            var index2 = 0, length = path.length;
            while (object != null && index2 < length) {
              object = object[toKey(path[index2++])];
            }
            return index2 && index2 == length ? object : undefined$1;
          }
          function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result2 = keysFunc(object);
            return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
          }
          function baseGetTag(value) {
            if (value == null) {
              return value === undefined$1 ? undefinedTag : nullTag;
            }
            return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
          }
          function baseGt(value, other) {
            return value > other;
          }
          function baseHas(object, key) {
            return object != null && hasOwnProperty.call(object, key);
          }
          function baseHasIn(object, key) {
            return object != null && key in Object2(object);
          }
          function baseInRange(number, start, end) {
            return number >= nativeMin(start, end) && number < nativeMax(start, end);
          }
          function baseIntersection(arrays, iteratee2, comparator) {
            var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
            while (othIndex--) {
              var array = arrays[othIndex];
              if (othIndex && iteratee2) {
                array = arrayMap(array, baseUnary(iteratee2));
              }
              maxLength = nativeMin(array.length, maxLength);
              caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
            }
            array = arrays[0];
            var index2 = -1, seen = caches[0];
            outer:
              while (++index2 < length && result2.length < maxLength) {
                var value = array[index2], computed = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                  othIndex = othLength;
                  while (--othIndex) {
                    var cache = caches[othIndex];
                    if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                      continue outer;
                    }
                  }
                  if (seen) {
                    seen.push(computed);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseInverter(object, setter, iteratee2, accumulator) {
            baseForOwn(object, function(value, key, object2) {
              setter(accumulator, iteratee2(value), key, object2);
            });
            return accumulator;
          }
          function baseInvoke(object, path, args) {
            path = castPath(path, object);
            object = parent(object, path);
            var func = object == null ? object : object[toKey(last(path))];
            return func == null ? undefined$1 : apply(func, object, args);
          }
          function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag;
          }
          function baseIsArrayBuffer(value) {
            return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
          }
          function baseIsDate(value) {
            return isObjectLike(value) && baseGetTag(value) == dateTag;
          }
          function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) {
              return true;
            }
            if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
              return value !== value && other !== other;
            }
            return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
          }
          function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
            objTag = objTag == argsTag ? objectTag : objTag;
            othTag = othTag == argsTag ? objectTag : othTag;
            var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
            if (isSameTag && isBuffer(object)) {
              if (!isBuffer(other)) {
                return false;
              }
              objIsArr = true;
              objIsObj = false;
            }
            if (isSameTag && !objIsObj) {
              stack || (stack = new Stack());
              return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
              var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
              if (objIsWrapped || othIsWrapped) {
                var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                stack || (stack = new Stack());
                return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
              }
            }
            if (!isSameTag) {
              return false;
            }
            stack || (stack = new Stack());
            return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
          }
          function baseIsMap(value) {
            return isObjectLike(value) && getTag(value) == mapTag;
          }
          function baseIsMatch(object, source, matchData, customizer) {
            var index2 = matchData.length, length = index2, noCustomizer = !customizer;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (index2--) {
              var data = matchData[index2];
              if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                return false;
              }
            }
            while (++index2 < length) {
              data = matchData[index2];
              var key = data[0], objValue = object[key], srcValue = data[1];
              if (noCustomizer && data[2]) {
                if (objValue === undefined$1 && !(key in object)) {
                  return false;
                }
              } else {
                var stack = new Stack();
                if (customizer) {
                  var result2 = customizer(objValue, srcValue, key, object, source, stack);
                }
                if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                  return false;
                }
              }
            }
            return true;
          }
          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
              return false;
            }
            var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }
          function baseIsRegExp(value) {
            return isObjectLike(value) && baseGetTag(value) == regexpTag;
          }
          function baseIsSet(value) {
            return isObjectLike(value) && getTag(value) == setTag;
          }
          function baseIsTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
          }
          function baseIteratee(value) {
            if (typeof value == "function") {
              return value;
            }
            if (value == null) {
              return identity;
            }
            if (typeof value == "object") {
              return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            }
            return property(value);
          }
          function baseKeys(object) {
            if (!isPrototype(object)) {
              return nativeKeys(object);
            }
            var result2 = [];
            for (var key in Object2(object)) {
              if (hasOwnProperty.call(object, key) && key != "constructor") {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseKeysIn(object) {
            if (!isObject(object)) {
              return nativeKeysIn(object);
            }
            var isProto = isPrototype(object), result2 = [];
            for (var key in object) {
              if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseLt(value, other) {
            return value < other;
          }
          function baseMap(collection, iteratee2) {
            var index2 = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value, key, collection2) {
              result2[++index2] = iteratee2(value, key, collection2);
            });
            return result2;
          }
          function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) {
              return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            }
            return function(object) {
              return object === source || baseIsMatch(object, source, matchData);
            };
          }
          function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) {
              return matchesStrictComparable(toKey(path), srcValue);
            }
            return function(object) {
              var objValue = get(object, path);
              return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
            };
          }
          function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) {
              return;
            }
            baseFor(source, function(srcValue, key) {
              stack || (stack = new Stack());
              if (isObject(srcValue)) {
                baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
              } else {
                var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
                if (newValue === undefined$1) {
                  newValue = srcValue;
                }
                assignMergeValue(object, key, newValue);
              }
            }, keysIn);
          }
          function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
            var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
            if (stacked) {
              assignMergeValue(object, key, stacked);
              return;
            }
            var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
            var isCommon = newValue === undefined$1;
            if (isCommon) {
              var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
              newValue = srcValue;
              if (isArr || isBuff || isTyped) {
                if (isArray(objValue)) {
                  newValue = objValue;
                } else if (isArrayLikeObject(objValue)) {
                  newValue = copyArray(objValue);
                } else if (isBuff) {
                  isCommon = false;
                  newValue = cloneBuffer(srcValue, true);
                } else if (isTyped) {
                  isCommon = false;
                  newValue = cloneTypedArray(srcValue, true);
                } else {
                  newValue = [];
                }
              } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                newValue = objValue;
                if (isArguments(objValue)) {
                  newValue = toPlainObject(objValue);
                } else if (!isObject(objValue) || isFunction2(objValue)) {
                  newValue = initCloneObject(srcValue);
                }
              } else {
                isCommon = false;
              }
            }
            if (isCommon) {
              stack.set(srcValue, newValue);
              mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
              stack["delete"](srcValue);
            }
            assignMergeValue(object, key, newValue);
          }
          function baseNth(array, n) {
            var length = array.length;
            if (!length) {
              return;
            }
            n += n < 0 ? length : 0;
            return isIndex(n, length) ? array[n] : undefined$1;
          }
          function baseOrderBy(collection, iteratees, orders) {
            if (iteratees.length) {
              iteratees = arrayMap(iteratees, function(iteratee2) {
                if (isArray(iteratee2)) {
                  return function(value) {
                    return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                  };
                }
                return iteratee2;
              });
            } else {
              iteratees = [identity];
            }
            var index2 = -1;
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            var result2 = baseMap(collection, function(value, key, collection2) {
              var criteria = arrayMap(iteratees, function(iteratee2) {
                return iteratee2(value);
              });
              return { "criteria": criteria, "index": ++index2, "value": value };
            });
            return baseSortBy(result2, function(object, other) {
              return compareMultiple(object, other, orders);
            });
          }
          function basePick(object, paths) {
            return basePickBy(object, paths, function(value, path) {
              return hasIn(object, path);
            });
          }
          function basePickBy(object, paths, predicate) {
            var index2 = -1, length = paths.length, result2 = {};
            while (++index2 < length) {
              var path = paths[index2], value = baseGet(object, path);
              if (predicate(value, path)) {
                baseSet(result2, castPath(path, object), value);
              }
            }
            return result2;
          }
          function basePropertyDeep(path) {
            return function(object) {
              return baseGet(object, path);
            };
          }
          function basePullAll(array, values2, iteratee2, comparator) {
            var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index2 = -1, length = values2.length, seen = array;
            if (array === values2) {
              values2 = copyArray(values2);
            }
            if (iteratee2) {
              seen = arrayMap(array, baseUnary(iteratee2));
            }
            while (++index2 < length) {
              var fromIndex = 0, value = values2[index2], computed = iteratee2 ? iteratee2(value) : value;
              while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
                if (seen !== array) {
                  splice.call(seen, fromIndex, 1);
                }
                splice.call(array, fromIndex, 1);
              }
            }
            return array;
          }
          function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0, lastIndex = length - 1;
            while (length--) {
              var index2 = indexes[length];
              if (length == lastIndex || index2 !== previous) {
                var previous = index2;
                if (isIndex(index2)) {
                  splice.call(array, index2, 1);
                } else {
                  baseUnset(array, index2);
                }
              }
            }
            return array;
          }
          function baseRandom(lower, upper) {
            return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
          }
          function baseRange(start, end, step, fromRight) {
            var index2 = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
            while (length--) {
              result2[fromRight ? length : ++index2] = start;
              start += step;
            }
            return result2;
          }
          function baseRepeat(string, n) {
            var result2 = "";
            if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
              return result2;
            }
            do {
              if (n % 2) {
                result2 += string;
              }
              n = nativeFloor(n / 2);
              if (n) {
                string += string;
              }
            } while (n);
            return result2;
          }
          function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + "");
          }
          function baseSample(collection) {
            return arraySample(values(collection));
          }
          function baseSampleSize(collection, n) {
            var array = values(collection);
            return shuffleSelf(array, baseClamp(n, 0, array.length));
          }
          function baseSet(object, path, value, customizer) {
            if (!isObject(object)) {
              return object;
            }
            path = castPath(path, object);
            var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
            while (nested != null && ++index2 < length) {
              var key = toKey(path[index2]), newValue = value;
              if (key === "__proto__" || key === "constructor" || key === "prototype") {
                return object;
              }
              if (index2 != lastIndex) {
                var objValue = nested[key];
                newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
                if (newValue === undefined$1) {
                  newValue = isObject(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
                }
              }
              assignValue(nested, key, newValue);
              nested = nested[key];
            }
            return object;
          }
          var baseSetData = !metaMap ? identity : function(func, data) {
            metaMap.set(func, data);
            return func;
          };
          var baseSetToString = !defineProperty2 ? identity : function(func, string) {
            return defineProperty2(func, "toString", {
              "configurable": true,
              "enumerable": false,
              "value": constant(string),
              "writable": true
            });
          };
          function baseShuffle(collection) {
            return shuffleSelf(values(collection));
          }
          function baseSlice(array, start, end) {
            var index2 = -1, length = array.length;
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end > length ? length : end;
            if (end < 0) {
              end += length;
            }
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result2 = Array2(length);
            while (++index2 < length) {
              result2[index2] = array[index2 + start];
            }
            return result2;
          }
          function baseSome(collection, predicate) {
            var result2;
            baseEach(collection, function(value, index2, collection2) {
              result2 = predicate(value, index2, collection2);
              return !result2;
            });
            return !!result2;
          }
          function baseSortedIndex(array, value, retHighest) {
            var low = 0, high = array == null ? low : array.length;
            if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
              while (low < high) {
                var mid = low + high >>> 1, computed = array[mid];
                if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                  low = mid + 1;
                } else {
                  high = mid;
                }
              }
              return high;
            }
            return baseSortedIndexBy(array, value, identity, retHighest);
          }
          function baseSortedIndexBy(array, value, iteratee2, retHighest) {
            var low = 0, high = array == null ? 0 : array.length;
            if (high === 0) {
              return 0;
            }
            value = iteratee2(value);
            var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
            while (low < high) {
              var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined$1, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
              if (valIsNaN) {
                var setLow = retHighest || othIsReflexive;
              } else if (valIsUndefined) {
                setLow = othIsReflexive && (retHighest || othIsDefined);
              } else if (valIsNull) {
                setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
              } else if (valIsSymbol) {
                setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
              } else if (othIsNull || othIsSymbol) {
                setLow = false;
              } else {
                setLow = retHighest ? computed <= value : computed < value;
              }
              if (setLow) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
          }
          function baseSortedUniq(array, iteratee2) {
            var index2 = -1, length = array.length, resIndex = 0, result2 = [];
            while (++index2 < length) {
              var value = array[index2], computed = iteratee2 ? iteratee2(value) : value;
              if (!index2 || !eq(computed, seen)) {
                var seen = computed;
                result2[resIndex++] = value === 0 ? 0 : value;
              }
            }
            return result2;
          }
          function baseToNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            return +value;
          }
          function baseToString(value) {
            if (typeof value == "string") {
              return value;
            }
            if (isArray(value)) {
              return arrayMap(value, baseToString) + "";
            }
            if (isSymbol(value)) {
              return symbolToString ? symbolToString.call(value) : "";
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function baseUniq(array, iteratee2, comparator) {
            var index2 = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
            if (comparator) {
              isCommon = false;
              includes2 = arrayIncludesWith;
            } else if (length >= LARGE_ARRAY_SIZE) {
              var set2 = iteratee2 ? null : createSet(array);
              if (set2) {
                return setToArray(set2);
              }
              isCommon = false;
              includes2 = cacheHas;
              seen = new SetCache();
            } else {
              seen = iteratee2 ? [] : result2;
            }
            outer:
              while (++index2 < length) {
                var value = array[index2], computed = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var seenIndex = seen.length;
                  while (seenIndex--) {
                    if (seen[seenIndex] === computed) {
                      continue outer;
                    }
                  }
                  if (iteratee2) {
                    seen.push(computed);
                  }
                  result2.push(value);
                } else if (!includes2(seen, computed, comparator)) {
                  if (seen !== result2) {
                    seen.push(computed);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseUnset(object, path) {
            path = castPath(path, object);
            object = parent(object, path);
            return object == null || delete object[toKey(last(path))];
          }
          function baseUpdate(object, path, updater, customizer) {
            return baseSet(object, path, updater(baseGet(object, path)), customizer);
          }
          function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length, index2 = fromRight ? length : -1;
            while ((fromRight ? index2-- : ++index2 < length) && predicate(array[index2], index2, array)) {
            }
            return isDrop ? baseSlice(array, fromRight ? 0 : index2, fromRight ? index2 + 1 : length) : baseSlice(array, fromRight ? index2 + 1 : 0, fromRight ? length : index2);
          }
          function baseWrapperValue(value, actions) {
            var result2 = value;
            if (result2 instanceof LazyWrapper) {
              result2 = result2.value();
            }
            return arrayReduce(actions, function(result3, action) {
              return action.func.apply(action.thisArg, arrayPush([result3], action.args));
            }, result2);
          }
          function baseXor(arrays, iteratee2, comparator) {
            var length = arrays.length;
            if (length < 2) {
              return length ? baseUniq(arrays[0]) : [];
            }
            var index2 = -1, result2 = Array2(length);
            while (++index2 < length) {
              var array = arrays[index2], othIndex = -1;
              while (++othIndex < length) {
                if (othIndex != index2) {
                  result2[index2] = baseDifference(result2[index2] || array, arrays[othIndex], iteratee2, comparator);
                }
              }
            }
            return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
          }
          function baseZipObject(props, values2, assignFunc) {
            var index2 = -1, length = props.length, valsLength = values2.length, result2 = {};
            while (++index2 < length) {
              var value = index2 < valsLength ? values2[index2] : undefined$1;
              assignFunc(result2, props[index2], value);
            }
            return result2;
          }
          function castArrayLikeObject(value) {
            return isArrayLikeObject(value) ? value : [];
          }
          function castFunction(value) {
            return typeof value == "function" ? value : identity;
          }
          function castPath(value, object) {
            if (isArray(value)) {
              return value;
            }
            return isKey(value, object) ? [value] : stringToPath(toString(value));
          }
          var castRest = baseRest;
          function castSlice(array, start, end) {
            var length = array.length;
            end = end === undefined$1 ? length : end;
            return !start && end >= length ? array : baseSlice(array, start, end);
          }
          var clearTimeout2 = ctxClearTimeout || function(id) {
            return root.clearTimeout(id);
          };
          function cloneBuffer(buffer, isDeep) {
            if (isDeep) {
              return buffer.slice();
            }
            var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result2);
            return result2;
          }
          function cloneArrayBuffer(arrayBuffer) {
            var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
            return result2;
          }
          function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
          }
          function cloneRegExp(regexp) {
            var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result2.lastIndex = regexp.lastIndex;
            return result2;
          }
          function cloneSymbol(symbol) {
            return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
          }
          function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
          }
          function compareAscending(value, other) {
            if (value !== other) {
              var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
              var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
              if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
                return 1;
              }
              if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
                return -1;
              }
            }
            return 0;
          }
          function compareMultiple(object, other, orders) {
            var index2 = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
            while (++index2 < length) {
              var result2 = compareAscending(objCriteria[index2], othCriteria[index2]);
              if (result2) {
                if (index2 >= ordersLength) {
                  return result2;
                }
                var order = orders[index2];
                return result2 * (order == "desc" ? -1 : 1);
              }
            }
            return object.index - other.index;
          }
          function composeArgs(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
            while (++leftIndex < leftLength) {
              result2[leftIndex] = partials[leftIndex];
            }
            while (++argsIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[holders[argsIndex]] = args[argsIndex];
              }
            }
            while (rangeLength--) {
              result2[leftIndex++] = args[argsIndex++];
            }
            return result2;
          }
          function composeArgsRight(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
            while (++argsIndex < rangeLength) {
              result2[argsIndex] = args[argsIndex];
            }
            var offset = argsIndex;
            while (++rightIndex < rightLength) {
              result2[offset + rightIndex] = partials[rightIndex];
            }
            while (++holdersIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[offset + holders[holdersIndex]] = args[argsIndex++];
              }
            }
            return result2;
          }
          function copyArray(source, array) {
            var index2 = -1, length = source.length;
            array || (array = Array2(length));
            while (++index2 < length) {
              array[index2] = source[index2];
            }
            return array;
          }
          function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            var index2 = -1, length = props.length;
            while (++index2 < length) {
              var key = props[index2];
              var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
              if (newValue === undefined$1) {
                newValue = source[key];
              }
              if (isNew) {
                baseAssignValue(object, key, newValue);
              } else {
                assignValue(object, key, newValue);
              }
            }
            return object;
          }
          function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object);
          }
          function copySymbolsIn(source, object) {
            return copyObject(source, getSymbolsIn(source), object);
          }
          function createAggregator(setter, initializer) {
            return function(collection, iteratee2) {
              var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
              return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
            };
          }
          function createAssigner(assigner) {
            return baseRest(function(object, sources) {
              var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
              customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
              if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                customizer = length < 3 ? undefined$1 : customizer;
                length = 1;
              }
              object = Object2(object);
              while (++index2 < length) {
                var source = sources[index2];
                if (source) {
                  assigner(object, source, index2, customizer);
                }
              }
              return object;
            });
          }
          function createBaseEach(eachFunc, fromRight) {
            return function(collection, iteratee2) {
              if (collection == null) {
                return collection;
              }
              if (!isArrayLike(collection)) {
                return eachFunc(collection, iteratee2);
              }
              var length = collection.length, index2 = fromRight ? length : -1, iterable = Object2(collection);
              while (fromRight ? index2-- : ++index2 < length) {
                if (iteratee2(iterable[index2], index2, iterable) === false) {
                  break;
                }
              }
              return collection;
            };
          }
          function createBaseFor(fromRight) {
            return function(object, iteratee2, keysFunc) {
              var index2 = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
              while (length--) {
                var key = props[fromRight ? length : ++index2];
                if (iteratee2(iterable[key], key, iterable) === false) {
                  break;
                }
              }
              return object;
            };
          }
          function createBind(func, bitmask, thisArg) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return fn.apply(isBind ? thisArg : this, arguments);
            }
            return wrapper;
          }
          function createCaseFirst(methodName) {
            return function(string) {
              string = toString(string);
              var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
              var chr = strSymbols ? strSymbols[0] : string.charAt(0);
              var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
              return chr[methodName]() + trailing;
            };
          }
          function createCompounder(callback) {
            return function(string) {
              return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
            };
          }
          function createCtor(Ctor) {
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return new Ctor();
                case 1:
                  return new Ctor(args[0]);
                case 2:
                  return new Ctor(args[0], args[1]);
                case 3:
                  return new Ctor(args[0], args[1], args[2]);
                case 4:
                  return new Ctor(args[0], args[1], args[2], args[3]);
                case 5:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                case 6:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                case 7:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
              }
              var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
              return isObject(result2) ? result2 : thisBinding;
            };
          }
          function createCurry(func, bitmask, arity) {
            var Ctor = createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index2 = length, placeholder = getHolder(wrapper);
              while (index2--) {
                args[index2] = arguments[index2];
              }
              var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
              length -= holders.length;
              if (length < arity) {
                return createRecurry(
                  func,
                  bitmask,
                  createHybrid,
                  wrapper.placeholder,
                  undefined$1,
                  args,
                  holders,
                  undefined$1,
                  undefined$1,
                  arity - length
                );
              }
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return apply(fn, this, args);
            }
            return wrapper;
          }
          function createFind(findIndexFunc) {
            return function(collection, predicate, fromIndex) {
              var iterable = Object2(collection);
              if (!isArrayLike(collection)) {
                var iteratee2 = getIteratee(predicate, 3);
                collection = keys(collection);
                predicate = function(key) {
                  return iteratee2(iterable[key], key, iterable);
                };
              }
              var index2 = findIndexFunc(collection, predicate, fromIndex);
              return index2 > -1 ? iterable[iteratee2 ? collection[index2] : index2] : undefined$1;
            };
          }
          function createFlow(fromRight) {
            return flatRest(function(funcs) {
              var length = funcs.length, index2 = length, prereq = LodashWrapper.prototype.thru;
              if (fromRight) {
                funcs.reverse();
              }
              while (index2--) {
                var func = funcs[index2];
                if (typeof func != "function") {
                  throw new TypeError2(FUNC_ERROR_TEXT);
                }
                if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                  var wrapper = new LodashWrapper([], true);
                }
              }
              index2 = wrapper ? index2 : length;
              while (++index2 < length) {
                func = funcs[index2];
                var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
                if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                  wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                } else {
                  wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                }
              }
              return function() {
                var args = arguments, value = args[0];
                if (wrapper && args.length == 1 && isArray(value)) {
                  return wrapper.plant(value).value();
                }
                var index3 = 0, result2 = length ? funcs[index3].apply(this, args) : value;
                while (++index3 < length) {
                  result2 = funcs[index3].call(this, result2);
                }
                return result2;
              };
            });
          }
          function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
            var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index2 = length;
              while (index2--) {
                args[index2] = arguments[index2];
              }
              if (isCurried) {
                var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
              }
              if (partials) {
                args = composeArgs(args, partials, holders, isCurried);
              }
              if (partialsRight) {
                args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
              }
              length -= holdersCount;
              if (isCurried && length < arity) {
                var newHolders = replaceHolders(args, placeholder);
                return createRecurry(
                  func,
                  bitmask,
                  createHybrid,
                  wrapper.placeholder,
                  thisArg,
                  args,
                  newHolders,
                  argPos,
                  ary2,
                  arity - length
                );
              }
              var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
              length = args.length;
              if (argPos) {
                args = reorder(args, argPos);
              } else if (isFlip && length > 1) {
                args.reverse();
              }
              if (isAry && ary2 < length) {
                args.length = ary2;
              }
              if (this && this !== root && this instanceof wrapper) {
                fn = Ctor || createCtor(fn);
              }
              return fn.apply(thisBinding, args);
            }
            return wrapper;
          }
          function createInverter(setter, toIteratee) {
            return function(object, iteratee2) {
              return baseInverter(object, setter, toIteratee(iteratee2), {});
            };
          }
          function createMathOperation(operator, defaultValue) {
            return function(value, other) {
              var result2;
              if (value === undefined$1 && other === undefined$1) {
                return defaultValue;
              }
              if (value !== undefined$1) {
                result2 = value;
              }
              if (other !== undefined$1) {
                if (result2 === undefined$1) {
                  return other;
                }
                if (typeof value == "string" || typeof other == "string") {
                  value = baseToString(value);
                  other = baseToString(other);
                } else {
                  value = baseToNumber(value);
                  other = baseToNumber(other);
                }
                result2 = operator(value, other);
              }
              return result2;
            };
          }
          function createOver(arrayFunc) {
            return flatRest(function(iteratees) {
              iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
              return baseRest(function(args) {
                var thisArg = this;
                return arrayFunc(iteratees, function(iteratee2) {
                  return apply(iteratee2, thisArg, args);
                });
              });
            });
          }
          function createPadding(length, chars) {
            chars = chars === undefined$1 ? " " : baseToString(chars);
            var charsLength = chars.length;
            if (charsLength < 2) {
              return charsLength ? baseRepeat(chars, length) : chars;
            }
            var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
            return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
          }
          function createPartial(func, bitmask, thisArg, partials) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              while (++leftIndex < leftLength) {
                args[leftIndex] = partials[leftIndex];
              }
              while (argsLength--) {
                args[leftIndex++] = arguments[++argsIndex];
              }
              return apply(fn, isBind ? thisArg : this, args);
            }
            return wrapper;
          }
          function createRange(fromRight) {
            return function(start, end, step) {
              if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
                end = step = undefined$1;
              }
              start = toFinite(start);
              if (end === undefined$1) {
                end = start;
                start = 0;
              } else {
                end = toFinite(end);
              }
              step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
              return baseRange(start, end, step, fromRight);
            };
          }
          function createRelationalOperation(operator) {
            return function(value, other) {
              if (!(typeof value == "string" && typeof other == "string")) {
                value = toNumber(value);
                other = toNumber(other);
              }
              return operator(value, other);
            };
          }
          function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
            var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
            bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
            bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
            if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
              bitmask &= -4;
            }
            var newData = [
              func,
              bitmask,
              thisArg,
              newPartials,
              newHolders,
              newPartialsRight,
              newHoldersRight,
              argPos,
              ary2,
              arity
            ];
            var result2 = wrapFunc.apply(undefined$1, newData);
            if (isLaziable(func)) {
              setData(result2, newData);
            }
            result2.placeholder = placeholder;
            return setWrapToString(result2, func, bitmask);
          }
          function createRound(methodName) {
            var func = Math2[methodName];
            return function(number, precision) {
              number = toNumber(number);
              precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
              if (precision && nativeIsFinite(number)) {
                var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
                pair = (toString(value) + "e").split("e");
                return +(pair[0] + "e" + (+pair[1] - precision));
              }
              return func(number);
            };
          }
          var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
            return new Set2(values2);
          };
          function createToPairs(keysFunc) {
            return function(object) {
              var tag = getTag(object);
              if (tag == mapTag) {
                return mapToArray(object);
              }
              if (tag == setTag) {
                return setToPairs(object);
              }
              return baseToPairs(object, keysFunc(object));
            };
          }
          function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
            var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
            if (!isBindKey && typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var length = partials ? partials.length : 0;
            if (!length) {
              bitmask &= -97;
              partials = holders = undefined$1;
            }
            ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
            arity = arity === undefined$1 ? arity : toInteger(arity);
            length -= holders ? holders.length : 0;
            if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
              var partialsRight = partials, holdersRight = holders;
              partials = holders = undefined$1;
            }
            var data = isBindKey ? undefined$1 : getData(func);
            var newData = [
              func,
              bitmask,
              thisArg,
              partials,
              holders,
              partialsRight,
              holdersRight,
              argPos,
              ary2,
              arity
            ];
            if (data) {
              mergeData(newData, data);
            }
            func = newData[0];
            bitmask = newData[1];
            thisArg = newData[2];
            partials = newData[3];
            holders = newData[4];
            arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
            if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
              bitmask &= -25;
            }
            if (!bitmask || bitmask == WRAP_BIND_FLAG) {
              var result2 = createBind(func, bitmask, thisArg);
            } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
              result2 = createCurry(func, bitmask, arity);
            } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
              result2 = createPartial(func, bitmask, thisArg, partials);
            } else {
              result2 = createHybrid.apply(undefined$1, newData);
            }
            var setter = data ? baseSetData : setData;
            return setWrapToString(setter(result2, newData), func, bitmask);
          }
          function customDefaultsAssignIn(objValue, srcValue, key, object) {
            if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              return srcValue;
            }
            return objValue;
          }
          function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
            if (isObject(objValue) && isObject(srcValue)) {
              stack.set(srcValue, objValue);
              baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
              stack["delete"](srcValue);
            }
            return objValue;
          }
          function customOmitClone(value) {
            return isPlainObject(value) ? undefined$1 : value;
          }
          function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
              return false;
            }
            var arrStacked = stack.get(array);
            var othStacked = stack.get(other);
            if (arrStacked && othStacked) {
              return arrStacked == other && othStacked == array;
            }
            var index2 = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
            stack.set(array, other);
            stack.set(other, array);
            while (++index2 < arrLength) {
              var arrValue = array[index2], othValue = other[index2];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
              }
              if (compared !== undefined$1) {
                if (compared) {
                  continue;
                }
                result2 = false;
                break;
              }
              if (seen) {
                if (!arraySome(other, function(othValue2, othIndex) {
                  if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                    return seen.push(othIndex);
                  }
                })) {
                  result2 = false;
                  break;
                }
              } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                result2 = false;
                break;
              }
            }
            stack["delete"](array);
            stack["delete"](other);
            return result2;
          }
          function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
            switch (tag) {
              case dataViewTag:
                if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                  return false;
                }
                object = object.buffer;
                other = other.buffer;
              case arrayBufferTag:
                if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                  return false;
                }
                return true;
              case boolTag:
              case dateTag:
              case numberTag:
                return eq(+object, +other);
              case errorTag:
                return object.name == other.name && object.message == other.message;
              case regexpTag:
              case stringTag:
                return object == other + "";
              case mapTag:
                var convert = mapToArray;
              case setTag:
                var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                convert || (convert = setToArray);
                if (object.size != other.size && !isPartial) {
                  return false;
                }
                var stacked = stack.get(object);
                if (stacked) {
                  return stacked == other;
                }
                bitmask |= COMPARE_UNORDERED_FLAG;
                stack.set(object, other);
                var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                stack["delete"](object);
                return result2;
              case symbolTag:
                if (symbolValueOf) {
                  return symbolValueOf.call(object) == symbolValueOf.call(other);
                }
            }
            return false;
          }
          function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
            if (objLength != othLength && !isPartial) {
              return false;
            }
            var index2 = objLength;
            while (index2--) {
              var key = objProps[index2];
              if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
                return false;
              }
            }
            var objStacked = stack.get(object);
            var othStacked = stack.get(other);
            if (objStacked && othStacked) {
              return objStacked == other && othStacked == object;
            }
            var result2 = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while (++index2 < objLength) {
              key = objProps[index2];
              var objValue = object[key], othValue = other[key];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
              }
              if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                result2 = false;
                break;
              }
              skipCtor || (skipCtor = key == "constructor");
            }
            if (result2 && !skipCtor) {
              var objCtor = object.constructor, othCtor = other.constructor;
              if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
                result2 = false;
              }
            }
            stack["delete"](object);
            stack["delete"](other);
            return result2;
          }
          function flatRest(func) {
            return setToString(overRest(func, undefined$1, flatten), func + "");
          }
          function getAllKeys(object) {
            return baseGetAllKeys(object, keys, getSymbols);
          }
          function getAllKeysIn(object) {
            return baseGetAllKeys(object, keysIn, getSymbolsIn);
          }
          var getData = !metaMap ? noop : function(func) {
            return metaMap.get(func);
          };
          function getFuncName(func) {
            var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
            while (length--) {
              var data = array[length], otherFunc = data.func;
              if (otherFunc == null || otherFunc == func) {
                return data.name;
              }
            }
            return result2;
          }
          function getHolder(func) {
            var object = hasOwnProperty.call(lodash2, "placeholder") ? lodash2 : func;
            return object.placeholder;
          }
          function getIteratee() {
            var result2 = lodash2.iteratee || iteratee;
            result2 = result2 === iteratee ? baseIteratee : result2;
            return arguments.length ? result2(arguments[0], arguments[1]) : result2;
          }
          function getMapData(map2, key) {
            var data = map2.__data__;
            return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
          }
          function getMatchData(object) {
            var result2 = keys(object), length = result2.length;
            while (length--) {
              var key = result2[length], value = object[key];
              result2[length] = [key, value, isStrictComparable(value)];
            }
            return result2;
          }
          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined$1;
          }
          function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
              value[symToStringTag] = undefined$1;
              var unmasked = true;
            } catch (e) {
            }
            var result2 = nativeObjectToString.call(value);
            if (unmasked) {
              if (isOwn) {
                value[symToStringTag] = tag;
              } else {
                delete value[symToStringTag];
              }
            }
            return result2;
          }
          var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
            if (object == null) {
              return [];
            }
            object = Object2(object);
            return arrayFilter(nativeGetSymbols(object), function(symbol) {
              return propertyIsEnumerable.call(object, symbol);
            });
          };
          var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
            var result2 = [];
            while (object) {
              arrayPush(result2, getSymbols(object));
              object = getPrototype(object);
            }
            return result2;
          };
          var getTag = baseGetTag;
          if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
            getTag = function(value) {
              var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
              if (ctorString) {
                switch (ctorString) {
                  case dataViewCtorString:
                    return dataViewTag;
                  case mapCtorString:
                    return mapTag;
                  case promiseCtorString:
                    return promiseTag;
                  case setCtorString:
                    return setTag;
                  case weakMapCtorString:
                    return weakMapTag;
                }
              }
              return result2;
            };
          }
          function getView(start, end, transforms) {
            var index2 = -1, length = transforms.length;
            while (++index2 < length) {
              var data = transforms[index2], size2 = data.size;
              switch (data.type) {
                case "drop":
                  start += size2;
                  break;
                case "dropRight":
                  end -= size2;
                  break;
                case "take":
                  end = nativeMin(end, start + size2);
                  break;
                case "takeRight":
                  start = nativeMax(start, end - size2);
                  break;
              }
            }
            return { "start": start, "end": end };
          }
          function getWrapDetails(source) {
            var match = source.match(reWrapDetails);
            return match ? match[1].split(reSplitDetails) : [];
          }
          function hasPath(object, path, hasFunc) {
            path = castPath(path, object);
            var index2 = -1, length = path.length, result2 = false;
            while (++index2 < length) {
              var key = toKey(path[index2]);
              if (!(result2 = object != null && hasFunc(object, key))) {
                break;
              }
              object = object[key];
            }
            if (result2 || ++index2 != length) {
              return result2;
            }
            length = object == null ? 0 : object.length;
            return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
          }
          function initCloneArray(array) {
            var length = array.length, result2 = new array.constructor(length);
            if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
              result2.index = array.index;
              result2.input = array.input;
            }
            return result2;
          }
          function initCloneObject(object) {
            return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
          }
          function initCloneByTag(object, tag, isDeep) {
            var Ctor = object.constructor;
            switch (tag) {
              case arrayBufferTag:
                return cloneArrayBuffer(object);
              case boolTag:
              case dateTag:
                return new Ctor(+object);
              case dataViewTag:
                return cloneDataView(object, isDeep);
              case float32Tag:
              case float64Tag:
              case int8Tag:
              case int16Tag:
              case int32Tag:
              case uint8Tag:
              case uint8ClampedTag:
              case uint16Tag:
              case uint32Tag:
                return cloneTypedArray(object, isDeep);
              case mapTag:
                return new Ctor();
              case numberTag:
              case stringTag:
                return new Ctor(object);
              case regexpTag:
                return cloneRegExp(object);
              case setTag:
                return new Ctor();
              case symbolTag:
                return cloneSymbol(object);
            }
          }
          function insertWrapDetails(source, details) {
            var length = details.length;
            if (!length) {
              return source;
            }
            var lastIndex = length - 1;
            details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
            details = details.join(length > 2 ? ", " : " ");
            return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
          }
          function isFlattenable(value) {
            return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
          }
          function isIndex(value, length) {
            var type = typeof value;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
          }
          function isIterateeCall(value, index2, object) {
            if (!isObject(object)) {
              return false;
            }
            var type = typeof index2;
            if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
              return eq(object[index2], value);
            }
            return false;
          }
          function isKey(value, object) {
            if (isArray(value)) {
              return false;
            }
            var type = typeof value;
            if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
              return true;
            }
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
          }
          function isKeyable(value) {
            var type = typeof value;
            return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
          }
          function isLaziable(func) {
            var funcName = getFuncName(func), other = lodash2[funcName];
            if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
              return false;
            }
            if (func === other) {
              return true;
            }
            var data = getData(other);
            return !!data && func === data[0];
          }
          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }
          var isMaskable = coreJsData ? isFunction2 : stubFalse;
          function isPrototype(value) {
            var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
            return value === proto;
          }
          function isStrictComparable(value) {
            return value === value && !isObject(value);
          }
          function matchesStrictComparable(key, srcValue) {
            return function(object) {
              if (object == null) {
                return false;
              }
              return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
            };
          }
          function memoizeCapped(func) {
            var result2 = memoize(func, function(key) {
              if (cache.size === MAX_MEMOIZE_SIZE) {
                cache.clear();
              }
              return key;
            });
            var cache = result2.cache;
            return result2;
          }
          function mergeData(data, source) {
            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
            var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
            if (!(isCommon || isCombo)) {
              return data;
            }
            if (srcBitmask & WRAP_BIND_FLAG) {
              data[2] = source[2];
              newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
            }
            var value = source[3];
            if (value) {
              var partials = data[3];
              data[3] = partials ? composeArgs(partials, value, source[4]) : value;
              data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
            }
            value = source[5];
            if (value) {
              partials = data[5];
              data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
              data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
            }
            value = source[7];
            if (value) {
              data[7] = value;
            }
            if (srcBitmask & WRAP_ARY_FLAG) {
              data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            }
            if (data[9] == null) {
              data[9] = source[9];
            }
            data[0] = source[0];
            data[1] = newBitmask;
            return data;
          }
          function nativeKeysIn(object) {
            var result2 = [];
            if (object != null) {
              for (var key in Object2(object)) {
                result2.push(key);
              }
            }
            return result2;
          }
          function objectToString(value) {
            return nativeObjectToString.call(value);
          }
          function overRest(func, start, transform2) {
            start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
            return function() {
              var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
              while (++index2 < length) {
                array[index2] = args[start + index2];
              }
              index2 = -1;
              var otherArgs = Array2(start + 1);
              while (++index2 < start) {
                otherArgs[index2] = args[index2];
              }
              otherArgs[start] = transform2(array);
              return apply(func, this, otherArgs);
            };
          }
          function parent(object, path) {
            return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
          }
          function reorder(array, indexes) {
            var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
            while (length--) {
              var index2 = indexes[length];
              array[length] = isIndex(index2, arrLength) ? oldArray[index2] : undefined$1;
            }
            return array;
          }
          function safeGet(object, key) {
            if (key === "constructor" && typeof object[key] === "function") {
              return;
            }
            if (key == "__proto__") {
              return;
            }
            return object[key];
          }
          var setData = shortOut(baseSetData);
          var setTimeout2 = ctxSetTimeout || function(func, wait) {
            return root.setTimeout(func, wait);
          };
          var setToString = shortOut(baseSetToString);
          function setWrapToString(wrapper, reference, bitmask) {
            var source = reference + "";
            return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
          }
          function shortOut(func) {
            var count = 0, lastCalled = 0;
            return function() {
              var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
              lastCalled = stamp;
              if (remaining > 0) {
                if (++count >= HOT_COUNT) {
                  return arguments[0];
                }
              } else {
                count = 0;
              }
              return func.apply(undefined$1, arguments);
            };
          }
          function shuffleSelf(array, size2) {
            var index2 = -1, length = array.length, lastIndex = length - 1;
            size2 = size2 === undefined$1 ? length : size2;
            while (++index2 < size2) {
              var rand = baseRandom(index2, lastIndex), value = array[rand];
              array[rand] = array[index2];
              array[index2] = value;
            }
            array.length = size2;
            return array;
          }
          var stringToPath = memoizeCapped(function(string) {
            var result2 = [];
            if (string.charCodeAt(0) === 46) {
              result2.push("");
            }
            string.replace(rePropName, function(match, number, quote, subString) {
              result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
            });
            return result2;
          });
          function toKey(value) {
            if (typeof value == "string" || isSymbol(value)) {
              return value;
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e) {
              }
              try {
                return func + "";
              } catch (e) {
              }
            }
            return "";
          }
          function updateWrapDetails(details, bitmask) {
            arrayEach(wrapFlags, function(pair) {
              var value = "_." + pair[0];
              if (bitmask & pair[1] && !arrayIncludes(details, value)) {
                details.push(value);
              }
            });
            return details.sort();
          }
          function wrapperClone(wrapper) {
            if (wrapper instanceof LazyWrapper) {
              return wrapper.clone();
            }
            var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
            result2.__actions__ = copyArray(wrapper.__actions__);
            result2.__index__ = wrapper.__index__;
            result2.__values__ = wrapper.__values__;
            return result2;
          }
          function chunk(array, size2, guard) {
            if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined$1) {
              size2 = 1;
            } else {
              size2 = nativeMax(toInteger(size2), 0);
            }
            var length = array == null ? 0 : array.length;
            if (!length || size2 < 1) {
              return [];
            }
            var index2 = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
            while (index2 < length) {
              result2[resIndex++] = baseSlice(array, index2, index2 += size2);
            }
            return result2;
          }
          function compact(array) {
            var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
            while (++index2 < length) {
              var value = array[index2];
              if (value) {
                result2[resIndex++] = value;
              }
            }
            return result2;
          }
          function concat() {
            var length = arguments.length;
            if (!length) {
              return [];
            }
            var args = Array2(length - 1), array = arguments[0], index2 = length;
            while (index2--) {
              args[index2 - 1] = arguments[index2];
            }
            return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
          }
          var difference = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
          });
          var differenceBy = baseRest(function(array, values2) {
            var iteratee2 = last(values2);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined$1;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
          });
          var differenceWith = baseRest(function(array, values2) {
            var comparator = last(values2);
            if (isArrayLikeObject(comparator)) {
              comparator = undefined$1;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
          });
          function drop(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined$1 ? 1 : toInteger(n);
            return baseSlice(array, n < 0 ? 0 : n, length);
          }
          function dropRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined$1 ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, 0, n < 0 ? 0 : n);
          }
          function dropRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
          }
          function dropWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
          }
          function fill(array, value, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
              start = 0;
              end = length;
            }
            return baseFill(array, value, start, end);
          }
          function findIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index2 < 0) {
              index2 = nativeMax(length + index2, 0);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index2);
          }
          function findLastIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index2 = length - 1;
            if (fromIndex !== undefined$1) {
              index2 = toInteger(fromIndex);
              index2 = fromIndex < 0 ? nativeMax(length + index2, 0) : nativeMin(index2, length - 1);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index2, true);
          }
          function flatten(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, 1) : [];
          }
          function flattenDeep(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, INFINITY) : [];
          }
          function flattenDepth(array, depth) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            depth = depth === undefined$1 ? 1 : toInteger(depth);
            return baseFlatten(array, depth);
          }
          function fromPairs(pairs) {
            var index2 = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
            while (++index2 < length) {
              var pair = pairs[index2];
              result2[pair[0]] = pair[1];
            }
            return result2;
          }
          function head(array) {
            return array && array.length ? array[0] : undefined$1;
          }
          function indexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index2 < 0) {
              index2 = nativeMax(length + index2, 0);
            }
            return baseIndexOf(array, value, index2);
          }
          function initial(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 0, -1) : [];
          }
          var intersection = baseRest(function(arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
          });
          var intersectionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            if (iteratee2 === last(mapped)) {
              iteratee2 = undefined$1;
            } else {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
          });
          var intersectionWith = baseRest(function(arrays) {
            var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            comparator = typeof comparator == "function" ? comparator : undefined$1;
            if (comparator) {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
          });
          function join(array, separator) {
            return array == null ? "" : nativeJoin.call(array, separator);
          }
          function last(array) {
            var length = array == null ? 0 : array.length;
            return length ? array[length - 1] : undefined$1;
          }
          function lastIndexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index2 = length;
            if (fromIndex !== undefined$1) {
              index2 = toInteger(fromIndex);
              index2 = index2 < 0 ? nativeMax(length + index2, 0) : nativeMin(index2, length - 1);
            }
            return value === value ? strictLastIndexOf(array, value, index2) : baseFindIndex(array, baseIsNaN, index2, true);
          }
          function nth(array, n) {
            return array && array.length ? baseNth(array, toInteger(n)) : undefined$1;
          }
          var pull = baseRest(pullAll);
          function pullAll(array, values2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
          }
          function pullAllBy(array, values2, iteratee2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
          }
          function pullAllWith(array, values2, comparator) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
          }
          var pullAt = flatRest(function(array, indexes) {
            var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
            basePullAt(array, arrayMap(indexes, function(index2) {
              return isIndex(index2, length) ? +index2 : index2;
            }).sort(compareAscending));
            return result2;
          });
          function remove(array, predicate) {
            var result2 = [];
            if (!(array && array.length)) {
              return result2;
            }
            var index2 = -1, indexes = [], length = array.length;
            predicate = getIteratee(predicate, 3);
            while (++index2 < length) {
              var value = array[index2];
              if (predicate(value, index2, array)) {
                result2.push(value);
                indexes.push(index2);
              }
            }
            basePullAt(array, indexes);
            return result2;
          }
          function reverse(array) {
            return array == null ? array : nativeReverse.call(array);
          }
          function slice(array, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
              start = 0;
              end = length;
            } else {
              start = start == null ? 0 : toInteger(start);
              end = end === undefined$1 ? length : toInteger(end);
            }
            return baseSlice(array, start, end);
          }
          function sortedIndex(array, value) {
            return baseSortedIndex(array, value);
          }
          function sortedIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
          }
          function sortedIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index2 = baseSortedIndex(array, value);
              if (index2 < length && eq(array[index2], value)) {
                return index2;
              }
            }
            return -1;
          }
          function sortedLastIndex(array, value) {
            return baseSortedIndex(array, value, true);
          }
          function sortedLastIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
          }
          function sortedLastIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index2 = baseSortedIndex(array, value, true) - 1;
              if (eq(array[index2], value)) {
                return index2;
              }
            }
            return -1;
          }
          function sortedUniq(array) {
            return array && array.length ? baseSortedUniq(array) : [];
          }
          function sortedUniqBy(array, iteratee2) {
            return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function tail(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 1, length) : [];
          }
          function take(array, n, guard) {
            if (!(array && array.length)) {
              return [];
            }
            n = guard || n === undefined$1 ? 1 : toInteger(n);
            return baseSlice(array, 0, n < 0 ? 0 : n);
          }
          function takeRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined$1 ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, n < 0 ? 0 : n, length);
          }
          function takeRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
          }
          function takeWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
          }
          var union = baseRest(function(arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
          });
          var unionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined$1;
            }
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
          });
          var unionWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined$1;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
          });
          function uniq(array) {
            return array && array.length ? baseUniq(array) : [];
          }
          function uniqBy(array, iteratee2) {
            return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function uniqWith(array, comparator) {
            comparator = typeof comparator == "function" ? comparator : undefined$1;
            return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
          }
          function unzip(array) {
            if (!(array && array.length)) {
              return [];
            }
            var length = 0;
            array = arrayFilter(array, function(group) {
              if (isArrayLikeObject(group)) {
                length = nativeMax(group.length, length);
                return true;
              }
            });
            return baseTimes(length, function(index2) {
              return arrayMap(array, baseProperty(index2));
            });
          }
          function unzipWith(array, iteratee2) {
            if (!(array && array.length)) {
              return [];
            }
            var result2 = unzip(array);
            if (iteratee2 == null) {
              return result2;
            }
            return arrayMap(result2, function(group) {
              return apply(iteratee2, undefined$1, group);
            });
          }
          var without = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
          });
          var xor = baseRest(function(arrays) {
            return baseXor(arrayFilter(arrays, isArrayLikeObject));
          });
          var xorBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined$1;
            }
            return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
          });
          var xorWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined$1;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
          });
          var zip = baseRest(unzip);
          function zipObject(props, values2) {
            return baseZipObject(props || [], values2 || [], assignValue);
          }
          function zipObjectDeep(props, values2) {
            return baseZipObject(props || [], values2 || [], baseSet);
          }
          var zipWith = baseRest(function(arrays) {
            var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
            iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
            return unzipWith(arrays, iteratee2);
          });
          function chain(value) {
            var result2 = lodash2(value);
            result2.__chain__ = true;
            return result2;
          }
          function tap(value, interceptor) {
            interceptor(value);
            return value;
          }
          function thru(value, interceptor) {
            return interceptor(value);
          }
          var wrapperAt = flatRest(function(paths) {
            var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
              return baseAt(object, paths);
            };
            if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
              return this.thru(interceptor);
            }
            value = value.slice(start, +start + (length ? 1 : 0));
            value.__actions__.push({
              "func": thru,
              "args": [interceptor],
              "thisArg": undefined$1
            });
            return new LodashWrapper(value, this.__chain__).thru(function(array) {
              if (length && !array.length) {
                array.push(undefined$1);
              }
              return array;
            });
          });
          function wrapperChain() {
            return chain(this);
          }
          function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
          }
          function wrapperNext() {
            if (this.__values__ === undefined$1) {
              this.__values__ = toArray(this.value());
            }
            var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
            return { "done": done, "value": value };
          }
          function wrapperToIterator() {
            return this;
          }
          function wrapperPlant(value) {
            var result2, parent2 = this;
            while (parent2 instanceof baseLodash) {
              var clone2 = wrapperClone(parent2);
              clone2.__index__ = 0;
              clone2.__values__ = undefined$1;
              if (result2) {
                previous.__wrapped__ = clone2;
              } else {
                result2 = clone2;
              }
              var previous = clone2;
              parent2 = parent2.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result2;
          }
          function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
              var wrapped = value;
              if (this.__actions__.length) {
                wrapped = new LazyWrapper(this);
              }
              wrapped = wrapped.reverse();
              wrapped.__actions__.push({
                "func": thru,
                "args": [reverse],
                "thisArg": undefined$1
              });
              return new LodashWrapper(wrapped, this.__chain__);
            }
            return this.thru(reverse);
          }
          function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
          }
          var countBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty.call(result2, key)) {
              ++result2[key];
            } else {
              baseAssignValue(result2, key, 1);
            }
          });
          function every(collection, predicate, guard) {
            var func = isArray(collection) ? arrayEvery : baseEvery;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined$1;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          function filter(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, getIteratee(predicate, 3));
          }
          var find = createFind(findIndex);
          var findLast = createFind(findLastIndex);
          function flatMap(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), 1);
          }
          function flatMapDeep(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), INFINITY);
          }
          function flatMapDepth(collection, iteratee2, depth) {
            depth = depth === undefined$1 ? 1 : toInteger(depth);
            return baseFlatten(map(collection, iteratee2), depth);
          }
          function forEach(collection, iteratee2) {
            var func = isArray(collection) ? arrayEach : baseEach;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function forEachRight(collection, iteratee2) {
            var func = isArray(collection) ? arrayEachRight : baseEachRight;
            return func(collection, getIteratee(iteratee2, 3));
          }
          var groupBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty.call(result2, key)) {
              result2[key].push(value);
            } else {
              baseAssignValue(result2, key, [value]);
            }
          });
          function includes(collection, value, fromIndex, guard) {
            collection = isArrayLike(collection) ? collection : values(collection);
            fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
            var length = collection.length;
            if (fromIndex < 0) {
              fromIndex = nativeMax(length + fromIndex, 0);
            }
            return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
          }
          var invokeMap = baseRest(function(collection, path, args) {
            var index2 = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value) {
              result2[++index2] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
            });
            return result2;
          });
          var keyBy = createAggregator(function(result2, value, key) {
            baseAssignValue(result2, key, value);
          });
          function map(collection, iteratee2) {
            var func = isArray(collection) ? arrayMap : baseMap;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function orderBy(collection, iteratees, orders, guard) {
            if (collection == null) {
              return [];
            }
            if (!isArray(iteratees)) {
              iteratees = iteratees == null ? [] : [iteratees];
            }
            orders = guard ? undefined$1 : orders;
            if (!isArray(orders)) {
              orders = orders == null ? [] : [orders];
            }
            return baseOrderBy(collection, iteratees, orders);
          }
          var partition = createAggregator(function(result2, value, key) {
            result2[key ? 0 : 1].push(value);
          }, function() {
            return [[], []];
          });
          function reduce(collection, iteratee2, accumulator) {
            var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
          }
          function reduceRight(collection, iteratee2, accumulator) {
            var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
          }
          function reject(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, negate(getIteratee(predicate, 3)));
          }
          function sample(collection) {
            var func = isArray(collection) ? arraySample : baseSample;
            return func(collection);
          }
          function sampleSize(collection, n, guard) {
            if (guard ? isIterateeCall(collection, n, guard) : n === undefined$1) {
              n = 1;
            } else {
              n = toInteger(n);
            }
            var func = isArray(collection) ? arraySampleSize : baseSampleSize;
            return func(collection, n);
          }
          function shuffle(collection) {
            var func = isArray(collection) ? arrayShuffle : baseShuffle;
            return func(collection);
          }
          function size(collection) {
            if (collection == null) {
              return 0;
            }
            if (isArrayLike(collection)) {
              return isString(collection) ? stringSize(collection) : collection.length;
            }
            var tag = getTag(collection);
            if (tag == mapTag || tag == setTag) {
              return collection.size;
            }
            return baseKeys(collection).length;
          }
          function some(collection, predicate, guard) {
            var func = isArray(collection) ? arraySome : baseSome;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined$1;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          var sortBy = baseRest(function(collection, iteratees) {
            if (collection == null) {
              return [];
            }
            var length = iteratees.length;
            if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
              iteratees = [];
            } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
              iteratees = [iteratees[0]];
            }
            return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
          });
          var now = ctxNow || function() {
            return root.Date.now();
          };
          function after(n, func) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function() {
              if (--n < 1) {
                return func.apply(this, arguments);
              }
            };
          }
          function ary(func, n, guard) {
            n = guard ? undefined$1 : n;
            n = func && n == null ? func.length : n;
            return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
          }
          function before(n, func) {
            var result2;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function() {
              if (--n > 0) {
                result2 = func.apply(this, arguments);
              }
              if (n <= 1) {
                func = undefined$1;
              }
              return result2;
            };
          }
          var bind = baseRest(function(func, thisArg, partials) {
            var bitmask = WRAP_BIND_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bind));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(func, bitmask, thisArg, partials, holders);
          });
          var bindKey = baseRest(function(object, key, partials) {
            var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bindKey));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(key, bitmask, object, partials, holders);
          });
          function curry(func, arity, guard) {
            arity = guard ? undefined$1 : arity;
            var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
            result2.placeholder = curry.placeholder;
            return result2;
          }
          function curryRight(func, arity, guard) {
            arity = guard ? undefined$1 : arity;
            var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
            result2.placeholder = curryRight.placeholder;
            return result2;
          }
          function debounce(func, wait, options) {
            var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
              leading = !!options.leading;
              maxing = "maxWait" in options;
              maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
              var args = lastArgs, thisArg = lastThis;
              lastArgs = lastThis = undefined$1;
              lastInvokeTime = time;
              result2 = func.apply(thisArg, args);
              return result2;
            }
            function leadingEdge(time) {
              lastInvokeTime = time;
              timerId = setTimeout2(timerExpired, wait);
              return leading ? invokeFunc(time) : result2;
            }
            function remainingWait(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
              return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
              return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
              var time = now();
              if (shouldInvoke(time)) {
                return trailingEdge(time);
              }
              timerId = setTimeout2(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
              timerId = undefined$1;
              if (trailing && lastArgs) {
                return invokeFunc(time);
              }
              lastArgs = lastThis = undefined$1;
              return result2;
            }
            function cancel() {
              if (timerId !== undefined$1) {
                clearTimeout2(timerId);
              }
              lastInvokeTime = 0;
              lastArgs = lastCallTime = lastThis = timerId = undefined$1;
            }
            function flush() {
              return timerId === undefined$1 ? result2 : trailingEdge(now());
            }
            function debounced() {
              var time = now(), isInvoking = shouldInvoke(time);
              lastArgs = arguments;
              lastThis = this;
              lastCallTime = time;
              if (isInvoking) {
                if (timerId === undefined$1) {
                  return leadingEdge(lastCallTime);
                }
                if (maxing) {
                  clearTimeout2(timerId);
                  timerId = setTimeout2(timerExpired, wait);
                  return invokeFunc(lastCallTime);
                }
              }
              if (timerId === undefined$1) {
                timerId = setTimeout2(timerExpired, wait);
              }
              return result2;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
          }
          var defer = baseRest(function(func, args) {
            return baseDelay(func, 1, args);
          });
          var delay = baseRest(function(func, wait, args) {
            return baseDelay(func, toNumber(wait) || 0, args);
          });
          function flip(func) {
            return createWrap(func, WRAP_FLIP_FLAG);
          }
          function memoize(func, resolver) {
            if (typeof func != "function" || resolver != null && typeof resolver != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var memoized = function() {
              var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
              if (cache.has(key)) {
                return cache.get(key);
              }
              var result2 = func.apply(this, args);
              memoized.cache = cache.set(key, result2) || cache;
              return result2;
            };
            memoized.cache = new (memoize.Cache || MapCache)();
            return memoized;
          }
          memoize.Cache = MapCache;
          function negate(predicate) {
            if (typeof predicate != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return !predicate.call(this);
                case 1:
                  return !predicate.call(this, args[0]);
                case 2:
                  return !predicate.call(this, args[0], args[1]);
                case 3:
                  return !predicate.call(this, args[0], args[1], args[2]);
              }
              return !predicate.apply(this, args);
            };
          }
          function once(func) {
            return before(2, func);
          }
          var overArgs = castRest(function(func, transforms) {
            transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
            var funcsLength = transforms.length;
            return baseRest(function(args) {
              var index2 = -1, length = nativeMin(args.length, funcsLength);
              while (++index2 < length) {
                args[index2] = transforms[index2].call(this, args[index2]);
              }
              return apply(func, this, args);
            });
          });
          var partial = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partial));
            return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
          });
          var partialRight = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partialRight));
            return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
          });
          var rearg = flatRest(function(func, indexes) {
            return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
          });
          function rest(func, start) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start = start === undefined$1 ? start : toInteger(start);
            return baseRest(func, start);
          }
          function spread(func, start) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start = start == null ? 0 : nativeMax(toInteger(start), 0);
            return baseRest(function(args) {
              var array = args[start], otherArgs = castSlice(args, 0, start);
              if (array) {
                arrayPush(otherArgs, array);
              }
              return apply(func, this, otherArgs);
            });
          }
          function throttle2(func, wait, options) {
            var leading = true, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (isObject(options)) {
              leading = "leading" in options ? !!options.leading : leading;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            return debounce(func, wait, {
              "leading": leading,
              "maxWait": wait,
              "trailing": trailing
            });
          }
          function unary(func) {
            return ary(func, 1);
          }
          function wrap(value, wrapper) {
            return partial(castFunction(wrapper), value);
          }
          function castArray() {
            if (!arguments.length) {
              return [];
            }
            var value = arguments[0];
            return isArray(value) ? value : [value];
          }
          function clone(value) {
            return baseClone(value, CLONE_SYMBOLS_FLAG);
          }
          function cloneWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
          }
          function cloneDeep(value) {
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
          }
          function cloneDeepWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
          }
          function conformsTo(object, source) {
            return source == null || baseConformsTo(object, source, keys(source));
          }
          function eq(value, other) {
            return value === other || value !== value && other !== other;
          }
          var gt = createRelationalOperation(baseGt);
          var gte = createRelationalOperation(function(value, other) {
            return value >= other;
          });
          var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
            return arguments;
          })()) ? baseIsArguments : function(value) {
            return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
          };
          var isArray = Array2.isArray;
          var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
          function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction2(value);
          }
          function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
          }
          function isBoolean(value) {
            return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
          }
          var isBuffer = nativeIsBuffer || stubFalse;
          var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
          function isElement(value) {
            return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
          }
          function isEmpty(value) {
            if (value == null) {
              return true;
            }
            if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
              return !value.length;
            }
            var tag = getTag(value);
            if (tag == mapTag || tag == setTag) {
              return !value.size;
            }
            if (isPrototype(value)) {
              return !baseKeys(value).length;
            }
            for (var key in value) {
              if (hasOwnProperty.call(value, key)) {
                return false;
              }
            }
            return true;
          }
          function isEqual(value, other) {
            return baseIsEqual(value, other);
          }
          function isEqualWith(value, other, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            var result2 = customizer ? customizer(value, other) : undefined$1;
            return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
          }
          function isError(value) {
            if (!isObjectLike(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
          }
          function isFinite(value) {
            return typeof value == "number" && nativeIsFinite(value);
          }
          function isFunction2(value) {
            if (!isObject(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
          }
          function isInteger(value) {
            return typeof value == "number" && value == toInteger(value);
          }
          function isLength(value) {
            return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
          }
          function isObject(value) {
            var type = typeof value;
            return value != null && (type == "object" || type == "function");
          }
          function isObjectLike(value) {
            return value != null && typeof value == "object";
          }
          var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
          function isMatch(object, source) {
            return object === source || baseIsMatch(object, source, getMatchData(source));
          }
          function isMatchWith(object, source, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            return baseIsMatch(object, source, getMatchData(source), customizer);
          }
          function isNaN2(value) {
            return isNumber(value) && value != +value;
          }
          function isNative(value) {
            if (isMaskable(value)) {
              throw new Error2(CORE_ERROR_TEXT);
            }
            return baseIsNative(value);
          }
          function isNull(value) {
            return value === null;
          }
          function isNil(value) {
            return value == null;
          }
          function isNumber(value) {
            return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
          }
          function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
              return false;
            }
            var proto = getPrototype(value);
            if (proto === null) {
              return true;
            }
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
          }
          var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
          function isSafeInteger(value) {
            return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
          }
          var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
          function isString(value) {
            return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
          }
          function isSymbol(value) {
            return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
          }
          var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
          function isUndefined(value) {
            return value === undefined$1;
          }
          function isWeakMap(value) {
            return isObjectLike(value) && getTag(value) == weakMapTag;
          }
          function isWeakSet(value) {
            return isObjectLike(value) && baseGetTag(value) == weakSetTag;
          }
          var lt = createRelationalOperation(baseLt);
          var lte = createRelationalOperation(function(value, other) {
            return value <= other;
          });
          function toArray(value) {
            if (!value) {
              return [];
            }
            if (isArrayLike(value)) {
              return isString(value) ? stringToArray(value) : copyArray(value);
            }
            if (symIterator && value[symIterator]) {
              return iteratorToArray(value[symIterator]());
            }
            var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
            return func(value);
          }
          function toFinite(value) {
            if (!value) {
              return value === 0 ? value : 0;
            }
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
              var sign = value < 0 ? -1 : 1;
              return sign * MAX_INTEGER;
            }
            return value === value ? value : 0;
          }
          function toInteger(value) {
            var result2 = toFinite(value), remainder = result2 % 1;
            return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
          }
          function toLength(value) {
            return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
          }
          function toNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            if (isObject(value)) {
              var other = typeof value.valueOf == "function" ? value.valueOf() : value;
              value = isObject(other) ? other + "" : other;
            }
            if (typeof value != "string") {
              return value === 0 ? value : +value;
            }
            value = baseTrim(value);
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
          }
          function toPlainObject(value) {
            return copyObject(value, keysIn(value));
          }
          function toSafeInteger(value) {
            return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
          }
          function toString(value) {
            return value == null ? "" : baseToString(value);
          }
          var assign = createAssigner(function(object, source) {
            if (isPrototype(source) || isArrayLike(source)) {
              copyObject(source, keys(source), object);
              return;
            }
            for (var key in source) {
              if (hasOwnProperty.call(source, key)) {
                assignValue(object, key, source[key]);
              }
            }
          });
          var assignIn = createAssigner(function(object, source) {
            copyObject(source, keysIn(source), object);
          });
          var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer);
          });
          var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keys(source), object, customizer);
          });
          var at = flatRest(baseAt);
          function create(prototype, properties) {
            var result2 = baseCreate(prototype);
            return properties == null ? result2 : baseAssign(result2, properties);
          }
          var defaults = baseRest(function(object, sources) {
            object = Object2(object);
            var index2 = -1;
            var length = sources.length;
            var guard = length > 2 ? sources[2] : undefined$1;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              length = 1;
            }
            while (++index2 < length) {
              var source = sources[index2];
              var props = keysIn(source);
              var propsIndex = -1;
              var propsLength = props.length;
              while (++propsIndex < propsLength) {
                var key = props[propsIndex];
                var value = object[key];
                if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                  object[key] = source[key];
                }
              }
            }
            return object;
          });
          var defaultsDeep = baseRest(function(args) {
            args.push(undefined$1, customDefaultsMerge);
            return apply(mergeWith, undefined$1, args);
          });
          function findKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
          }
          function findLastKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
          }
          function forIn(object, iteratee2) {
            return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forInRight(object, iteratee2) {
            return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forOwn(object, iteratee2) {
            return object && baseForOwn(object, getIteratee(iteratee2, 3));
          }
          function forOwnRight(object, iteratee2) {
            return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
          }
          function functions(object) {
            return object == null ? [] : baseFunctions(object, keys(object));
          }
          function functionsIn(object) {
            return object == null ? [] : baseFunctions(object, keysIn(object));
          }
          function get(object, path, defaultValue) {
            var result2 = object == null ? undefined$1 : baseGet(object, path);
            return result2 === undefined$1 ? defaultValue : result2;
          }
          function has(object, path) {
            return object != null && hasPath(object, path, baseHas);
          }
          function hasIn(object, path) {
            return object != null && hasPath(object, path, baseHasIn);
          }
          var invert = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            result2[value] = key;
          }, constant(identity));
          var invertBy = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            if (hasOwnProperty.call(result2, value)) {
              result2[value].push(key);
            } else {
              result2[value] = [key];
            }
          }, getIteratee);
          var invoke = baseRest(baseInvoke);
          function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
          }
          function keysIn(object) {
            return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
          }
          function mapKeys(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, iteratee2(value, key, object2), value);
            });
            return result2;
          }
          function mapValues(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, key, iteratee2(value, key, object2));
            });
            return result2;
          }
          var merge = createAssigner(function(object, source, srcIndex) {
            baseMerge(object, source, srcIndex);
          });
          var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
            baseMerge(object, source, srcIndex, customizer);
          });
          var omit = flatRest(function(object, paths) {
            var result2 = {};
            if (object == null) {
              return result2;
            }
            var isDeep = false;
            paths = arrayMap(paths, function(path) {
              path = castPath(path, object);
              isDeep || (isDeep = path.length > 1);
              return path;
            });
            copyObject(object, getAllKeysIn(object), result2);
            if (isDeep) {
              result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
            }
            var length = paths.length;
            while (length--) {
              baseUnset(result2, paths[length]);
            }
            return result2;
          });
          function omitBy(object, predicate) {
            return pickBy(object, negate(getIteratee(predicate)));
          }
          var pick = flatRest(function(object, paths) {
            return object == null ? {} : basePick(object, paths);
          });
          function pickBy(object, predicate) {
            if (object == null) {
              return {};
            }
            var props = arrayMap(getAllKeysIn(object), function(prop) {
              return [prop];
            });
            predicate = getIteratee(predicate);
            return basePickBy(object, props, function(value, path) {
              return predicate(value, path[0]);
            });
          }
          function result(object, path, defaultValue) {
            path = castPath(path, object);
            var index2 = -1, length = path.length;
            if (!length) {
              length = 1;
              object = undefined$1;
            }
            while (++index2 < length) {
              var value = object == null ? undefined$1 : object[toKey(path[index2])];
              if (value === undefined$1) {
                index2 = length;
                value = defaultValue;
              }
              object = isFunction2(value) ? value.call(object) : value;
            }
            return object;
          }
          function set(object, path, value) {
            return object == null ? object : baseSet(object, path, value);
          }
          function setWith(object, path, value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            return object == null ? object : baseSet(object, path, value, customizer);
          }
          var toPairs = createToPairs(keys);
          var toPairsIn = createToPairs(keysIn);
          function transform(object, iteratee2, accumulator) {
            var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
            iteratee2 = getIteratee(iteratee2, 4);
            if (accumulator == null) {
              var Ctor = object && object.constructor;
              if (isArrLike) {
                accumulator = isArr ? new Ctor() : [];
              } else if (isObject(object)) {
                accumulator = isFunction2(Ctor) ? baseCreate(getPrototype(object)) : {};
              } else {
                accumulator = {};
              }
            }
            (isArrLike ? arrayEach : baseForOwn)(object, function(value, index2, object2) {
              return iteratee2(accumulator, value, index2, object2);
            });
            return accumulator;
          }
          function unset(object, path) {
            return object == null ? true : baseUnset(object, path);
          }
          function update(object, path, updater) {
            return object == null ? object : baseUpdate(object, path, castFunction(updater));
          }
          function updateWith(object, path, updater, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
          }
          function values(object) {
            return object == null ? [] : baseValues(object, keys(object));
          }
          function valuesIn(object) {
            return object == null ? [] : baseValues(object, keysIn(object));
          }
          function clamp(number, lower, upper) {
            if (upper === undefined$1) {
              upper = lower;
              lower = undefined$1;
            }
            if (upper !== undefined$1) {
              upper = toNumber(upper);
              upper = upper === upper ? upper : 0;
            }
            if (lower !== undefined$1) {
              lower = toNumber(lower);
              lower = lower === lower ? lower : 0;
            }
            return baseClamp(toNumber(number), lower, upper);
          }
          function inRange(number, start, end) {
            start = toFinite(start);
            if (end === undefined$1) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            number = toNumber(number);
            return baseInRange(number, start, end);
          }
          function random(lower, upper, floating) {
            if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
              upper = floating = undefined$1;
            }
            if (floating === undefined$1) {
              if (typeof upper == "boolean") {
                floating = upper;
                upper = undefined$1;
              } else if (typeof lower == "boolean") {
                floating = lower;
                lower = undefined$1;
              }
            }
            if (lower === undefined$1 && upper === undefined$1) {
              lower = 0;
              upper = 1;
            } else {
              lower = toFinite(lower);
              if (upper === undefined$1) {
                upper = lower;
                lower = 0;
              } else {
                upper = toFinite(upper);
              }
            }
            if (lower > upper) {
              var temp = lower;
              lower = upper;
              upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
              var rand = nativeRandom();
              return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
            }
            return baseRandom(lower, upper);
          }
          var camelCase = createCompounder(function(result2, word, index2) {
            word = word.toLowerCase();
            return result2 + (index2 ? capitalize(word) : word);
          });
          function capitalize(string) {
            return upperFirst(toString(string).toLowerCase());
          }
          function deburr(string) {
            string = toString(string);
            return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
          }
          function endsWith(string, target, position) {
            string = toString(string);
            target = baseToString(target);
            var length = string.length;
            position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
            var end = position;
            position -= target.length;
            return position >= 0 && string.slice(position, end) == target;
          }
          function escape(string) {
            string = toString(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
          }
          function escapeRegExp(string) {
            string = toString(string);
            return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
          }
          var kebabCase = createCompounder(function(result2, word, index2) {
            return result2 + (index2 ? "-" : "") + word.toLowerCase();
          });
          var lowerCase = createCompounder(function(result2, word, index2) {
            return result2 + (index2 ? " " : "") + word.toLowerCase();
          });
          var lowerFirst = createCaseFirst("toLowerCase");
          function pad(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            if (!length || strLength >= length) {
              return string;
            }
            var mid = (length - strLength) / 2;
            return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
          }
          function padEnd(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
          }
          function padStart(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
          }
          function parseInt2(string, radix, guard) {
            if (guard || radix == null) {
              radix = 0;
            } else if (radix) {
              radix = +radix;
            }
            return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
          }
          function repeat(string, n, guard) {
            if (guard ? isIterateeCall(string, n, guard) : n === undefined$1) {
              n = 1;
            } else {
              n = toInteger(n);
            }
            return baseRepeat(toString(string), n);
          }
          function replace() {
            var args = arguments, string = toString(args[0]);
            return args.length < 3 ? string : string.replace(args[1], args[2]);
          }
          var snakeCase = createCompounder(function(result2, word, index2) {
            return result2 + (index2 ? "_" : "") + word.toLowerCase();
          });
          function split(string, separator, limit) {
            if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
              separator = limit = undefined$1;
            }
            limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
            if (!limit) {
              return [];
            }
            string = toString(string);
            if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
              separator = baseToString(separator);
              if (!separator && hasUnicode(string)) {
                return castSlice(stringToArray(string), 0, limit);
              }
            }
            return string.split(separator, limit);
          }
          var startCase = createCompounder(function(result2, word, index2) {
            return result2 + (index2 ? " " : "") + upperFirst(word);
          });
          function startsWith(string, target, position) {
            string = toString(string);
            position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
            target = baseToString(target);
            return string.slice(position, position + target.length) == target;
          }
          function template(string, options, guard) {
            var settings = lodash2.templateSettings;
            if (guard && isIterateeCall(string, options, guard)) {
              options = undefined$1;
            }
            string = toString(string);
            options = assignInWith({}, options, settings, customDefaultsAssignIn);
            var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index2 = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
            var reDelimiters = RegExp2(
              (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
              "g"
            );
            var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
            string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
              interpolateValue || (interpolateValue = esTemplateValue);
              source += string.slice(index2, offset).replace(reUnescapedString, escapeStringChar);
              if (escapeValue) {
                isEscaping = true;
                source += "' +\n__e(" + escapeValue + ") +\n'";
              }
              if (evaluateValue) {
                isEvaluating = true;
                source += "';\n" + evaluateValue + ";\n__p += '";
              }
              if (interpolateValue) {
                source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
              }
              index2 = offset + match.length;
              return match;
            });
            source += "';\n";
            var variable = hasOwnProperty.call(options, "variable") && options.variable;
            if (!variable) {
              source = "with (obj) {\n" + source + "\n}\n";
            } else if (reForbiddenIdentifierChars.test(variable)) {
              throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
            }
            source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
            source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
            var result2 = attempt(function() {
              return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
            });
            result2.source = source;
            if (isError(result2)) {
              throw result2;
            }
            return result2;
          }
          function toLower(value) {
            return toString(value).toLowerCase();
          }
          function toUpper(value) {
            return toString(value).toUpperCase();
          }
          function trim(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined$1)) {
              return baseTrim(string);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start, end).join("");
          }
          function trimEnd(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined$1)) {
              return string.slice(0, trimmedEndIndex(string) + 1);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
            return castSlice(strSymbols, 0, end).join("");
          }
          function trimStart(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined$1)) {
              return string.replace(reTrimStart, "");
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
            return castSlice(strSymbols, start).join("");
          }
          function truncate(string, options) {
            var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
            if (isObject(options)) {
              var separator = "separator" in options ? options.separator : separator;
              length = "length" in options ? toInteger(options.length) : length;
              omission = "omission" in options ? baseToString(options.omission) : omission;
            }
            string = toString(string);
            var strLength = string.length;
            if (hasUnicode(string)) {
              var strSymbols = stringToArray(string);
              strLength = strSymbols.length;
            }
            if (length >= strLength) {
              return string;
            }
            var end = length - stringSize(omission);
            if (end < 1) {
              return omission;
            }
            var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
            if (separator === undefined$1) {
              return result2 + omission;
            }
            if (strSymbols) {
              end += result2.length - end;
            }
            if (isRegExp(separator)) {
              if (string.slice(end).search(separator)) {
                var match, substring = result2;
                if (!separator.global) {
                  separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
                }
                separator.lastIndex = 0;
                while (match = separator.exec(substring)) {
                  var newEnd = match.index;
                }
                result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
              }
            } else if (string.indexOf(baseToString(separator), end) != end) {
              var index2 = result2.lastIndexOf(separator);
              if (index2 > -1) {
                result2 = result2.slice(0, index2);
              }
            }
            return result2 + omission;
          }
          function unescape(string) {
            string = toString(string);
            return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
          }
          var upperCase = createCompounder(function(result2, word, index2) {
            return result2 + (index2 ? " " : "") + word.toUpperCase();
          });
          var upperFirst = createCaseFirst("toUpperCase");
          function words(string, pattern, guard) {
            string = toString(string);
            pattern = guard ? undefined$1 : pattern;
            if (pattern === undefined$1) {
              return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
            }
            return string.match(pattern) || [];
          }
          var attempt = baseRest(function(func, args) {
            try {
              return apply(func, undefined$1, args);
            } catch (e) {
              return isError(e) ? e : new Error2(e);
            }
          });
          var bindAll = flatRest(function(object, methodNames) {
            arrayEach(methodNames, function(key) {
              key = toKey(key);
              baseAssignValue(object, key, bind(object[key], object));
            });
            return object;
          });
          function cond(pairs) {
            var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
            pairs = !length ? [] : arrayMap(pairs, function(pair) {
              if (typeof pair[1] != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              return [toIteratee(pair[0]), pair[1]];
            });
            return baseRest(function(args) {
              var index2 = -1;
              while (++index2 < length) {
                var pair = pairs[index2];
                if (apply(pair[0], this, args)) {
                  return apply(pair[1], this, args);
                }
              }
            });
          }
          function conforms(source) {
            return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
          }
          function constant(value) {
            return function() {
              return value;
            };
          }
          function defaultTo(value, defaultValue) {
            return value == null || value !== value ? defaultValue : value;
          }
          var flow = createFlow();
          var flowRight = createFlow(true);
          function identity(value) {
            return value;
          }
          function iteratee(func) {
            return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
          }
          function matches(source) {
            return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
          }
          function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
          }
          var method = baseRest(function(path, args) {
            return function(object) {
              return baseInvoke(object, path, args);
            };
          });
          var methodOf = baseRest(function(object, args) {
            return function(path) {
              return baseInvoke(object, path, args);
            };
          });
          function mixin(object, source, options) {
            var props = keys(source), methodNames = baseFunctions(source, props);
            if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
              options = source;
              source = object;
              object = this;
              methodNames = baseFunctions(source, keys(source));
            }
            var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction2(object);
            arrayEach(methodNames, function(methodName) {
              var func = source[methodName];
              object[methodName] = func;
              if (isFunc) {
                object.prototype[methodName] = function() {
                  var chainAll = this.__chain__;
                  if (chain2 || chainAll) {
                    var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                    actions.push({ "func": func, "args": arguments, "thisArg": object });
                    result2.__chain__ = chainAll;
                    return result2;
                  }
                  return func.apply(object, arrayPush([this.value()], arguments));
                };
              }
            });
            return object;
          }
          function noConflict() {
            if (root._ === this) {
              root._ = oldDash;
            }
            return this;
          }
          function noop() {
          }
          function nthArg(n) {
            n = toInteger(n);
            return baseRest(function(args) {
              return baseNth(args, n);
            });
          }
          var over = createOver(arrayMap);
          var overEvery = createOver(arrayEvery);
          var overSome = createOver(arraySome);
          function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
          }
          function propertyOf(object) {
            return function(path) {
              return object == null ? undefined$1 : baseGet(object, path);
            };
          }
          var range = createRange();
          var rangeRight = createRange(true);
          function stubArray() {
            return [];
          }
          function stubFalse() {
            return false;
          }
          function stubObject() {
            return {};
          }
          function stubString() {
            return "";
          }
          function stubTrue() {
            return true;
          }
          function times(n, iteratee2) {
            n = toInteger(n);
            if (n < 1 || n > MAX_SAFE_INTEGER) {
              return [];
            }
            var index2 = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
            iteratee2 = getIteratee(iteratee2);
            n -= MAX_ARRAY_LENGTH;
            var result2 = baseTimes(length, iteratee2);
            while (++index2 < n) {
              iteratee2(index2);
            }
            return result2;
          }
          function toPath(value) {
            if (isArray(value)) {
              return arrayMap(value, toKey);
            }
            return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
          }
          function uniqueId(prefix) {
            var id = ++idCounter;
            return toString(prefix) + id;
          }
          var add = createMathOperation(function(augend, addend) {
            return augend + addend;
          }, 0);
          var ceil = createRound("ceil");
          var divide = createMathOperation(function(dividend, divisor) {
            return dividend / divisor;
          }, 1);
          var floor = createRound("floor");
          function max(array) {
            return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
          }
          function maxBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
          }
          function mean(array) {
            return baseMean(array, identity);
          }
          function meanBy(array, iteratee2) {
            return baseMean(array, getIteratee(iteratee2, 2));
          }
          function min(array) {
            return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
          }
          function minBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
          }
          var multiply = createMathOperation(function(multiplier, multiplicand) {
            return multiplier * multiplicand;
          }, 1);
          var round = createRound("round");
          var subtract = createMathOperation(function(minuend, subtrahend) {
            return minuend - subtrahend;
          }, 0);
          function sum(array) {
            return array && array.length ? baseSum(array, identity) : 0;
          }
          function sumBy(array, iteratee2) {
            return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
          }
          lodash2.after = after;
          lodash2.ary = ary;
          lodash2.assign = assign;
          lodash2.assignIn = assignIn;
          lodash2.assignInWith = assignInWith;
          lodash2.assignWith = assignWith;
          lodash2.at = at;
          lodash2.before = before;
          lodash2.bind = bind;
          lodash2.bindAll = bindAll;
          lodash2.bindKey = bindKey;
          lodash2.castArray = castArray;
          lodash2.chain = chain;
          lodash2.chunk = chunk;
          lodash2.compact = compact;
          lodash2.concat = concat;
          lodash2.cond = cond;
          lodash2.conforms = conforms;
          lodash2.constant = constant;
          lodash2.countBy = countBy;
          lodash2.create = create;
          lodash2.curry = curry;
          lodash2.curryRight = curryRight;
          lodash2.debounce = debounce;
          lodash2.defaults = defaults;
          lodash2.defaultsDeep = defaultsDeep;
          lodash2.defer = defer;
          lodash2.delay = delay;
          lodash2.difference = difference;
          lodash2.differenceBy = differenceBy;
          lodash2.differenceWith = differenceWith;
          lodash2.drop = drop;
          lodash2.dropRight = dropRight;
          lodash2.dropRightWhile = dropRightWhile;
          lodash2.dropWhile = dropWhile;
          lodash2.fill = fill;
          lodash2.filter = filter;
          lodash2.flatMap = flatMap;
          lodash2.flatMapDeep = flatMapDeep;
          lodash2.flatMapDepth = flatMapDepth;
          lodash2.flatten = flatten;
          lodash2.flattenDeep = flattenDeep;
          lodash2.flattenDepth = flattenDepth;
          lodash2.flip = flip;
          lodash2.flow = flow;
          lodash2.flowRight = flowRight;
          lodash2.fromPairs = fromPairs;
          lodash2.functions = functions;
          lodash2.functionsIn = functionsIn;
          lodash2.groupBy = groupBy;
          lodash2.initial = initial;
          lodash2.intersection = intersection;
          lodash2.intersectionBy = intersectionBy;
          lodash2.intersectionWith = intersectionWith;
          lodash2.invert = invert;
          lodash2.invertBy = invertBy;
          lodash2.invokeMap = invokeMap;
          lodash2.iteratee = iteratee;
          lodash2.keyBy = keyBy;
          lodash2.keys = keys;
          lodash2.keysIn = keysIn;
          lodash2.map = map;
          lodash2.mapKeys = mapKeys;
          lodash2.mapValues = mapValues;
          lodash2.matches = matches;
          lodash2.matchesProperty = matchesProperty;
          lodash2.memoize = memoize;
          lodash2.merge = merge;
          lodash2.mergeWith = mergeWith;
          lodash2.method = method;
          lodash2.methodOf = methodOf;
          lodash2.mixin = mixin;
          lodash2.negate = negate;
          lodash2.nthArg = nthArg;
          lodash2.omit = omit;
          lodash2.omitBy = omitBy;
          lodash2.once = once;
          lodash2.orderBy = orderBy;
          lodash2.over = over;
          lodash2.overArgs = overArgs;
          lodash2.overEvery = overEvery;
          lodash2.overSome = overSome;
          lodash2.partial = partial;
          lodash2.partialRight = partialRight;
          lodash2.partition = partition;
          lodash2.pick = pick;
          lodash2.pickBy = pickBy;
          lodash2.property = property;
          lodash2.propertyOf = propertyOf;
          lodash2.pull = pull;
          lodash2.pullAll = pullAll;
          lodash2.pullAllBy = pullAllBy;
          lodash2.pullAllWith = pullAllWith;
          lodash2.pullAt = pullAt;
          lodash2.range = range;
          lodash2.rangeRight = rangeRight;
          lodash2.rearg = rearg;
          lodash2.reject = reject;
          lodash2.remove = remove;
          lodash2.rest = rest;
          lodash2.reverse = reverse;
          lodash2.sampleSize = sampleSize;
          lodash2.set = set;
          lodash2.setWith = setWith;
          lodash2.shuffle = shuffle;
          lodash2.slice = slice;
          lodash2.sortBy = sortBy;
          lodash2.sortedUniq = sortedUniq;
          lodash2.sortedUniqBy = sortedUniqBy;
          lodash2.split = split;
          lodash2.spread = spread;
          lodash2.tail = tail;
          lodash2.take = take;
          lodash2.takeRight = takeRight;
          lodash2.takeRightWhile = takeRightWhile;
          lodash2.takeWhile = takeWhile;
          lodash2.tap = tap;
          lodash2.throttle = throttle2;
          lodash2.thru = thru;
          lodash2.toArray = toArray;
          lodash2.toPairs = toPairs;
          lodash2.toPairsIn = toPairsIn;
          lodash2.toPath = toPath;
          lodash2.toPlainObject = toPlainObject;
          lodash2.transform = transform;
          lodash2.unary = unary;
          lodash2.union = union;
          lodash2.unionBy = unionBy;
          lodash2.unionWith = unionWith;
          lodash2.uniq = uniq;
          lodash2.uniqBy = uniqBy;
          lodash2.uniqWith = uniqWith;
          lodash2.unset = unset;
          lodash2.unzip = unzip;
          lodash2.unzipWith = unzipWith;
          lodash2.update = update;
          lodash2.updateWith = updateWith;
          lodash2.values = values;
          lodash2.valuesIn = valuesIn;
          lodash2.without = without;
          lodash2.words = words;
          lodash2.wrap = wrap;
          lodash2.xor = xor;
          lodash2.xorBy = xorBy;
          lodash2.xorWith = xorWith;
          lodash2.zip = zip;
          lodash2.zipObject = zipObject;
          lodash2.zipObjectDeep = zipObjectDeep;
          lodash2.zipWith = zipWith;
          lodash2.entries = toPairs;
          lodash2.entriesIn = toPairsIn;
          lodash2.extend = assignIn;
          lodash2.extendWith = assignInWith;
          mixin(lodash2, lodash2);
          lodash2.add = add;
          lodash2.attempt = attempt;
          lodash2.camelCase = camelCase;
          lodash2.capitalize = capitalize;
          lodash2.ceil = ceil;
          lodash2.clamp = clamp;
          lodash2.clone = clone;
          lodash2.cloneDeep = cloneDeep;
          lodash2.cloneDeepWith = cloneDeepWith;
          lodash2.cloneWith = cloneWith;
          lodash2.conformsTo = conformsTo;
          lodash2.deburr = deburr;
          lodash2.defaultTo = defaultTo;
          lodash2.divide = divide;
          lodash2.endsWith = endsWith;
          lodash2.eq = eq;
          lodash2.escape = escape;
          lodash2.escapeRegExp = escapeRegExp;
          lodash2.every = every;
          lodash2.find = find;
          lodash2.findIndex = findIndex;
          lodash2.findKey = findKey;
          lodash2.findLast = findLast;
          lodash2.findLastIndex = findLastIndex;
          lodash2.findLastKey = findLastKey;
          lodash2.floor = floor;
          lodash2.forEach = forEach;
          lodash2.forEachRight = forEachRight;
          lodash2.forIn = forIn;
          lodash2.forInRight = forInRight;
          lodash2.forOwn = forOwn;
          lodash2.forOwnRight = forOwnRight;
          lodash2.get = get;
          lodash2.gt = gt;
          lodash2.gte = gte;
          lodash2.has = has;
          lodash2.hasIn = hasIn;
          lodash2.head = head;
          lodash2.identity = identity;
          lodash2.includes = includes;
          lodash2.indexOf = indexOf;
          lodash2.inRange = inRange;
          lodash2.invoke = invoke;
          lodash2.isArguments = isArguments;
          lodash2.isArray = isArray;
          lodash2.isArrayBuffer = isArrayBuffer;
          lodash2.isArrayLike = isArrayLike;
          lodash2.isArrayLikeObject = isArrayLikeObject;
          lodash2.isBoolean = isBoolean;
          lodash2.isBuffer = isBuffer;
          lodash2.isDate = isDate;
          lodash2.isElement = isElement;
          lodash2.isEmpty = isEmpty;
          lodash2.isEqual = isEqual;
          lodash2.isEqualWith = isEqualWith;
          lodash2.isError = isError;
          lodash2.isFinite = isFinite;
          lodash2.isFunction = isFunction2;
          lodash2.isInteger = isInteger;
          lodash2.isLength = isLength;
          lodash2.isMap = isMap;
          lodash2.isMatch = isMatch;
          lodash2.isMatchWith = isMatchWith;
          lodash2.isNaN = isNaN2;
          lodash2.isNative = isNative;
          lodash2.isNil = isNil;
          lodash2.isNull = isNull;
          lodash2.isNumber = isNumber;
          lodash2.isObject = isObject;
          lodash2.isObjectLike = isObjectLike;
          lodash2.isPlainObject = isPlainObject;
          lodash2.isRegExp = isRegExp;
          lodash2.isSafeInteger = isSafeInteger;
          lodash2.isSet = isSet;
          lodash2.isString = isString;
          lodash2.isSymbol = isSymbol;
          lodash2.isTypedArray = isTypedArray;
          lodash2.isUndefined = isUndefined;
          lodash2.isWeakMap = isWeakMap;
          lodash2.isWeakSet = isWeakSet;
          lodash2.join = join;
          lodash2.kebabCase = kebabCase;
          lodash2.last = last;
          lodash2.lastIndexOf = lastIndexOf;
          lodash2.lowerCase = lowerCase;
          lodash2.lowerFirst = lowerFirst;
          lodash2.lt = lt;
          lodash2.lte = lte;
          lodash2.max = max;
          lodash2.maxBy = maxBy;
          lodash2.mean = mean;
          lodash2.meanBy = meanBy;
          lodash2.min = min;
          lodash2.minBy = minBy;
          lodash2.stubArray = stubArray;
          lodash2.stubFalse = stubFalse;
          lodash2.stubObject = stubObject;
          lodash2.stubString = stubString;
          lodash2.stubTrue = stubTrue;
          lodash2.multiply = multiply;
          lodash2.nth = nth;
          lodash2.noConflict = noConflict;
          lodash2.noop = noop;
          lodash2.now = now;
          lodash2.pad = pad;
          lodash2.padEnd = padEnd;
          lodash2.padStart = padStart;
          lodash2.parseInt = parseInt2;
          lodash2.random = random;
          lodash2.reduce = reduce;
          lodash2.reduceRight = reduceRight;
          lodash2.repeat = repeat;
          lodash2.replace = replace;
          lodash2.result = result;
          lodash2.round = round;
          lodash2.runInContext = runInContext2;
          lodash2.sample = sample;
          lodash2.size = size;
          lodash2.snakeCase = snakeCase;
          lodash2.some = some;
          lodash2.sortedIndex = sortedIndex;
          lodash2.sortedIndexBy = sortedIndexBy;
          lodash2.sortedIndexOf = sortedIndexOf;
          lodash2.sortedLastIndex = sortedLastIndex;
          lodash2.sortedLastIndexBy = sortedLastIndexBy;
          lodash2.sortedLastIndexOf = sortedLastIndexOf;
          lodash2.startCase = startCase;
          lodash2.startsWith = startsWith;
          lodash2.subtract = subtract;
          lodash2.sum = sum;
          lodash2.sumBy = sumBy;
          lodash2.template = template;
          lodash2.times = times;
          lodash2.toFinite = toFinite;
          lodash2.toInteger = toInteger;
          lodash2.toLength = toLength;
          lodash2.toLower = toLower;
          lodash2.toNumber = toNumber;
          lodash2.toSafeInteger = toSafeInteger;
          lodash2.toString = toString;
          lodash2.toUpper = toUpper;
          lodash2.trim = trim;
          lodash2.trimEnd = trimEnd;
          lodash2.trimStart = trimStart;
          lodash2.truncate = truncate;
          lodash2.unescape = unescape;
          lodash2.uniqueId = uniqueId;
          lodash2.upperCase = upperCase;
          lodash2.upperFirst = upperFirst;
          lodash2.each = forEach;
          lodash2.eachRight = forEachRight;
          lodash2.first = head;
          mixin(lodash2, (function() {
            var source = {};
            baseForOwn(lodash2, function(func, methodName) {
              if (!hasOwnProperty.call(lodash2.prototype, methodName)) {
                source[methodName] = func;
              }
            });
            return source;
          })(), { "chain": false });
          lodash2.VERSION = VERSION;
          arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
            lodash2[methodName].placeholder = lodash2;
          });
          arrayEach(["drop", "take"], function(methodName, index2) {
            LazyWrapper.prototype[methodName] = function(n) {
              n = n === undefined$1 ? 1 : nativeMax(toInteger(n), 0);
              var result2 = this.__filtered__ && !index2 ? new LazyWrapper(this) : this.clone();
              if (result2.__filtered__) {
                result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
              } else {
                result2.__views__.push({
                  "size": nativeMin(n, MAX_ARRAY_LENGTH),
                  "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
                });
              }
              return result2;
            };
            LazyWrapper.prototype[methodName + "Right"] = function(n) {
              return this.reverse()[methodName](n).reverse();
            };
          });
          arrayEach(["filter", "map", "takeWhile"], function(methodName, index2) {
            var type = index2 + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function(iteratee2) {
              var result2 = this.clone();
              result2.__iteratees__.push({
                "iteratee": getIteratee(iteratee2, 3),
                "type": type
              });
              result2.__filtered__ = result2.__filtered__ || isFilter;
              return result2;
            };
          });
          arrayEach(["head", "last"], function(methodName, index2) {
            var takeName = "take" + (index2 ? "Right" : "");
            LazyWrapper.prototype[methodName] = function() {
              return this[takeName](1).value()[0];
            };
          });
          arrayEach(["initial", "tail"], function(methodName, index2) {
            var dropName = "drop" + (index2 ? "" : "Right");
            LazyWrapper.prototype[methodName] = function() {
              return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
            };
          });
          LazyWrapper.prototype.compact = function() {
            return this.filter(identity);
          };
          LazyWrapper.prototype.find = function(predicate) {
            return this.filter(predicate).head();
          };
          LazyWrapper.prototype.findLast = function(predicate) {
            return this.reverse().find(predicate);
          };
          LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
            if (typeof path == "function") {
              return new LazyWrapper(this);
            }
            return this.map(function(value) {
              return baseInvoke(value, path, args);
            });
          });
          LazyWrapper.prototype.reject = function(predicate) {
            return this.filter(negate(getIteratee(predicate)));
          };
          LazyWrapper.prototype.slice = function(start, end) {
            start = toInteger(start);
            var result2 = this;
            if (result2.__filtered__ && (start > 0 || end < 0)) {
              return new LazyWrapper(result2);
            }
            if (start < 0) {
              result2 = result2.takeRight(-start);
            } else if (start) {
              result2 = result2.drop(start);
            }
            if (end !== undefined$1) {
              end = toInteger(end);
              result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
            }
            return result2;
          };
          LazyWrapper.prototype.takeRightWhile = function(predicate) {
            return this.reverse().takeWhile(predicate).reverse();
          };
          LazyWrapper.prototype.toArray = function() {
            return this.take(MAX_ARRAY_LENGTH);
          };
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
            if (!lodashFunc) {
              return;
            }
            lodash2.prototype[methodName] = function() {
              var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
              var interceptor = function(value2) {
                var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
                return isTaker && chainAll ? result3[0] : result3;
              };
              if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
                isLazy = useLazy = false;
              }
              var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
              if (!retUnwrapped && useLazy) {
                value = onlyLazy ? value : new LazyWrapper(this);
                var result2 = func.apply(value, args);
                result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
                return new LodashWrapper(result2, chainAll);
              }
              if (isUnwrapped && onlyLazy) {
                return func.apply(this, args);
              }
              result2 = this.thru(interceptor);
              return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
            };
          });
          arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
            var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
            lodash2.prototype[methodName] = function() {
              var args = arguments;
              if (retUnwrapped && !this.__chain__) {
                var value = this.value();
                return func.apply(isArray(value) ? value : [], args);
              }
              return this[chainName](function(value2) {
                return func.apply(isArray(value2) ? value2 : [], args);
              });
            };
          });
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var lodashFunc = lodash2[methodName];
            if (lodashFunc) {
              var key = lodashFunc.name + "";
              if (!hasOwnProperty.call(realNames, key)) {
                realNames[key] = [];
              }
              realNames[key].push({ "name": methodName, "func": lodashFunc });
            }
          });
          realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
            "name": "wrapper",
            "func": undefined$1
          }];
          LazyWrapper.prototype.clone = lazyClone;
          LazyWrapper.prototype.reverse = lazyReverse;
          LazyWrapper.prototype.value = lazyValue;
          lodash2.prototype.at = wrapperAt;
          lodash2.prototype.chain = wrapperChain;
          lodash2.prototype.commit = wrapperCommit;
          lodash2.prototype.next = wrapperNext;
          lodash2.prototype.plant = wrapperPlant;
          lodash2.prototype.reverse = wrapperReverse;
          lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
          lodash2.prototype.first = lodash2.prototype.head;
          if (symIterator) {
            lodash2.prototype[symIterator] = wrapperToIterator;
          }
          return lodash2;
        });
        var _ = runInContext();
        if (freeModule) {
          (freeModule.exports = _)._ = _;
          freeExports._ = _;
        } else {
          root._ = _;
        }
      }).call(lodash);
    })(lodash$1, lodash$1.exports);
    return lodash$1.exports;
  }
  var lodashExports = requireLodash();
  const loading$1 = "_loading_jnpqx_59";
  const footer$1 = "_footer_jnpqx_161";
  const styles$3 = {
    "hot-song-modal": "_hot-song-modal_jnpqx_1",
    "modal-title": "_modal-title_jnpqx_1",
    "title-content": "_title-content_jnpqx_4",
    "title-stats": "_title-stats_jnpqx_10",
    "stat-item": "_stat-item_jnpqx_14",
    loading: loading$1,
    "stat-value": "_stat-value_jnpqx_62",
    "stat-label": "_stat-label_jnpqx_74",
    "song-table": "_song-table_jnpqx_97",
    "song-info": "_song-info_jnpqx_100",
    "album-cover": "_album-cover_jnpqx_100",
    "song-details": "_song-details_jnpqx_113",
    "song-name": "_song-name_jnpqx_117",
    "song-album": "_song-album_jnpqx_126",
    "singer-info": "_singer-info_jnpqx_90",
    "singer-name": "_singer-name_jnpqx_134",
    "singer-id": "_singer-id_jnpqx_142",
    "song-id-text": "_song-id-text_jnpqx_150",
    "song-mid-text": "_song-mid-text_jnpqx_151",
    footer: footer$1,
    "selected-count": "_selected-count_jnpqx_167"
  };
  const { Text: Text$1, Title: Title$1 } = antd.Typography;
  const HotSongModal = require$$1.forwardRef((props, ref) => {
    const { visible, close } = useVisible(
      {
        onOpen: (params) => {
          console.log("params", params);
          setSingerInfo(params);
        },
        onReset: () => {
          setSingerInfo({});
        }
      },
      ref
    );
    const [searchParams, setSearchParams] = require$$1.useState({
      pageNum: 1,
      pageSize: 10
    });
    const [singerInfo, setSingerInfo] = require$$1.useState({});
    const { data, loading: loading2 } = useGetData(
      (p) => getSingerHotSong(singerInfo.singerMid, p),
      {
        sin: (searchParams.pageNum - 1) * searchParams.pageSize,
        num: searchParams.pageSize
      },
      {
        monitors: [singerInfo.singerMid, searchParams],
        returnFunction: () => !visible || !singerInfo.singerMid
      }
    );
    const { play, pause, isPlaying, download, getUrl, getLyric } = usePlayMusic();
    const getHighestQuality2 = (file) => {
      if (file.size_flac > 0) return "flac";
      if (file.size_ape > 0) return "ape";
      if (file.size_320mp3 > 0) return 320;
      if (file.size_192aac > 0) return "m4a";
      if (file.size_128mp3 > 0) return 128;
      return 128;
    };
    const handlePlay = (record) => {
      console.log("record", record);
      const { mid, file } = record;
      const quality = getHighestQuality2(file);
      console.log("选择音质:", quality);
      play(mid, quality);
    };
    const [downloading, setDownloading] = require$$1.useState();
    const handleDownload = async (record) => {
      try {
        setDownloading(record.mid);
        const { mid, name, file } = record;
        const quality = getHighestQuality2(file);
        await download(mid, name, quality);
      } catch (error) {
        console.log("error", error);
      } finally {
        setDownloading(void 0);
      }
    };
    const columns = [
      {
        title: "歌曲信息",
        dataIndex: "name",
        key: "name",
        width: 250,
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", className: styles$3["song-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3["album-cover"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Image,
            {
              width: 40,
              height: 40,
              src: record.album?.mid ? getAlbumPicUrl(record.album.mid) : "",
              alt: record.album?.name || "专辑封面"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3["song-details"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3["song-name"], title: text, children: text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3["song-album"], title: record.album?.name || "未知专辑", children: record.album?.name || "未知专辑" })
          ] })
        ] })
      },
      {
        title: "歌手",
        dataIndex: "singer",
        key: "singer",
        width: 200,
        render: (singer) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "small", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Avatar, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.UserOutlined, {}), src: singerInfo?.singerPic, size: 40 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3["singer-info"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3["singer-name"], title: singer?.[0]?.name || "未知歌手", children: singer?.[0]?.name || "未知歌手" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3["singer-id"], title: singer?.[0]?.id?.toString() || "", children: singer?.[0]?.id || "" })
          ] })
        ] })
      },
      {
        title: "时长",
        dataIndex: "interval",
        key: "interval",
        width: 100,
        align: "center",
        render: (interval) => {
          const minutes = Math.floor(interval / 60);
          const seconds = interval % 60;
          return `${minutes}:${seconds.toString().padStart(2, "0")}`;
        }
      },
      {
        title: "发布时间",
        dataIndex: "time_public",
        key: "time_public",
        width: 150,
        align: "center",
        render: (_, __, index2) => {
          const extra = data?.extras?.[index2];
          const uploadTime = extra?.upload_time || "";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Text$1, { className: styles$3["upload-time"], title: uploadTime, children: uploadTime });
        }
      },
      {
        title: "歌曲ID",
        dataIndex: "id",
        key: "id",
        width: 120,
        align: "center",
        render: (id) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$3["song-id-text"], text: id + "" })
      },
      {
        title: "歌曲MID",
        dataIndex: "mid",
        key: "mid",
        width: 200,
        align: "center",
        render: (mid) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$3["song-mid-text"], text: mid })
      },
      {
        title: "操作",
        key: "action",
        width: 250,
        align: "center",
        fixed: "right",
        render: (_, record) => {
          const quality = getHighestQuality2(record.file);
          const qualityText = quality === "ape" ? "APE" : quality === "flac" ? "FLAC" : quality === 320 ? "320k" : quality === "m4a" ? "AAC" : "128k";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              antd.Button,
              {
                type: "link",
                size: "small",
                icon: isPlaying === record.mid ? /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PauseCircleOutlined, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PlayCircleOutlined, {}),
                onClick: () => {
                  if (isPlaying === record.mid) {
                    pause();
                  } else {
                    handlePlay(record);
                  }
                },
                title: `播放 (${qualityText})`,
                children: "播放"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              antd.Button,
              {
                type: "link",
                size: "small",
                loading: downloading === record.mid,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.DownloadOutlined, {}),
                onClick: () => {
                  handleDownload(record);
                },
                children: "下载"
              }
            )
          ] });
        }
      }
    ];
    const [selectedRowKeys, setSelectedRowKeys] = require$$1.useState([]);
    const [selectedRows, setSelectedRows] = require$$1.useState([]);
    const rowSelection = {
      preserveSelectedRowKeys: true,
      selectedRowKeys,
      onChange: (selectedRowKeys2, selectedRows2) => {
        setSelectedRowKeys(selectedRowKeys2);
        setSelectedRows(selectedRows2);
        console.log("selectedRowKeys", selectedRowKeys2);
        console.log("selectedRows", selectedRows2);
      }
    };
    const renderTitle = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3["modal-title"], children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3["title-content"], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Title$1, { level: 4, style: { margin: 0 }, children: [
          singerInfo.singerName,
          " - 热门歌曲"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3["title-stats"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${styles$3["stat-item"]} ${loading2 ? styles$3["loading"] : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3["stat-label"], children: "歌曲" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3["stat-value"], children: loading2 ? "..." : data?.total_song || 0 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${styles$3["stat-item"]} ${loading2 ? styles$3["loading"] : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3["stat-label"], children: "专辑" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3["stat-value"], children: loading2 ? "..." : data?.total_album || 0 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${styles$3["stat-item"]} ${loading2 ? styles$3["loading"] : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3["stat-label"], children: "MV" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3["stat-value"], children: loading2 ? "..." : data?.total_mv || 0 })
          ] })
        ] })
      ] }) });
    };
    const [downloadingBatchJson, setDownloadingBatchJson] = require$$1.useState(false);
    const handleBatchDownloadJson = async () => {
      try {
        if (selectedRows.length === 0) {
          msgWarning("请先选择要下载的歌曲");
          return;
        }
        console.log("selectedRows", selectedRows);
        setDownloadingBatchJson(true);
        const groupData = lodashExports.groupBy(selectedRows, "album.mid");
        console.log("groupData", groupData);
        const result = [];
        const hide = msgLoading(`正在准备下载 ${selectedRows.length} 首歌曲...`);
        for (const albumMid in groupData) {
          const album = groupData[albumMid];
          const albumName = album[0].album.name;
          const albumCover = getAlbumPicUrl(albumMid);
          const promiseArr = album.map((song) => async () => {
            const lrcContent = await getLyric(song.mid);
            const url = await getUrl(song.mid, getHighestQuality2(song.file));
            return {
              songName: song.name,
              url,
              lrcContent
            };
          });
          const albumSongs = await promiseLimit(promiseArr, 6);
          result.push({
            albumName,
            albumCover,
            songList: albumSongs
          });
        }
        downloadAsJson(result, `${singerInfo.singerName}-专辑`);
        hide();
      } catch (error) {
        console.error("批量下载JSON失败:", error);
      } finally {
        setDownloadingBatchJson(false);
      }
    };
    const [downloadingBatch, setDownloadingBatch] = require$$1.useState(false);
    const handleBatchDownload = async () => {
      try {
        if (selectedRows.length === 0) {
          msgWarning("请先选择要下载的歌曲");
          return;
        }
        console.log("selectedRows", selectedRows);
        setDownloadingBatch(true);
        for (const song of selectedRows) {
          await download(song.mid, song.name, getHighestQuality2(song.file));
        }
      } catch (error) {
        console.error("批量下载失败:", error);
      } finally {
        setDownloadingBatch(false);
      }
    };
    const renderFooter = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3["footer"], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3["selected-count"], children: [
          "已选择 ",
          selectedRows.length,
          " 首歌曲"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              onClick: () => {
                setSelectedRowKeys([]);
                setSelectedRows([]);
              },
              disabled: selectedRows.length === 0,
              children: "清空选择"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            antd.Button,
            {
              type: "primary",
              onClick: handleBatchDownloadJson,
              loading: downloadingBatchJson,
              disabled: !selectedRows?.length,
              children: [
                "下载JSON",
                selectedRows?.length ? `(${selectedRows?.length})` : ""
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            antd.Button,
            {
              type: "primary",
              onClick: handleBatchDownload,
              loading: downloadingBatch,
              disabled: !selectedRows?.length,
              children: [
                "下载选中歌曲",
                selectedRows?.length ? `(${selectedRows?.length})` : ""
              ]
            }
          )
        ] })
      ] });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      antd.Modal,
      {
        title: renderTitle(),
        open: visible,
        onCancel: close,
        footer: renderFooter(),
        width: 1200,
        centered: true,
        className: styles$3["hot-song-modal"],
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Table,
            {
              rowSelection,
              columns,
              dataSource: data?.songlist || [],
              rowKey: "mid",
              loading: loading2,
              pagination: false,
              scroll: { y: 500, x: 1100 },
              className: styles$3["song-table"]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Pagination,
            {
              current: searchParams.pageNum,
              total: data?.total_song || 0,
              showSizeChanger: true,
              showQuickJumper: true,
              align: "end",
              showTotal: (total) => `共 ${total} 首歌曲`,
              onChange: (page, pageSize) => {
                setSearchParams({ ...searchParams, pageNum: page, pageSize });
              }
            }
          )
        ]
      }
    );
  });
  const loading = "_loading_13s8d_49";
  const footer = "_footer_13s8d_151";
  const styles$2 = {
    "album-list-modal": "_album-list-modal_13s8d_1",
    "modal-title": "_modal-title_13s8d_1",
    "title-content": "_title-content_13s8d_4",
    "title-stats": "_title-stats_13s8d_10",
    "stat-item": "_stat-item_13s8d_14",
    loading,
    "stat-value": "_stat-value_13s8d_52",
    "stat-label": "_stat-label_13s8d_60",
    "album-table": "_album-table_13s8d_76",
    "album-info": "_album-info_13s8d_79",
    "album-cover": "_album-cover_13s8d_79",
    "album-details": "_album-details_13s8d_92",
    "album-name": "_album-name_13s8d_96",
    "album-trans-name": "_album-trans-name_13s8d_105",
    "album-type": "_album-type_13s8d_114",
    "singer-info": "_singer-info_13s8d_117",
    "singer-name": "_singer-name_13s8d_117",
    "singer-id": "_singer-id_13s8d_125",
    "album-id-text": "_album-id-text_13s8d_133",
    "album-mid-text": "_album-mid-text_13s8d_134",
    "publish-date": "_publish-date_13s8d_144",
    footer,
    "selected-count": "_selected-count_13s8d_158",
    "selected-info": "_selected-info_13s8d_162"
  };
  const { Text, Title } = antd.Typography;
  const AlbumListModal = require$$1.forwardRef((props, ref) => {
    const { visible, close } = useVisible(
      {
        onOpen: (params) => {
          console.log("params", params);
          setSingerInfo(params);
        },
        onReset: () => {
          setSingerInfo({});
        }
      },
      ref
    );
    const [singerInfo, setSingerInfo] = require$$1.useState({});
    const { data, loading: loading2 } = useGetData(getSingerAllAlbum, singerInfo.singerMid, {
      monitors: [singerInfo.singerMid, visible],
      returnFunction: () => !visible || !singerInfo.singerMid,
      initialValue: []
    });
    const searchFormOptions = [
      {
        label: "专辑名称",
        name: "albumName",
        type: "select",
        options: uniqueArrayByKey(data, "albumName").map((item) => ({
          label: item.albumName,
          value: item.albumName
        })),
        inputProps: {
          mode: "multiple"
        }
      }
    ];
    const { filteredList, handleFilter } = useFilter(data, {
      fields: {
        albumName: {
          getValue: (item) => item.albumName
        }
      }
    });
    const { pause, isPlaying } = usePlayMusic();
    const {
      playAlbum,
      downloadAlbumSong,
      getDownLoadJson
    } = useGetAlbumDetail();
    const [playing, setPlaying] = require$$1.useState();
    const handlePlay = async (record) => {
      try {
        setPlaying(record.albumMid);
        const { albumMid, albumName } = record;
        const hide = msgLoading(`正在加载《${albumName}》...`);
        await playAlbum(albumMid);
        hide();
        msgSuccess(`《${albumName}》开始播放`);
      } catch (error) {
        console.error("播放失败:", error);
      } finally {
        setPlaying(void 0);
      }
    };
    const [downloading, setDownloading] = require$$1.useState();
    const handleDownload = async (record) => {
      try {
        setDownloading(record.albumMid);
        const { albumMid, albumName } = record;
        const hide = msgLoading(`正在准备下载《${albumName}》...`);
        await downloadAlbumSong(albumMid);
        hide();
        msgSuccess(`《${albumName}》下载成功！`);
      } catch (error) {
        console.error("下载失败:", error);
      } finally {
        setDownloading(void 0);
      }
    };
    const [downloadingJson, setDownloadingJson] = require$$1.useState(void 0);
    const handleDownloadJson = async (record) => {
      try {
        setDownloadingJson(record.albumMid);
        const { albumMid, albumName } = record;
        const res = await getDownLoadJson(albumMid);
        downloadAsJson([res], `${albumName}-专辑`);
      } catch (error) {
        msgError("下载JSON失败: " + error.message);
      } finally {
        setDownloadingJson(void 0);
      }
    };
    const columns = [
      {
        title: "专辑信息",
        dataIndex: "albumName",
        key: "albumName",
        width: 300,
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", className: styles$2["album-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2["album-cover"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Image,
            {
              width: 60,
              height: 60,
              src: getAlbumPicUrl(record.albumMid),
              alt: text,
              fallback: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2["album-details"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2["album-name"], title: text, children: text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2["album-trans-name"], title: record.albumTranName || "", children: record.albumTranName || "" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2["album-type"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tag, { color: "blue", children: record.albumType || "专辑" }) })
          ] })
        ] })
      },
      {
        title: "歌手",
        dataIndex: "singerName",
        key: "singerName",
        width: 200,
        render: (singerName) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "small", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Avatar, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.UserOutlined, {}), src: singerInfo?.singerPic, size: 40 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2["singer-info"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2["singer-name"], title: singerName || "未知歌手", children: singerName || "未知歌手" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2["singer-id"], title: singerInfo?.singerId?.toString() || "", children: singerInfo?.singerId || "" })
          ] })
        ] })
      },
      {
        title: "发行时间",
        dataIndex: "publishDate",
        key: "publishDate",
        width: 150,
        align: "center",
        render: (publishDate) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { className: styles$2["publish-date"], title: publishDate, children: publishDate || "未知" });
        }
      },
      {
        title: "歌曲数",
        dataIndex: "totalNum",
        key: "totalNum",
        width: 100,
        align: "center",
        render: (totalNum) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Tag, { color: "green", children: [
          totalNum || 0,
          " 首"
        ] })
      },
      {
        title: "专辑ID",
        dataIndex: "albumID",
        key: "albumID",
        width: 120,
        align: "center",
        render: (albumID) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$2["album-id-text"], text: albumID + "" })
      },
      {
        title: "专辑MID",
        dataIndex: "albumMid",
        key: "albumMid",
        width: 200,
        align: "center",
        render: (albumMid) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$2["album-mid-text"], text: albumMid })
      },
      {
        title: "操作",
        key: "action",
        width: 300,
        align: "center",
        fixed: "right",
        render: (_, record) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              antd.Button,
              {
                type: "link",
                size: "small",
                loading: playing === record.albumMid,
                icon: playing === record.albumMid ? /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PauseCircleOutlined, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PlayCircleOutlined, {}),
                onClick: () => {
                  if (isPlaying === record.albumMid) {
                    pause();
                  } else {
                    handlePlay(record);
                    return;
                  }
                },
                title: "播放专辑",
                children: "播放"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              antd.Button,
              {
                type: "link",
                size: "small",
                loading: downloadingJson === record.albumMid,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.SaveOutlined, {}),
                onClick: () => handleDownloadJson(record),
                title: "下载JSON",
                children: "下载JSON"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              antd.Button,
              {
                type: "link",
                size: "small",
                loading: downloading === record.albumMid,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.DownloadOutlined, {}),
                onClick: () => handleDownload(record),
                title: "下载专辑",
                children: "下载"
              }
            )
          ] });
        }
      }
    ];
    const [selectedRowKeys, setSelectedRowKeys] = require$$1.useState([]);
    const [selectedRows, setSelectedRows] = require$$1.useState([]);
    const rowSelection = {
      preserveSelectedRowKeys: true,
      selectedRowKeys,
      onChange: (selectedRowKeys2, selectedRows2) => {
        setSelectedRowKeys(selectedRowKeys2);
        setSelectedRows(selectedRows2);
        console.log("selectedRowKeys", selectedRowKeys2);
        console.log("selectedRows", selectedRows2);
      }
    };
    const renderTitle = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2["modal-title"], children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2["title-content"], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Title, { level: 4, style: { margin: 0 }, children: [
          singerInfo.singerName,
          " - 专辑列表"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2["title-stats"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${styles$2["stat-item"]} ${loading2 ? styles$2["loading"] : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$2["stat-label"], children: "专辑" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$2["stat-value"], children: loading2 ? "..." : data?.length || 0 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${styles$2["stat-item"]} ${loading2 ? styles$2["loading"] : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$2["stat-label"], children: "歌曲" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$2["stat-value"], children: loading2 ? "..." : data?.reduce((sum, album) => sum + (album.totalNum || 0), 0) || 0 })
          ] })
        ] })
      ] }) });
    };
    const [downloadingBatch, setDownloadingBatch] = require$$1.useState(false);
    const handleBatchDownload = async () => {
      if (selectedRows.length === 0) {
        msgWarning("请先选择要下载的专辑");
        return;
      }
      try {
        setDownloadingBatch(true);
        antd.message.loading(`正在准备下载 ${selectedRows.length} 张专辑...`, 0);
        await new Promise((resolve) => setTimeout(resolve, 2e3));
        antd.message.destroy();
        msgSuccess(`成功下载 ${selectedRows.length} 张专辑！`);
        setSelectedRowKeys([]);
        setSelectedRows([]);
      } catch (error) {
        antd.message.destroy();
        msgError("批量下载失败: " + error.message);
        console.error("批量下载失败:", error);
      } finally {
        setDownloadingBatch(false);
      }
    };
    const [downloadingBatchJson, setDownloadingBatchJson] = require$$1.useState(false);
    const handleBatchDownloadJson = async () => {
      if (selectedRows.length === 0) {
        msgWarning("请先选择要下载的专辑");
        return;
      }
      try {
        setDownloadingBatchJson(true);
        const hide = msgLoading(`正在准备下载 ${selectedRows.length} 张专辑...`);
        const result = [];
        for (const album of selectedRows) {
          console.log("album", album);
          const res = await getDownLoadJson(album.albumMid);
          result.push(res);
        }
        downloadAsJson(result, `${singerInfo.singerName}-专辑`);
        hide();
        msgSuccess(`成功下载 ${selectedRows.length} 张专辑！`);
      } catch (error) {
        console.error("批量下载JSON失败:", error);
      } finally {
        setDownloadingBatchJson(false);
      }
    };
    const renderFooter = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2["footer"], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2["selected-count"], children: [
          "已选择 ",
          selectedRows.length,
          " 张专辑",
          selectedRows.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$2["selected-info"], children: [
            "（共 ",
            selectedRows.reduce((sum, album) => sum + (album.totalNum || 0), 0),
            " 首歌曲）"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              onClick: () => {
                setSelectedRowKeys(filteredList?.map((item) => item.albumMid) || []);
                setSelectedRows(filteredList || []);
              },
              disabled: filteredList?.length === 0,
              children: "全部选择"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              onClick: () => {
                setSelectedRowKeys([]);
                setSelectedRows([]);
              },
              disabled: selectedRows.length === 0,
              children: "清空选择"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            antd.Button,
            {
              type: "primary",
              onClick: handleBatchDownloadJson,
              loading: downloadingBatchJson,
              disabled: selectedRows.length === 0,
              children: [
                "下载Json",
                selectedRows?.length ? `(${selectedRows?.length})` : ""
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            antd.Button,
            {
              type: "primary",
              onClick: handleBatchDownload,
              loading: downloadingBatch,
              disabled: selectedRows.length === 0,
              children: [
                "下载选中专辑",
                selectedRows?.length ? `(${selectedRows?.length})` : ""
              ]
            }
          )
        ] })
      ] });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      antd.Modal,
      {
        title: renderTitle(),
        open: visible,
        onCancel: close,
        footer: renderFooter(),
        width: 1200,
        centered: true,
        className: styles$2["album-list-modal"],
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SearchForm$1,
            {
              options: searchFormOptions,
              onSearch: handleFilter,
              style: { marginBottom: 16 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Table,
            {
              rowSelection,
              columns,
              dataSource: filteredList || [],
              rowKey: "albumMid",
              loading: loading2,
              scroll: { y: 500, x: 1100 },
              className: styles$2["album-table"],
              pagination: {
                showSizeChanger: true,
                showQuickJumper: true,
                align: "end",
                showTotal: (total) => `共 ${total} 张专辑`
              }
            }
          )
        ]
      }
    );
  });
  const styles$1 = {
    "singer-search-modal": "_singer-search-modal_1jeib_2",
    "singer-info": "_singer-info_1jeib_8",
    "singer-avatar": "_singer-avatar_1jeib_12",
    "singer-details": "_singer-details_1jeib_21",
    "singer-name": "_singer-name_1jeib_26",
    "singer-country": "_singer-country_1jeib_32",
    "singer-id": "_singer-id_1jeib_43",
    "singer-id-text": "_singer-id-text_1jeib_54",
    "singer-mid-text": "_singer-mid-text_1jeib_64"
  };
  const defaultSearchParams$1 = {
    cur_page: 1,
    area: Area.全部,
    sex: Sex.全部,
    genre: Genre.全部
  };
  const SingerSearch = require$$1.forwardRef((props, ref) => {
    const { visible, close } = useVisible({}, ref);
    const [keyword, setKeyword] = require$$1.useState("");
    const [searchParams, setSearchParams] = require$$1.useState(defaultSearchParams$1);
    const searchFormOptions = [
      // 地区
      {
        label: "地区",
        name: "area",
        type: "select",
        options: AreaList
      },
      // 性别
      {
        label: "性别",
        name: "sex",
        type: "select",
        options: SexList
      },
      // 流派
      {
        label: "流派",
        name: "genre",
        type: "select",
        options: GenreList
      },
      // 歌手名称
      {
        label: "歌手名称",
        type: "input",
        inputProps: {
          placeholder: "请输入歌手名称",
          value: keyword,
          allowClear: true,
          onChange: (e) => {
            console.log("e", e);
            setKeyword(e.target.value);
          }
        }
      }
    ];
    const handleSearch = (values) => {
      const newParams = Object.fromEntries(
        searchFormOptions.filter((item) => item.name).map((item) => [item.name, values[item.name]])
      );
      setSearchParams({
        ...searchParams,
        ...newParams
      });
    };
    const hotSongModalRef = useCompRef();
    const handleHotSong = (record) => {
      hotSongModalRef.current.open({
        singerId: record.singer_id,
        singerMid: record.singer_mid,
        singerName: record.singer_name,
        singerPic: record.singer_pic
      });
    };
    const albumModalRef = useCompRef();
    const handleAlbum = (record) => {
      albumModalRef.current.open({
        singerId: record.singer_id,
        singerMid: record.singer_mid,
        singerName: record.singer_name,
        singerPic: record.singer_pic
      });
    };
    const columns = [
      {
        title: "歌手信息",
        dataIndex: "singer_name",
        key: "singer_name",
        width: 300,
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", className: styles$1["singer-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Avatar,
            {
              src: record.singer_pic,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.UserOutlined, {}),
              size: 48,
              className: styles$1["singer-avatar"]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1["singer-details"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["singer-name"], children: text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["singer-country"], children: record.country || "未知地区" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1["singer-id"], children: [
              "ID: ",
              record.singer_id
            ] })
          ] })
        ] })
      },
      {
        title: "歌手ID",
        dataIndex: "singer_id",
        key: "singer_id",
        width: 120,
        align: "center",
        render: (id) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$1["singer-id-text"], text: id + "" })
      },
      {
        title: "歌手MID",
        dataIndex: "singer_mid",
        key: "singer_mid",
        width: 200,
        align: "center",
        render: (mid) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$1["singer-mid-text"], text: mid })
      },
      {
        title: "操作",
        key: "action",
        width: 200,
        align: "center",
        render: (_, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              type: "link",
              size: "small",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.UserOutlined, {}),
              onClick: () => handleHotSong(record),
              children: "查看热门歌曲"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              type: "link",
              color: "danger",
              size: "small",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PlayCircleOutlined, {}),
              onClick: () => handleAlbum(record),
              children: "查看专辑"
            }
          )
        ] })
      }
    ];
    const { data, loading: loading2 } = useGetData(getSingerList, searchParams, {
      monitors: [searchParams, visible],
      returnFunction: () => !visible
    });
    const renderList = require$$1.useMemo(() => {
      console.log("data", data);
      return data.singerlist?.filter(
        (item) => item.singer_name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase() || "")
      ) || [];
    }, [data, keyword]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      antd.Modal,
      {
        title: "歌手查询",
        open: visible,
        onCancel: close,
        footer: null,
        width: 1100,
        centered: true,
        className: styles$1["singer-search-modal"],
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SearchForm$1, { options: searchFormOptions, searchParams, onSearch: handleSearch }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Table,
            {
              columns,
              dataSource: renderList,
              rowKey: "singer_mid",
              loading: loading2,
              pagination: false,
              scroll: { y: 400 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Pagination,
            {
              current: searchParams.cur_page,
              total: data.total,
              align: "end",
              showSizeChanger: false,
              showQuickJumper: true,
              showTotal: (total) => `共 ${total} 位歌手`,
              onChange: (page) => {
                setSearchParams({
                  ...searchParams,
                  cur_page: page
                });
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(HotSongModal, { ref: hotSongModalRef }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlbumListModal, { ref: albumModalRef })
        ]
      }
    );
  });
  const { Option } = antd.Select;
  const SongListSearch = require$$1.forwardRef((props, ref) => {
    const { visible, close } = useVisible({}, ref);
    const [form] = antd.Form.useForm();
    const [loading2, setLoading] = require$$1.useState(false);
    const [songList, setSongList] = require$$1.useState([]);
    const [total, setTotal] = require$$1.useState(0);
    const [currentPage, setCurrentPage] = require$$1.useState(0);
    const [categories, setCategories] = require$$1.useState([]);
    require$$1.useEffect(() => {
      const fetchCategories = async () => {
        try {
          const res = await getSongListCategory();
          setCategories(res || []);
        } catch (error) {
          console.error("获取歌单分类失败:", error);
        }
      };
      fetchCategories();
    }, []);
    const columns = [
      {
        title: "歌单",
        dataIndex: "dissname",
        key: "dissname",
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Image,
            {
              src: record.imgurl,
              alt: text,
              width: 40,
              height: 40,
              style: { borderRadius: 4 },
              fallback: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 500 }, children: text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 12, color: "#666" }, children: record.creator?.name || "未知用户" })
          ] })
        ] })
      },
      {
        title: "分类",
        dataIndex: "categoryId",
        key: "categoryId",
        render: (categoryId) => {
          const category = categories.find((item) => item.categoryId === categoryId);
          return category ? /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tag, { color: "blue", children: category.categoryName }) : "-";
        }
      },
      {
        title: "歌曲数",
        dataIndex: "song_count",
        key: "song_count",
        render: (count) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Tag, { color: "green", children: [
          count,
          " 首"
        ] })
      },
      {
        title: "播放量",
        dataIndex: "listennum",
        key: "listennum",
        render: (num) => {
          if (num >= 1e4) {
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              (num / 1e4).toFixed(1),
              "万"
            ] });
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: num });
        }
      },
      {
        title: "收藏数",
        dataIndex: "favoritenum",
        key: "favoritenum",
        render: (num) => {
          if (num >= 1e4) {
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              (num / 1e4).toFixed(1),
              "万"
            ] });
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: num });
        }
      },
      {
        title: "操作",
        key: "action",
        render: (_, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              type: "link",
              size: "small",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PlayCircleOutlined, {}),
              children: "播放"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              type: "link",
              size: "small",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.HeartOutlined, {}),
              children: "收藏"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "link", size: "small", children: "查看详情" })
        ] })
      }
    ];
    const handleSearch = async (page = 0) => {
      try {
        setLoading(true);
        const values = await form.validateFields();
        const res = await getSongList({
          categoryId: values.categoryId,
          sortId: values.sortId,
          page,
          limit: 20
        });
        setSongList(res.list || []);
        setTotal(res.total || 0);
        setCurrentPage(page);
      } catch (error) {
        console.error("搜索歌单失败:", error);
      } finally {
        setLoading(false);
      }
    };
    const handleReset = () => {
      form.resetFields();
      setSongList([]);
      setTotal(0);
      setCurrentPage(0);
    };
    const handlePageChange = (page) => {
      handleSearch(page - 1);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      antd.Modal,
      {
        title: "歌单查询",
        open: visible,
        onCancel: close,
        footer: null,
        width: 1200,
        centered: true,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            antd.Form,
            {
              form,
              layout: "inline",
              style: { marginBottom: 16 },
              initialValues: {
                categoryId: 1e7,
                // 默认全部
                sortId: 5
                // 默认推荐
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { name: "categoryId", label: "分类", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Select, { style: { width: 150 }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Option, { value: 1e7, children: "全部" }),
                  categories.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(Option, { value: item.categoryId, children: item.categoryName }, item.categoryId))
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { name: "sortId", label: "排序", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Select, { style: { width: 120 }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Option, { value: 5, children: "推荐" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Option, { value: 2, children: "最新" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Option, { value: 3, children: "最热" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { name: "keyword", label: "关键词", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  antd.Input,
                  {
                    placeholder: "歌单名称",
                    style: { width: 200 },
                    allowClear: true
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    antd.Button,
                    {
                      type: "primary",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.SearchOutlined, {}),
                      onClick: () => handleSearch(0),
                      loading: loading2,
                      children: "搜索"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { onClick: handleReset, children: "重置" })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Table,
            {
              columns,
              dataSource: songList,
              rowKey: "tid",
              loading: loading2,
              pagination: {
                current: currentPage + 1,
                // 转换为从1开始的页码
                total,
                pageSize: 20,
                showSizeChanger: false,
                showQuickJumper: true,
                showTotal: (total2) => `共 ${total2} 个歌单`,
                onChange: handlePageChange
              },
              scroll: { y: 500 }
            }
          )
        ]
      }
    );
  });
  const AlbumSearch = require$$1.forwardRef((props, ref) => {
    const { visible, close } = useVisible({}, ref);
    const [form] = antd.Form.useForm();
    const [loading2, setLoading] = require$$1.useState(false);
    const [albumList, setAlbumList] = require$$1.useState([]);
    const [total, setTotal] = require$$1.useState(0);
    const [currentPage, setCurrentPage] = require$$1.useState(1);
    const columns = [
      {
        title: "专辑",
        dataIndex: "albumName",
        key: "albumName",
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Image,
            {
              src: record.albumPic || record.imgurl,
              alt: text,
              width: 50,
              height: 50,
              style: { borderRadius: 4 },
              fallback: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 500 }, children: text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 12, color: "#666" }, children: record.singerName || record.artist || "未知歌手" })
          ] })
        ] })
      },
      {
        title: "歌手",
        dataIndex: "singerName",
        key: "singerName",
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Avatar,
            {
              src: record.singerPic,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.UserOutlined, {}),
              size: "small"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: text || record.artist || "未知歌手" })
        ] })
      },
      {
        title: "发行时间",
        dataIndex: "publishDate",
        key: "publishDate",
        render: (date) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: date || "未知" })
      },
      {
        title: "歌曲数",
        dataIndex: "songCount",
        key: "songCount",
        render: (count) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Tag, { color: "green", children: [
          count || 0,
          " 首"
        ] })
      },
      {
        title: "专辑类型",
        dataIndex: "albumType",
        key: "albumType",
        render: (type) => /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tag, { color: "blue", children: type || "专辑" })
      },
      {
        title: "操作",
        key: "action",
        render: (_, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              type: "link",
              size: "small",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PlayCircleOutlined, {}),
              children: "播放"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              type: "link",
              size: "small",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.HeartOutlined, {}),
              children: "收藏"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "link", size: "small", children: "查看详情" })
        ] })
      }
    ];
    const handleSearch = async (page = 1) => {
      try {
        setLoading(true);
        const values = await form.validateFields();
        const res = await searchAlbums({
          keyword: values.keyword,
          artist: values.artist,
          page,
          limit: 20
        });
        setAlbumList(res.list || []);
        setTotal(res.total || 0);
        setCurrentPage(page);
      } catch (error) {
        console.error("搜索专辑失败:", error);
      } finally {
        setLoading(false);
      }
    };
    const handleReset = () => {
      form.resetFields();
      setAlbumList([]);
      setTotal(0);
      setCurrentPage(1);
    };
    const handlePageChange = (page) => {
      handleSearch(page);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      antd.Modal,
      {
        title: "专辑查询",
        open: visible,
        onCancel: close,
        footer: null,
        width: 1200,
        centered: true,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            antd.Form,
            {
              form,
              layout: "inline",
              style: { marginBottom: 16 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { name: "keyword", label: "专辑名称", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  antd.Input,
                  {
                    placeholder: "请输入专辑名称",
                    style: { width: 200 },
                    allowClear: true
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { name: "artist", label: "歌手", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  antd.Input,
                  {
                    placeholder: "请输入歌手名称",
                    style: { width: 200 },
                    allowClear: true
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    antd.Button,
                    {
                      type: "primary",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.SearchOutlined, {}),
                      onClick: () => handleSearch(1),
                      loading: loading2,
                      children: "搜索"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { onClick: handleReset, children: "重置" })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Table,
            {
              columns,
              dataSource: albumList,
              rowKey: "albumId",
              loading: loading2,
              pagination: {
                current: currentPage,
                total,
                pageSize: 20,
                showSizeChanger: false,
                showQuickJumper: true,
                showTotal: (total2) => `共 ${total2} 张专辑`,
                onChange: handlePageChange
              },
              scroll: { y: 500 }
            }
          )
        ]
      }
    );
  });
  const duration = "_duration_15iqn_69";
  const styles = {
    "song-search-modal": "_song-search-modal_15iqn_1",
    "modal-title": "_modal-title_15iqn_1",
    "title-content": "_title-content_15iqn_6",
    "title-text": "_title-text_15iqn_11",
    "song-table": "_song-table_15iqn_16",
    "song-info": "_song-info_15iqn_16",
    "song-cover": "_song-cover_15iqn_21",
    "song-details": "_song-details_15iqn_31",
    "song-name": "_song-name_15iqn_36",
    "song-album": "_song-album_15iqn_46",
    "singer-info": "_singer-info_15iqn_55",
    "singer-name": "_singer-name_15iqn_60",
    duration,
    "song-id-text": "_song-id-text_15iqn_74",
    "song-mid-text": "_song-mid-text_15iqn_75"
  };
  const defaultSearchParams = {
    cur_page: 1
  };
  const SongSearch = require$$1.forwardRef((props, ref) => {
    const { visible, close } = useVisible({}, ref);
    const [keyword, setKeyword] = require$$1.useState("");
    const [searchParams, setSearchParams] = require$$1.useState(defaultSearchParams);
    const searchFormOptions = [
      // 歌曲名称
      {
        label: "歌曲名称",
        type: "input",
        inputProps: {
          placeholder: "请输入歌曲名称",
          value: keyword,
          allowClear: true,
          onChange: (e) => {
            console.log("e", e);
            setKeyword(e.target.value);
          }
        }
      }
    ];
    const handleSearch = (values) => {
      const newParams = Object.fromEntries(
        searchFormOptions.filter((item) => item.name).map((item) => [item.name, values[item.name]])
      );
      setSearchParams({
        ...searchParams,
        ...newParams
      });
    };
    const columns = [
      {
        title: "歌曲信息",
        dataIndex: "songName",
        key: "songName",
        width: 300,
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", className: styles["song-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles["song-cover"] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles["song-details"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles["song-name"], title: text, children: text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles["song-album"], title: record.albumName || "", children: record.albumName || "" })
          ] })
        ] })
      },
      {
        title: "歌手",
        dataIndex: "singerName",
        key: "singerName",
        width: 200,
        render: (singerName) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "small", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Avatar, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.UserOutlined, {}), size: 40 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles["singer-info"], children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles["singer-name"], title: singerName || "未知歌手", children: singerName || "未知歌手" }) })
        ] })
      },
      {
        title: "时长",
        dataIndex: "duration",
        key: "duration",
        width: 100,
        align: "center",
        render: (duration2) => {
          const minutes = Math.floor(duration2 / 60);
          const seconds = duration2 % 60;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles["duration"], children: [
            minutes,
            ":",
            seconds.toString().padStart(2, "0")
          ] });
        }
      },
      {
        title: "歌曲ID",
        dataIndex: "songId",
        key: "songId",
        width: 120,
        align: "center",
        render: (songId) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles["song-id-text"], text: songId + "" })
      },
      {
        title: "歌曲MID",
        dataIndex: "songMid",
        key: "songMid",
        width: 200,
        align: "center",
        render: (songMid) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles["song-mid-text"], text: songMid })
      },
      {
        title: "操作",
        key: "action",
        width: 200,
        align: "center",
        fixed: "right",
        render: (_, record) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Space, { size: "middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              type: "link",
              size: "small",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PlayCircleOutlined, {}),
              onClick: () => handlePlay(record),
              title: "播放歌曲",
              children: "播放"
            }
          ) });
        }
      }
    ];
    const handlePlay = (record) => {
      console.log("播放歌曲:", record);
    };
    const renderTitle = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles["modal-title"], children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles["title-content"], children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles["title-text"], children: "歌曲查询" }) }) });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      antd.Modal,
      {
        title: renderTitle(),
        open: visible,
        onCancel: close,
        width: 1200,
        centered: true,
        className: styles["song-search-modal"],
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SearchForm$1,
            {
              options: searchFormOptions,
              onSearch: handleSearch,
              style: { marginBottom: 16 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Table,
            {
              columns,
              dataSource: [],
              rowKey: "songId",
              loading: false,
              scroll: { y: 500, x: 1100 },
              className: styles["song-table"],
              pagination: {
                showSizeChanger: true,
                showQuickJumper: true,
                align: "end",
                showTotal: (total) => `共 ${total} 首歌曲`
              }
            }
          )
        ]
      }
    );
  });
  const ButtonGroup = () => {
    const singerSearchRef = useCompRef();
    const handleSingerSearch = () => {
      singerSearchRef.current.open();
    };
    const songListSearchRef = useCompRef();
    const handleSongListSearch = () => {
      songListSearchRef.current.open();
    };
    const albumSearchRef = useCompRef();
    const handleAlbumSearch = () => {
      albumSearchRef.current.open();
    };
    const songSearchRef = useCompRef();
    const handleSongSearch = () => {
      songSearchRef.current.open();
    };
    const demoRef = useCompRef();
    const handleDemo = () => {
      demoRef.current.open();
    };
    const testModalRef = useCompRef();
    const handleTestModal = () => {
      testModalRef.current.open();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$7["button-group"], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: "歌手查询", placement: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Button,
        {
          type: "primary",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.UserOutlined, {}),
          onClick: handleSingerSearch,
          className: styles$7["button"]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: "歌单查询", placement: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Button,
        {
          type: "primary",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.UnorderedListOutlined, {}),
          onClick: handleSongListSearch,
          className: styles$7["button"]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: "专辑查询", placement: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Button,
        {
          type: "primary",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.BookOutlined, {}),
          onClick: handleAlbumSearch,
          className: styles$7["button"]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: "歌曲查询", placement: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Button,
        {
          type: "primary",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.CustomerServiceOutlined, {}),
          onClick: handleSongSearch,
          className: styles$7["button"]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: "demo", placement: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Button,
        {
          type: "primary",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.InfoCircleOutlined, {}),
          onClick: handleDemo,
          className: styles$7["button"]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: "testModal", placement: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Button,
        {
          type: "primary",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.InfoCircleOutlined, {}),
          onClick: handleTestModal,
          className: styles$7["button"]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Demo, { ref: demoRef }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TestModal, { ref: testModalRef }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SingerSearch, { ref: singerSearchRef }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SongListSearch, { ref: songListSearchRef }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlbumSearch, { ref: albumSearchRef }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SongSearch, { ref: songSearchRef })
    ] });
  };
  function App() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "App", children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.ConfigProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.App, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModalUtils, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonGroup, {})
    ] }) }) });
  }
  const themeToken = {
    colorPrimary: "#31C27C",
    // QQ音乐特征绿色
    colorPrimaryHover: "#2DB573",
    colorPrimaryActive: "#28A069",
    // 文字颜色
    colorText: "#333333",
    colorTextSecondary: "#666666",
    colorTextTertiary: "#999999",
    colorTextDescription: "#666666",
    // 背景色
    colorBgContainer: "#FFFFFF",
    colorBgLayout: "#F5F5F5",
    colorBgMask: "rgba(0, 0, 0, 0.45)",
    // 边框颜色
    colorBorder: "#E1E1E1",
    colorBorderSecondary: "#F0F0F0",
    // 链接颜色
    colorLink: "#31C27C",
    colorLinkHover: "#2DB573",
    colorLinkActive: "#28A069",
    // 成功、警告、错误状态色
    colorSuccess: "#52C41A",
    colorWarning: "#FAAD14",
    colorError: "#FF4D4F",
    // 字体
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    fontSize: 14,
    // 圆角
    borderRadius: 4,
    borderRadiusLG: 8,
    borderRadiusSM: 2,
    // 间距
    marginXS: 8,
    marginSM: 12,
    margin: 16,
    marginMD: 20,
    marginLG: 24,
    marginXL: 32,
    // 动画
    motionDurationFast: "0.1s",
    motionDurationMid: "0.2s",
    motionDurationSlow: "0.3s",
    motionEaseInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    motionEaseOut: "cubic-bezier(0.0, 0, 0.2, 1)"
  };
  const themeComponentsToken = {
    // 组件级别的样式定制
    Button: {
      colorPrimary: "#31C27C",
      algorithm: true
      // 启用算法
    },
    Input: {
      colorBorder: "#E1E1E1",
      algorithm: true
    },
    Table: {}
  };
  const theme = {
    token: themeToken,
    components: themeComponentsToken
  };
  ReactDOM.createRoot(
    (() => {
      const app = document.createElement("div");
      document.body.append(app);
      return app;
    })()
  ).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(require$$1.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      antd.ConfigProvider,
      {
        locale: zhCN,
        theme,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {})
      }
    ) })
  );

})(antd, React, ReactDOM, icons);
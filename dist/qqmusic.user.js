// ==UserScript==
// @name         qqmusic
// @namespace    npm/vite-plugin-monkey
// @version      0.0.0
// @author       520Qiuyu
// @description  QQ音乐下载助手
// @icon         https://vitejs.dev/logo.svg
// @homepage     https://github.com/520Qiuyu/QQMusic
// @homepageURL  https://github.com/520Qiuyu/QQMusic
// @source       https://github.com/520Qiuyu/QQMusic.git
// @match        https://y.qq.com/*
// @require      https://cdn.jsdelivr.net/npm/dayjs@1.11.13/dayjs.min.js
// @require      https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js
// @require      https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js
// @require      https://cdn.jsdelivr.net/npm/antd@5.27.1/dist/antd.min.js
// @require      https://cdn.jsdelivr.net/npm/@ant-design/icons@5.6.1/dist/index.umd.min.js
// @connect      y.qq.com
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function (require$$0, antd, require$$0$1, icons) {
  'use strict';

  const d=new Set;const _ = async e=>{d.has(e)||(d.add(e),(t=>{typeof GM_addStyle=="function"?GM_addStyle(t):document.head.appendChild(document.createElement("style")).append(t);})(e));};

  _(' @charset "UTF-8";._album-detail-modal_e7ura_1 ._modal-header_e7ura_1{display:flex;flex-direction:column;gap:8px}._album-detail-modal_e7ura_1 ._album-basic-info_e7ura_6{display:flex;align-items:center;gap:12px}._album-detail-modal_e7ura_1 ._album-info_e7ura_11{display:flex;flex-direction:column;gap:4px}._album-detail-modal_e7ura_1 ._album-name_e7ura_16{margin:0}._album-detail-modal_e7ura_1 ._album-meta_e7ura_19{display:flex;align-items:center;gap:8px}._album-detail-modal_e7ura_1 ._song-table_e7ura_24{margin-top:8px}._album-detail-modal_e7ura_1 ._song-name_e7ura_27{max-width:260px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._album-detail-modal_e7ura_1 ._artist-item_e7ura_33{display:inline-flex;align-items:center}._album-detail-modal_e7ura_1 ._artist-name_e7ura_37{font-size:12px;color:#595959}._album-detail-modal_e7ura_1 ._artist-separator_e7ura_41{margin:0 4px;color:#bfbfbf}._album-detail-modal_e7ura_1 ._song-duration_e7ura_45{font-variant-numeric:tabular-nums}._album-detail-modal_e7ura_1 ._footer_e7ura_48{display:flex;justify-content:space-between;align-items:center;padding:16px 0;border-top:1px solid #f0f0f0}._album-detail-modal_e7ura_1 ._footer_e7ura_48 ._selected-count_e7ura_55{font-size:14px;color:#666}._album-detail-modal_e7ura_1 ._footer_e7ura_48 ._selected-count_e7ura_55 ._selected-info_e7ura_59{color:#1890ff;margin-left:8px;font-weight:500}._copy-text_1att4_1{display:flex;align-items:center;width:100%}._copy-text_1att4_1 ._text_1att4_6{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._copy-text_1att4_1 ._copy-btn_1att4_12{flex-shrink:0;padding:0}._text-overflow-show-tips-container_btabq_1{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:text}._select-search_19wb1_1 .ant-select:first-child .ant-select-selector{border-radius:32px 0 0 32px!important}._select-search_19wb1_1>:last-child{border-radius:0 32px 32px 0!important}._search-form_10eg9_1{margin-bottom:-16px}._search-form_10eg9_1 .ant-form-item{margin-bottom:16px}._search-form_10eg9_1 input.ant-input,._search-form_10eg9_1 .ant-input-affix-wrapper,._search-form_10eg9_1 .ant-picker,._search-form_10eg9_1 .ant-calendar-picker-input,._search-form_10eg9_1 .ant-select-selector,._search-form_10eg9_1 .ant-select-multiple .ant-select-selection-item{border-radius:32px}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1{width:100%}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4{display:flex;align-items:center;justify-content:space-between;padding-right:30px}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10{display:flex;align-items:center}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14{display:flex;flex-direction:column;align-items:center;padding:8px 16px;border-radius:8px;margin-left:12px;box-shadow:0 2px 8px #0000001a;transition:all .3s ease;position:relative;overflow:hidden}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(1){background:linear-gradient(135deg,#667eea,#764ba2);box-shadow:0 2px 8px #667eea4d}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(1):hover{box-shadow:0 4px 12px #667eea66}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(2){background:linear-gradient(135deg,#f093fb,#f5576c);box-shadow:0 2px 8px #f093fb4d}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(2):hover{box-shadow:0 4px 12px #f093fb66}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(3){background:linear-gradient(135deg,#4facfe,#00f2fe);box-shadow:0 2px 8px #4facfe4d}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(3):hover{box-shadow:0 4px 12px #4facfe66}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(1):hover{transform:translateY(-2px) scale(1.02)}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(2):hover{transform:translateY(-2px) scale(1.02)}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:nth-child(3):hover{transform:translateY(-2px) scale(1.02)}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14:hover{transform:translateY(-2px)}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14._loading_jnpqx_59{opacity:.7}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14._loading_jnpqx_59:nth-child(1) ._stat-value_jnpqx_62{animation:_pulse_jnpqx_1 1.5s ease-in-out infinite;animation-delay:.2s}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14._loading_jnpqx_59:nth-child(2) ._stat-value_jnpqx_62{animation:_pulse_jnpqx_1 1.5s ease-in-out infinite;animation-delay:.4s}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14._loading_jnpqx_59:nth-child(3) ._stat-value_jnpqx_62{animation:_pulse_jnpqx_1 1.5s ease-in-out infinite;animation-delay:.6s}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14 ._stat-label_jnpqx_74{font-size:12px;color:#fffc;font-weight:500;margin-bottom:2px}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14 ._stat-value_jnpqx_62{font-size:16px;color:#fff;font-weight:600;line-height:1;transition:all .3s ease}._hot-song-modal_jnpqx_1 ._modal-title_jnpqx_1 ._title-content_jnpqx_4 ._title-stats_jnpqx_10 ._stat-item_jnpqx_14 ._stat-value_jnpqx_62:hover{transform:scale(1.1)}._hot-song-modal_jnpqx_1 ._singer-info-display_jnpqx_90{margin-bottom:16px;padding:16px;background-color:#f5f5f5;border-radius:6px;border-left:4px solid #1890ff}._hot-song-modal_jnpqx_1 ._song-table_jnpqx_97{margin-bottom:16px}._hot-song-modal_jnpqx_1 ._song-info_jnpqx_100 ._album-cover_jnpqx_100{width:40px;height:40px;border-radius:4px;overflow:hidden;flex-shrink:0}._hot-song-modal_jnpqx_1 ._song-info_jnpqx_100 ._album-cover_jnpqx_100 img{width:100%;height:100%;object-fit:cover;border-radius:4px}._hot-song-modal_jnpqx_1 ._song-info_jnpqx_100 ._song-details_jnpqx_113{flex:1;min-width:0}._hot-song-modal_jnpqx_1 ._song-info_jnpqx_100 ._song-details_jnpqx_113 ._song-name_jnpqx_117{font-weight:500;color:#262626;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:150px}._hot-song-modal_jnpqx_1 ._song-info_jnpqx_100 ._song-details_jnpqx_113 ._song-album_jnpqx_126{font-size:12px;color:#8c8c8c;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:150px}._hot-song-modal_jnpqx_1 ._singer-info_jnpqx_90 ._singer-name_jnpqx_134{font-weight:500;color:#262626;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px}._hot-song-modal_jnpqx_1 ._singer-info_jnpqx_90 ._singer-id_jnpqx_142{font-size:12px;color:#8c8c8c;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px}._hot-song-modal_jnpqx_1 ._song-id-text_jnpqx_150,._hot-song-modal_jnpqx_1 ._song-mid-text_jnpqx_151{font-family:Monaco,Menlo,Ubuntu Mono,monospace;font-size:12px;color:#595959;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px;display:inline-block}._hot-song-modal_jnpqx_1 ._footer_jnpqx_161{display:flex;align-items:center;justify-content:flex-end;margin-top:16px}._hot-song-modal_jnpqx_1 ._footer_jnpqx_161 ._selected-count_jnpqx_167{font-size:14px;color:#595959;margin-right:auto}@keyframes _pulse_jnpqx_1{0%,to{opacity:1}50%{opacity:.5}}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1{width:100%}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1 ._title-content_1fb5b_4{display:flex;align-items:center;justify-content:space-between;padding-right:30px}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1 ._title-content_1fb5b_4 ._title-stats_1fb5b_10{display:flex;align-items:center}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1 ._title-content_1fb5b_4 ._title-stats_1fb5b_10 ._stat-item_1fb5b_14{display:flex;flex-direction:column;align-items:center;padding:8px 16px;border-radius:8px;margin-left:12px;box-shadow:0 2px 8px #0000001a;transition:all .3s ease;position:relative;overflow:hidden}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1 ._title-content_1fb5b_4 ._title-stats_1fb5b_10 ._stat-item_1fb5b_14:nth-child(1){background:linear-gradient(135deg,#667eea,#764ba2);box-shadow:0 2px 8px #667eea4d}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1 ._title-content_1fb5b_4 ._title-stats_1fb5b_10 ._stat-item_1fb5b_14:nth-child(1):hover{box-shadow:0 4px 12px #667eea66}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1 ._title-content_1fb5b_4 ._title-stats_1fb5b_10 ._stat-item_1fb5b_14:nth-child(2){background:linear-gradient(135deg,#f093fb,#f5576c);box-shadow:0 2px 8px #f093fb4d}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1 ._title-content_1fb5b_4 ._title-stats_1fb5b_10 ._stat-item_1fb5b_14:nth-child(2):hover{box-shadow:0 4px 12px #f093fb66}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1 ._title-content_1fb5b_4 ._title-stats_1fb5b_10 ._stat-item_1fb5b_14:nth-child(1):hover{transform:translateY(-2px) scale(1.02)}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1 ._title-content_1fb5b_4 ._title-stats_1fb5b_10 ._stat-item_1fb5b_14:nth-child(2):hover{transform:translateY(-2px) scale(1.02)}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1 ._title-content_1fb5b_4 ._title-stats_1fb5b_10 ._stat-item_1fb5b_14:hover{transform:translateY(-2px)}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1 ._title-content_1fb5b_4 ._title-stats_1fb5b_10 ._stat-item_1fb5b_14._loading_1fb5b_49{opacity:.7}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1 ._title-content_1fb5b_4 ._title-stats_1fb5b_10 ._stat-item_1fb5b_14._loading_1fb5b_49:nth-child(1) ._stat-value_1fb5b_52{animation:_pulse_1fb5b_1 1.5s ease-in-out infinite;animation-delay:.2s}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1 ._title-content_1fb5b_4 ._title-stats_1fb5b_10 ._stat-item_1fb5b_14._loading_1fb5b_49:nth-child(2) ._stat-value_1fb5b_52{animation:_pulse_1fb5b_1 1.5s ease-in-out infinite;animation-delay:.4s}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1 ._title-content_1fb5b_4 ._title-stats_1fb5b_10 ._stat-item_1fb5b_14 ._stat-label_1fb5b_60{font-size:12px;color:#fffc;font-weight:500;margin-bottom:2px}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1 ._title-content_1fb5b_4 ._title-stats_1fb5b_10 ._stat-item_1fb5b_14 ._stat-value_1fb5b_52{font-size:16px;color:#fff;font-weight:600;line-height:1;transition:all .3s ease}._album-list-modal_1fb5b_1 ._modal-title_1fb5b_1 ._title-content_1fb5b_4 ._title-stats_1fb5b_10 ._stat-item_1fb5b_14 ._stat-value_1fb5b_52:hover{transform:scale(1.1)}._album-list-modal_1fb5b_1 ._album-table_1fb5b_76{margin-bottom:16px}._album-list-modal_1fb5b_1 ._album-info_1fb5b_79 ._album-cover_1fb5b_79{width:60px;height:60px;border-radius:6px;overflow:hidden;flex-shrink:0}._album-list-modal_1fb5b_1 ._album-info_1fb5b_79 ._album-cover_1fb5b_79 img{width:100%;height:100%;object-fit:cover;border-radius:6px}._album-list-modal_1fb5b_1 ._album-info_1fb5b_79 ._album-details_1fb5b_92{flex:1;min-width:0;cursor:pointer}._album-list-modal_1fb5b_1 ._album-info_1fb5b_79 ._album-details_1fb5b_92 ._album-name_1fb5b_97{font-weight:500;color:#262626;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px}._album-list-modal_1fb5b_1 ._album-info_1fb5b_79 ._album-details_1fb5b_92 ._album-trans-name_1fb5b_106{font-size:12px;color:#8c8c8c;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px}._album-list-modal_1fb5b_1 ._album-info_1fb5b_79 ._album-details_1fb5b_92 ._album-type_1fb5b_115{margin-top:4px}._album-list-modal_1fb5b_1 ._singer-info_1fb5b_118 ._singer-name_1fb5b_118{font-weight:500;color:#262626;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px}._album-list-modal_1fb5b_1 ._singer-info_1fb5b_118 ._singer-id_1fb5b_126{font-size:12px;color:#8c8c8c;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px}._album-list-modal_1fb5b_1 ._album-id-text_1fb5b_134,._album-list-modal_1fb5b_1 ._album-mid-text_1fb5b_135{font-family:Monaco,Menlo,Ubuntu Mono,monospace;font-size:12px;color:#595959;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px;display:inline-block}._album-list-modal_1fb5b_1 ._publish-date_1fb5b_145{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px;display:inline-block}._album-list-modal_1fb5b_1 ._footer_1fb5b_152{display:flex;justify-content:space-between;align-items:center;padding:16px 0;border-top:1px solid #f0f0f0}._album-list-modal_1fb5b_1 ._footer_1fb5b_152 ._selected-count_1fb5b_159{font-size:14px;color:#666}._album-list-modal_1fb5b_1 ._footer_1fb5b_152 ._selected-count_1fb5b_159 ._selected-info_1fb5b_163{color:#1890ff;margin-left:8px;font-weight:500}@keyframes _pulse_1fb5b_1{0%,to{opacity:1}50%{opacity:.5}}._singer-search-modal_1jeib_2 .ant-modal-body{display:flex;flex-direction:column;gap:16px}._singer-info_1jeib_8{display:flex;align-items:center}._singer-info_1jeib_8 ._singer-avatar_1jeib_12{border:3px solid #f0f0f0;box-shadow:0 2px 8px #0000001a;transition:all .3s ease}._singer-info_1jeib_8 ._singer-avatar_1jeib_12:hover{border-color:#31c27c;transform:scale(1.05)}._singer-info_1jeib_8 ._singer-details_1jeib_21{display:flex;flex-direction:column;gap:4px}._singer-info_1jeib_8 ._singer-details_1jeib_21 ._singer-name_1jeib_26{font-size:16px;font-weight:600;color:#262626;line-height:1.4}._singer-info_1jeib_8 ._singer-details_1jeib_21 ._singer-country_1jeib_32{font-size:13px;color:#666;display:flex;align-items:center;gap:4px}._singer-info_1jeib_8 ._singer-details_1jeib_21 ._singer-country_1jeib_32:before{content:"\u{1F4CD}";font-size:12px}._singer-info_1jeib_8 ._singer-details_1jeib_21 ._singer-id_1jeib_43{font-size:12px;color:#999;font-family:Courier New,monospace;background:#f5f5f5;padding:2px 6px;border-radius:4px;display:inline-block;width:fit-content}._singer-id-text_1jeib_54{font-family:Courier New,monospace;font-size:13px;color:#666;background:#f8f9fa;padding:4px 8px;border-radius:4px;border:1px solid #e9ecef}._singer-mid-text_1jeib_64{font-family:Courier New,monospace;font-size:12px;color:#999;background:#f5f5f5;padding:4px 8px;border-radius:4px;border:1px solid #e9ecef;word-break:break-all}._info-tag_1jeib_75{border-radius:6px;font-size:12px;padding:4px 8px;font-weight:500;border:none;box-shadow:0 1px 3px #0000001a}._info-tag_1jeib_75._ant-tag-blue_1jeib_83{background:linear-gradient(135deg,#e6f7ff,#bae7ff);color:#1890ff}._song-list-detail-modal_pu8y8_1 ._modal-header_pu8y8_1 ._modal-title_pu8y8_1{margin-bottom:16px}._song-list-detail-modal_pu8y8_1 ._modal-header_pu8y8_1 ._playlist-basic-info_pu8y8_4{display:flex;align-items:flex-start;gap:16px;padding:16px;background:#fafafa;border-radius:8px;margin-bottom:16px}._song-list-detail-modal_pu8y8_1 ._modal-header_pu8y8_1 ._playlist-basic-info_pu8y8_4 ._playlist-info_pu8y8_13{flex:1;display:flex;flex-direction:column;gap:8px}._song-list-detail-modal_pu8y8_1 ._modal-header_pu8y8_1 ._playlist-basic-info_pu8y8_4 ._playlist-info_pu8y8_13 ._playlist-name_pu8y8_19{margin:0;color:#262626}._song-list-detail-modal_pu8y8_1 ._modal-header_pu8y8_1 ._playlist-basic-info_pu8y8_4 ._playlist-info_pu8y8_13 ._creator-info_pu8y8_23{display:flex;align-items:center;gap:8px}._song-list-detail-modal_pu8y8_1 ._modal-header_pu8y8_1 ._playlist-basic-info_pu8y8_4 ._playlist-info_pu8y8_13 ._creator-info_pu8y8_23 ._creator-name_pu8y8_28{font-size:14px;color:#666}._song-list-detail-modal_pu8y8_1 ._modal-header_pu8y8_1 ._playlist-basic-info_pu8y8_4 ._playlist-info_pu8y8_13 ._playlist-stats_pu8y8_32{display:flex;align-items:center;gap:16px}._song-list-detail-modal_pu8y8_1 ._modal-header_pu8y8_1 ._playlist-basic-info_pu8y8_4 ._playlist-info_pu8y8_13 ._playlist-stats_pu8y8_32 ._ant-typography_pu8y8_37{font-size:12px;color:#999}._song-list-detail-modal_pu8y8_1 ._modal-header_pu8y8_1 ._playlist-basic-info_pu8y8_4 ._playlist-info_pu8y8_13 ._playlist-desc_pu8y8_41{margin-top:8px}._song-list-detail-modal_pu8y8_1 ._modal-header_pu8y8_1 ._playlist-basic-info_pu8y8_4 ._playlist-info_pu8y8_13 ._playlist-desc_pu8y8_41 ._description-text_pu8y8_44{font-size:12px;line-height:1.4;color:#666;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}._song-list-detail-modal_pu8y8_1 ._action-buttons_pu8y8_54{margin-top:24px;padding:16px;background:#f8f9fa;border-radius:8px;text-align:center}._song-list-detail-modal_pu8y8_1 ._song-list-section_pu8y8_61 ._ant-table_pu8y8_61 ._ant-table-thead_pu8y8_61>tr>th{background:#fafafa;font-weight:500}._song-list-detail-modal_pu8y8_1 ._song-list-section_pu8y8_61 ._ant-table_pu8y8_61 ._ant-table-tbody_pu8y8_65>tr:hover>td{background:#f5f5f5}._song-list-detail-modal_pu8y8_1 ._song-info_pu8y8_68{display:flex;flex-direction:column;gap:8px}._song-list-detail-modal_pu8y8_1 ._song-info_pu8y8_68 ._song-name_pu8y8_73{font-weight:500;font-size:14px;color:#262626;line-height:1.4}._song-list-detail-modal_pu8y8_1 ._song-info_pu8y8_68 ._song-artist_pu8y8_79{font-size:12px;color:#666;display:flex;align-items:center;flex-wrap:wrap;gap:4px}._song-list-detail-modal_pu8y8_1 ._song-info_pu8y8_68 ._song-artist_pu8y8_79 ._artist-item_pu8y8_87{display:flex;align-items:center}._song-list-detail-modal_pu8y8_1 ._song-info_pu8y8_68 ._song-artist_pu8y8_79 ._artist-item_pu8y8_87 ._artist-name_pu8y8_91{font-size:12px;color:#666}._song-list-detail-modal_pu8y8_1 ._song-info_pu8y8_68 ._song-artist_pu8y8_79 ._artist-item_pu8y8_87 ._artist-separator_pu8y8_95{margin:0 4px;color:#999;font-size:10px}._song-list-detail-modal_pu8y8_1 ._song-info_pu8y8_68 ._song-id_pu8y8_100 ._id-copy_pu8y8_100{font-size:11px}._song-list-detail-modal_pu8y8_1 ._album-info_pu8y8_103{display:flex;align-items:center}._song-list-detail-modal_pu8y8_1 ._album-info_pu8y8_103 ._album-details_pu8y8_107{display:flex;flex-direction:column;gap:4px;flex:1;min-width:0}._song-list-detail-modal_pu8y8_1 ._album-info_pu8y8_103 ._album-details_pu8y8_107 ._album-name_pu8y8_114{font-size:13px;color:#262626;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._song-list-detail-modal_pu8y8_1 ._album-info_pu8y8_103 ._album-details_pu8y8_107 ._album-id_pu8y8_122 ._id-copy_pu8y8_100{font-size:11px}._song-list-detail-modal_pu8y8_1 ._singer-list_pu8y8_125{display:flex;flex-direction:column;gap:8px}._song-list-detail-modal_pu8y8_1 ._singer-list_pu8y8_125 ._singer-item_pu8y8_130{display:flex;align-items:center}._song-list-detail-modal_pu8y8_1 ._singer-list_pu8y8_125 ._singer-item_pu8y8_130 ._singer-details_pu8y8_134{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}._song-list-detail-modal_pu8y8_1 ._singer-list_pu8y8_125 ._singer-item_pu8y8_130 ._singer-details_pu8y8_134 ._singer-name_pu8y8_141{font-size:13px;color:#262626;font-weight:500}._song-list-detail-modal_pu8y8_1 ._singer-list_pu8y8_125 ._singer-item_pu8y8_130 ._singer-details_pu8y8_134 ._id-copy_pu8y8_100{font-size:11px}._song-list-detail-modal_pu8y8_1 ._album-name_pu8y8_114{font-size:12px;color:#666;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._song-list-detail-modal_pu8y8_1 ._song-duration_pu8y8_157{font-family:monospace;font-size:12px;color:#999}._song-list-search-modal_1h6z1_1 ._play-count-overlay_1h6z1_1{position:absolute;bottom:2px;right:2px;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:#fff;font-size:10px;padding:2px 6px;border-radius:4px;font-weight:500;display:flex;align-items:center;gap:2px;min-width:20px;justify-content:center;line-height:1}._song-list-search-modal_1h6z1_1 ._playlist-cover-container_1h6z1_19{position:relative;display:inline-block}._song-list-search-modal_1h6z1_1 ._playlist-info_1h6z1_23{display:flex;flex-direction:column;gap:4px}._song-list-search-modal_1h6z1_1 ._playlist-info_1h6z1_23 ._playlist-name_1h6z1_28{font-weight:500;font-size:14px}._song-list-search-modal_1h6z1_1 ._playlist-info_1h6z1_23 ._creator-info_1h6z1_32{display:flex;align-items:center;gap:4px;font-size:12px;color:#666}._song-list-search-modal_1h6z1_1 ._playlist-info_1h6z1_23 ._creator-name_1h6z1_39{font-size:12px;color:#666}._song-list-search-modal_1h6z1_1 ._playlist-info_1h6z1_23 ._creator-qq_1h6z1_43{font-size:11px;color:#999}._song-list-search-modal_1h6z1_1 ._playlist-info_1h6z1_23 ._introduction_1h6z1_47{font-size:11px;color:#999;max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._song-list-search-modal_1h6z1_1 ._stats-info_1h6z1_55{display:flex;flex-direction:column;gap:4px;align-items:center}._song-list-search-modal_1h6z1_1 ._stats-info_1h6z1_55 ._score-item_1h6z1_61{display:flex;align-items:center;gap:8px}._song-list-search-modal_1h6z1_1 ._stats-info_1h6z1_55 ._score-item_1h6z1_61 ._score-value_1h6z1_66{font-size:14px;font-weight:500}._song-list-search-modal_1h6z1_1 ._stats-info_1h6z1_55 ._version-item_1h6z1_70{display:flex;align-items:center;gap:8px}._song-list-search-modal_1h6z1_1 ._stats-info_1h6z1_55 ._version-item_1h6z1_70 ._version-text_1h6z1_75{font-size:12px;color:#666}._song-list-search-modal_1h6z1_1 ._time-info_1h6z1_79{display:flex;flex-direction:column;gap:4px;align-items:center}._song-list-search-modal_1h6z1_1 ._time-info_1h6z1_79 ._create-time_1h6z1_85{display:flex;align-items:center;gap:4px;font-size:12px}._song-list-search-modal_1h6z1_1 ._time-info_1h6z1_79 ._commit-time_1h6z1_91{font-size:11px;color:#999}._song-list-search-modal_1h6z1_1 ._playlist-id_1h6z1_95{font-size:12px;color:#666;font-family:monospace;background:#f5f5f5;padding:2px 6px;border-radius:4px;cursor:pointer}._song-list-search-modal_1h6z1_1 ._playlist-id_1h6z1_95:hover{background:#e6f7ff;color:#1890ff}._song-search-modal_15iqn_1 ._modal-title_15iqn_1{display:flex;align-items:center;justify-content:space-between}._song-search-modal_15iqn_1 ._modal-title_15iqn_1 ._title-content_15iqn_6{display:flex;align-items:center;gap:12px}._song-search-modal_15iqn_1 ._modal-title_15iqn_1 ._title-content_15iqn_6 ._title-text_15iqn_11{font-size:16px;font-weight:600;color:#333}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-info_15iqn_16{display:flex;align-items:center;gap:12px}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-info_15iqn_16 ._song-cover_15iqn_21{width:60px;height:60px;border-radius:8px;overflow:hidden;background-color:#f5f5f5;display:flex;align-items:center;justify-content:center}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-info_15iqn_16 ._song-details_15iqn_31{display:flex;flex-direction:column;gap:4px}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-info_15iqn_16 ._song-details_15iqn_31 ._song-name_15iqn_36{font-size:14px;font-weight:500;color:#333;line-height:1.4;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:200px}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-info_15iqn_16 ._song-details_15iqn_31 ._song-album_15iqn_46{font-size:12px;color:#666;line-height:1.4;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:200px}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._singer-info_15iqn_55{display:flex;flex-direction:column;gap:4px}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._singer-info_15iqn_55 ._singer-name_15iqn_60{font-size:14px;color:#333;line-height:1.4;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._duration_15iqn_69{font-size:14px;color:#666;font-family:monospace}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-id-text_15iqn_74,._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-mid-text_15iqn_75{font-size:12px;color:#666;font-family:monospace;background-color:#f5f5f5;padding:2px 6px;border-radius:4px;cursor:pointer}._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-id-text_15iqn_74:hover,._song-search-modal_15iqn_1 ._song-table_15iqn_16 ._song-mid-text_15iqn_75:hover{background-color:#e6f7ff;color:#1890ff}._button-group_y8t3i_1{position:fixed;right:20px;top:50%;width:44px;max-height:400px;overflow-y:auto;background:#fff3;border-radius:22px;box-shadow:0 2px 10px #0006;padding:10px 0;z-index:999;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}._button-group_y8t3i_1::-webkit-scrollbar{width:0;background:transparent}._button-group_y8t3i_1 .ant-btn{width:36px;height:36px;padding:0;border:none;background:transparent;display:flex;align-items:center;justify-content:center;margin:4px auto;transition:all .3s}._button-group_y8t3i_1 .ant-btn:hover{background:#c20c0c1a;color:#fff;transform:scale(1.1)}._button-group_y8t3i_1 .ant-btn:active{transform:scale(.95)}._button-group_y8t3i_1 .ant-btn .anticon{font-size:20px;color:#666}._button-group_y8t3i_1 .ant-btn:hover .anticon{color:#fff}._button-group_y8t3i_1 .ant-tooltip .ant-tooltip-inner{background-color:#000c;border-radius:4px;font-size:12px;padding:4px 8px}._button-group_y8t3i_1 .ant-tooltip .ant-tooltip-arrow-content{background-color:#000c}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-track{background:transparent;border-radius:6px}::-webkit-scrollbar-thumb{background:#8080804d;border-radius:6px;transition:all .2s ease-in-out}::-webkit-scrollbar-thumb:hover{background:#80808080}*{scrollbar-width:thin;scrollbar-color:rgba(128,128,128,.3) transparent} ');

  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactJsxRuntime_production_min;
  function requireReactJsxRuntime_production_min() {
    if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
    hasRequiredReactJsxRuntime_production_min = 1;
    var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    reactJsxRuntime_production_min.Fragment = l;
    reactJsxRuntime_production_min.jsx = q;
    reactJsxRuntime_production_min.jsxs = q;
    return reactJsxRuntime_production_min;
  }
  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    {
      jsxRuntime.exports = requireReactJsxRuntime_production_min();
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
  var client = {};
  var hasRequiredClient;
  function requireClient() {
    if (hasRequiredClient) return client;
    hasRequiredClient = 1;
    var m = require$$0$1;
    {
      client.createRoot = m.createRoot;
      client.hydrateRoot = m.hydrateRoot;
    }
    return client;
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
    return require$$0.useRef(proxy);
  };
  const isDev = false;
  const defaultFunctionConfig = {
    /**
     * 是否开启搜索
     */
    enableSearch: isDev,
    /**
     * 是否开启GitHub信息
     */
    enableGithubInfo: true,
    /**
     * 是否开启功能开关Tab
     */
    enableFunctionSwitchTab: true,
    /**
     * 是否开启下载设置Tab
     */
    enableDownloadSetting: true,
    /**
     * 并发上传歌曲数量
     */
    uploadConcurrency: 6,
    /**
     * 是否开启测试Modal
     */
    enableTestModal: isDev,
    /**
     * 演唱会关键词
     */
    liveKeywords: ["演唱会", "Live", "live"]
  };
  const defaultDownloadConfig = {
    /** 下载音质 */
    quality: "flac",
    /** 是否下载歌词 */
    downloadLyric: true,
    /** 是否内嵌歌词封面 */
    embedLyricCover: true,
    /** 是否内嵌歌曲信息 */
    embedSongInfo: true
  };
  var createUpdateEffect = function(hook) {
    return function(effect, deps) {
      var isMounted = require$$0.useRef(false);
      hook(function() {
        return function() {
          isMounted.current = false;
        };
      }, []);
      hook(function() {
        if (!isMounted.current) {
          isMounted.current = true;
        } else {
          return effect();
        }
      }, deps);
    };
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
  var isUndef = function(value) {
    return typeof value === "undefined";
  };
  var useMemoizedFn = function(fn) {
    var fnRef = require$$0.useRef(fn);
    fnRef.current = require$$0.useMemo(function() {
      return fn;
    }, [fn]);
    var memoizedFn = require$$0.useRef(void 0);
    if (!memoizedFn.current) {
      memoizedFn.current = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return fnRef.current.apply(this, args);
      };
    }
    return memoizedFn.current;
  };
  const useUpdateEffect = createUpdateEffect(require$$0.useEffect);
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
    var ref = require$$0.useRef(value);
    ref.current = value;
    return ref;
  }
  var useUnmount = function(fn) {
    var fnRef = useLatest(fn);
    require$$0.useEffect(function() {
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
      var hasInitRef = require$$0.useRef(false);
      var lastElementRef = require$$0.useRef([]);
      var lastDepsRef = require$$0.useRef([]);
      var unLoadRef = require$$0.useRef(void 0);
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
  var useEffectWithTarget$1 = createEffectWithTarget(require$$0.useEffect);
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
  function useEventListener(eventName, handler, options) {
    if (options === void 0) {
      options = {};
    }
    var _a = options.enable, enable = _a === void 0 ? true : _a;
    var handlerRef = useLatest(handler);
    useEffectWithTarget$1(function() {
      if (!enable) {
        return;
      }
      var targetElement = getTargetElement(options.target, window);
      if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) {
        return;
      }
      var eventListener = function(event) {
        return handlerRef.current(event);
      };
      var eventNameArray = Array.isArray(eventName) ? eventName : [eventName];
      eventNameArray.forEach(function(event) {
        targetElement.addEventListener(event, eventListener, {
          capture: options.capture,
          once: options.once,
          passive: options.passive
        });
      });
      return function() {
        eventNameArray.forEach(function(event) {
          targetElement.removeEventListener(event, eventListener, {
            capture: options.capture
          });
        });
      };
    }, [eventName, options.capture, options.once, options.passive, enable], options.target);
  }
  var SYNC_STORAGE_EVENT_NAME = "AHOOKS_SYNC_STORAGE_EVENT_NAME";
  function createUseStorageState(getStorage) {
    function useStorageState(key, options) {
      if (options === void 0) {
        options = {};
      }
      var storage;
      var _a = options.listenStorageChange, listenStorageChange = _a === void 0 ? false : _a, _b = options.onError, onError = _b === void 0 ? function(e) {
        console.error(e);
      } : _b;
      try {
        storage = getStorage();
      } catch (err) {
        onError(err);
      }
      var serializer = function(value) {
        if (options.serializer) {
          return options.serializer(value);
        }
        return JSON.stringify(value);
      };
      var deserializer = function(value) {
        if (options.deserializer) {
          return options.deserializer(value);
        }
        return JSON.parse(value);
      };
      function getStoredValue() {
        try {
          var raw = storage === null || storage === void 0 ? void 0 : storage.getItem(key);
          if (raw) {
            return deserializer(raw);
          }
        } catch (e) {
          onError(e);
        }
        if (isFunction(options.defaultValue)) {
          return options.defaultValue();
        }
        return options.defaultValue;
      }
      var _c = __read(require$$0.useState(getStoredValue), 2), state = _c[0], setState = _c[1];
      useUpdateEffect(function() {
        setState(getStoredValue());
      }, [key]);
      var updateState = function(value) {
        var currentState = isFunction(value) ? value(state) : value;
        if (!listenStorageChange) {
          setState(currentState);
        }
        try {
          var newValue = void 0;
          var oldValue = storage === null || storage === void 0 ? void 0 : storage.getItem(key);
          if (isUndef(currentState)) {
            newValue = null;
            storage === null || storage === void 0 ? void 0 : storage.removeItem(key);
          } else {
            newValue = serializer(currentState);
            storage === null || storage === void 0 ? void 0 : storage.setItem(key, newValue);
          }
          dispatchEvent(
            // send custom event to communicate within same page
            // importantly this should not be a StorageEvent since those cannot
            // be constructed with a non-built-in storage area
            new CustomEvent(SYNC_STORAGE_EVENT_NAME, {
              detail: {
                key,
                newValue,
                oldValue,
                storageArea: storage
              }
            })
          );
        } catch (e) {
          onError(e);
        }
      };
      var syncState = function(event) {
        if (event.key !== key || event.storageArea !== storage) {
          return;
        }
        setState(getStoredValue());
      };
      var syncStateFromCustomEvent = function(event) {
        syncState(event.detail);
      };
      useEventListener("storage", syncState, {
        enable: listenStorageChange
      });
      useEventListener(SYNC_STORAGE_EVENT_NAME, syncStateFromCustomEvent, {
        enable: listenStorageChange
      });
      return [state, useMemoizedFn(updateState)];
    }
    return useStorageState;
  }
  var useLocalStorageState = createUseStorageState(function() {
    return isBrowser$1 ? localStorage : void 0;
  });
  function useRafState(initialState) {
    var ref = require$$0.useRef(0);
    var _a = __read(require$$0.useState(initialState), 2), state = _a[0], setState = _a[1];
    var setRafState = require$$0.useCallback(function(value) {
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
  var useEffectWithTarget = createEffectWithTarget(require$$0.useLayoutEffect);
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
  const useConfig = () => {
    const [downloadConfig, setDownloadConfig] = useLocalStorageState(
      "qqmusic_downloadConfig",
      {
        defaultValue: defaultDownloadConfig,
        listenStorageChange: true
      }
    );
    const [functionConfig, setFunctionConfig] = useLocalStorageState(
      "qqmusic_functionConfig",
      {
        defaultValue: defaultFunctionConfig,
        listenStorageChange: true
      }
    );
    require$$0.useEffect(() => {
      setFunctionConfig({
        ...defaultFunctionConfig,
        ...functionConfig
      });
      setDownloadConfig({
        ...defaultDownloadConfig,
        ...downloadConfig
      });
    }, []);
    return {
      /** 下载配置 */
      downloadConfig: downloadConfig || defaultDownloadConfig,
      /** 设置下载配置 */
      setDownloadConfig,
      /** 功能配置 */
      functionConfig: functionConfig || defaultFunctionConfig,
      /** 设置功能配置 */
      setFunctionConfig
    };
  };
  function useFilter(list, config) {
    const [filteredList, setFilteredList] = require$$0.useState(list);
    require$$0.useEffect(() => {
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
    const { size = "800x800", maxAge = 2592e3 } = options || {};
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
    if (!key) return arr;
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
  const getFile_qualityList = (file) => {
    const qualityList = [];
    if (file.size_flac) qualityList.push("flac");
    if (file.size_ape) qualityList.push("ape");
    if (file.size_320mp3) qualityList.push(320);
    if (file.size_192aac) qualityList.push("m4a");
    if (file.size_128mp3) qualityList.push(128);
    return qualityList;
  };
  const getFileQualityList = (file) => {
    const qualityList = [];
    if (file.size128) qualityList.push(128);
    if (file.size320) qualityList.push(320);
    if (file.sizeflac) qualityList.push("flac");
    return qualityList;
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
  const FlacTag = {
    标题: "title",
    艺术家: "artist",
    专辑: "album",
    年份: "year",
    流派: "genre",
    评论: "comment",
    音轨: "track",
    碟片: "disc",
    作曲家: "composer",
    作词家: "lyricist",
    歌词: "lyrics"
  };
  mapToList(FlacTag);
  const FLAC_TAGS = Object.entries(FlacTag).reduce(
    (acc, [key, value]) => {
      acc[value] = key;
      return acc;
    },
    {}
  );
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
  function stringToBytes(str, encoding = "utf8") {
    if (encoding === "utf8") {
      const utf8 = unescape(encodeURIComponent(str));
      const bytes = new Uint8Array(utf8.length);
      for (let i = 0; i < utf8.length; i++) {
        bytes[i] = utf8.charCodeAt(i);
      }
      return bytes;
    } else if (encoding === "ascii") {
      const bytes = new Uint8Array(str.length);
      for (let i = 0; i < str.length; i++) {
        bytes[i] = str.charCodeAt(i) & 255;
      }
      return bytes;
    } else if (encoding === "hex") {
      const bytes = new Uint8Array(str.length / 2);
      for (let i = 0; i < str.length; i += 2) {
        bytes[i / 2] = parseInt(str.substr(i, 2), 16);
      }
      return bytes;
    }
    throw new Error(`Unsupported encoding: ${encoding}`);
  }
  function bytesToString(bytes, encoding = "utf8") {
    if (encoding === "utf8") {
      let str = "";
      for (let i = 0; i < bytes.length; i++) {
        str += String.fromCharCode(bytes[i]);
      }
      try {
        return decodeURIComponent(escape(str));
      } catch (e) {
        return str;
      }
    } else if (encoding === "ascii") {
      let str = "";
      for (let i = 0; i < bytes.length; i++) {
        str += String.fromCharCode(bytes[i] & 255);
      }
      return str;
    } else if (encoding === "hex") {
      let hex = "";
      for (let i = 0; i < bytes.length; i++) {
        const h = bytes[i].toString(16);
        hex += h.length === 1 ? "0" + h : h;
      }
      return hex;
    }
    throw new Error(`Unsupported encoding: ${encoding}`);
  }
  class BrowserBuffer {
    constructor(data, byteOffset, length) {
      if (typeof data === "number") {
        this._data = new Uint8Array(data);
        this._view = new DataView(this._data.buffer);
      } else if (data instanceof Uint8Array) {
        this._data = data;
        this._view = new DataView(this._data.buffer, data.byteOffset, data.byteLength);
      } else if (typeof data === "string") {
        const encoding = byteOffset || "utf8";
        this._data = stringToBytes(data, encoding);
        this._view = new DataView(this._data.buffer);
      } else if (data instanceof ArrayBuffer) {
        const offset = byteOffset || 0;
        const len = length !== void 0 ? length : data.byteLength - offset;
        this._data = new Uint8Array(data, offset, len);
        this._view = new DataView(data, offset, len);
      } else if (data instanceof BrowserBuffer) {
        this._data = data._data;
        this._view = data._view;
      } else if (Array.isArray(data)) {
        this._data = new Uint8Array(data);
        this._view = new DataView(this._data.buffer);
      } else if (data === void 0) {
        this._data = new Uint8Array(0);
        this._view = new DataView(this._data.buffer);
      } else {
        this._data = new Uint8Array(data);
        this._view = new DataView(this._data.buffer);
      }
    }
    /**
     * 读取无符号 8 位整数
     */
    readUInt8(offset) {
      return this._view.getUint8(offset);
    }
    /**
     * 读取无符号 16 位整数（大端序）
     */
    readUInt16BE(offset) {
      return this._view.getUint16(offset, false);
    }
    /**
     * 读取无符号 16 位整数（小端序）
     */
    readUInt16LE(offset) {
      return this._view.getUint16(offset, true);
    }
    /**
     * 读取无符号 32 位整数（大端序）
     */
    readUInt32BE(offset) {
      return this._view.getUint32(offset, false);
    }
    /**
     * 读取无符号 32 位整数（小端序）
     */
    readUInt32LE(offset) {
      return this._view.getUint32(offset, true);
    }
    /**
     * 读取无符号整数（大端序，可变长度）
     */
    readUIntBE(offset, byteLength) {
      let value = 0;
      for (let i = 0; i < byteLength; i++) {
        value = (value << 8) + this._view.getUint8(offset + i);
      }
      return value;
    }
    /**
     * 写入无符号 8 位整数
     */
    writeUInt8(value, offset) {
      this._view.setUint8(offset, value);
    }
    /**
     * 写入无符号 16 位整数（大端序）
     */
    writeUInt16BE(value, offset) {
      this._view.setUint16(offset, value, false);
    }
    /**
     * 写入无符号 32 位整数（大端序）
     */
    writeUInt32BE(value, offset) {
      this._view.setUint32(offset, value, false);
    }
    /**
     * 写入无符号 32 位整数（小端序）
     */
    writeUInt32LE(value, offset) {
      this._view.setUint32(offset, value, true);
    }
    /**
     * 写入无符号整数（大端序，可变长度）
     */
    writeUIntBE(value, offset, byteLength) {
      for (let i = byteLength - 1; i >= 0; i--) {
        this._view.setUint8(offset + i, value & 255);
        value = value >> 8;
      }
    }
    /**
     * 转换为字符串
     */
    toString(encoding = "utf8") {
      return bytesToString(this._data, encoding);
    }
    /**
     * 切片
     */
    slice(start, end) {
      const sliced = this._data.slice(start, end);
      return new BrowserBuffer(sliced);
    }
    /**
     * 获取长度
     */
    get length() {
      return this._data.length;
    }
    /**
     * 获取底层 ArrayBuffer
     */
    get buffer() {
      return this._data.buffer;
    }
    /**
     * 转换为 Uint8Array
     */
    toUint8Array() {
      return new Uint8Array(this._data);
    }
    /**
     * 转换为 ArrayBuffer
     */
    toArrayBuffer() {
      const buf = this.buffer;
      if (typeof SharedArrayBuffer !== "undefined" && buf instanceof SharedArrayBuffer) {
        throw new Error("Cannot convert SharedArrayBuffer to ArrayBuffer");
      }
      return buf.slice(
        this._data.byteOffset,
        this._data.byteOffset + this._data.byteLength
      );
    }
    /**
     * 创建指定大小的 Buffer
     */
    static alloc(size) {
      return new BrowserBuffer(size);
    }
    /**
     * 从数据创建 Buffer
     */
    static from(data, encoding) {
      if (data instanceof BrowserBuffer) {
        return data;
      }
      if (data instanceof Uint8Array) {
        return new BrowserBuffer(data);
      }
      if (data instanceof ArrayBuffer) {
        return new BrowserBuffer(data);
      }
      if (typeof data === "string") {
        return new BrowserBuffer(data, encoding);
      }
      if (Array.isArray(data)) {
        return new BrowserBuffer(new Uint8Array(data));
      }
      throw new Error("Unsupported data type");
    }
    /**
     * 连接多个 Buffer
     */
    static concat(buffers) {
      let totalLength = 0;
      for (let i = 0; i < buffers.length; i++) {
        totalLength += buffers[i].length;
      }
      const result = new Uint8Array(totalLength);
      let offset = 0;
      for (let i = 0; i < buffers.length; i++) {
        const buf = buffers[i];
        if (buf instanceof BrowserBuffer) {
          result.set(buf._data, offset);
          offset += buf.length;
        } else if (buf instanceof Uint8Array) {
          result.set(buf, offset);
          offset += buf.length;
        }
      }
      return new BrowserBuffer(result);
    }
  }
  function detectImageType(data) {
    let bytes;
    if (data instanceof Uint8Array) {
      bytes = data;
    } else if (data instanceof ArrayBuffer) {
      bytes = new Uint8Array(data);
    } else if (data instanceof BrowserBuffer) {
      bytes = data.toUint8Array();
    } else {
      bytes = new Uint8Array(data);
    }
    if (bytes.length >= 3 && bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255) {
      return { mime: "image/jpeg" };
    }
    if (bytes.length >= 8 && bytes[0] === 137 && bytes[1] === 80 && bytes[2] === 78 && bytes[3] === 71 && bytes[4] === 13 && bytes[5] === 10 && bytes[6] === 26 && bytes[7] === 10) {
      return { mime: "image/png" };
    }
    if (bytes.length >= 4 && bytes[0] === 71 && bytes[1] === 73 && bytes[2] === 70 && bytes[3] === 56) {
      return { mime: "image/gif" };
    }
    if (bytes.length >= 12 && bytes[0] === 82 && bytes[1] === 73 && bytes[2] === 70 && bytes[3] === 70 && bytes[8] === 87 && bytes[9] === 69 && bytes[10] === 66 && bytes[11] === 80) {
      return { mime: "image/webp" };
    }
    throw new Error("Unsupported image type");
  }
  function parseJpegSize(bytes) {
    let offset = 2;
    while (offset < bytes.length) {
      if (bytes[offset] !== 255) {
        offset++;
        continue;
      }
      const marker = bytes[offset + 1];
      if (marker >= 192 && marker <= 195) {
        const height = bytes[offset + 5] << 8 | bytes[offset + 6];
        const width = bytes[offset + 7] << 8 | bytes[offset + 8];
        return { width, height };
      }
      if (marker === 216 || marker === 217) {
        offset += 2;
      } else if (marker >= 208 && marker <= 215) {
        offset += 2;
      } else {
        const length = bytes[offset + 2] << 8 | bytes[offset + 3];
        offset += 2 + length;
      }
    }
    throw new Error("Could not determine JPEG dimensions");
  }
  function parsePngSize(bytes) {
    if (bytes.length < 24) {
      throw new Error("Invalid PNG file");
    }
    const width = bytes[16] << 24 | bytes[17] << 16 | bytes[18] << 8 | bytes[19];
    const height = bytes[20] << 24 | bytes[21] << 16 | bytes[22] << 8 | bytes[23];
    return { width, height };
  }
  function getImageSize(data) {
    let bytes;
    if (data instanceof Uint8Array) {
      bytes = data;
    } else if (data instanceof ArrayBuffer) {
      bytes = new Uint8Array(data);
    } else if (data instanceof BrowserBuffer) {
      bytes = data.toUint8Array();
    } else {
      bytes = new Uint8Array(data);
    }
    const type = detectImageType(bytes);
    if (type.mime === "image/jpeg") {
      return parseJpegSize(bytes);
    } else if (type.mime === "image/png") {
      return parsePngSize(bytes);
    } else {
      throw new Error(`Unsupported image type: ${type.mime}`);
    }
  }
  function formatVorbisComment(vendorString, commentList) {
    const bufferArray = [];
    const vendorStringBuffer = BrowserBuffer.from(vendorString, "utf8");
    const vendorLengthBuffer = BrowserBuffer.alloc(4);
    vendorLengthBuffer.writeUInt32LE(vendorStringBuffer.length, 0);
    const userCommentListLengthBuffer = BrowserBuffer.alloc(4);
    userCommentListLengthBuffer.writeUInt32LE(commentList.length, 0);
    bufferArray.push(vendorLengthBuffer, vendorStringBuffer, userCommentListLengthBuffer);
    for (let i = 0; i < commentList.length; i++) {
      const comment = commentList[i];
      const commentBuffer = BrowserBuffer.from(comment, "utf8");
      const lengthBuffer = BrowserBuffer.alloc(4);
      lengthBuffer.writeUInt32LE(commentBuffer.length, 0);
      bufferArray.push(lengthBuffer, commentBuffer);
    }
    return BrowserBuffer.concat(bufferArray);
  }
  const STREAMINFO = 0;
  const PADDING = 1;
  const APPLICATION = 2;
  const SEEKTABLE = 3;
  const VORBIS_COMMENT = 4;
  const CUESHEET = 5;
  const PICTURE = 6;
  async function toBrowserBuffer(data) {
    if (data instanceof BrowserBuffer) {
      return data;
    }
    if (data instanceof Uint8Array) {
      return new BrowserBuffer(data);
    }
    if (data instanceof ArrayBuffer) {
      return new BrowserBuffer(data);
    }
    if (data instanceof File || data instanceof Blob) {
      const arrayBuffer = await data.arrayBuffer();
      return new BrowserBuffer(arrayBuffer);
    }
    throw new Error(
      "Unsupported data type. Expected ArrayBuffer, Uint8Array, File, Blob, or BrowserBuffer."
    );
  }
  class Metaflac {
    /**
     * 创建 Metaflac 实例
     * @param flac - FLAC 文件数据
     */
    constructor(flac) {
      this.buffer = null;
      this.streamInfo = null;
      this.blocks = [];
      this.padding = null;
      this.vorbisComment = null;
      this.vendorString = "";
      this.tags = [];
      this.pictures = [];
      this.picturesSpecs = [];
      this.picturesDatas = [];
      this.framesOffset = 0;
      if (flac instanceof File || flac instanceof Blob) {
        throw new Error(
          "File and Blob objects must be loaded asynchronously. Use Metaflac.fromFile() or Metaflac.fromBlob() instead."
        );
      }
      this.flac = flac;
      this.init();
    }
    /**
     * 从 File 对象创建 Metaflac 实例（异步）
     * @param file - File 对象
     * @returns Promise<Metaflac>
     */
    static async fromFile(file) {
      const buffer = await toBrowserBuffer(file);
      return new Metaflac(buffer);
    }
    /**
     * 从 Blob 对象创建 Metaflac 实例（异步）
     * @param blob - Blob 对象
     * @returns Promise<Metaflac>
     */
    static async fromBlob(blob) {
      const buffer = await toBrowserBuffer(blob);
      return new Metaflac(buffer);
    }
    /**
     * 从 ArrayBuffer 创建 Metaflac 实例
     * @param arrayBuffer - ArrayBuffer 对象
     * @returns Metaflac
     */
    static fromArrayBuffer(arrayBuffer) {
      return new Metaflac(arrayBuffer);
    }
    /**
     * 从 Uint8Array 创建 Metaflac 实例
     * @param uint8Array - Uint8Array 对象
     * @returns Metaflac
     */
    static fromUint8Array(uint8Array) {
      return new Metaflac(uint8Array);
    }
    init() {
      if (this.flac instanceof BrowserBuffer) {
        this.buffer = this.flac;
      } else if (this.flac instanceof Uint8Array) {
        this.buffer = new BrowserBuffer(this.flac);
      } else if (this.flac instanceof ArrayBuffer) {
        this.buffer = new BrowserBuffer(this.flac);
      } else {
        throw new Error("Metaflac(flac) flac must be ArrayBuffer, Uint8Array, or BrowserBuffer.");
      }
      let offset = 0;
      const marker = this.buffer.slice(0, offset += 4).toString("ascii");
      if (marker !== "fLaC") {
        throw new Error("The file does not appear to be a FLAC file.");
      }
      let blockType = 0;
      let isLastBlock = false;
      while (!isLastBlock) {
        blockType = this.buffer.readUInt8(offset++);
        isLastBlock = blockType > 128;
        blockType = blockType % 128;
        const blockLength = this.buffer.readUIntBE(offset, 3);
        offset += 3;
        if (blockType === STREAMINFO) {
          this.streamInfo = this.buffer.slice(offset, offset + blockLength);
        }
        if (blockType === PADDING) {
          this.padding = this.buffer.slice(offset, offset + blockLength);
        }
        if (blockType === VORBIS_COMMENT) {
          this.vorbisComment = this.buffer.slice(offset, offset + blockLength);
          this.parseVorbisComment();
        }
        if (blockType === PICTURE) {
          this.pictures.push(this.buffer.slice(offset, offset + blockLength));
          this.parsePictureBlock();
        }
        if ([APPLICATION, SEEKTABLE, CUESHEET].includes(blockType)) {
          this.blocks.push([blockType, this.buffer.slice(offset, offset + blockLength)]);
        }
        offset += blockLength;
      }
      this.framesOffset = offset;
    }
    parseVorbisComment() {
      if (!this.vorbisComment) {
        return;
      }
      const vendorLength = this.vorbisComment.readUInt32LE(0);
      this.vendorString = this.vorbisComment.slice(4, vendorLength + 4).toString("utf8");
      this.vorbisComment.readUInt32LE(4 + vendorLength);
      const userCommentListBuffer = this.vorbisComment.slice(4 + vendorLength + 4);
      for (let offset = 0; offset < userCommentListBuffer.length; ) {
        const length = userCommentListBuffer.readUInt32LE(offset);
        offset += 4;
        const comment = userCommentListBuffer.slice(offset, offset + length).toString("utf8");
        offset += length;
        this.tags.push(comment);
      }
    }
    parsePictureBlock() {
      this.pictures.forEach((picture) => {
        let offset = 0;
        const type = picture.readUInt32BE(offset);
        offset += 4;
        const mimeTypeLength = picture.readUInt32BE(offset);
        offset += 4;
        const mime = picture.slice(offset, offset + mimeTypeLength).toString("ascii");
        offset += mimeTypeLength;
        const descriptionLength = picture.readUInt32BE(offset);
        offset += 4;
        const description = picture.slice(offset, offset + descriptionLength).toString("utf8");
        offset += descriptionLength;
        const width = picture.readUInt32BE(offset);
        offset += 4;
        const height = picture.readUInt32BE(offset);
        offset += 4;
        const depth = picture.readUInt32BE(offset);
        offset += 4;
        const colors = picture.readUInt32BE(offset);
        offset += 4;
        const pictureDataLength = picture.readUInt32BE(offset);
        offset += 4;
        this.picturesDatas.push(picture.slice(offset, offset + pictureDataLength));
        this.picturesSpecs.push(
          this.buildSpecification({
            type,
            mime,
            description,
            width,
            height,
            depth,
            colors
          })
        );
      });
    }
    /**
     * 获取所有图片规格
     * @returns 图片规格数组
     */
    getPicturesSpecs() {
      return this.picturesSpecs;
    }
    /**
     * Get the MD5 signature from the STREAMINFO block.
     */
    getMd5sum() {
      if (!this.streamInfo) {
        throw new Error("StreamInfo is not available");
      }
      return this.streamInfo.slice(18, 34).toString("hex");
    }
    /**
     * Get the minimum block size from the STREAMINFO block.
     */
    getMinBlocksize() {
      if (!this.streamInfo) {
        throw new Error("StreamInfo is not available");
      }
      return this.streamInfo.readUInt16BE(0);
    }
    /**
     * Get the maximum block size from the STREAMINFO block.
     */
    getMaxBlocksize() {
      if (!this.streamInfo) {
        throw new Error("StreamInfo is not available");
      }
      return this.streamInfo.readUInt16BE(2);
    }
    /**
     * Get the minimum frame size from the STREAMINFO block.
     */
    getMinFramesize() {
      if (!this.streamInfo) {
        throw new Error("StreamInfo is not available");
      }
      return this.streamInfo.readUIntBE(4, 3);
    }
    /**
     * Get the maximum frame size from the STREAMINFO block.
     */
    getMaxFramesize() {
      if (!this.streamInfo) {
        throw new Error("StreamInfo is not available");
      }
      return this.streamInfo.readUIntBE(7, 3);
    }
    /**
     * Get the sample rate from the STREAMINFO block.
     */
    getSampleRate() {
      if (!this.streamInfo) {
        throw new Error("StreamInfo is not available");
      }
      return this.streamInfo.readUIntBE(10, 3) >> 4;
    }
    /**
     * Get the number of channels from the STREAMINFO block.
     */
    getChannels() {
      if (!this.streamInfo) {
        throw new Error("StreamInfo is not available");
      }
      return (this.streamInfo.readUIntBE(10, 3) & 15) >> 1;
    }
    /**
     * Get the # of bits per sample from the STREAMINFO block.
     */
    getBps() {
      if (!this.streamInfo) {
        throw new Error("StreamInfo is not available");
      }
      return (this.streamInfo.readUIntBE(12, 2) & 496) >> 4;
    }
    /**
     * Get the total # of samples from the STREAMINFO block.
     */
    getTotalSamples() {
      if (!this.streamInfo) {
        throw new Error("StreamInfo is not available");
      }
      return this.streamInfo.readUIntBE(13, 5) & 68719476735;
    }
    /**
     * Show the vendor string from the VORBIS_COMMENT block.
     */
    getVendorTag() {
      return this.vendorString;
    }
    /**
     * Get all tags where the the field name matches NAME.
     *
     * @param name - 标签名称
     * @returns 匹配的标签字符串（多个用换行符分隔）
     */
    getTag(name) {
      return this.tags.filter((item) => {
        const itemName = item.split("=")[0];
        return itemName === name;
      }).join("\n");
    }
    /**
     * Remove all tags whose field name is NAME.
     *
     * @param name - 标签名称
     */
    removeTag(name) {
      this.tags = this.tags.filter((item) => {
        const itemName = item.split("=")[0];
        return itemName !== name;
      });
    }
    /**
     * Remove first tag whose field name is NAME.
     *
     * @param name - 标签名称
     */
    removeFirstTag(name) {
      const found = this.tags.findIndex((item) => {
        return item.split("=")[0] === name;
      });
      if (found !== -1) {
        this.tags.splice(found, 1);
      }
    }
    /**
     * Remove all tags, leaving only the vendor string.
     */
    removeAllTags() {
      this.tags = [];
    }
    /**
     * Add a tag.
     * The FIELD must comply with the Vorbis comment spec, of the form NAME=VALUE. If there is currently no tag block, one will be created.
     *
     * @param field - 标签字段，格式为 NAME=VALUE
     */
    setTag(field) {
      if (field.indexOf("=") === -1) {
        throw new Error(`malformed vorbis comment field "${field}", field contains no '=' character`);
      }
      this.tags.push(field);
    }
    /**
     * Import tags from a string.
     * Each line should be of the form NAME=VALUE.
     *
     * @param tagsString - 标签字符串，每行一个标签
     */
    importTagsFromString(tagsString) {
      const tags = tagsString.split("\n").filter((line) => line.trim());
      tags.forEach((line) => {
        if (line.indexOf("=") === -1) {
          throw new Error(`malformed vorbis comment "${line}", contains no '=' character`);
        }
      });
      this.tags = this.tags.concat(tags);
    }
    /**
     * Export tags to a string.
     * Each line will be of the form NAME=VALUE.
     *
     * @returns 标签字符串
     */
    exportTagsToString() {
      return this.tags.join("\n");
    }
    /**
     * Import a picture and store it in a PICTURE metadata block.
     *
     * @param picture - 图片数据
     */
    importPictureFromBuffer(picture) {
      let pictureBuffer;
      if (picture instanceof BrowserBuffer) {
        pictureBuffer = picture;
      } else if (picture instanceof Uint8Array) {
        pictureBuffer = new BrowserBuffer(picture);
      } else if (picture instanceof ArrayBuffer) {
        pictureBuffer = new BrowserBuffer(picture);
      } else {
        throw new Error("Picture must be Uint8Array, ArrayBuffer, or BrowserBuffer");
      }
      const pictureArray = pictureBuffer.toUint8Array();
      const { mime } = detectImageType(pictureArray);
      if (mime !== "image/jpeg" && mime !== "image/png") {
        throw new Error(
          `only support image/jpeg and image/png picture temporarily, current import ${mime}`
        );
      }
      const dimensions = getImageSize(pictureArray);
      const spec = this.buildSpecification({
        mime,
        width: dimensions.width,
        height: dimensions.height
      });
      this.pictures.push(this.buildPictureBlock(pictureBuffer, spec));
      this.picturesSpecs.push(spec);
      this.picturesDatas.push(pictureBuffer);
    }
    /**
     * Import a picture from File or Blob (async).
     *
     * @param file - 图片文件
     * @returns Promise<void>
     */
    async importPictureFromFile(file) {
      const arrayBuffer = await file.arrayBuffer();
      this.importPictureFromBuffer(arrayBuffer);
    }
    /**
     * Export PICTURE block to a Blob.
     *
     * @param index - 图片索引，默认为 0
     * @returns Blob
     */
    exportPictureToBlob(index2 = 0) {
      if (this.picturesDatas.length > index2) {
        const pictureData = this.picturesDatas[index2];
        const spec = this.picturesSpecs[index2];
        return new Blob([pictureData.toArrayBuffer()], { type: spec.mime });
      }
      throw new Error(`Picture index ${index2} does not exist`);
    }
    /**
     * Export PICTURE block to ArrayBuffer.
     *
     * @param index - 图片索引，默认为 0
     * @returns ArrayBuffer
     */
    exportPictureToArrayBuffer(index2 = 0) {
      if (this.picturesDatas.length > index2) {
        return this.picturesDatas[index2].toArrayBuffer();
      }
      throw new Error(`Picture index ${index2} does not exist`);
    }
    /**
     * Remove a picture at the specified index.
     *
     * @param index - 图片索引，默认为 0
     */
    removePicture(index2 = 0) {
      if (this.pictures.length > index2) {
        this.pictures.splice(index2, 1);
        this.picturesSpecs.splice(index2, 1);
        this.picturesDatas.splice(index2, 1);
      } else {
        throw new Error(`Picture index ${index2} does not exist`);
      }
    }
    /**
     * Remove all pictures.
     */
    removeAllPictures() {
      this.pictures = [];
      this.picturesSpecs = [];
      this.picturesDatas = [];
    }
    /**
     * Return all tags.
     */
    getAllTags() {
      return this.tags;
    }
    buildSpecification(spec = {}) {
      const defaults = {
        type: 3,
        mime: "image/jpeg",
        description: "",
        width: 0,
        height: 0,
        depth: 24,
        colors: 0
      };
      return Object.assign(defaults, spec);
    }
    /**
     * Build a picture block.
     *
     * @param picture - 图片数据
     * @param specification - 图片规格
     * @returns BrowserBuffer
     */
    buildPictureBlock(picture, specification) {
      const pictureType = BrowserBuffer.alloc(4);
      const mimeLength = BrowserBuffer.alloc(4);
      const mime = BrowserBuffer.from(specification.mime, "ascii");
      const descriptionLength = BrowserBuffer.alloc(4);
      const description = BrowserBuffer.from(specification.description, "utf8");
      const width = BrowserBuffer.alloc(4);
      const height = BrowserBuffer.alloc(4);
      const depth = BrowserBuffer.alloc(4);
      const colors = BrowserBuffer.alloc(4);
      const pictureLength = BrowserBuffer.alloc(4);
      pictureType.writeUInt32BE(specification.type, 0);
      mimeLength.writeUInt32BE(specification.mime.length, 0);
      descriptionLength.writeUInt32BE(specification.description.length, 0);
      width.writeUInt32BE(specification.width, 0);
      height.writeUInt32BE(specification.height, 0);
      depth.writeUInt32BE(specification.depth, 0);
      colors.writeUInt32BE(specification.colors, 0);
      pictureLength.writeUInt32BE(picture.length, 0);
      return BrowserBuffer.concat([
        pictureType,
        mimeLength,
        mime,
        descriptionLength,
        description,
        width,
        height,
        depth,
        colors,
        pictureLength,
        picture
      ]);
    }
    buildMetadataBlock(type, block, isLast = false) {
      const header = BrowserBuffer.alloc(4);
      if (isLast) {
        type += 128;
      }
      header.writeUIntBE(type, 0, 1);
      header.writeUIntBE(block.length, 1, 3);
      return BrowserBuffer.concat([header, block]);
    }
    buildMetadata() {
      if (!this.streamInfo) {
        throw new Error("StreamInfo is not available");
      }
      const bufferArray = [];
      bufferArray.push(this.buildMetadataBlock(STREAMINFO, this.streamInfo));
      this.blocks.forEach((block) => {
        bufferArray.push(this.buildMetadataBlock(...block));
      });
      bufferArray.push(
        this.buildMetadataBlock(VORBIS_COMMENT, formatVorbisComment(this.vendorString, this.tags))
      );
      this.pictures.forEach((block) => {
        bufferArray.push(this.buildMetadataBlock(PICTURE, block));
      });
      const padding = this.padding || BrowserBuffer.alloc(4);
      bufferArray.push(this.buildMetadataBlock(PADDING, padding, true));
      return bufferArray;
    }
    buildStream() {
      if (!this.buffer) {
        throw new Error("Buffer is not available");
      }
      const metadata = this.buildMetadata();
      return [this.buffer.slice(0, 4), ...metadata, this.buffer.slice(this.framesOffset)];
    }
    /**
     * Save changes and return ArrayBuffer.
     *
     * @returns ArrayBuffer
     */
    save() {
      const stream = this.buildStream();
      const result = BrowserBuffer.concat(stream);
      return result.toArrayBuffer();
    }
    /**
     * Save changes and return Blob.
     *
     * @returns Blob
     */
    saveAsBlob() {
      const arrayBuffer = this.save();
      return new Blob([arrayBuffer], { type: "audio/flac" });
    }
    /**
     * Save changes and return BrowserBuffer.
     *
     * @returns BrowserBuffer
     */
    saveAsBuffer() {
      const stream = this.buildStream();
      return BrowserBuffer.concat(stream);
    }
  }
  const parseTags = (tags) => {
    const result = {};
    tags.forEach((tag) => {
      const equalIndex = tag.indexOf("=");
      if (equalIndex === -1) return;
      const name = tag.substring(0, equalIndex).toLowerCase();
      const value = tag.substring(equalIndex + 1);
      if (result[name]) {
        result[name] = result[name] + "\n" + value;
      } else {
        result[name] = value;
      }
    });
    return result;
  };
  const readAllFlacTag = async (file) => {
    try {
      const metaflac = await Metaflac.fromBlob(file);
      const tags = metaflac.getAllTags();
      const parsedTags = parseTags(tags);
      console.log("解析后的标签:", parsedTags);
      return parsedTags;
    } catch (error) {
      console.error("读取 FLAC 标签失败:", error);
      return {};
    }
  };
  const readFlacTag = async (file, tagName) => {
    try {
      const metaflac = await Metaflac.fromBlob(file);
      const tagString = metaflac.getTag(tagName.toUpperCase());
      if (!tagString) {
        return void 0;
      }
      const lines = tagString.split("\n");
      if (lines.length > 0) {
        const equalIndex = lines[0].indexOf("=");
        if (equalIndex !== -1) {
          return lines[0].substring(equalIndex + 1);
        }
      }
      return void 0;
    } catch (error) {
      console.error(`读取 FLAC 标签 ${tagName} 失败:`, error);
      return void 0;
    }
  };
  const writeFlacTag = async (file, tagName, tagValue) => {
    try {
      const metaflac = await Metaflac.fromBlob(file);
      metaflac.removeTag(tagName.toUpperCase());
      metaflac.setTag(`${tagName.toUpperCase()}=${tagValue}`);
      const newBlob = metaflac.saveAsBlob();
      console.log("给 FLAC 写标签成功");
      return newBlob;
    } catch (error) {
      console.error("给 FLAC 写标签失败:", error);
      throw new Error("给 FLAC 写标签失败");
    }
  };
  const readFlacPictures = async (file) => {
    try {
      const metaflac = await Metaflac.fromBlob(file);
      const pictures = metaflac.getPicturesSpecs?.() || [];
      return pictures.map((_, index2) => metaflac.exportPictureToBlob(index2));
    } catch (error) {
      console.error("读取 FLAC 封面图片失败:", error);
      return [];
    }
  };
  const embedFlacPicture = async (file, picture) => {
    try {
      const metaflac = await Metaflac.fromBlob(file);
      await metaflac.importPictureFromFile(picture);
      const newBlob = metaflac.saveAsBlob();
      console.log("给 FLAC 嵌入图片成功");
      return newBlob;
    } catch (error) {
      console.error("给 FLAC 嵌入图片失败:", error);
      return file;
    }
  };
  const writeFlacTagAndPicture = async (file, tagName, tagValue, picture) => {
    try {
      const metaflac = await Metaflac.fromBlob(file);
      console.log("metaflac", metaflac, metaflac.getAllTags());
      if (tagName && tagValue) {
        metaflac.removeTag(tagName.toUpperCase());
        metaflac.setTag(`${tagName.toUpperCase()}=${tagValue}`);
      }
      if (picture) {
        await metaflac.importPictureFromFile(picture);
      }
      const outputFile = metaflac.saveAsBlob();
      return outputFile || file;
    } catch (error) {
      console.error("同时写入歌词和封面失败:", error);
      return file;
    }
  };
  const getFileBlob = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return { blob, response };
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
  const downloadAsLRC = (lrcContent, filename, options = {}) => {
    try {
      const { timestamp = false } = options;
      let finalFilename = filename;
      if (timestamp) {
        const now = /* @__PURE__ */ new Date();
        const ts = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(
        now.getDate()
      ).padStart(2, "0")}_${String(now.getHours()).padStart(2, "0")}${String(
        now.getMinutes()
      ).padStart(2, "0")}${String(now.getSeconds()).padStart(2, "0")}`;
        finalFilename = `${filename}_${ts}`;
      }
      const blob = new Blob([lrcContent], { type: "text/plain" });
      const blobUrl = window.URL.createObjectURL(blob);
      downloadFileWithBlob(blob, `${finalFilename}.lrc`);
      window.URL.revokeObjectURL(blobUrl);
      return true;
    } catch (error) {
      console.error("LRC歌词下载失败:", error);
      return false;
    }
  };
  const downloadFileWithBlob = (file, name) => {
    const blobUrl = window.URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(blobUrl);
  };
  const audio = new Audio();
  const usePlayMusic = () => {
    const { downloadConfig } = useConfig();
    const { quality: downloadQuality, downloadLyric, embedLyricCover } = downloadConfig;
    const [currentMid, setCurrentMid] = require$$0.useState("");
    const [isPlaying, setIsPlaying] = require$$0.useState();
    const [currentTime, setCurrentTime] = require$$0.useState(0);
    const [duration, setDuration] = require$$0.useState(0);
    const urlMap = require$$0.useRef({});
    const songInfoMap = require$$0.useRef({});
    const getSongInfo$1 = async (mid) => {
      if (songInfoMap.current[mid]) {
        return songInfoMap.current[mid];
      }
      const res = await getSongInfo(mid);
      const songInfo = res.track_info;
      songInfoMap.current[mid] = songInfo;
      return songInfo;
    };
    const getUrl = async (mid, quality = downloadQuality) => {
      const key = mid + quality;
      if (urlMap.current[key]) {
        return urlMap.current[key];
      }
      const res = await getSongPlayUrl(mid, { quality });
      const url = res[mid]?.url || "";
      if (!url) throw new Error("获取歌曲播放地址失败");
      urlMap.current[key] = url;
      console.log("url", url);
      return url;
    };
    const play = async (mid, quality = downloadQuality) => {
      try {
        if (mid === currentMid) {
          audio.play();
          return;
        }
        const url = await getUrl(mid, quality);
        audio.src = url;
        audio.play();
        setCurrentMid(mid);
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
    const download = async (mid, quality = downloadQuality) => {
      try {
        const songInfo = await getSongInfo$1(mid);
        const { name, album: { mid: albumMid } = {} } = songInfo;
        const url = await getUrl(mid, quality);
        console.log(`当前下载歌曲${name},音质为${quality},链接为${url}`);
        const finalExt = url.split("?")[0].split(".").pop();
        const { blob } = await getFileBlob(url.replace("http://", "https://"));
        let outputFile = blob;
        const lyric = await getLyric(mid);
        let coverBlob;
        if (albumMid) {
          const cover = getAlbumPicUrl(albumMid);
          const { blob: blob2 } = await getFileBlob(cover.replace("http://", "https://"));
          coverBlob = blob2;
        }
        if (embedLyricCover) {
          switch (finalExt) {
            case "flac":
              outputFile = await writeFlacTagAndPicture(blob, "lyrics", lyric, coverBlob);
              break;
            default:
              console.log("当前格式不支持");
              break;
          }
        }
        if (downloadLyric) {
          downloadAsLRC(lyric, name);
        }
        downloadFileWithBlob(outputFile, `${name}.${finalExt}`);
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
    require$$0.useEffect(() => {
      audio.onloadedmetadata = () => {
        setDuration(audio.duration);
      };
      audio.onpause = () => {
        setIsPlaying(void 0);
      };
    }, [currentMid]);
    return {
      isPlaying,
      currentTime,
      duration,
      audio,
      play,
      pause,
      stop,
      download,
      playList,
      getUrl,
      getLyric,
      getSongInfo: getSongInfo$1
    };
  };
  const useGetAlbumDetail = () => {
    const [currentMid, setCurrentMid] = require$$0.useState("");
    const [albumInfo, setAlbumInfo] = require$$0.useState();
    const [isLoading, setIsLoading] = require$$0.useState(false);
    const albumInfoMap = require$$0.useRef({});
    const { downloadConfig, functionConfig } = useConfig();
    const { quality: downloadQuality } = downloadConfig;
    const { uploadConcurrency } = functionConfig;
    const { play, getUrl, download, getLyric } = usePlayMusic();
    const getAlbumDetail = async (mid) => {
      try {
        setIsLoading(true);
        if (albumInfoMap.current[mid]) {
          return albumInfoMap.current[mid];
        }
        const res = await getAlbumInfo(mid);
        console.log("专辑详情", res);
        albumInfoMap.current[mid] = res;
        setAlbumInfo(res);
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
        return {
          id: item.songmid,
          name: item.songname,
          file: item
        };
      });
      const promiseArr = ids?.map((item) => async () => {
        const qualityList = getFileQualityList(item.file);
        const finalQuality = qualityList.includes(downloadQuality) ? downloadQuality : qualityList[0];
        const url = await getUrl(item.id, finalQuality);
        return {
          ...item,
          url,
          quality: finalQuality
        };
      });
      const urls = await promiseLimit(promiseArr, 6);
      console.log("专辑歌曲播放地址:", urls);
      return urls;
    };
    const downloadAlbumSong = async (mid, options) => {
      try {
        const { onChange } = options || {};
        const albumSongList = await getAlbumSongList(mid);
        console.log("准备下载专辑歌曲:", albumSongList);
        let index2 = 1;
        const successList = [];
        const errorList = [];
        const promiseArr = albumSongList?.map((item) => async () => {
          try {
            const { songmid, songname } = item;
            console.log(`正在下载: songmid=${songmid}, songname=${songname}`);
            await download(songmid);
            console.log(`第${index2}首歌曲《${songname}》下载完成！`);
            successList.push(item);
            index2++;
            onChange?.({
              songList: albumSongList,
              index: index2
            });
          } catch (error) {
            errorList.push(item);
          }
        });
        const songList = await promiseLimit(promiseArr, uploadConcurrency);
        return {
          successList,
          errorList,
          songList,
          total: albumSongList?.length
        };
      } catch (error) {
        console.error("下载专辑歌曲失败:", error);
      }
    };
    const getDownLoadJson = async (mid) => {
      const albumDetail = await getAlbumDetail(mid);
      const { name, list } = albumDetail || {};
      const promiseArr = list?.map((item) => async () => {
        const lrcContent = await getLyric(item.songmid);
        const qualityList = getFileQualityList(item);
        const finalQuality = qualityList.includes(downloadQuality) ? downloadQuality : qualityList[0];
        const url = await getUrl(item.songmid, finalQuality);
        return {
          songName: item.songname,
          url,
          lrcContent
        };
      });
      const songList = await promiseLimit(promiseArr, uploadConcurrency);
      return {
        albumName: name,
        albumCover: getAlbumPicUrl(mid),
        list: songList
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
    const [data, setData] = require$$0.useState(initialValue);
    const [loading2, setLoading] = require$$0.useState(false);
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
    require$$0.useEffect(() => {
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
  const useGetSonglistDetail = () => {
    const [playlistInfo, setPlaylistInfo] = require$$0.useState();
    const [isLoading, setIsLoading] = require$$0.useState(false);
    const playlistInfoMap = require$$0.useRef({});
    const { downloadConfig } = useConfig();
    const { quality: downloadQuality } = downloadConfig;
    const { play, getUrl, download, getLyric } = usePlayMusic();
    const getPlaylistDetail = async (dissid) => {
      try {
        setIsLoading(true);
        if (playlistInfoMap.current[dissid]) {
          return playlistInfoMap.current[dissid];
        }
        const res = await getSongListDetail(dissid);
        console.log("歌单详情:", res);
        const playlistDetail = Array.isArray(res) ? res[0] : res;
        playlistInfoMap.current[dissid] = playlistDetail;
        return playlistDetail;
      } catch (error) {
        console.error("获取歌单详情失败:", error);
      } finally {
        setIsLoading(false);
      }
    };
    const getPlaylistSongList = async (dissid) => {
      try {
        setIsLoading(true);
        const res = await getPlaylistDetail(dissid);
        return res?.songlist;
      } catch (error) {
        console.error("获取歌单歌曲列表失败:", error);
      } finally {
        setIsLoading(false);
      }
    };
    const getPlaylistSongUrl = async (dissid) => {
      const res = await getPlaylistSongList(dissid);
      const ids = res?.map((item) => {
        return {
          id: item.mid,
          name: item.name,
          file: item.file
        };
      });
      const promiseArr = ids?.map((item) => async () => {
        const qualityList = getFile_qualityList(item.file);
        const finalQuality = qualityList.includes(downloadQuality) ? downloadQuality : qualityList[0];
        const url = await getUrl(item.id, finalQuality);
        return {
          ...item,
          url,
          quality: finalQuality
        };
      });
      const urls = await promiseLimit(promiseArr, 6);
      console.log("歌单歌曲播放地址:", urls);
      return urls;
    };
    const downloadPlaylistSong = async (dissid) => {
      try {
        const songList = await getPlaylistSongList(dissid);
        console.log("准备下载歌单歌曲:", songList);
        for (const item of songList || []) {
          const { mid, name, file } = item;
          console.log(`正在下载: mid=${mid}, name=${name}`);
          await download(mid);
        }
      } catch (error) {
        console.error("下载歌单歌曲失败:", error);
      }
    };
    const getPlaylistDownloadJson = async (dissid) => {
      const playlistDetail = await getPlaylistDetail(dissid);
      const { dissname, songlist } = playlistDetail || {};
      const promiseArr = songlist?.map((item) => async () => {
        const lrcContent = await getLyric(item.mid);
        const qualityList = getFile_qualityList(item.file);
        const finalQuality = qualityList.includes(downloadQuality) ? downloadQuality : qualityList[0];
        const url = await getUrl(item.mid, finalQuality);
        return {
          songName: item.name,
          url,
          lrcContent
        };
      });
      const songList = await promiseLimit(promiseArr, 6);
      return {
        playlistName: dissname,
        playlistCover: playlistDetail?.pic_mid ? `https://y.gtimg.cn/music/photo_new/T002R300x300M000${playlistDetail.pic_mid}.jpg` : "",
        songList
      };
    };
    const playPlaylist = async (dissid) => {
      const songList = await getPlaylistSongList(dissid);
      console.log("歌单歌曲列表:", songList);
      if (!songList?.length) return;
      for (const item of songList) {
        console.log("当前正在播放", item.name);
        await play(item.mid);
      }
    };
    return {
      playlistInfo,
      isLoading,
      getPlaylistDetail,
      getPlaylistSongList,
      playPlaylist,
      getPlaylistSongUrl,
      downloadPlaylistSong,
      getPlaylistDownloadJson
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
    const [visible, setVisible] = require$$0.useState(false);
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
    const resolve = require$$0.useRef(null);
    const reject = require$$0.useRef(null);
    const submit = () => {
      return new Promise((_resolve, _reject) => {
        resolve.current = _resolve;
        reject.current = _reject;
      });
    };
    ref && require$$0.useImperativeHandle(ref, () => ({
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
    const { sin = 0, num = 60 } = options;
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
  const getSingerAllHotSong = async (singermid, options) => {
    const { onChange } = options || {};
    let sin = 0;
    const num = 60;
    let hasMore = true;
    const result = {
      code: 200,
      total: 0,
      totalSong: 0,
      totalAlbum: 0,
      totalMV: 0,
      songList: [],
      singerBrief: "",
      singerInfo: {},
      extras: []
    };
    while (hasMore) {
      const res = await getSingerHotSong(singermid, { sin, num });
      if (res) {
        Object.assign(result, {
          total: res.total_song,
          singerBrief: res.singer_brief,
          singerInfo: res.singer_info,
          totalSong: res.total_song,
          totalAlbum: res.total_album,
          totalMV: res.total_mv,
          songList: [...result.songList, ...res.songlist],
          extras: [...result.extras, ...res.extras]
        });
        onChange?.(result);
        hasMore = result.songList.length < res.total_song;
      } else {
        hasMore = false;
      }
      sin += num;
    }
    console.log("result", result);
    return result;
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
  const getSingerPic = (singermid, options) => {
    const { size = "800x800" } = {};
    return `https://y.qq.com/music/photo_new/T001R${size}M000${singermid}.jpg?max_age=2592000`;
  };
  const footer$2 = "_footer_e7ura_48";
  const styles$a = {
    "album-detail-modal": "_album-detail-modal_e7ura_1",
    "modal-header": "_modal-header_e7ura_1",
    "album-basic-info": "_album-basic-info_e7ura_6",
    "album-info": "_album-info_e7ura_11",
    "album-name": "_album-name_e7ura_16",
    "album-meta": "_album-meta_e7ura_19",
    "song-table": "_song-table_e7ura_24",
    "song-name": "_song-name_e7ura_27",
    "artist-item": "_artist-item_e7ura_33",
    "artist-name": "_artist-name_e7ura_37",
    "artist-separator": "_artist-separator_e7ura_41",
    "song-duration": "_song-duration_e7ura_45",
    footer: footer$2,
    "selected-count": "_selected-count_e7ura_55"
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
  const styles$9 = {
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
  const styles$8 = {
    "text-overflow-show-tips-container": "_text-overflow-show-tips-container_btabq_1"
  };
  function TextOverflowShowTips({
    text,
    tooltipProps,
    className,
    ...restProps
  }) {
    const containerRef = require$$0.useRef(null);
    const { width: containerWidth } = useSize(containerRef) || {};
    const isTooLong = require$$0.useMemo(() => {
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
        className: classNames(styles$8["text-overflow-show-tips-container"], className),
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
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(styles$9["copy-text"], className), ...rest, children: [
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
          className: styles$9["copy-btn"]
        }
      )
    ] });
  }
  function MyButton(props) {
    const { loading: loading2, onClick, ...rest } = props;
    const [_loading, setLoading] = require$$0.useState(loading2);
    const handleClick = async (...args) => {
      try {
        setLoading(true);
        await onClick?.(...args);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    require$$0.useEffect(() => {
      setLoading(loading2);
    }, [loading2]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { ...rest, onClick: handleClick, loading: _loading });
  }
  const Styles$1 = {
    "select-search": "_select-search_19wb1_1"
  };
  const { Group } = antd.Input;
  const defaultSearchParams$3 = {
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
    const [searchParams, setSearchParams] = require$$0.useState(() => {
      if (value?.prop == void 0) return defaultValue || defaultSearchParams$3;
      return {
        ...defaultValue || defaultSearchParams$3,
        ...value
      };
    });
    require$$0.useEffect(() => {
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
  const styles$7 = {};
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
        className: classNames(styles$7["rangePicker"], className),
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
  const { Item: Item$3 } = antd.Form;
  const SearchFormItem = (props) => {
    const { name, type = "input", label = "", inputProps = {}, ...formItemProps } = props;
    const InputComponent = COMPONENT_TYPE_MAP[type];
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Item$3, { name, label, ...formItemProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InputComponent, { ...{ ...defaultComponentProps[type], ...inputProps } }) });
  };
  function AdvancedSearch(props) {
    antd.Form.useFormInstance();
    const { params, items = [] } = props;
    const [optionsMap, setOptionsMap] = require$$0.useState({});
    require$$0.useEffect(() => {
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
  const { Item: Item$2 } = antd.Form;
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
    require$$0.useEffect(() => {
      !keepAdvancedSearchValue && formRef.resetFields();
      formRef.setFieldsValue(searchParams);
    }, [searchParams]);
    const [optionsMap, setOptionsMap] = require$$0.useState({});
    require$$0.useEffect(() => {
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
    const [isAdvancedSearch, setIsAdvancedSearch] = require$$0.useState(false);
    const handleSearch = () => {
      const values = formRef.getFieldsValue();
      console.log("values", values);
      onSearch(values);
    };
    const handleReset = () => {
      formRef.resetFields();
      handleSearch();
    };
    require$$0.useImperativeHandle(ref, () => ({
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Item$2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "primary", onClick: handleSearch, shape: "round", loading: loading2, children: "查询" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Item$2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { onClick: handleReset, shape: "round", children: "重置" }) }),
          advancedOptions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Item$2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "link", onClick: () => setIsAdvancedSearch(!isAdvancedSearch), children: isAdvancedSearch ? "关闭" : "高级搜索" }) })
        ]
      }
    );
  };
  const SearchForm$1 = require$$0.forwardRef(SearchForm);
  const { Text: Text$4, Title: Title$3 } = antd.Typography;
  const AlbumDetail = require$$0.forwardRef((_, ref) => {
    const { visible, close } = useVisible(
      {
        onOpen(params) {
          if (params?.albummid) {
            setCurrentMid(params.albummid);
          }
        }
      },
      ref
    );
    const [currentMid, setCurrentMid] = require$$0.useState("");
    const [inputMid, setInputMid] = require$$0.useState("");
    const { downloadConfig } = useConfig();
    const { quality: defaultQuality } = downloadConfig;
    const { getAlbumDetail, getAlbumSongList, isLoading, getDownLoadJson } = useGetAlbumDetail();
    const { play, isPlaying, pause, download } = usePlayMusic();
    const { data: detail, loading: detailLoading } = useGetData(
      getAlbumDetail,
      currentMid,
      {
        initialValue: void 0,
        returnFunction: () => !currentMid || !visible,
        monitors: [currentMid, visible]
      }
    );
    const {
      data: list,
      loading: loading2,
      setData: setList
    } = useGetData(getAlbumSongList, currentMid, {
      initialValue: [],
      returnFunction: () => !currentMid || !visible,
      monitors: [currentMid, visible],
      callback: (data) => {
        console.log("data", data);
      }
    });
    const handleChooseQuality = (record, quality) => {
      setList(
        list?.map((item) => {
          if (item.songmid === record.songmid) {
            return {
              ...item,
              quality
            };
          }
          return item;
        }) || []
      );
    };
    const handlePlay = (record) => {
      if (isPlaying) {
        pause();
      } else {
        const { quality } = record;
        const finalQuality = getQuality$3(record, defaultQuality, quality);
        play(record.songmid, finalQuality);
      }
    };
    const [downloading, setDownloading] = require$$0.useState("");
    const handleDownload = async (record) => {
      try {
        if (downloading === record.songmid) return;
        setDownloading(record.songmid);
        const { quality } = record;
        const finalQuality = getQuality$3(record, defaultQuality, quality);
        await download(record.songmid, finalQuality);
      } catch (error) {
        console.log("error", error);
      } finally {
        setDownloading("");
      }
    };
    const songColumns = [
      {
        title: "歌曲",
        dataIndex: "songname",
        key: "songname",
        width: 300,
        render: (text) => /* @__PURE__ */ jsxRuntimeExports.jsx(Text$4, { className: styles$a["song-name"], title: text, children: text })
      },
      {
        title: "歌手",
        dataIndex: "singer",
        key: "singer",
        width: 240,
        render: (singers = []) => /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Space, { size: "small", wrap: true, children: singers.length > 0 ? singers.map((s, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$a["artist-item"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Avatar, { size: 30, style: { marginRight: 4 }, src: getSingerPic(s.mid) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$a["artist-name"], children: s.name }),
          index2 < singers.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$a["artist-separator"], children: "/" })
        ] }, s.mid || index2)) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "-" }) })
      },
      // 音质选择器
      {
        title: "音质",
        key: "quality",
        width: 100,
        align: "center",
        render: (_2, record) => {
          const qualityList = getFileQualityList(record);
          const defaultValue = qualityList.includes(defaultQuality) ? defaultQuality : qualityList[0];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Select,
            {
              options: qualityList.map((quality) => ({
                label: quality,
                value: quality
              })),
              defaultValue,
              style: { width: "100%" },
              onChange: (value) => {
                handleChooseQuality(record, value);
              }
            }
          );
        }
      },
      // 格式
      {
        title: "格式",
        key: "format",
        width: 150,
        align: "center",
        render: (_2, record) => {
          const qualityList = getFileQualityList(record);
          const qualityColorMap = {
            flac: "green",
            ape: "volcano",
            320: "blue",
            m4a: "orange",
            128: "gray"
          };
          const qualityTextMap = {
            flac: "FLAC",
            ape: "APE",
            320: "320k",
            m4a: "M4A",
            128: "128k"
          };
          return /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Space, { wrap: true, children: qualityList.map((quality) => /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tag, { color: qualityColorMap[quality], children: qualityTextMap[quality] || quality }, quality)) });
        }
      },
      {
        title: "时长",
        dataIndex: "interval",
        key: "interval",
        width: 100,
        align: "center",
        render: (interval) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Text$4, { className: styles$a["song-duration"], children: [
          Math.floor((interval || 0) / 60),
          ":",
          ((interval || 0) % 60).toString().padStart(2, "0")
        ] })
      },
      {
        title: "操作",
        key: "action",
        width: 200,
        align: "center",
        fixed: "right",
        render: (_2, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: "播放", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              type: "link",
              size: "small",
              icon: isPlaying === record.songmid ? /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PauseCircleOutlined, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PlayCircleOutlined, {}),
              onClick: () => handlePlay(record),
              children: "播放"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: "下载", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              type: "link",
              size: "small",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.DownloadOutlined, {}),
              loading: downloading === record.songmid,
              onClick: () => handleDownload(record),
              children: "下载"
            }
          ) })
        ] })
      }
    ];
    const [selectedRowKeys, setSelectedRowKeys] = require$$0.useState([]);
    const [selectedRows, setSelectedRows] = require$$0.useState([]);
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
      const albumName = detail?.name || "专辑详情";
      const singerName = detail?.singername || "";
      const publishDate = detail?.aDate || "";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$a["modal-header"], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Title$3, { level: 4, className: styles$a["modal-title"], children: "专辑详情" }),
        detail && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$a["album-basic-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Image,
            {
              src: currentMid ? getAlbumPicUrl(currentMid) : "",
              alt: albumName,
              width: 80,
              height: 80,
              style: { borderRadius: 8 },
              fallback: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$a["album-info"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Title$3, { level: 5, className: styles$a["album-name"], children: albumName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$a["album-meta"], children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text$4, { type: "secondary", className: styles$a["singer-name"], children: singerName || "未知歌手" }),
              publishDate && /* @__PURE__ */ jsxRuntimeExports.jsxs(Text$4, { type: "secondary", className: styles$a["publish-date"], children: [
                "· ",
                publishDate
              ] })
            ] })
          ] })
        ] })
      ] });
    };
    const handleBatchDownload = async () => {
      if (selectedRows.length === 0) {
        msgWarning("请先选择要下载的歌曲");
        return;
      }
      const loadingKey = "download-album-song";
      try {
        antd.message.loading({
          key: loadingKey,
          content: `正在准备下载 ${selectedRows.length} 首歌曲...`,
          duration: 0
        });
        let index2 = 1;
        for (const song of selectedRows) {
          antd.message.loading({
            key: loadingKey,
            content: `正在下载第 ${index2} 首歌曲 ${song.songname}...`,
            duration: 0
          });
          const finalQuality = getQuality$3(song, defaultQuality);
          await download(song.songmid, finalQuality);
          antd.message.success({
            key: loadingKey,
            content: `第 ${index2} 首歌曲 ${song.songname} 下载成功！`,
            duration: 1
          });
          index2++;
        }
        antd.message.success({
          key: loadingKey,
          content: `成功下载 ${selectedRows.length} 首歌曲！`,
          duration: 1
        });
      } catch (error) {
        console.error("批量下载失败:", error);
        antd.message.destroy(loadingKey);
        msgError("批量下载失败: " + error.message);
      } finally {
        antd.message.destroy(loadingKey);
      }
    };
    const handleDownloadAllJson = async () => {
      if (!currentMid) return;
      const loadingKey = "download-album-json";
      try {
        antd.message.loading({
          key: loadingKey,
          content: `正在下载专辑JSON...`,
          duration: 0
        });
        const res = await getDownLoadJson(currentMid);
        downloadAsJson([res], `${detail?.name}.json`);
        antd.message.destroy(loadingKey);
        msgSuccess("成功下载专辑JSON！");
      } catch (error) {
        console.log("error", error);
      } finally {
        antd.message.destroy(loadingKey);
      }
    };
    const renderFooter = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$a["footer"], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$a["selected-count"], children: [
          "已选择 ",
          selectedRows.length,
          " 首歌曲"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
          selectedRowKeys?.length < list.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              onClick: () => {
                setSelectedRowKeys(list?.map((item) => item.songmid) || []);
                setSelectedRows(list || []);
              },
              children: "全部选择"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              onClick: () => {
                setSelectedRowKeys([]);
                setSelectedRows([]);
              },
              children: "清空选择"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(MyButton, { type: "primary", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.DownloadOutlined, {}), onClick: handleBatchDownload, children: [
            "下载选中歌曲",
            selectedRows?.length ? `(${selectedRows?.length})` : ""
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.FileOutlined, {}), type: "primary", onClick: handleDownloadAllJson, children: "下载全部歌曲JSON" })
        ] })
      ] });
    };
    const handleInputChange = (e) => {
      setInputMid(e.target.value.trim());
    };
    const handleOpenById = () => {
      if (!inputMid) return;
      setCurrentMid(inputMid);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      antd.Modal,
      {
        title: renderTitle(),
        open: visible,
        onCancel: close,
        width: 1200,
        centered: true,
        className: styles$a["album-detail-modal"],
        footer: renderFooter(),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 12, display: "flex", gap: 8 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              antd.Input,
              {
                placeholder: "请输入专辑ID/MID，如 003rJSwm3TechU",
                value: inputMid,
                onChange: handleInputChange,
                onPressEnter: handleOpenById,
                allowClear: true,
                "aria-label": "专辑ID输入框"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              antd.Button,
              {
                type: "primary",
                onClick: handleOpenById,
                loading: loading2 || detailLoading || isLoading,
                children: "打开"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Table,
            {
              columns: songColumns,
              dataSource: list || [],
              rowSelection,
              rowKey: "songmid",
              loading: loading2 || detailLoading || isLoading,
              scroll: { y: 400, x: 600 },
              pagination: {
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total) => `共 ${total} 首歌曲`
              },
              className: styles$a["song-table"]
            }
          )
        ]
      }
    );
  });
  const getQuality$3 = (record, defaultQuality, chooseQuality) => {
    const qualityList = getFileQualityList(record);
    const songDefaultQuality = qualityList.includes(defaultQuality) ? defaultQuality : qualityList[0];
    const finalQuality = chooseQuality || songDefaultQuality;
    return finalQuality;
  };
  const AlbumSearch = require$$0.forwardRef((props, ref) => {
    const { visible, close } = useVisible({}, ref);
    const [form] = antd.Form.useForm();
    const [loading2, setLoading] = require$$0.useState(false);
    const [albumList, setAlbumList] = require$$0.useState([]);
    const [total, setTotal] = require$$0.useState(0);
    const [currentPage, setCurrentPage] = require$$0.useState(1);
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
  const { Link, Text: Text$3 } = antd.Typography;
  const GITHUB_CONFIG = {
    owner: "520Qiuyu",
    repo: "QQMusic",
    homepage: "https://github.com/520Qiuyu/QQMusic",
    authorUrl: "https://github.com/520Qiuyu",
    scriptUrl: "https://raw.githubusercontent.com/520Qiuyu/QQMusic/main/dist/qqmusic.user.js"
  };
  const GithubInfo = require$$0.forwardRef((_props, ref) => {
    const { visible, close } = useVisible(
      {
        onOpen: () => {
          fetchRepoInfo();
        }
      },
      ref
    );
    const [repoInfo, setRepoInfo] = require$$0.useState(null);
    const [loading2, setLoading] = require$$0.useState(false);
    const { functionConfig, setFunctionConfig } = useConfig();
    const fetchRepoInfo = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}`
        );
        if (response.ok) {
          const data = await response.json();
          setRepoInfo({
            stars: data.stargazers_count || 0,
            forks: data.forks_count || 0,
            watchers: data.watchers_count || 0,
            description: data.description || "",
            language: data.language || "",
            updatedAt: data.updated_at || "",
            createdAt: data.created_at || "",
            openIssues: data.open_issues_count || 0,
            license: data.license?.name || "无",
            defaultBranch: data.default_branch || "main",
            avatarUrl: data.owner?.avatar_url || "",
            authorName: data.owner?.login || GITHUB_CONFIG.owner
          });
        }
      } catch (error) {
        console.error("获取 GitHub 信息失败:", error);
      } finally {
        setLoading(false);
      }
    };
    const formatDate = (dateString) => {
      if (!dateString) return "-";
      const date = new Date(dateString);
      return date.toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const handleDoubleClickDefaultBranch = () => {
      setFunctionConfig({
        ...functionConfig,
        enableTestModal: !functionConfig.enableTestModal
      });
      close();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      antd.Modal,
      {
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(icons.GithubOutlined, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GitHub 信息" })
        ] }),
        open: visible,
        onCancel: close,
        footer: null,
        centered: true,
        width: 700,
        zIndex: 99999,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Spin, { spinning: loading2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Descriptions, { column: 1, bordered: true, size: "small", styles: { label: { width: 120 } }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Descriptions.Item, { label: "项目主页", children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Space, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { href: GITHUB_CONFIG.homepage, target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(icons.LinkOutlined, {}),
            " ",
            GITHUB_CONFIG.homepage
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Descriptions.Item, { label: "作者主页", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
            repoInfo?.avatarUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
              antd.Image,
              {
                src: repoInfo.avatarUrl,
                alt: repoInfo.authorName || "作者头像",
                width: 60,
                height: 60,
                style: {
                  borderRadius: "50%",
                  objectFit: "cover",
                  cursor: "pointer"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { href: GITHUB_CONFIG.authorUrl, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(icons.GithubOutlined, {}),
              " ",
              GITHUB_CONFIG.authorUrl
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Descriptions.Item, { label: "项目描述", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text$3, { children: repoInfo?.description || "暂无描述" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Descriptions.Item, { label: "统计信息", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "large", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(icons.StarOutlined, { style: { color: "#faad14" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text$3, { strong: true, children: repoInfo?.stars || 0 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text$3, { type: "secondary", children: "Stars" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(icons.ForkOutlined, { style: { color: "#1890ff" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text$3, { strong: true, children: repoInfo?.forks || 0 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text$3, { type: "secondary", children: "Forks" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(icons.EyeOutlined, { style: { color: "#52c41a" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text$3, { strong: true, children: repoInfo?.watchers || 0 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text$3, { type: "secondary", children: "Watchers" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Descriptions.Item, { label: "主要语言", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text$3, { children: repoInfo?.language || "未知" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Descriptions.Item, { label: "默认分支", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Text$3,
            {
              code: true,
              onDoubleClick: handleDoubleClickDefaultBranch,
              style: { cursor: "pointer", userSelect: "none" },
              children: repoInfo?.defaultBranch || "main"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Descriptions.Item, { label: "许可证", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text$3, { children: repoInfo?.license || "无" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Descriptions.Item, { label: "开放 Issues", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text$3, { children: repoInfo?.openIssues || 0 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Descriptions.Item, { label: "创建时间", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text$3, { children: formatDate(repoInfo?.createdAt) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Descriptions.Item, { label: "更新时间", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text$3, { children: formatDate(repoInfo?.updatedAt) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Descriptions.Item, { label: "操作", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              antd.Button,
              {
                type: "primary",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.GithubOutlined, {}),
                href: GITHUB_CONFIG.homepage,
                target: "_blank",
                rel: "noopener noreferrer",
                children: "访问仓库"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              antd.Button,
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.StarOutlined, {}),
                href: `${GITHUB_CONFIG.homepage}/stargazers`,
                target: "_blank",
                rel: "noopener noreferrer",
                children: "查看 Stars"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              antd.Button,
              {
                type: "primary",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.UploadOutlined, {}),
                href: GITHUB_CONFIG.scriptUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                children: "更新脚本"
              }
            )
          ] }) })
        ] }) })
      }
    );
  });
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
          var DataView2 = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
          var metaMap = WeakMap2 && new WeakMap2();
          var realNames = {};
          var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap2);
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
          var clearTimeout = ctxClearTimeout || function(id) {
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
          var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values2) {
            return new Set(values2);
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
          if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
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
                clearTimeout(timerId);
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
                  clearTimeout(timerId);
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
          function isNaN(value) {
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
          function escape2(string) {
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
          function unescape2(string) {
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
          lodash2.escape = escape2;
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
          lodash2.isNaN = isNaN;
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
          lodash2.unescape = unescape2;
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
  const styles$6 = {
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
  const { Text: Text$2, Title: Title$2 } = antd.Typography;
  const defaultLoadingData = {
    total: 0,
    loadedSong: 0,
    songList: [],
    totalSong: 0,
    totalAlbum: 0,
    totalMV: 0,
    extras: []
  };
  const HotSongModal = (props, ref) => {
    const { visible, close } = useVisible(
      {
        onOpen: (params) => {
          console.log("params", params);
          setSingerInfo(params);
        },
        onReset: () => {
          setSingerInfo({});
          setSelectedRowKeys([]);
          setSelectedRows([]);
          setLoadingData({
            ...defaultLoadingData
          });
        }
      },
      ref
    );
    const { downloadConfig } = useConfig();
    const { quality: defaultQuality } = downloadConfig;
    const { play, pause, isPlaying, download, getUrl, getLyric } = usePlayMusic();
    const [singerInfo, setSingerInfo] = require$$0.useState({});
    const [loadingData, setLoadingData] = require$$0.useState(defaultLoadingData);
    const { loading: loading2 } = useGetData(
      () => getSingerAllHotSong(singerInfo.singerMid, {
        onChange: (result) => {
          setLoadingData({
            total: result.total,
            loadedSong: result.songList.length,
            songList: result.songList,
            totalSong: result.total,
            totalAlbum: result.totalAlbum,
            totalMV: result.totalMV,
            extras: result.extras
          });
        }
      }),
      void 0,
      {
        monitors: [singerInfo.singerMid, visible],
        returnFunction: () => !visible || !singerInfo.singerMid
      }
    );
    const { songList = [], totalSong, totalAlbum, totalMV, extras } = loadingData;
    const [searchParams, setSearchParams] = require$$0.useState({
      keyword: ""
    });
    const searchFormOptions = [
      {
        label: "歌曲名称",
        name: "name",
        type: "select",
        options: uniqueArrayByKey(songList, "name").map((item) => ({
          label: item.name,
          value: item.name
        })),
        inputProps: {
          mode: "multiple"
        }
      },
      {
        label: "专辑名称",
        name: "albumName",
        type: "select",
        options: uniqueArrayByKey(
          songList.map((item) => item.album),
          "name"
        ).map((item) => ({
          label: item.name,
          value: item.name
        })),
        inputProps: {
          mode: "multiple"
        }
      }
    ];
    const { filteredList, setFilteredList, handleFilter } = useFilter(songList, {
      fields: {
        name: {
          getValue: (item) => item.name
        },
        albumName: {
          getValue: (item) => item.album?.name
        }
      }
    });
    const handleChooseQuality = (record, quality) => {
      setFilteredList(
        filteredList.map((item) => {
          if (item.mid === record.mid) {
            return {
              ...item,
              quality
            };
          }
          return item;
        })
      );
    };
    const handlePlay = (record) => {
      console.log("record", record);
      const { mid, quality, file } = record;
      const finalQuality = getQuality$2(file, defaultQuality, quality);
      console.log("当前播放歌曲:", record.name, "音质:", finalQuality);
      play(mid, finalQuality);
    };
    const [downloading, setDownloading] = require$$0.useState();
    const handleDownload = async (record) => {
      try {
        setDownloading(record.mid);
        const { mid, name, quality, file } = record;
        const finalQuality = getQuality$2(file, defaultQuality, quality);
        console.log("当前下载歌曲:", name, "音质:", finalQuality);
        await download(mid, finalQuality);
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
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", className: styles$6["song-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6["album-cover"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Image,
            {
              width: 40,
              height: 40,
              src: record.album?.mid ? getAlbumPicUrl(record.album.mid) : "",
              alt: record.album?.name || "专辑封面"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$6["song-details"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6["song-name"], title: text, children: text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6["song-album"], title: record.album?.name || "未知专辑", children: record.album?.name || "未知专辑" })
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$6["singer-info"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6["singer-name"], title: singer?.[0]?.name || "未知歌手", children: singer?.[0]?.name || "未知歌手" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6["singer-id"], title: singer?.[0]?.id?.toString() || "", children: singer?.[0]?.id || "" })
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
        title: "音质",
        dataIndex: "file",
        key: "file",
        width: 100,
        align: "center",
        render: (file, record) => {
          const qualityList = getFile_qualityList(file);
          const defaultValue = qualityList.includes(defaultQuality) ? defaultQuality : qualityList[0];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Select,
            {
              options: qualityList.map((quality) => ({
                label: quality,
                value: quality
              })),
              defaultValue,
              style: { width: "100%" },
              onChange: (value) => {
                handleChooseQuality(record, value);
              }
            }
          );
        }
      },
      // 格式
      {
        title: "格式",
        dataIndex: "format",
        key: "format",
        width: 150,
        align: "center",
        render: (_, record) => {
          const qualityList = getFile_qualityList(record.file);
          const qualityColorMap = {
            flac: "green",
            ape: "volcano",
            320: "blue",
            m4a: "orange",
            128: "gray"
          };
          const qualityTextMap = {
            flac: "FLAC",
            ape: "APE",
            320: "320k",
            m4a: "M4A",
            128: "128k"
          };
          return /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Space, { wrap: true, children: qualityList.map((quality) => /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tag, { color: qualityColorMap[quality], children: qualityTextMap[quality] || quality }, quality)) });
        }
      },
      {
        title: "发布时间",
        dataIndex: "time_public",
        key: "time_public",
        width: 150,
        align: "center",
        render: (_, __, index2) => {
          const extra = extras?.[index2];
          const uploadTime = extra?.upload_time || "";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Text$2, { className: styles$6["upload-time"], title: uploadTime, children: uploadTime });
        }
      },
      {
        title: "歌曲ID",
        dataIndex: "id",
        key: "id",
        width: 120,
        align: "center",
        render: (id) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$6["song-id-text"], text: id + "" })
      },
      {
        title: "歌曲MID",
        dataIndex: "mid",
        key: "mid",
        width: 200,
        align: "center",
        render: (mid) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$6["song-mid-text"], text: mid })
      },
      {
        title: "操作",
        key: "action",
        width: 250,
        align: "center",
        fixed: "right",
        render: (_, record) => {
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
    const [selectedRowKeys, setSelectedRowKeys] = require$$0.useState([]);
    const [selectedRows, setSelectedRows] = require$$0.useState([]);
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
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$6["modal-title"], children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$6["title-content"], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Title$2, { level: 4, style: { margin: 0 }, children: [
          singerInfo.singerName,
          " - 热门歌曲"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$6["title-stats"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${styles$6["stat-item"]} ${loading2 ? styles$6["loading"] : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$6["stat-label"], children: "歌曲" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$6["stat-value"], children: loading2 ? "..." : totalSong || 0 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${styles$6["stat-item"]} ${loading2 ? styles$6["loading"] : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$6["stat-label"], children: "专辑" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$6["stat-value"], children: loading2 ? "..." : totalAlbum || 0 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${styles$6["stat-item"]} ${loading2 ? styles$6["loading"] : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$6["stat-label"], children: "MV" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$6["stat-value"], children: loading2 ? "..." : totalMV || 0 })
          ] })
        ] })
      ] }) });
    };
    const handleBatchDownloadJson = async () => {
      try {
        if (selectedRows.length === 0) {
          msgWarning("请先选择要下载的歌曲");
          return;
        }
        console.log("selectedRows", selectedRows);
        const groupData = lodashExports.groupBy(selectedRows, "album.mid");
        console.log("groupData", groupData);
        const result = [];
        const loadingKey = "download-json";
        antd.message.loading({
          key: loadingKey,
          content: `正在准备下载 ${selectedRows.length} 首歌曲，其中包括 ${Object.keys(groupData).length} 个专辑`,
          duration: 0
        });
        let albumIndex = 1;
        let songIndex = 1;
        for (const albumMid in groupData) {
          const album = groupData[albumMid];
          const albumName = album[0].album.name;
          const albumCover = getAlbumPicUrl(albumMid);
          antd.message.loading({
            key: loadingKey,
            content: `开始下载第 ${albumIndex} / ${Object.keys(groupData).length} 个专辑 ：《${albumName}》`,
            duration: 0
          });
          const promiseArr = album.map((song) => async () => {
            const lrcContent = await getLyric(song.mid);
            const finalQuality = getQuality$2(song.file, defaultQuality);
            const url = await getUrl(song.mid, finalQuality);
            antd.message.loading({
              key: loadingKey,
              content: `第 ${songIndex++} / ${album.length} 首歌曲：《${song.name}》 下载完成！`,
              duration: 0
            });
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
            list: albumSongs
          });
          antd.message.success({
            key: loadingKey,
            content: `第 ${albumIndex++} / ${Object.keys(groupData).length} 个专辑：《${albumName}》下载完成！`,
            duration: 0
          });
        }
        antd.message.destroy(loadingKey);
        downloadAsJson(result, `${singerInfo.singerName}-专辑`);
      } catch (error) {
        console.error("批量下载JSON失败:", error);
      }
    };
    const handleBatchDownload = async () => {
      try {
        if (selectedRows.length === 0) {
          msgWarning("请先选择要下载的歌曲");
          return;
        }
        const loadingKey = "download-song";
        antd.message.loading({
          key: loadingKey,
          content: `正在准备下载 ${selectedRows.length} 首歌曲`,
          duration: 0
        });
        let songIndex = 1;
        for (const song of selectedRows) {
          const finalQuality = getQuality$2(song.file, defaultQuality);
          antd.message.loading({
            key: loadingKey,
            content: `第 ${songIndex++} / ${selectedRows.length} 首歌曲：《${song.name}》 开始下载！`,
            duration: 0
          });
          await download(song.mid, finalQuality);
          antd.message.success({
            key: loadingKey,
            content: `第 ${songIndex++} / ${selectedRows.length} 首歌曲：《${song.name}》 下载完成！`,
            duration: 0
          });
        }
        msgSuccess(`成功下载 ${selectedRows.length} 首歌曲！`);
        antd.message.destroy(loadingKey);
      } catch (error) {
        console.error("批量下载失败:", error);
      }
    };
    const renderFooter = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$6["footer"], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$6["selected-count"], children: [
          "已选择 ",
          selectedRows.length,
          " 首歌曲"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
          selectedRowKeys?.length < songList?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              onClick: () => {
                setSelectedRowKeys(songList?.map((item) => item.mid) || []);
                setSelectedRows(songList || []);
              },
              children: "全部选择"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              onClick: () => {
                setSelectedRowKeys([]);
                setSelectedRows([]);
              },
              children: "清空选择"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            MyButton,
            {
              type: "primary",
              onClick: handleBatchDownloadJson,
              disabled: !selectedRows?.length,
              children: [
                "下载JSON",
                selectedRows?.length ? `(${selectedRows?.length})` : ""
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(MyButton, { type: "primary", onClick: handleBatchDownload, disabled: !selectedRows?.length, children: [
            "下载选中歌曲",
            selectedRows?.length ? `(${selectedRows?.length})` : ""
          ] })
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
        className: styles$6["hot-song-modal"],
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SearchForm$1,
            {
              options: searchFormOptions,
              searchParams,
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
              rowKey: "mid",
              loading: loading2 && !loadingData.loadedSong,
              pagination: {
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total) => `共 ${total} 首歌曲`
              },
              scroll: { y: 500, x: 1100 },
              className: styles$6["song-table"]
            }
          )
        ]
      }
    );
  };
  const HotSongModal$1 = require$$0.forwardRef(HotSongModal);
  const getQuality$2 = (file, defaultQuality, chooseQuality) => {
    const qualityList = getFile_qualityList(file);
    const songDefaultQuality = qualityList.includes(defaultQuality) ? defaultQuality : qualityList[0];
    const finalQuality = chooseQuality || songDefaultQuality;
    return finalQuality;
  };
  const loading = "_loading_1fb5b_49";
  const footer = "_footer_1fb5b_152";
  const styles$5 = {
    "album-list-modal": "_album-list-modal_1fb5b_1",
    "modal-title": "_modal-title_1fb5b_1",
    "title-content": "_title-content_1fb5b_4",
    "title-stats": "_title-stats_1fb5b_10",
    "stat-item": "_stat-item_1fb5b_14",
    loading,
    "stat-value": "_stat-value_1fb5b_52",
    "stat-label": "_stat-label_1fb5b_60",
    "album-table": "_album-table_1fb5b_76",
    "album-info": "_album-info_1fb5b_79",
    "album-cover": "_album-cover_1fb5b_79",
    "album-details": "_album-details_1fb5b_92",
    "album-name": "_album-name_1fb5b_97",
    "album-trans-name": "_album-trans-name_1fb5b_106",
    "album-type": "_album-type_1fb5b_115",
    "singer-info": "_singer-info_1fb5b_118",
    "singer-name": "_singer-name_1fb5b_118",
    "singer-id": "_singer-id_1fb5b_126",
    "album-id-text": "_album-id-text_1fb5b_134",
    "album-mid-text": "_album-mid-text_1fb5b_135",
    "publish-date": "_publish-date_1fb5b_145",
    footer,
    "selected-count": "_selected-count_1fb5b_159",
    "selected-info": "_selected-info_1fb5b_163"
  };
  const { Text: Text$1, Title: Title$1 } = antd.Typography;
  const AlbumListModal = require$$0.forwardRef((props, ref) => {
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
    const [singerInfo, setSingerInfo] = require$$0.useState({});
    const albumDetailRef = useCompRef();
    const { data, loading: loading2 } = useGetData(getSingerAllAlbum, singerInfo.singerMid, {
      monitors: [singerInfo.singerMid, visible],
      returnFunction: () => !visible || !singerInfo.singerMid,
      initialValue: [],
      callback: (data2) => {
        console.log("data", data2);
      }
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
    const [playing, setPlaying] = require$$0.useState();
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
    const [downloading, setDownloading] = require$$0.useState();
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
    const [downloadingJson, setDownloadingJson] = require$$0.useState(void 0);
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
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", className: styles$5["album-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$5["album-cover"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Image,
            {
              width: 60,
              height: 60,
              src: getAlbumPicUrl(record.albumMid),
              alt: text,
              fallback: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$5["album-details"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$5["album-name"], title: text, children: text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$5["album-trans-name"], title: record.albumTranName || "", children: record.albumTranName || "" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$5["album-type"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tag, { color: "blue", children: record.albumType || "专辑" }) })
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$5["singer-info"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$5["singer-name"], title: singerName || "未知歌手", children: singerName || "未知歌手" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$5["singer-id"], title: singerInfo?.singerId?.toString() || "", children: singerInfo?.singerId || "" })
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
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Text$1, { className: styles$5["publish-date"], title: publishDate, children: publishDate || "未知" });
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
        render: (albumID) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$5["album-id-text"], text: albumID + "" })
      },
      {
        title: "专辑MID",
        dataIndex: "albumMid",
        key: "albumMid",
        width: 200,
        align: "center",
        render: (albumMid) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$5["album-mid-text"], text: albumMid })
      },
      {
        title: "操作",
        key: "action",
        width: 300,
        align: "center",
        fixed: "right",
        onCell: () => ({
          style: {
            cursor: "default"
          },
          onClick: (e) => e.stopPropagation()
        }),
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
    const [selectedRowKeys, setSelectedRowKeys] = require$$0.useState([]);
    const [selectedRows, setSelectedRows] = require$$0.useState([]);
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
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$5["modal-title"], children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$5["title-content"], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Title$1, { level: 4, style: { margin: 0 }, children: [
          singerInfo.singerName,
          " - 专辑列表"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$5["title-stats"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${styles$5["stat-item"]} ${loading2 ? styles$5["loading"] : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$5["stat-label"], children: "专辑" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$5["stat-value"], children: loading2 ? "..." : data?.length || 0 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${styles$5["stat-item"]} ${loading2 ? styles$5["loading"] : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$5["stat-label"], children: "歌曲" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$5["stat-value"], children: loading2 ? "..." : data?.reduce((sum, album) => sum + (album.totalNum || 0), 0) || 0 })
          ] })
        ] })
      ] }) });
    };
    const handleBatchDownload = async () => {
      if (selectedRows.length === 0) {
        msgWarning("请先选择要下载的专辑");
        return;
      }
      const loadingKey = "download-album";
      try {
        antd.message.loading({
          key: loadingKey,
          content: `正在准备下载 ${selectedRows.length} 张专辑...`,
          duration: 0
        });
        let index2 = 1;
        for (const album of selectedRows) {
          antd.message.loading({
            key: loadingKey,
            content: `正在下载第 ${index2} 张专辑 ${album.albumName}...`,
            duration: 0
          });
          await downloadAlbumSong(album.albumMid);
          antd.message.success({
            key: loadingKey,
            content: `第 ${index2} 张专辑 ${album.albumName} 下载成功！`,
            duration: 1
          });
          index2++;
        }
      } catch (error) {
        msgError("批量下载失败: " + error.message);
        console.error("批量下载失败:", error);
      } finally {
        antd.message.destroy(loadingKey);
      }
    };
    const handleBatchDownloadJson = async () => {
      if (selectedRows.length === 0) {
        msgWarning("请先选择要下载的专辑");
        return;
      }
      const loadingKey = "download-album-json";
      try {
        antd.message.loading({
          key: loadingKey,
          content: `正在准备下载 ${selectedRows.length} 张专辑...`,
          duration: 0
        });
        const result = [];
        let index2 = 1;
        for (const album of selectedRows) {
          console.log("album", album);
          antd.message.loading({
            key: loadingKey,
            content: `正在下载第 ${index2} 张专辑 ${album.albumName}...`,
            duration: 0
          });
          const res = await getDownLoadJson(album.albumMid);
          result.push(res);
          antd.message.success({
            key: loadingKey,
            content: `第 ${index2} 张专辑 ${album.albumName} 下载成功！`,
            duration: 1
          });
          index2++;
        }
        downloadAsJson(result, `${singerInfo.singerName}-专辑`);
        antd.message.success({
          key: loadingKey,
          content: `成功下载 ${selectedRows.length} 张专辑！`,
          duration: 1
        });
      } catch (error) {
        console.error("批量下载JSON失败:", error);
        antd.message.destroy(loadingKey);
        msgError("批量下载JSON失败: " + error.message);
      } finally {
        antd.message.destroy(loadingKey);
      }
    };
    const renderFooter = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$5["footer"], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$5["selected-count"], children: [
          "已选择 ",
          selectedRows.length,
          " 张专辑",
          selectedRows.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$5["selected-info"], children: [
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
            MyButton,
            {
              type: "primary",
              onClick: handleBatchDownloadJson,
              disabled: selectedRows.length === 0,
              children: [
                "下载Json",
                selectedRows?.length ? `(${selectedRows?.length})` : ""
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            MyButton,
            {
              type: "primary",
              onClick: handleBatchDownload,
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
        className: styles$5["album-list-modal"],
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
              className: styles$5["album-table"],
              onRow: (record) => ({
                style: {
                  cursor: "pointer"
                },
                onClick: () => {
                  albumDetailRef.current?.open({ albummid: record.albumMid });
                }
              }),
              pagination: {
                showSizeChanger: true,
                showQuickJumper: true,
                align: "end",
                showTotal: (total) => `共 ${total} 张专辑`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlbumDetail, { ref: albumDetailRef })
        ]
      }
    );
  });
  const styles$4 = {
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
  const defaultSearchParams$2 = {
    cur_page: 1,
    area: Area.全部,
    sex: Sex.全部,
    genre: Genre.全部
  };
  const SingerSearch = require$$0.forwardRef((props, ref) => {
    const { visible, close } = useVisible({}, ref);
    const [keyword, setKeyword] = require$$0.useState("");
    const [searchParams, setSearchParams] = require$$0.useState(defaultSearchParams$2);
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
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", className: styles$4["singer-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Avatar,
            {
              src: record.singer_pic,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.UserOutlined, {}),
              size: 48,
              className: styles$4["singer-avatar"]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$4["singer-details"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$4["singer-name"], children: text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$4["singer-country"], children: record.country || "未知地区" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$4["singer-id"], children: [
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
        render: (id) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$4["singer-id-text"], text: id + "" })
      },
      {
        title: "歌手MID",
        dataIndex: "singer_mid",
        key: "singer_mid",
        width: 200,
        align: "center",
        render: (mid) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$4["singer-mid-text"], text: mid })
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
    const renderList = require$$0.useMemo(() => {
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
        width: 1200,
        centered: true,
        className: styles$4["singer-search-modal"],
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
              scroll: { y: 500, x: 1e3 }
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(HotSongModal$1, { ref: hotSongModalRef }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlbumListModal, { ref: albumModalRef })
        ]
      }
    );
  });
  function getQQAvatarUrl(qqNumber, size = 640, prefix = "q1") {
    const safeQQ = encodeURIComponent(qqNumber);
    const safeSize = Number(size) || 100;
    const safePrefix = ["q1", "q2", "q3", "q4"].includes(prefix) ? prefix : "q1";
    return `https://${safePrefix}.qlogo.cn/g?b=qq&nk=${safeQQ}&s=${safeSize}`;
  }
  const styles$3 = {
    "song-list-detail-modal": "_song-list-detail-modal_pu8y8_1",
    "modal-header": "_modal-header_pu8y8_1",
    "modal-title": "_modal-title_pu8y8_1",
    "playlist-basic-info": "_playlist-basic-info_pu8y8_4",
    "playlist-info": "_playlist-info_pu8y8_13",
    "playlist-name": "_playlist-name_pu8y8_19",
    "creator-info": "_creator-info_pu8y8_23",
    "creator-name": "_creator-name_pu8y8_28",
    "playlist-stats": "_playlist-stats_pu8y8_32",
    "playlist-desc": "_playlist-desc_pu8y8_41",
    "description-text": "_description-text_pu8y8_44",
    "song-info": "_song-info_pu8y8_68",
    "song-name": "_song-name_pu8y8_73",
    "song-artist": "_song-artist_pu8y8_79",
    "artist-item": "_artist-item_pu8y8_87",
    "artist-name": "_artist-name_pu8y8_91",
    "artist-separator": "_artist-separator_pu8y8_95",
    "song-id": "_song-id_pu8y8_100",
    "id-copy": "_id-copy_pu8y8_100",
    "album-info": "_album-info_pu8y8_103",
    "album-details": "_album-details_pu8y8_107",
    "album-name": "_album-name_pu8y8_114",
    "album-id": "_album-id_pu8y8_122",
    "singer-list": "_singer-list_pu8y8_125",
    "singer-item": "_singer-item_pu8y8_130",
    "singer-details": "_singer-details_pu8y8_134",
    "singer-name": "_singer-name_pu8y8_141"
  };
  const { Text, Title } = antd.Typography;
  const SongListDetail = require$$0.forwardRef((_, ref) => {
    const { visible, close } = useVisible(
      {
        onOpen(params) {
          if (params) {
            setCurrentDissid(params.dissid);
          }
        }
      },
      ref
    );
    const [currentDissid, setCurrentDissid] = require$$0.useState("");
    const [inputMid, setInputMid] = require$$0.useState("");
    const { downloadConfig } = useConfig();
    const { quality: defaultQuality } = downloadConfig;
    const {
      getPlaylistDetail,
      getPlaylistDownloadJson
    } = useGetSonglistDetail();
    const { play, isPlaying, pause, download } = usePlayMusic();
    const { data: detail, loading: loading2 } = useGetData(getPlaylistDetail, currentDissid, {
      initialValue: {},
      returnFunction: () => !currentDissid || !visible,
      monitors: [currentDissid, visible],
      callback: (data) => {
        console.log("data", data);
      }
    });
    const list = require$$0.useMemo(() => {
      return detail?.songlist || [];
    }, [detail]);
    const { filteredList, handleFilter, setFilteredList } = useFilter(list || [], {
      fields: {
        name: {
          getValue: (item) => item.name
        },
        albumName: {
          getValue: (item) => item.album.name
        },
        singer: {
          getValue: (item) => item.singer.map((s) => s.name).join(" / ")
        }
      }
    });
    const searchFormOptions = [
      {
        label: "名字",
        name: "name",
        type: "select",
        inputProps: {
          mode: "multiple"
        },
        options: uniqueArrayByKey(list, "name").map((item) => ({
          label: item.name,
          value: item.name
        }))
      },
      // 歌手
      {
        label: "歌手",
        name: "singer",
        type: "select",
        inputProps: {
          mode: "multiple"
        },
        options: Object.entries(
          lodashExports.groupBy(list, (item) => item.singer.map((s) => s.name).join(" / "))
        ).map(([key]) => ({
          label: key,
          value: key
        }))
      },
      // 专辑
      {
        label: "专辑",
        name: "albumName",
        type: "select",
        inputProps: {
          mode: "multiple"
        },
        options: Object.entries(lodashExports.groupBy(list, (item) => item.album.name)).map(([key]) => ({
          label: key,
          value: key
        }))
      },
      // 歌单ID
      {
        label: "歌单ID",
        type: "input",
        inputProps: {
          placeholder: "请输入歌单ID",
          value: inputMid,
          onChange: (e) => setInputMid(e.target.value.trim()),
          onPressEnter: () => {
            if (inputMid) {
              setCurrentDissid(inputMid);
            }
          }
        }
      }
    ];
    const handleChooseQuality = (record, quality) => {
      setFilteredList(
        filteredList.map((item) => {
          if (item.mid === record.mid) {
            return {
              ...item,
              quality
            };
          }
          return item;
        })
      );
    };
    const handlePlay = (record) => {
      if (isPlaying) {
        pause();
      } else {
        const { file, quality } = record;
        const finalQuality = getQuality$1(file, defaultQuality, quality);
        play(record.mid, finalQuality);
      }
    };
    const [downloading, setDownloading] = require$$0.useState("");
    const handleDownload = async (record) => {
      try {
        if (downloading === record.mid) return;
        setDownloading(record.mid);
        const { file, quality } = record;
        const finalQuality = getQuality$1(file, defaultQuality, quality);
        await download(record.mid, finalQuality);
      } catch (error) {
        console.log("error", error);
      } finally {
        setDownloading("");
      }
    };
    const songColumns = [
      {
        title: "歌曲信息",
        dataIndex: "name",
        key: "name",
        width: 280,
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3["song-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3["song-name"], children: text }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3["song-artist"], children: record.singer?.map((s, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$3["artist-item"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3["artist-name"], children: s.name }),
            index2 < record.singer.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$3["artist-separator"], children: "/" })
          ] }, s.mid || index2)) || "-" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3["song-id"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { text: record.mid, className: styles$3["id-copy"] }) })
        ] })
      },
      {
        title: "专辑信息",
        dataIndex: "album",
        key: "album",
        width: 280,
        render: (album) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", className: styles$3["album-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Image,
            {
              width: 60,
              height: 60,
              src: album?.mid ? getAlbumPicUrl(album.mid, { size: "300x300" }) : "",
              alt: album?.name || "",
              fallback: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN",
              style: { borderRadius: 4 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3["album-details"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3["album-name"], title: album?.name || "-", children: album?.name || "-" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3["album-id"], children: album?.mid ? /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { text: album.mid, className: styles$3["id-copy"] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { type: "secondary", children: "-" }) })
          ] })
        ] })
      },
      {
        title: "歌手信息",
        dataIndex: "singer",
        key: "singer",
        width: 220,
        render: (singers) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3["singer-list"], children: singers?.map((singer, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3["singer-item"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Avatar,
            {
              src: getSingerPic(singer.mid),
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.UserOutlined, {}),
              size: 32,
              style: { marginRight: 8 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3["singer-details"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3["singer-name"], children: singer.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { text: singer.mid, className: styles$3["id-copy"] })
          ] })
        ] }, singer.mid || index2)) || "-" })
      },
      {
        title: "音质",
        dataIndex: "file",
        key: "file",
        width: 120,
        align: "center",
        render: (file, record) => {
          const qualityList = getFile_qualityList(file);
          const defaultValue = qualityList.includes(defaultQuality) ? defaultQuality : qualityList[0];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Select,
            {
              options: qualityList.map((quality) => ({
                label: quality,
                value: quality
              })),
              defaultValue,
              style: { width: "100%" },
              onChange: (value) => {
                handleChooseQuality(record, value);
              }
            }
          );
        }
      },
      // 格式
      {
        title: "格式",
        dataIndex: "format",
        key: "format",
        width: 150,
        align: "center",
        render: (_2, record) => {
          const qualityList = getFile_qualityList(record.file);
          const qualityColorMap = {
            flac: "green",
            ape: "volcano",
            320: "blue",
            m4a: "orange",
            128: "gray"
          };
          const qualityTextMap = {
            flac: "FLAC",
            ape: "APE",
            320: "320k",
            m4a: "M4A",
            128: "128k"
          };
          return /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Space, { wrap: true, children: qualityList.map((quality) => /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tag, { color: qualityColorMap[quality], children: qualityTextMap[quality] || quality }, quality)) });
        }
      },
      {
        title: "操作",
        key: "action",
        width: 150,
        align: "center",
        fixed: "right",
        render: (_2, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              type: "link",
              size: "small",
              icon: isPlaying === record.mid ? /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PauseCircleOutlined, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PlayCircleOutlined, {}),
              onClick: () => handlePlay(record),
              children: "播放"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Button,
            {
              type: "link",
              size: "small",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.DownloadOutlined, {}),
              loading: downloading === record.mid,
              onClick: () => handleDownload(record),
              children: "下载"
            }
          )
        ] })
      }
    ];
    const renderTitle = () => {
      const { pic_mid, dissname, nickname, isvip, visitnum, scoreavage, songnum, desc, uin } = detail || {};
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3["modal-header"], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { level: 4, className: styles$3["modal-title"], children: "歌单详情" }),
        detail && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3["playlist-basic-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Image,
            {
              src: pic_mid ? `https://y.gtimg.cn/music/photo_new/T002R300x300M000${pic_mid}.jpg` : "",
              alt: dissname,
              width: 80,
              height: 80,
              style: { borderRadius: 8 },
              fallback: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3["playlist-info"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { level: 5, className: styles$3["playlist-name"], children: dissname }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3["creator-info"], children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                antd.Avatar,
                {
                  src: getQQAvatarUrl(uin),
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.UserOutlined, {}),
                  size: 24,
                  style: { marginRight: 8 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { className: styles$3["creator-name"], children: nickname || "未知用户" }),
              isvip === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tag, { color: "gold", children: "VIP" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3["playlist-stats"], children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { type: "secondary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(icons.EyeOutlined, {}),
                " ",
                visitnum?.toLocaleString() || 0,
                " 播放"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { type: "secondary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(icons.StarOutlined, {}),
                " ",
                scoreavage || "-",
                " 评分"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { type: "secondary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(icons.TrophyOutlined, {}),
                " ",
                songnum || 0,
                " 首歌曲"
              ] })
            ] }) }),
            desc && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3["playlist-desc"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { type: "secondary", className: styles$3["description-text"], children: desc }) })
          ] })
        ] })
      ] });
    };
    const [selectedRowKeys, setSelectedRowKeys] = require$$0.useState([]);
    const [selectedRows, setSelectedRows] = require$$0.useState([]);
    const rowSelection = {
      preserveSelectedRowKeys: true,
      selectedRowKeys,
      onChange: (selectedRowKeys2, selectedRows2) => {
        setSelectedRowKeys(selectedRowKeys2);
        setSelectedRows(selectedRows2);
      }
    };
    const handleBatchDownload = async () => {
      try {
        if (selectedRows.length === 0) {
          msgWarning("请先选择要下载的歌曲");
          return;
        }
        const loadingKey = "download-song";
        antd.message.loading({
          key: loadingKey,
          content: `正在准备下载 ${selectedRows.length} 首歌曲`,
          duration: 0
        });
        let songIndex = 1;
        for (const song of selectedRows) {
          antd.message.loading({
            key: loadingKey,
            content: `正在下载第 ${songIndex} 首歌曲 ${song.name}...`,
            duration: 0
          });
          const finalQuality = getQuality$1(song.file, defaultQuality);
          await download(song.mid, finalQuality);
          antd.message.success({
            key: loadingKey,
            content: `第 ${songIndex} 首歌曲 ${song.name} 下载成功！`,
            duration: 0
          });
          songIndex++;
        }
        msgSuccess(`成功下载 ${selectedRows.length} 首歌曲！`);
        antd.message.destroy(loadingKey);
      } catch (error) {
        console.error("下载选中歌曲失败:", error);
      }
    };
    const handleDownloadAllJson = async () => {
      if (!currentDissid) return;
      try {
        const data = await getPlaylistDownloadJson(currentDissid);
        console.log("data", data);
        downloadAsJson(data, `${data.playlistName}.json`);
      } catch (error) {
        console.error("下载歌单JSON失败:", error);
      }
    };
    const renderFooter = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
        selectedRowKeys?.length < list.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Button,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.SelectOutlined, {}),
            onClick: () => {
              setSelectedRowKeys(list?.map((item) => item.mid) || []);
              setSelectedRows(list || []);
            },
            children: "全部选择"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Button,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.SelectOutlined, {}),
            onClick: () => {
              setSelectedRowKeys([]);
              setSelectedRows([]);
            },
            children: "清空选择"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          MyButton,
          {
            type: "primary",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.DownloadOutlined, {}),
            onClick: handleBatchDownload,
            disabled: !selectedRows?.length,
            children: [
              "下载选中歌曲",
              selectedRows?.length ? `(${selectedRows?.length})` : ""
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          MyButton,
          {
            type: "primary",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.FileOutlined, {}),
            onClick: handleDownloadAllJson,
            disabled: !list?.length,
            children: [
              "下载全部JSON",
              list?.length ? `(${list?.length})` : ""
            ]
          }
        )
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
        className: styles$3["song-list-detail-modal"],
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SearchForm$1,
            {
              options: searchFormOptions,
              onSearch: handleFilter,
              style: {
                marginBottom: 0
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Table,
            {
              columns: songColumns,
              dataSource: filteredList,
              rowSelection,
              rowKey: "mid",
              loading: loading2,
              scroll: { y: 400, x: 800 },
              pagination: {
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total) => `共 ${total} 首歌曲`
              }
            }
          )
        ]
      }
    );
  });
  const getQuality$1 = (file, defaultQuality, chooseQuality) => {
    const qualityList = getFile_qualityList(file);
    const songDefaultQuality = qualityList.includes(defaultQuality) ? defaultQuality : qualityList[0];
    const finalQuality = chooseQuality || songDefaultQuality;
    return finalQuality;
  };
  const introduction = "_introduction_1h6z1_47";
  const styles$2 = {
    "song-list-search-modal": "_song-list-search-modal_1h6z1_1",
    "play-count-overlay": "_play-count-overlay_1h6z1_1",
    "playlist-cover-container": "_playlist-cover-container_1h6z1_19",
    "playlist-info": "_playlist-info_1h6z1_23",
    "playlist-name": "_playlist-name_1h6z1_28",
    "creator-info": "_creator-info_1h6z1_32",
    "creator-name": "_creator-name_1h6z1_39",
    "creator-qq": "_creator-qq_1h6z1_43",
    introduction,
    "time-info": "_time-info_1h6z1_79",
    "create-time": "_create-time_1h6z1_85",
    "commit-time": "_commit-time_1h6z1_91",
    "playlist-id": "_playlist-id_1h6z1_95"
  };
  const { Option } = antd.Select;
  const defaultSearchParams$1 = {
    pageNum: 0,
    pageSize: 20
  };
  const SongListSearch = require$$0.forwardRef((props, ref) => {
    const { visible, close } = useVisible({}, ref);
    const [searchParams, setSearchParams] = require$$0.useState(defaultSearchParams$1);
    const {
      playPlaylist,
      downloadPlaylistSong,
      getPlaylistDownloadJson
    } = useGetSonglistDetail();
    const { data: songListCategory } = useGetData(getSongListCategory, void 0, {
      monitors: [visible],
      returnFunction: () => !visible,
      initialValue: [],
      callback: (data2) => {
        console.log("data", data2);
      }
    });
    const categoryOptions = require$$0.useMemo(() => {
      return songListCategory?.map((item) => ({
        label: item.categoryGroupName,
        value: item.categoryGroupName,
        checkable: false,
        children: item.items.map((item2) => ({
          label: item2.categoryName,
          value: item2.categoryId
        }))
      }));
    }, [songListCategory]);
    const searchFormOptions = [
      // 分类
      {
        label: "分类",
        name: "categoryIds",
        type: "treeSelect",
        inputProps: {
          treeData: categoryOptions
        }
      },
      // 排序
      {
        label: "排序",
        name: "sortId",
        type: "select",
        options: [
          { label: "默认", value: 1 },
          { label: "最新", value: 2 },
          { label: "最热", value: 3 },
          { label: "评分", value: 4 },
          { label: "none", value: 5 }
        ],
        inputProps: {
          mode: void 0,
          allowClear: true
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
    const handlePlay = async (record) => {
      console.log("播放歌单:", record);
      try {
        await playPlaylist(record.dissid);
      } catch (error) {
        console.error("播放歌单失败:", error);
      }
    };
    const songListDetailRef = useCompRef();
    const handleViewDetail = async (record) => {
      console.log("查看歌单详情:", record);
      songListDetailRef.current?.open({
        dissid: record.dissid
      });
    };
    const handleDownload = async (record) => {
      console.log("下载歌单:", record);
      try {
        await downloadPlaylistSong(record.dissid);
      } catch (error) {
        console.error("下载歌单失败:", error);
      }
    };
    const handleDownloadJson = async (record) => {
      console.log("下载歌单json:", record);
      try {
        const data2 = await getPlaylistDownloadJson(record.dissid);
        console.log("data", data2);
        downloadAsJson(data2, `${data2.playlistName}.json`);
      } catch (error) {
        console.error("下载歌单json失败:", error);
      }
    };
    const columns = [
      {
        title: "歌单信息",
        dataIndex: "dissname",
        key: "dissname",
        width: 400,
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2["playlist-cover-container"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              antd.Image,
              {
                src: record.imgurl,
                alt: text,
                width: 60,
                height: 60,
                style: { borderRadius: 8 },
                fallback: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2["play-count-overlay"], children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPlayCount(record.listennum || 0) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2["playlist-info"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2["playlist-name"], children: text }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2["creator-info"], children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                antd.Avatar,
                {
                  src: getQQAvatarUrl(record.creator?.qq),
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.UserOutlined, {}),
                  size: 20,
                  style: { marginRight: 8 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$2["creator-name"], children: record.creator?.name || "未知用户" }),
              record.creator?.isVip === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tag, { color: "gold", children: "VIP" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2["creator-qq"], children: [
              "QQ: ",
              record.creator?.qq || "-"
            ] }),
            record.introduction && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2["introduction"], children: record.introduction })
          ] })
        ] })
      },
      {
        title: "时间信息",
        key: "time-info",
        width: 180,
        render: (_, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2["time-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2["create-time"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(icons.ClockCircleOutlined, { style: { color: "#666" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: record.createtime ? new Date(record.createtime).toLocaleDateString() : "-" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2["commit-time"], children: [
            "提交: ",
            record.commit_time ? new Date(record.commit_time).toLocaleDateString() : "-"
          ] })
        ] })
      },
      {
        title: "歌单ID",
        dataIndex: "dissid",
        key: "dissid",
        width: 150,
        align: "center",
        render: (dissid) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { text: dissid, className: styles$2["playlist-id"] })
      },
      {
        title: "操作",
        key: "action",
        width: 350,
        align: "center",
        fixed: "right",
        onCell: () => ({
          style: {
            cursor: "default"
          },
          onClick: (e) => e.stopPropagation()
        }),
        render: (_, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            MyButton,
            {
              type: "link",
              size: "small",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PlayCircleOutlined, {}),
              onClick: () => handlePlay(record),
              children: "播放"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            MyButton,
            {
              type: "link",
              size: "small",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.DownloadOutlined, {}),
              onClick: () => handleDownload(record),
              children: "下载"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            MyButton,
            {
              type: "link",
              size: "small",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.FileOutlined, {}),
              onClick: () => handleDownloadJson(record),
              children: "下载json"
            }
          )
        ] })
      }
    ];
    const { data, loading: loading2 } = useGetData(
      getSongList,
      {
        ...searchParams,
        limit: searchParams.pageSize,
        page: searchParams.pageNum
      },
      {
        returnFunction: () => !visible,
        monitors: [searchParams, visible],
        callback: (data2) => {
          console.log("data", data2);
        }
      }
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      antd.Modal,
      {
        title: "歌单查询",
        open: visible,
        onCancel: close,
        footer: null,
        width: 1200,
        centered: true,
        className: styles$2["song-list-search-modal"],
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SearchForm$1,
            {
              options: searchFormOptions,
              searchParams,
              onSearch: handleSearch,
              style: {
                marginBottom: 16
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Table,
            {
              columns,
              dataSource: data?.list || [],
              rowKey: "dissid",
              loading: loading2,
              onRow: (record) => ({
                style: {
                  cursor: "pointer"
                },
                onClick: () => handleViewDetail(record)
              }),
              scroll: { y: 500, x: 970 },
              pagination: false
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Pagination,
            {
              align: "end",
              total: data?.sum || 0,
              current: searchParams.pageNum,
              pageSize: searchParams.pageSize,
              showSizeChanger: true,
              showTotal: (total) => `共 ${total} 个歌单`,
              onChange: (page, pageSize) => {
                setSearchParams({ ...searchParams, pageNum: page, pageSize });
              },
              style: { marginTop: 16 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SongListDetail, { ref: songListDetailRef })
        ]
      }
    );
  });
  const formatPlayCount = (count) => {
    if (count >= 1e8) {
      return `${(count / 1e8).toFixed(1)}亿`;
    } else if (count >= 1e4) {
      return `${(count / 1e4).toFixed(1)}万`;
    } else {
      return count.toString();
    }
  };
  const typeMap = {
    song: 0,
    album: 8,
    user: 9,
    playlist: 2,
    lyric: 7,
    mv: 12
  };
  const getSearchResult = async (keyword, type = "song", options) => {
    const { pageNum = 1, pageSize = 20 } = options || {};
    const params = {
      w: keyword,
      n: pageSize,
      p: pageNum,
      catZhida: 1,
      format: "json",
      outCharset: "utf-8",
      t: typeMap[type],
      cr: 1,
      lossless: 0,
      flag_qc: 0,
      platform: "yqq.json",
      g_tk: 5381
    };
    console.log("params", params);
    const res = await qqMusicRequest(
      `/soso/fcgi-bin/client_search_cp?${new URLSearchParams(params).toString()}`,
      {
        method: "GET"
      },
      "c"
    );
    if (res.code === 0) {
      return res.data;
    }
    throw new Error("搜索失败");
  };
  const getWebSearchResult = async (keyword, type = "song", options) => {
    const { pageNum = 1, pageSize = 20 } = {};
    const params = {
      req_1: {
        method: "DoSearchForQQMusicDesktop",
        module: "music.search.SearchCgiService",
        param: {
          num_per_page: Number(pageSize),
          page_num: Number(pageNum),
          query: keyword,
          search_type: Number(typeMap[type])
        }
      }
    };
    console.log("params", params);
    const res = await qqMusicRequest(
      `/cgi-bin/musicu.fcg`,
      {
        method: "POST",
        data: JSON.stringify(params)
      },
      "u"
    );
    console.log("res", res);
  };
  const styles$1 = {
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
    "song-mid-text": "_song-mid-text_15iqn_75"
  };
  const SongTab$1 = ({ data, loading: loading2 }) => {
    const { downloadConfig } = useConfig();
    const { quality: defaultQuality } = downloadConfig;
    const { play, download, isPlaying, pause, getLyric } = usePlayMusic();
    const [list, setList] = require$$0.useState(data);
    require$$0.useEffect(() => {
      setList(data);
    }, [data]);
    const handleChooseQuality = (record, quality) => {
      setList(
        list.map((item) => {
          if (item.songmid === record.songmid) {
            return {
              ...item,
              quality
            };
          }
          return item;
        })
      );
    };
    const handlePlay = (record) => {
      console.log("播放歌曲:", record);
      if (isPlaying) {
        pause();
      } else {
        const finalQuality = getQuality(record, defaultQuality, record.quality);
        play(record.songmid, finalQuality);
      }
    };
    const handleDownload = async (record) => {
      try {
        const finalQuality = getQuality(record, defaultQuality, record.quality);
        await download(record.songmid, finalQuality);
      } catch (error) {
        console.error("下载歌曲失败:", error);
      }
    };
    const handleDownloadLyric = async (record) => {
      try {
        const lyric = await getLyric(record.songmid);
        downloadAsLRC(lyric, record.songname);
      } catch (error) {
        console.error("下载歌词失败:", error);
      }
    };
    const columns_song = [
      {
        title: "歌曲信息",
        dataIndex: "songname",
        width: 300,
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", className: styles$1["song-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["song-cover"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Image, { src: getAlbumPicUrl(record.albummid) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1["song-details"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["song-name"], title: text, children: text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["song-album"], title: record.albumname || "", children: record.albumname || "" })
          ] })
        ] })
      },
      {
        title: "歌手",
        dataIndex: "singer",
        width: 200,
        render: (singers) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "small", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Image, { src: getSingerPic(singers[0].mid), width: 40, height: 40 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["singer-info"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: styles$1["singer-name"],
              title: singers?.map((s) => s.name).join("/") || "未知歌手",
              children: singers?.map((s) => s.name).join("/") || "未知歌手"
            }
          ) })
        ] })
      },
      {
        title: "专辑",
        dataIndex: "albumname",
        width: 200,
        ellipsis: true
      },
      {
        title: "大小",
        dataIndex: "size128",
        width: 120,
        align: "center",
        render: (_, record) => {
          const quality = record.quality || defaultQuality;
          const sizeKey = `size${quality}`;
          if (record.quality) {
            console.log("quality", quality);
            console.log("sizeKey", sizeKey);
          }
          const size = record[sizeKey] || 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            Math.round(size / 1024 / 1024),
            "MB"
          ] });
        }
      },
      // 音质选择器
      {
        title: "音质",
        key: "quality",
        width: 150,
        align: "center",
        render: (_, record) => {
          const qualityList = getFileQualityList(record);
          const defaultValue = qualityList.includes(defaultQuality) ? defaultQuality : qualityList[0];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Select,
            {
              options: qualityList.map((quality) => ({
                label: quality,
                value: quality
              })),
              defaultValue,
              style: { width: "100%" },
              onChange: (value) => {
                handleChooseQuality(record, value);
              }
            }
          );
        }
      },
      {
        title: "格式",
        key: "format",
        width: 150,
        align: "center",
        render: (_, record) => {
          const qualityList = getFileQualityList(record);
          const qualityColorMap = {
            flac: "green",
            ape: "volcano",
            320: "blue",
            m4a: "orange",
            128: "gray"
          };
          const qualityTextMap = {
            flac: "FLAC",
            ape: "APE",
            320: "320k",
            m4a: "M4A",
            128: "128k"
          };
          return /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Space, { wrap: true, children: qualityList.map((quality) => /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tag, { color: qualityColorMap[quality], children: qualityTextMap[quality] || quality }, quality)) });
        }
      },
      {
        title: "歌曲ID",
        dataIndex: "songmid",
        width: 200,
        align: "center",
        render: (songmid) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$1["song-mid-text"], text: songmid })
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
                icon: isPlaying === record.songmid ? /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PauseCircleOutlined, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PlayCircleOutlined, {}),
                onClick: () => handlePlay(record),
                title: "播放歌曲",
                children: "播放"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MyButton,
              {
                type: "link",
                size: "small",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.DownloadOutlined, {}),
                onClick: () => handleDownload(record),
                title: "下载歌曲",
                children: "下载"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MyButton,
              {
                type: "link",
                size: "small",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.FileOutlined, {}),
                onClick: () => handleDownloadLyric(record),
                title: "下载歌词",
                children: "下载歌词"
              }
            )
          ] });
        }
      }
    ];
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      antd.Table,
      {
        columns: columns_song,
        dataSource: list,
        rowKey: "songmid",
        loading: loading2,
        scroll: { y: 500, x: 1100 },
        className: styles$1["song-table"],
        pagination: false
      }
    );
  };
  const getQuality = (record, defaultQuality, chooseQuality) => {
    const qualityList = getFileQualityList(record);
    const songDefaultQuality = qualityList.includes(defaultQuality) ? defaultQuality : qualityList[0];
    const finalQuality = chooseQuality || songDefaultQuality;
    return finalQuality;
  };
  const AlbumTab$1 = ({ data, loading: loading2 }) => {
    const albumDetailRef = useCompRef();
    const { pause, isPlaying } = usePlayMusic();
    const {
      playAlbum,
      downloadAlbumSong,
      getDownLoadJson
    } = useGetAlbumDetail();
    const [playing, setPlaying] = require$$0.useState();
    const handlePlay = async (record) => {
      try {
        setPlaying(record.albumMID);
        const { albumMID, albumName } = record;
        const hide = msgLoading(`正在加载《${albumName}》...`);
        await playAlbum(albumMID);
        hide();
        msgSuccess(`《${albumName}》开始播放`);
      } catch (error) {
        console.error("播放失败:", error);
      } finally {
        setPlaying(void 0);
      }
    };
    const [downloading, setDownloading] = require$$0.useState();
    const handleDownload = async (record) => {
      const loadingKey = "download-album-song";
      try {
        setDownloading(record.albumMID);
        const { albumMID, albumName } = record;
        antd.message.loading({
          key: loadingKey,
          content: `正在下载专辑歌曲《${albumName}》...`,
          duration: 0
        });
        await downloadAlbumSong(albumMID, {
          onChange: (options) => {
            antd.message.loading({
              key: loadingKey,
              content: `正在下载第${options.index}首歌曲《${options.songList[options.index - 1].songname}》...`,
              duration: 0
            });
          }
        });
        antd.message.destroy(loadingKey);
        msgSuccess(`《${albumName}》下载成功！`);
      } catch (error) {
        console.error("下载失败:", error);
      } finally {
        setDownloading(void 0);
        antd.message.destroy(loadingKey);
      }
    };
    const [downloadingJson, setDownloadingJson] = require$$0.useState(void 0);
    const handleDownloadJson = async (record) => {
      if (!record.albumMID) return;
      try {
        setDownloadingJson(record.albumMID);
        const { albumMID, albumName } = record;
        const res = await getDownLoadJson(albumMID);
        downloadAsJson([res], `${albumName}-专辑`);
      } catch (error) {
        msgError("下载JSON失败: " + error.message);
      } finally {
        setDownloadingJson(void 0);
      }
    };
    const columns_album = [
      {
        title: "专辑信息",
        dataIndex: "albumName",
        width: 300,
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", className: styles$1["song-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["song-cover"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Image, { src: getAlbumPicUrl(record.albumMID) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: styles$1["song-details"],
              style: {
                cursor: "pointer"
              },
              onClick: () => albumDetailRef.current?.open({ albummid: record.albumMID }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["song-name"], title: text, children: text }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["song-album"], title: record.singerName || "", children: record.singerName || "" })
              ]
            }
          )
        ] })
      },
      {
        title: "歌手",
        dataIndex: "singerName",
        width: 200,
        ellipsis: true
      },
      {
        title: "发布时间",
        dataIndex: "publicTime",
        width: 150,
        align: "center"
      },
      {
        title: "歌曲数量",
        dataIndex: "song_count",
        width: 100,
        align: "center"
      },
      {
        title: "专辑ID",
        dataIndex: "albumMID",
        width: 200,
        align: "center",
        render: (albumMID) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$1["song-mid-text"], text: albumMID })
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
                loading: playing === record.albumMID,
                icon: playing === record.albumMID ? /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PauseCircleOutlined, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PlayCircleOutlined, {}),
                onClick: () => {
                  if (isPlaying === record.albumMID) {
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
                loading: downloadingJson === record.albumMID,
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
                loading: downloading === record.albumMID,
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
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Table,
        {
          columns: columns_album,
          dataSource: data,
          rowKey: "albumMID",
          loading: loading2,
          scroll: { y: 500, x: 1100 },
          className: styles$1["song-table"],
          pagination: false
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlbumDetail, { ref: albumDetailRef })
    ] });
  };
  const SingerTab$1 = ({ data, loading: loading2 }) => {
    const hotSongModalRef = useCompRef();
    const handleHotSong = (record) => {
      hotSongModalRef.current.open({
        singerId: record.singerID,
        singerMid: record.singerMID,
        singerName: record.singerName,
        singerPic: record.singerPic
      });
    };
    const albumModalRef = useCompRef();
    const handleAlbum = (record) => {
      albumModalRef.current.open({
        singerId: record.singerID,
        singerMid: record.singerMID,
        singerName: record.singerName,
        singerPic: record.singerPic
      });
    };
    const columns_singer = [
      {
        title: "歌手信息",
        dataIndex: "singerName",
        width: 300,
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", className: styles$1["song-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["song-cover"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Image, { src: record.singerPic }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["song-details"], children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["song-name"], title: text, children: text }) })
        ] })
      },
      {
        title: "歌曲数量",
        dataIndex: "songNum",
        width: 100,
        align: "center"
      },
      {
        title: "专辑数量",
        dataIndex: "albumNum",
        width: 100,
        align: "center"
      },
      {
        title: "MV数量",
        dataIndex: "mvNum",
        width: 100,
        align: "center"
      },
      {
        title: "歌手ID",
        dataIndex: "singerMID",
        width: 200,
        align: "center",
        render: (singerMID) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$1["song-mid-text"], text: singerMID })
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
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Table,
        {
          columns: columns_singer,
          dataSource: data,
          rowKey: "singerMID",
          loading: loading2,
          scroll: { y: 500, x: 1100 },
          className: styles$1["song-table"],
          pagination: false
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HotSongModal$1, { ref: hotSongModalRef }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlbumListModal, { ref: albumModalRef })
    ] });
  };
  const MvTab = ({ data, loading: loading2 }) => {
    const columns_mv = [
      {
        title: "MV信息",
        dataIndex: "mv_name",
        width: 300,
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", className: styles$1["song-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["song-cover"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Image, { src: record.mv_pic_url }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1["song-details"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["song-name"], title: text, children: text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["song-album"], title: record.singer_name || "", children: record.singer_name || "" })
          ] })
        ] })
      },
      {
        title: "歌手",
        dataIndex: "singer_name",
        width: 200,
        ellipsis: true
      },
      {
        title: "时长",
        dataIndex: "duration",
        width: 100,
        align: "center",
        render: (duration) => {
          const minutes = Math.floor(duration / 60);
          const seconds = duration % 60;
          return `${minutes}:${seconds.toString().padStart(2, "0")}`;
        }
      },
      {
        title: "播放次数",
        dataIndex: "play_count",
        width: 120,
        align: "center",
        render: (count) => {
          if (count >= 1e4) {
            return `${(count / 1e4).toFixed(1)}万`;
          }
          return count.toString();
        }
      },
      {
        title: "发布时间",
        dataIndex: "publish_date",
        width: 150,
        align: "center"
      },
      {
        title: "MV ID",
        dataIndex: "mv_id",
        width: 150,
        align: "center",
        render: (mv_id) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$1["song-mid-text"], text: mv_id.toString() })
      }
    ];
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      antd.Table,
      {
        columns: columns_mv,
        dataSource: data,
        rowKey: "mv_id",
        loading: loading2,
        scroll: { y: 500, x: 1100 },
        className: styles$1["song-table"],
        pagination: false
      }
    );
  };
  const LyricTab = ({ data, loading: loading2 }) => {
    const columns_lyric = [
      {
        title: "歌曲信息",
        dataIndex: "songname",
        width: 300,
        render: (text, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { size: "middle", className: styles$1["song-info"], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["song-cover"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Image, { src: getAlbumPicUrl(record.albummid) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1["song-details"], children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["song-name"], title: text, children: text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["song-album"], title: record.albumname || "", children: record.albumname || "" })
          ] })
        ] })
      },
      {
        title: "歌手",
        dataIndex: "singer",
        width: 200,
        render: (singers) => /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Space, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["singer-info"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: styles$1["singer-name"],
            title: singers?.map((s) => s.name).join("/") || "未知歌手",
            children: singers?.map((s) => s.name).join("/") || "未知歌手"
          }
        ) }) })
      },
      {
        title: "歌词预览",
        dataIndex: "content",
        width: 300,
        ellipsis: true,
        render: (content) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { title: content, style: { maxWidth: 300 }, children: [
          content?.substring(0, 50),
          "..."
        ] })
      },
      {
        title: "歌曲ID",
        dataIndex: "songmid",
        width: 200,
        align: "center",
        render: (songmid) => /* @__PURE__ */ jsxRuntimeExports.jsx(CopyText, { className: styles$1["song-mid-text"], text: songmid })
      }
    ];
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      antd.Table,
      {
        columns: columns_lyric,
        dataSource: data,
        rowKey: "songmid",
        loading: loading2,
        scroll: { y: 500, x: 1100 },
        className: styles$1["song-table"],
        pagination: false
      }
    );
  };
  const defaultSearchParams = {
    pageNum: 1,
    pageSize: 20,
    type: "song"
  };
  const SongSearch = require$$0.forwardRef((props, ref) => {
    const { visible, close } = useVisible({}, ref);
    const [searchParams, setSearchParams] = require$$0.useState(defaultSearchParams);
    const searchFormOptions = [
      // 歌曲名称
      {
        label: "歌曲名称",
        name: "keyword",
        type: "input",
        inputProps: {
          placeholder: "请输入歌曲名称"
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
    const { data, loading: loading2 } = useGetData(
      () => getSearchResult(searchParams.keyword, searchParams.type, searchParams),
      void 0,
      {
        returnFunction: () => !searchParams.keyword,
        monitors: [searchParams]
      }
    );
    console.log("data", data);
    const renderTitle = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["modal-title"], children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1["title-content"], children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$1["title-text"], children: "歌曲查询" }) }) });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      antd.Modal,
      {
        title: renderTitle(),
        open: visible,
        onCancel: close,
        width: 1200,
        centered: true,
        className: styles$1["song-search-modal"],
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SearchForm$1,
            {
              options: searchFormOptions,
              onSearch: handleSearch,
              style: { marginBottom: 16 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            antd.Tabs,
            {
              activeKey: searchParams.type,
              onChange: (key) => setSearchParams({ ...searchParams, type: key, pageNum: 1 }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tabs.TabPane, { tab: "歌曲", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SongTab$1, { data: data?.song?.list || [], loading: loading2 }) }, "song"),
                /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tabs.TabPane, { tab: "专辑", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlbumTab$1, { data: data?.album?.list || [], loading: loading2 }) }, "album"),
                /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tabs.TabPane, { tab: "歌手", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SingerTab$1, { data: data?.singer?.list || [], loading: loading2 }) }, "user"),
                /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tabs.TabPane, { tab: "MV", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MvTab, { data: data?.mv?.list || [], loading: loading2 }) }, "mv"),
                /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tabs.TabPane, { tab: "歌词", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LyricTab, { data: data?.lyric?.list || [], loading: loading2 }) }, "lyric")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Pagination,
            {
              align: "end",
              total: (() => {
                switch (searchParams.type) {
                  case "song":
                    return data?.song?.totalnum || 0;
                  case "album":
                    return data?.album?.totalnum || 0;
                  case "user":
                    return data?.singer?.totalnum || 0;
                  case "mv":
                    return data?.mv?.totalnum || 0;
                  case "lyric":
                    return data?.lyric?.totalnum || 0;
                  default:
                    return 0;
                }
              })(),
              current: searchParams.pageNum,
              pageSize: searchParams.pageSize,
              showSizeChanger: true,
              showTotal: (total) => {
                const typeMap2 = {
                  song: "首歌曲",
                  album: "张专辑",
                  user: "位歌手",
                  mv: "个MV",
                  lyric: "首歌词"
                };
                return `共 ${total} ${typeMap2[searchParams.type] || "条记录"}`;
              },
              onChange: (page, pageSize) => {
                setSearchParams({ ...searchParams, pageNum: page, pageSize });
              },
              style: { marginTop: 16 }
            }
          )
        ]
      }
    );
  });
  const AlbumTab = () => {
    const [albummid, setAlbummid] = require$$0.useState("0016l2F430zMux");
    const [getAlbumInfoLoading, setGetAlbumInfoLoading] = require$$0.useState(false);
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
    const [getAlbumPicUrlLoading, setGetAlbumPicUrlLoading] = require$$0.useState(false);
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { label: "获取专辑信息", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
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
    ] }) }) });
  };
  function SettingItem(props) {
    const { value, onChange, type = "switch", disabled, ...otherProps } = props;
    switch (type) {
      case "input":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Input,
          {
            value,
            onChange: (e) => onChange?.(e.target.value),
            disabled,
            ...otherProps
          }
        );
      case "select":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Select,
          {
            value,
            onChange,
            disabled,
            ...otherProps
          }
        );
      case "radio":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Radio.Group,
          {
            value,
            onChange: (e) => onChange?.(e.target.value),
            disabled,
            ...otherProps
          }
        );
      case "checkbox":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Checkbox.Group,
          {
            value,
            onChange,
            disabled,
            ...otherProps
          }
        );
      case "date":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.DatePicker,
          {
            value,
            onChange,
            disabled,
            ...otherProps
          }
        );
      case "time":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.TimePicker,
          {
            value,
            onChange,
            disabled,
            ...otherProps
          }
        );
      case "switch":
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Switch,
          {
            checked: value,
            onChange,
            disabled,
            ...otherProps
          }
        );
    }
  }
  const { Item: Item$1 } = antd.Descriptions;
  const getQualityOptions = () => {
    return [
      { label: "128k MP3", value: "128" },
      { label: "320k MP3", value: "320" },
      { label: "FLAC", value: "flac" }
    ];
  };
  const DOWNLOAD_SETTING_STRATEGIES = [
    {
      label: "下载音质",
      key: "quality",
      type: "select",
      options: getQualityOptions(),
      style: { width: "100%" }
    },
    {
      label: "是否下载歌词",
      key: "downloadLyric",
      type: "switch"
    },
    {
      label: "是否内嵌歌词封面",
      key: "embedLyricCover",
      type: "switch"
    }
  ];
  const DownloadSettingTab = () => {
    const { downloadConfig, setDownloadConfig } = useConfig();
    const handleConfigChange = (key, value) => {
      setDownloadConfig({
        ...downloadConfig,
        [key]: value
      });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      antd.Descriptions,
      {
        column: 3,
        size: "default",
        bordered: true,
        style: {
          minWidth: 800
        },
        children: DOWNLOAD_SETTING_STRATEGIES.map((strategy) => {
          const { type, key, label, ...rest } = strategy;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Item$1, { label, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingItem,
            {
              value: downloadConfig[key],
              onChange: ((value) => handleConfigChange(key, value)),
              type,
              ...rest
            }
          ) }, key);
        })
      }
    );
  };
  const FlacTab = () => {
    const [flacFile, setFlacFile] = require$$0.useState(null);
    const [flacTagName, setFlacTagName] = require$$0.useState("all");
    const [flacTagValue, setFlacTagValue] = require$$0.useState("");
    const [flacPicture, setFlacPicture] = require$$0.useState(null);
    const [picturePreview, setPicturePreview] = require$$0.useState(null);
    const [flacTags, setFlacTags] = require$$0.useState({});
    const [flacFileList, setFlacFileList] = require$$0.useState([]);
    const [pictureFileList, setPictureFileList] = require$$0.useState([]);
    const loadFlacTags = async (file) => {
      if (!file) return;
      try {
        if (flacTags.cover) {
          URL.revokeObjectURL(flacTags.cover);
        }
        const tags = await readAllFlacTag(file);
        const covers = await readFlacPictures(file) || [];
        const cover = covers.length > 0 ? URL.createObjectURL(covers[covers.length - 1]) : null;
        setFlacTags({
          ...tags,
          cover
        });
        console.log("FLAC 标签:", tags);
      } catch (error) {
        console.error("读取 FLAC 标签失败:", error);
        msgError("读取 FLAC 标签失败");
      }
    };
    require$$0.useEffect(() => {
      if (flacFile) {
        loadFlacTags(flacFile);
      }
      return () => {
        if (flacTags.cover) {
          URL.revokeObjectURL(flacTags.cover);
        }
      };
    }, [flacFile]);
    const handleFlacFileChange = ({ fileList }) => {
      setFlacFileList(fileList);
      if (fileList.length > 0 && fileList[0].originFileObj) {
        const file = fileList[0].originFileObj;
        setFlacFile(file);
      } else {
        setFlacFile(null);
        setFlacTags({});
      }
    };
    const handlePictureChange = ({ fileList }) => {
      setPictureFileList(fileList);
      if (fileList.length > 0 && fileList[0].originFileObj) {
        const file = fileList[0].originFileObj;
        setFlacPicture(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          setPicturePreview(e.target?.result);
        };
        reader.readAsDataURL(file);
      } else {
        setFlacPicture(null);
        setPicturePreview(null);
      }
    };
    const handleReadFlacTag = async () => {
      try {
        if (!flacFile) {
          msgError("请选择文件");
          return;
        }
        if (flacTagName === "all") {
          const res = await readAllFlacTag(flacFile);
          setFlacTags(res);
          msgSuccess("读取所有标签成功，请查看下方信息");
          console.log("res", res);
        } else {
          const res = await readFlacTag(flacFile, flacTagName);
          msgSuccess(`读取标签 ${FLAC_TAGS[flacTagName]} 成功: ${res || "无值"}`);
          console.log("res", res);
        }
      } catch (error) {
        console.log("error", error);
        msgError("读取标签失败");
      }
    };
    const handleWriteFlacTag = async () => {
      try {
        if (!flacFile) {
          msgError("请选择文件");
          return;
        }
        if (flacTagName === "all") {
          msgError("请选择具体标签");
          return;
        }
        if (!flacTagValue.trim()) {
          msgError("请输入标签值");
          return;
        }
        const res = await writeFlacTag(flacFile, flacTagName, flacTagValue);
        if (res) {
          console.log("res", res);
          setFlacFile(new File([res], flacFile.name));
          msgSuccess("写入标签成功");
        }
      } catch (error) {
        console.log("error", error);
        msgError("写入标签失败");
      }
    };
    const handleEmbedFlacPicture = async () => {
      try {
        if (!flacFile) {
          msgError("请选择文件");
          return;
        }
        if (!flacPicture) {
          msgError("请选择图片");
          return;
        }
        const res = await embedFlacPicture(flacFile, flacPicture);
        if (res) {
          console.log("res", res);
          setFlacFile(new File([res], flacFile.name));
          msgSuccess("嵌入图片成功");
        }
      } catch (error) {
        console.log("error", error);
        msgError("嵌入图片失败");
      }
    };
    const handleDownloadFlacFile = async () => {
      try {
        if (!flacFile) {
          msgError("请选择文件");
          return;
        }
        downloadFileWithBlob(flacFile, flacFile.name || "test.flac");
        msgSuccess("文件下载成功");
      } catch (error) {
        console.log("error", error);
        msgError("文件下载失败");
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Form, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { label: "FLAC 文件", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Upload,
        {
          fileList: flacFileList,
          accept: ".flac",
          maxCount: 1,
          beforeUpload: async () => {
            return false;
          },
          onChange: handleFlacFileChange,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.UploadOutlined, {}), children: "选择 FLAC 文件" })
        }
      ) }),
      Object.keys(flacTags).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { label: "FLAC 标签信息", children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Card, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Descriptions, { column: 2, size: "small", children: Object.entries(flacTags).map(([key, value]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Descriptions.Item,
        {
          label: FLAC_TAGS[key] || key.toUpperCase(),
          children: key === "cover" && value ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            antd.Image,
            {
              src: value,
              alt: "封面",
              width: 100,
              height: 100,
              style: { objectFit: "cover", borderRadius: 4 },
              preview: true
            }
          ) : key === "cover" ? "无封面" : value
        },
        key
      )) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { label: "标签操作", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { wrap: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Select,
          {
            style: { width: 150 },
            options: [
              { label: "全部", value: "all" },
              ...Object.entries(FLAC_TAGS).map(([key, value]) => ({
                label: value,
                value: key
              }))
            ],
            value: flacTagName,
            onChange: (value) => setFlacTagName(value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Input,
          {
            placeholder: "请输入标签值",
            value: flacTagValue,
            onChange: (e) => setFlacTagValue(e.target.value),
            style: { width: 200 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, { type: "primary", onClick: handleReadFlacTag, children: "读取标签" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, { type: "primary", onClick: handleWriteFlacTag, children: "写入标签" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { label: "封面图片", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { wrap: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Upload,
          {
            fileList: pictureFileList,
            accept: ".jpg,.png,.jpeg",
            maxCount: 1,
            beforeUpload: async () => {
              return false;
            },
            onChange: handlePictureChange,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.PictureOutlined, {}), children: "选择图片" })
          }
        ),
        picturePreview && /* @__PURE__ */ jsxRuntimeExports.jsx(
          antd.Image,
          {
            src: picturePreview,
            alt: "封面预览",
            width: 100,
            height: 100,
            style: { objectFit: "cover", borderRadius: 4 },
            preview: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, { type: "primary", onClick: handleEmbedFlacPicture, children: "嵌入图片" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { label: "文件操作", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, { type: "primary", onClick: handleDownloadFlacFile, children: "下载最新文件" }) })
    ] });
  };
  const { Item } = antd.Descriptions;
  const FUNCTION_SWITCH_STRATEGIES = [
    {
      label: "搜索",
      key: "enableSearch",
      type: "switch"
    },
    {
      label: "GitHub信息",
      key: "enableGithubInfo",
      type: "switch"
    },
    {
      label: "功能开关Tab",
      key: "enableFunctionSwitchTab",
      type: "switch",
      disabled: true
    },
    {
      label: "下载设置Tab",
      key: "enableDownloadSetting",
      type: "switch"
    },
    {
      label: "并发上传歌曲数量",
      key: "uploadConcurrency",
      type: "input"
    },
    {
      label: "演唱会关键词",
      key: "liveKeywords",
      type: "select",
      mode: "tags",
      tokenSeparators: [",", "，", " "],
      style: { width: "100%" }
    },
    {
      label: "测试Modal",
      key: "enableTestModal",
      type: "switch"
    }
  ];
  const FunctionSwitchTab = () => {
    const { functionConfig, setFunctionConfig } = useConfig();
    const handleSwitchChange = (key, checked) => {
      setFunctionConfig({
        ...functionConfig,
        [key]: checked
      });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Descriptions, { column: 3, bordered: true, children: FUNCTION_SWITCH_STRATEGIES.map((strategy) => {
      const { type, key, label, disabled, ...rest } = strategy;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { label, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SettingItem,
        {
          value: functionConfig[key],
          onChange: (value) => handleSwitchChange(key, value),
          type,
          disabled,
          ...rest
        }
      ) }, key);
    }) });
  };
  const SearchTab = () => {
    const [getSearchResultLoading, setGetSearchResultLoading] = require$$0.useState(false);
    const [getSearchResultParams, setGetSearchResultParams] = require$$0.useState({
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
    const [getWebSearchResultLoading, setGetWebSearchResultLoading] = require$$0.useState(false);
    const handleGetWebSearchResult = async () => {
      try {
        setGetWebSearchResultLoading(true);
        const res = await getWebSearchResult(
          getSearchResultParams.keyword,
          getSearchResultParams.type
        );
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        setGetWebSearchResultLoading(false);
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { label: "获取搜索结果", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { type: "primary", onClick: handleGetSearchResult, loading: getSearchResultLoading, children: "获取搜索结果" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Button,
        {
          type: "primary",
          onClick: handleGetWebSearchResult,
          loading: getWebSearchResultLoading,
          children: "获取web搜索结果"
        }
      )
    ] }) }) });
  };
  const SingerTab = () => {
    const [getSingerListParams, setGetSingerListParams] = require$$0.useState({
      area: -100,
      sex: -100,
      genre: -100,
      cur_page: 1
    });
    const handleGetSingerList = async () => {
      try {
        const res = await getSingerList(getSingerListParams);
        console.log("res", res);
        msgSuccess("获取歌手列表成功,请打开控制台查看");
      } catch (error) {
        console.log("error", error);
      }
    };
    const [mid, setMid] = require$$0.useState("003fA5G40k6hKc");
    const handleGetSingerInfo = async () => {
      try {
        const res = await getSingerInfo(mid);
        console.log("res", res);
        msgSuccess("获取歌手信息成功,请打开控制台查看");
      } catch (error) {
        console.log("error", error);
      }
    };
    const handleGetSingerAlbum = async () => {
      try {
        const res = await getSingerAlbum(mid);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      }
    };
    const handleGetSingerAllAlbum = async () => {
      try {
        const res = await getSingerAllAlbum(mid);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      }
    };
    const handleGetSingerFollowCount = async () => {
      try {
        const res = await getSingerFollowCount(mid);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      }
    };
    const handleGetSingerHotSong = async () => {
      try {
        const res = await getSingerHotSong(mid);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      }
    };
    const handleGetSingerAllHotSong = async () => {
      try {
        const res = await getSingerAllHotSong(mid);
        console.log("res", res);
        msgSuccess("获取歌手全部热门歌曲成功,请打开控制台查看");
      } catch (error) {
        console.log("error", error);
      }
    };
    const handleGetSimilarSinger = async () => {
      try {
        const res = await getSimilarSinger(mid);
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Form, { children: [
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, { type: "primary", onClick: handleGetSingerList, children: "获取歌手列表" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, { type: "primary", onClick: handleGetSingerInfo, children: "获取歌手信息" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, { type: "primary", onClick: handleGetSingerAlbum, children: "获取歌手专辑" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, { type: "primary", onClick: handleGetSingerAllAlbum, children: "获取歌手所有专辑" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, { type: "primary", onClick: handleGetSingerFollowCount, children: "获取歌手被关注数量" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, { type: "primary", onClick: handleGetSingerHotSong, children: "获取歌手热门歌曲" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, { type: "primary", onClick: handleGetSingerAllHotSong, children: "获取歌手全部热门歌曲" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, { type: "primary", onClick: handleGetSimilarSinger, children: "获取相似歌手" })
      ] }) })
    ] });
  };
  const SongListTab = () => {
    const [getSongListLoading, setGetSongListLoading] = require$$0.useState(false);
    const [getSongListCategoryLoading, setGetSongListCategoryLoading] = require$$0.useState(false);
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
    const [disstid, setDisstid] = require$$0.useState("7011264340");
    const [getSongListDetailLoading, setGetSongListDetailLoading] = require$$0.useState(false);
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
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Form, { children: [
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
      ] }) })
    ] });
  };
  const SongTab = () => {
    const [getSongLyricLoading, setGetSongLyricLoading] = require$$0.useState(false);
    const [songmid, setSongmid] = require$$0.useState("003rJSwm3TechU");
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
    const [getSongPlayUrlLoading, setGetSongPlayUrlLoading] = require$$0.useState(false);
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
    const [getSongInfoLoading, setGetSongInfoLoading] = require$$0.useState(false);
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Form.Item, { label: "获取歌曲信息", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(antd.Space, { children: [
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
    ] }) }) });
  };
  const TestModal = require$$0.forwardRef((_, ref) => {
    const { visible, close } = useVisible({}, ref);
    const { functionConfig } = useConfig();
    const { enableFunctionSwitchTab, enableDownloadSetting } = functionConfig;
    const tabItems = [
      {
        key: "singer",
        label: "歌手",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SingerTab, {})
      },
      {
        key: "album",
        label: "专辑",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlbumTab, {})
      },
      {
        key: "song",
        label: "歌曲",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SongTab, {})
      },
      {
        key: "songList",
        label: "歌单",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SongListTab, {})
      },
      {
        key: "search",
        label: "搜索",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchTab, {})
      },
      {
        key: "flac",
        label: "FLAC",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlacTab, {})
      },
      enableFunctionSwitchTab && {
        key: "functionSwitchTab",
        label: "功能开关",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FunctionSwitchTab, {})
      },
      enableDownloadSetting && {
        key: "downloadSetting",
        label: "下载设置",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(DownloadSettingTab, {})
      }
    ].filter(Boolean);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      antd.Modal,
      {
        title: "测试Modal",
        open: visible,
        onCancel: close,
        width: 1200,
        styles: {
          body: {
            maxHeight: "75vh",
            overflowY: "auto"
          }
        },
        footer: null,
        centered: true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tabs, { items: tabItems })
      }
    );
  });
  const styles = {
    "button-group": "_button-group_y8t3i_1"
  };
  const ButtonGroup = () => {
    const { functionConfig } = useConfig();
    const { enableSearch, enableGithubInfo, enableTestModal } = functionConfig;
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
    const songListDetailRef = useCompRef();
    const handleSongListDetail = () => {
      songListDetailRef.current.open();
    };
    const albumDetailRef = useCompRef();
    const handleAlbumDetail = () => {
      albumDetailRef.current.open();
    };
    const testModalRef = useCompRef();
    const handleTestModal = () => {
      testModalRef.current.open();
    };
    const githubInfoRef = useCompRef();
    const handleGithubInfo = () => {
      githubInfoRef.current.open();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles["button-group"], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: "歌手查询", placement: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Button,
        {
          type: "primary",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.UserOutlined, {}),
          onClick: handleSingerSearch,
          className: styles["button"]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: "歌单查询", placement: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Button,
        {
          type: "primary",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.UnorderedListOutlined, {}),
          onClick: handleSongListSearch,
          className: styles["button"]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: "专辑查询", placement: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Button,
        {
          type: "primary",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.BookOutlined, {}),
          onClick: handleAlbumSearch,
          className: styles["button"]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: "歌单详情", placement: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Button,
        {
          type: "primary",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.ContainerOutlined, {}),
          onClick: handleSongListDetail,
          className: styles["button"]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: "专辑详情", placement: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Button,
        {
          type: "primary",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.BookOutlined, {}),
          onClick: handleAlbumDetail,
          className: styles["button"]
        }
      ) }),
      enableSearch && /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: "歌曲查询", placement: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Button,
        {
          type: "primary",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.SearchOutlined, {}),
          onClick: handleSongSearch,
          className: styles["button"]
        }
      ) }),
      enableTestModal && /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: "testModal", placement: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Button,
        {
          type: "primary",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.InfoCircleOutlined, {}),
          onClick: handleTestModal,
          className: styles["button"]
        }
      ) }),
      enableGithubInfo && /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Tooltip, { title: "githubInfo", placement: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Button,
        {
          type: "primary",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(icons.GithubOutlined, {}),
          onClick: handleGithubInfo,
          className: styles["button"]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TestModal, { ref: testModalRef }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SingerSearch, { ref: singerSearchRef }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SongListSearch, { ref: songListSearchRef }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlbumSearch, { ref: albumSearchRef }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SongListDetail, { ref: songListDetailRef }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlbumDetail, { ref: albumDetailRef }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SongSearch, { ref: songSearchRef }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GithubInfo, { ref: githubInfoRef })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(require$$0.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      antd.ConfigProvider,
      {
        locale: zhCN,
        theme,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {})
      }
    ) })
  );

})(React, antd, ReactDOM, icons);
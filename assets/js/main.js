/* ============================================
 * 个人作品集 · 公共脚本
 * ============================================ */
(function () {
  'use strict';

  // 1) 根据当前路径给导航链接加 active 状态
  function highlightNav() {
    var path = window.location.pathname.replace(/\/$/, '');
    var file = path.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link[data-nav]').forEach(function (a) {
      var target = a.getAttribute('data-nav');
      if (target === file) {
        a.classList.add('nav__link--active');
      }
    });
  }

  // 2) 代码块：自动识别语言并打 tag
  function tagCodeBlocks() {
    document.querySelectorAll('pre > code').forEach(function (code) {
      var cls = code.className || '';
      var m = cls.match(/language-(\w+)/);
      if (!m) {
        // 启发式识别
        var text = code.textContent || '';
        if (/^\s*(import|export|const|let|function)/m.test(text)) m = ['language-javascript', 'js'];
        else if (/^\s*(def |class |import |from )/m.test(text)) m = ['language-python', 'py'];
        else if (/^\s*\{[\s\S]*\}\s*$/.test(text)) m = ['language-json', 'json'];
        else if (/^\s*<\w+/.test(text)) m = ['language-html', 'html'];
        if (m) cls = 'language-' + m[1];
      }
      if (cls && !code.parentNode.querySelector('.code-lang')) {
        var pre = code.parentNode;
        var lang = (m && m[1]) || 'text';
        var tag = document.createElement('span');
        tag.className = 'code-lang';
        tag.textContent = lang;
        pre.style.position = 'relative';
        tag.style.cssText =
          'position:absolute;top:8px;right:12px;font-size:11px;color:#94a3b8;' +
          'background:rgba(255,255,255,0.08);padding:2px 8px;border-radius:4px;' +
          'font-family:JetBrains Mono,monospace;letter-spacing:0.05em;text-transform:uppercase;';
        pre.appendChild(tag);
      }
    });
  }

  // 3) 复制按钮
  function addCopyButtons() {
    document.querySelectorAll('pre').forEach(function (pre) {
      if (pre.querySelector('.copy-btn')) return;
      var btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.textContent = '复制';
      btn.style.cssText =
        'position:absolute;top:8px;right:80px;font-size:11px;color:#cbd5e1;' +
        'background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);' +
        'padding:2px 10px;border-radius:4px;cursor:pointer;font-family:inherit;' +
        'transition:all 0.15s;';
      btn.addEventListener('mouseenter', function () {
        btn.style.background = 'rgba(255,255,255,0.15)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.background = 'rgba(255,255,255,0.08)';
      });
      btn.addEventListener('click', function () {
        var code = pre.querySelector('code');
        if (!code) return;
        navigator.clipboard.writeText(code.textContent).then(function () {
          btn.textContent = '已复制';
          btn.style.color = '#10b981';
          setTimeout(function () {
            btn.textContent = '复制';
            btn.style.color = '#cbd5e1';
          }, 1500);
        });
      });
      pre.style.position = 'relative';
      pre.appendChild(btn);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    highlightNav();
    tagCodeBlocks();
    addCopyButtons();
  });
})();

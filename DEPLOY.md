# 部署到 GitHub Pages · 完整步骤

## 第一步：在 GitHub 创建仓库

1. 打开 https://github.com/new
2. 填仓库名：`personal-portfolio`（用这个名，URL 会是 `https://HXHOvO.github.io/personal-portfolio/`）
3. **不要**勾选 "Add a README file"（我们本地已经有了）
4. **不要**勾选 "Add .gitignore"（我们自己写了）
5. **不要**选 license
6. 点 "Create repository"
7. 复制仓库地址（HTTPS）：`https://github.com/HXHOvO/personal-portfolio.git`

## 第二步：在本地推送

打开 **Git Bash**（或 PowerShell），执行：

```bash
cd "D:/AI个人项目/personal-portfolio"

git init
git add .
git commit -m "init: 个人作品集"
git branch -M main
git remote add origin https://github.com/HXHOvO/personal-portfolio.git
git push -u origin main
```

> ⚠️ 如果之前 git 配置过 user.email / user.name 但需要换，git 会提示，按提示配置即可。

## 第三步：启用 GitHub Pages

1. 打开 https://github.com/HXHOvO/personal-portfolio/settings/pages
2. **Source**: 选 "Deploy from a branch"
3. **Branch**: 选 `main`，目录选 `/ (root)`
4. 点 **Save**
5. 等 1-3 分钟，页面会显示 "Your site is live at ..."

## 第四步：访问

打开 `https://HXHOvO.github.io/personal-portfolio/` 就能看到作品集了。

> 第一次访问可能要等 1-2 分钟 CDN 缓存。

## 常见问题

**Q: 页面样式乱了？**
A: 99% 是 Tailwind CSS CDN 加载慢。等几秒刷新即可。

**Q: 截图显示不出来？**
A: 检查 `assets/images/` 里 5 张图都在。GitHub Pages 对 PNG/JPG 完全支持。

**Q: 链接错了？**
A: 跨页面链接用相对路径 `projects/xxx.html`，跟部署后路径一致。HKU 项目的 `https://HXHOvO.github.io/hku-cds-courses/` 是绝对 URL，OK。

**Q: 怎么更新内容？**
A: 改完 HTML 后，git add → git commit → git push。等 1 分钟就生效。

**Q: 想要自定义域名（huxiaohan.com 之类）？**
A: 在 Pages 设置里填 Custom domain，再去域名服务商加 CNAME 记录指向 `HXHOvO.github.io.`（注意末尾的点）。HTTPS 证书会自动签发。

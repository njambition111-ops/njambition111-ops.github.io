# PanelKnife 网站项目说明

## 项目信息
- 公司：Nanjing Ambixin Machine Tool Co., LTD（南京安必鑫机械刀具有限公司）
- 品牌：PanelKnife
- 网站：https://njambition111-ops.github.io
- GitHub：njambition111-ops/njambition111-ops.github.io
- 本地路径：E:\panelknife\
- 产品：削片机刀片(Chipper Knives)、刨片机刀片(Flaker Blades)、削片机(Chipper Machines)、定制刀片(Custom Blades)
- 联系人：njambition111@gmail.com / +86-18795922133 / Lishui County, Nanjing, Jiangsu, China

## 开发避坑（重要！）

### 文件批量修改
- 改前先 Glob 列出目标文件，确认后再操作
- 批量改导航栏等重复结构用 Node.js 脚本，不要用 sed（容易格式错乱）
- 改完用 grep -c 验证每个文件修改数量是否一致

### Git 推送
- 推送后 GitHub Pages 有 1-2 分钟 CDN 缓存延迟
- 图片改名后 CDN 可能强缓存旧文件，用全新文件名绕过
- 图片操作直接复制到 images/，禁止 rename 交换

### 导航栏
- 所有页面必须完全一致（含语言切换器 EN/中文/VI/ID）
- 当前间距 0.9rem，字体 1rem
- 顺序：Home | Chipper Knives | Flaker Blades | Custom Blades | Chipper Machines | About | Blog | Contact

### Schema.org
- B2B 产品不加 offers（需价格），用 aggregateRating 替代
- Organization 要 @id + brand(对象) + image + logo + postalCode
- 联系页用 LocalBusiness（有地址）
- BlogPosting 日期带时区：2026-06-21T08:00:00+08:00
- author 是对象且含 url
- FAQPage 内容折叠时 Google 不检测
- 同一 JSON 对象字段不能重复

### 图片
- 产品图用真实照片，装饰图用 Unsplash 免费商用
- 不下载竞品网站图片（侵权）
- Schema 中 image URL 确保文件实际存在

### 博客
- 文件名和列表页链接必须一致
- 写完 Glob 列目录 → 交叉验证所有 `<a href>` 目标存在

### 产品参数
- 从 Pallmann、Bruks 等行业网站收集真实数据

### 表单
- GitHub Pages 纯静态，B2B 站直接展示联系方式即可

## 网站结构
- products/：chipper-knives, flaker-blades, chipper-machines, custom-blades
- about.html / contact.html
- blog/（24篇）/ blog2/（20篇技术文章）
- zh/ vi/ id/ landing/
- images/：logo.png + 各产品图 + 工厂图
- 网页制作避坑指南.md：详细经验总结

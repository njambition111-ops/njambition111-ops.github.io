# PanelKnife 外贸B2B网站设计规范

## 产品定位
- 产品：人造板机械刀具（刨片机刀片、削片机刀片）
- 品牌：PanelKnife
- 风格：简洁现代工业风
- 目标市场：全球，东南亚为重点
- 语言：英文为主，中文/越南语/印尼语关键页

## 配色方案

| Token | 色值 | 用途 |
|--------|------|------|
| Steel Dark | #0f1a2e | 主背景、Footer、Hero底色 |
| Industrial Blue | #1e3a5f | 次级背景、卡片边框 |
| Precision Blue | #2563eb | 链接、交互态 |
| Forge Orange | #ea580c | CTA按钮、重点标记 |
| Warm White | #fafaf9 | 内容区背景 |
| Steel Gray | #64748b | 辅助文字 |
| Pure White | #ffffff | 卡片、表单背景 |

## 字体系统

| 层级 | 字体 | 粗细 | 用途 |
|------|------|------|------|
| Display | Inter | 800 | Hero大标题 42-64px |
| Heading | Inter | 700 | 章节标题 28-36px |
| Subheading | Inter | 600 | 卡片标题、导航 |
| Body | Inter | 400 | 正文、描述 |
| Caption | Inter | 500 | 标签、参数 |
| Mono | JetBrains Mono | 400 | 规格数据、尺寸 |

## 签名元素
「刀刃线」— 1px渐变细线(#0f1a2e → #ea580c)，贯穿页面关键区块边缘。

## 站点结构

```
njambition111-ops.github.io/
├── index.html                 # 英文首页
├── /products/
│   ├── chipper-knives.html
│   ├── flaker-blades.html
│   └── custom-blades.html
├── about.html
├── contact.html
├── /blog/                     # 30篇文章
├── /zh/                       # 中文版
├── /vi/                       # 越南语版
├── /id/                       # 印尼语版
└── /landing/                  # 国别着陆页
```

## 组件清单
- 导航栏（固定+毛玻璃+语言切换）
- Hero区块（工业蓝渐变+刀刃线动画）
- 产品卡片（白底+橙色边条）
- 信任条（数字统计）
- 询盘表单（三字段+橙色提交按钮）
- FAQ折叠面板
- Footer（快速链接+联系信息）

## 技术选型
- 纯静态HTML/CSS/JS
- 无框架依赖
- 托管：GitHub Pages（免费）
- 后续可绑定自定义域名

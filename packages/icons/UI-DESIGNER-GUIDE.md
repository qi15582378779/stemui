# Icon Library Guide For UI Designers

这份文档是给 UI 设计师看的，目的只有一个：把一个 SVG 正确地交付成可用的 icon。

## 目标

你只需要完成这件事：

1. 产出一个干净的 SVG 图标文件。
2. 按规范命名。
3. 放进 `packages/icons/svg/`。

之后前端需要运行监听预览或构建命令，构建脚本才会把它变成前端可用的 icon 组件。

## 文件放置位置

所有 icon 源文件都放在：

```text
packages/icons/svg/
```

例如：

```text
packages/icons/svg/line_file_save.svg
packages/icons/svg/line_trash_delete.svg
```

## 命名规则

文件名会直接决定最终组件名，所以要稳定、清晰。

规则：

- 文件格式必须是 `.svg`
- 推荐使用 `snake_case` 或 `kebab-case`
- 不要使用空格；构建脚本会把空格自动转成 `_`，如果转换后和已有文件重名会报错
- 文件名要表达图标语义
- 同一套图标建议统一前缀，例如 `line_`

示例：

- `line_file_save.svg` -> `LineFileSaveIcon`
- `line-trash-delete.svg` -> `LineTrashDeleteIcon`
- `line_media_account.svg` -> `LineMediaAccountIcon`

不推荐：

- `save final 2.svg`
- `new icon.svg`
- `aaa.svg`

## SVG 导出要求

为了确保 SVG 可以稳定转换，请尽量满足这些要求：

- 画板尺寸统一，例如 `24 x 24`
- 图形居中，不要偏移
- 保留正确的 `viewBox`
- 尽量使用纯矢量路径
- 不要嵌入位图
- 不要保留白底、参考线、隐藏图层、无用分组
- 同一套线性图标的描边粗细保持一致
- 优先做成单色 icon，颜色交给前端控制

一句话：导出的应该是“干净的 icon 源文件”，不是设计稿切片。

## SVG 如何变成 Icon

SVG 放进 `packages/icons/svg/` 之后，不会在“没有运行任何命令”的情况下直接生效。  
只有在下面两种场景里，构建脚本才会处理它：

- 运行 icon 监听：`npm run dev:icons`
- 或运行联合预览流程：`npm run dev:icons:playground`
- 运行构建命令：`npm run build:incremental --workspace @stemui/icons` 或 `npm run build --workspace @stemui/icons`

在这些流程启动后，构建脚本会：

- 读取 SVG
- 提取 `viewBox`
- 转换 SVG 属性
- 生成 React 组件
- 导出到 `@stemui/icons`

例如：

```text
line_file_save.svg
```

会生成：

```tsx
LineFileSaveIcon
```

前端使用方式：

```tsx
import { LineFileSaveIcon } from "@stemui/icons";

export function Example() {
  return <LineFileSaveIcon size={20} color="currentColor" />;
}
```

## 如何预览

如果只是打开预览页，在项目根目录运行：

```bash
npm run dev:playground
```

如果希望在预览页里实时看到 SVG 改动生效，运行：

```bash
npm run dev:icons:playground
```

两个命令的区别：

- `npm run dev:playground`：只启动预览页
- `npm run dev:icons:playground`：同时启动 icon 监听和预览页

其中 `npm run dev:icons:playground` 会：

- 监听 `packages/icons/svg/` 的变化
- 自动重新生成 icon
- 自动刷新 playground 预览页

适合设计师和前端一起确认图标效果。

## 交付前自查

提交 SVG 前，建议检查：

- 文件名是否规范
- 画板尺寸是否统一
- `viewBox` 是否正确
- 图标是否居中
- 是否有多余背景或隐藏元素
- 线条粗细是否一致
- 是否和现有图标风格一致

## 预览确认后怎么提交

当预览确认没有问题后，需要把这次 icon 相关改动提交到 GitHub 仓库。

通常流程是：

1. 确认本次新增或修改的 SVG 已经放在 `packages/icons/svg/`
2. 确认预览页里图标展示正常
3. 确认生成后的 icon 代码也已经更新
4. 将这次改动提交到代码仓库
5. 推送到 GitHub，并按团队流程发起 PR 或通知前端同学合并

如果你自己不负责提交代码，也至少要把最终确认过的 SVG 文件和命名结果交给前端同学，由前端完成提交。

## 常见问题

### 为什么文件名要这么规范

因为组件名是由文件名自动生成的。  
文件名随意，最终组件名也会很难维护。

### 为什么建议单色

这个 icon 库主要服务 UI 组件场景。  
大多数时候颜色会在前端页面里统一控制，而不是写死在 SVG 里。

### 为什么要统一前缀

统一前缀更利于管理和检索，也能让生成出来的组件命名保持一致。

例如：

- `line_file_save.svg`
- `line_trash_delete.svg`
- `line_media_account.svg`

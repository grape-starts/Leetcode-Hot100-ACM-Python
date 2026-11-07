# Hot 100 · Python 双模式刷题

一个可本地运行的 LeetCode Hot 100 刷题网页。收录 100 道题，支持 **Python 核心代码模式**与 **Python ACM 模式**：在题目页切换模式；ACM 模式的 Python 编辑器开头会给出当前题的标准输入示例、期望输出、读取方式和打印方式参考。填写解法后点击「执行并判题」。代码在浏览器内的 Pyodide 中运行；草稿和进度保存在本机浏览器。

## 启动

macOS 可双击 `一键启动(MACOS).command`；Windows 可双击 `一键启动（WIN）.bat`；也可在项目目录执行：

```bash
bash start.sh
```

需要 Python 3 或 Node.js。不要直接双击 `index.html`，因为浏览器不会在 `file://` 协议下正常加载模块和 Worker。

当前版本的网页只提供 Python 语言选项。本地参考项目的 `vendor/` 运行文件保留在本机，运行时可离线使用；GitHub 仓库不包含这些较大的第三方文件，克隆后会通过 CDN 加载，需要网络连接。题目页有「核心代码」「ACM 模式」切换、每题的编辑器内输入输出参考、样例和自定义测试。已有 ACM 草稿会保留；点击「重置代码」可载入新版参考模板。另有搜索、筛选、错题和学习进度等功能。数据只保存在当前浏览器；换设备请先使用首页的导出备份功能。

## 校验

```bash
npm test
```

## 来源与许可

本项目基于 [kernelvale/leetcode-hot100](https://github.com/kernelvale/leetcode-hot100) 的 MIT 许可源码改编。原作者版权声明保留在 [LICENSE](LICENSE)，第三方组件许可见 [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)。本项目为非官方学习工具；题目内容归原权利人所有。

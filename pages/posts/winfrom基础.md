---
layout: post
title: winfrom基础
date: 2024-09-24 19:33:12
cover:https://images.unsplash.com/photo-1726767305248-e3cfaf9c98b7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

## 窗体

| 分类 | 名称                |                                                              |
| ---- | ------------------- | ------------------------------------------------------------ |
| 属性 | Name                | 窗体对象的名称，用以在代码中进行标识                         |
|      | BackColor           | 窗体的背景色                                                 |
|      | BackgroundImage     | 窗体的背景图片                                               |
|      | FormBorderStyle     | 窗体显示的边框样式，有七个可选的值，默认为Sizable            |
|      | MaximizeBox         | 确定窗体标题栏的右上角是否有最大化框，默认为True             |
|      | ShowInTaskbar       | 确定窗体是否出现在Windows任务栏中，默认为True                |
|      | StartPosition       | 确定窗体第一次出现时的位置                                   |
|      | Text                | 窗体标题栏中显示的文本                                       |
|      | TopMost             | 指示窗体是否始终显示在此属性为设置为True的所有窗体之上，默认为false |
|      | WindoState          | 确定窗体的初始可视状态，包括Normal(普通)、Maximized(最大化)、Minimized(最小化)，默认为Normal |
| 方法 | Close();            | 关闭窗体                                                     |
| 方法 | Show();             | 显示窗体                                                     |
| 方法 | ShowDialog();       | 格式化显示窗体                                               |
| 方法 | Hide();             | 隐藏窗体                                                     |
| 方法 | Application.Exit(); | **关闭整个应用程序**                                         |



## 控件

##### label控件

Label 控件用于显示不能编辑的文本或图像

| 属性  | 说明             |
| ----- | ---------------- |
| Name  | 标签的名称       |
| Text  | 标签上显示的文本 |
| Image | 标签上显示的图像 |

##### Button控件

提供了引用程序交互的方法，可以通过按钮执行所有的操作

| 分类 | 名称      | 说明                 |
| ---- | --------- | -------------------- |
| 属性 | Name      | 按钮的名称           |
| 属性 | Text      | 按钮上的文本         |
| 属性 | TextAlign | 按钮文本对齐方式     |
| 事件 | Cliek     | 单击按钮时触发的事件 |

##### TextBox控件

用于接收用户输入的信息或向用户展示信息

| 属性         | 说明                                   |
| ------------ | -------------------------------------- |
| Name         | 文本框名称                             |
| Text         | 文本框中的文本内容                     |
| ReadOnly     | 是否只读                               |
| PasswordChar | 密码符号，使用此符号显示用户输入的文本 |
| Multiline    | 是否是多行                             |

##### RadioButton控件

提供两个或多个互斥的选项供组成的集合供用户选择

| 属性    | 说明                                       |
| ------- | ------------------------------------------ |
| Text    | 单选按钮显示的文本                         |
| Cheeked | 设置单选按钮是否已被选中，用于设置默认选项 |


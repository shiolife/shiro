---
layout: post
title: winfrom基础
date: 2024-09-24 19:33:12

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

#### label控件(标签)

Label 控件用于显示不能编辑的文本或图像

| 属性      | 说明             |
| --------- | ---------------- |
| Name      | 标签的名称       |
| Text      | 标签上显示的文本 |
| Image     | 标签上显示的图像 |
| BackColor | 设置标签的背景色 |

#### Button控件(按钮)

提供了引用程序交互的方法，可以通过按钮执行所有的操作

| 分类 | 名称      | 说明                                       |
| ---- | --------- | ------------------------------------------ |
| 属性 | Name      | 按钮的名称                                 |
| 属性 | Text      | 按钮上的文本                               |
| 属性 | TextAlign | 按钮文本对齐方式                           |
| 属性 | Enable    | 布尔值，表示控件是否可用，不可用显示为灰色 |
| 事件 | Cliek     | 单击按钮时触发的事件                       |

#### TextBox控件(文本框)

用于接收用户输入的信息或向用户展示信息

| 属性           | 说明                                   |
| -------------- | -------------------------------------- |
| Name           | 文本框名称                             |
| Text           | 文本框中的文本内容                     |
| ReadOnly       | 是否只读                               |
| PasswordChar   | 密码符号，使用此符号显示用户输入的文本 |
| Multiline      | 是否是多行                             |
| MaxLength      | 指定可以在文本框输入的最大字符数       |
| 方法：Focus(); | 将光标定位到当前文本框中               |

#### RadioButton控件

提供两个或多个互斥的选项供组成的集合供用户选择

| 属性    | 说明                                       |
| ------- | ------------------------------------------ |
| Text    | 单选按钮显示的文本                         |
| Cheeked | 设置单选按钮是否已被选中，用于设置默认选项 |

#### DateTimePicker控件

提供一种能够用来选择日期的下拉式日历，从而避免手工输入带来的错误

| 属性    | 说明                                 |
| ------- | ------------------------------------ |
| Value   | 控件所选定的日期/事件值              |
| Fromat  | 用于设置控件中显示的日期和时间的格式 |
| MinDate | 取得限定最小日期和时间               |
| MaxDate | 取得设定最大日期和时间               |

#### ComboBox控件

| 分类 | 名称                 | 说明                                                         |
| ---- | -------------------- | ------------------------------------------------------------ |
| 属性 | Name                 | 组合框名称                                                   |
|      | items                | 组合框中显示的项目集合                                       |
|      | Text                 | 组合框中选中的项或输入的文本                                 |
|      | SelectIndex          | 被选中的选项或输入的文本                                     |
|      | Items.Count          | 获得集合中项的数目                                           |
|      | DropDownStyle        | 设置下拉列表框显示模式                                       |
| 方法 | Items.Add();         | 向组合框中的尾部加入一个选项                                 |
|      | Items.Clear();       | 清除组合框中的所有选项                                       |
|      | Items.Remove();      | 清楚组合框中的指定选项                                       |
| 事件 | SelectedIndexChanged | 在组合框中选项变化时触发的事件，SelectedIndex属性值改变时发生 |

#### MunuStrip控件



#### 常见窗体/控件事件

| 事件        | 说明               |
| ----------- | ------------------ |
| Click       | 单击控件时发生     |
| DoubleClick | 双击时触发         |
| Enter       | 控件获取焦点时触发 |
| MouseUp     | 松开鼠标时触发     |
| TextChanged | 文本发生变化时触发 |

## 方法

#### 消息框对象

语法：

```
MessageBox.Show(String text, String title,MessageBoxButtons.buttons,MessageBoxIcon.icon);
```

示例：

```
MessageBox.Show("确定退出吗", "提示",MessageBoxButtons.YesNo,MessageBoxIcon.Error);
```

第一个参数表示消息框中的内容；第二个参数表示消息框的标题，第三个参数表示消息框的按钮类型，第四个参数表示消息框的图标。可以填1~4个参数。

通过DialogResult对象可以获取用户单击的按钮，决定是否执行关闭窗体的操作

示例：

```
DialogResult result = MessageBox.Show("确定退出吗", "提示", MessageBoxButtons.YesNo, MessageBoxIcon.Error);
            if (result == DialogResult.Yes)
            {
                Application.Exit();
            }
```

#### 实现窗体跳转和值传递

新建程序窗体FromMain

```

```


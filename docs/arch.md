# Arch

驿站的 Arch 笔记

## archinstall

进入 live cd 后，输入 `archinstall` 并按 Enter

![](/others/arch/1.webp)

然后看到这个界面

![](/others/arch/2.webp)

- Mirrors - 选择 China
- Locales - 选择 zh_CN
- Disk encryption - 分区
- BootLoader - 选择 Grub
- Profile - 我使用 KDE
- Network configuration - 我使用 NetworkManager

安装完成后，它会询问要不要 chroot 到新创建的安装中以进行安装后配置，但我们不需要这样做。因此，选择否来完成安装

![](/others/arch/3.webp)

接着我们关机 `shutdown now`

虚拟机的话，删除碟片，真机就拔出U盘后开机

![](/others/arch/4.webp)

## 软件

### wqy-zenhei

进入桌面后整个系统的中文都是小方块，所以我们第一件事是安装字体

```
sudo pacman -S wqy-zenhei
```

装好了就重新登陆或者重启

### pacman

#### 换源

<details>
  <summary>换源</summary>

```
sudo vim /etc/pacman.d/mirrorlist
```

在文件的最顶端添加：

```text
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch
```

最后 :wq 保存退出，刷新 pacman 数据库

```text
sudo pacman -Syyu
```

参考：https://mirrors.tuna.tsinghua.edu.cn/help/archlinux/

</details>

#### color

编辑 `sudo vim /etc/pacman.conf`

找到 `#color` 取消注释即可

#### 开启 32 位支持库

```
sudo vim /etc/pacman.conf
```

去掉 [multilib] 一节中两行的注释，来开启 32 位库支持。

最后 :wq 保存退出，刷新 pacman 数据库

```text
sudo pacman -Syyu
```

#### 添加 archlinuxcn 库

```text
[archlinuxcn]
Server = https://mirrors.aliyun.com/archlinuxcn/$arch
```

:wq 保存退出，刷新 pacman 数据库

```text
sudo pacman -Syyu
```

### yay

先 [添加 archlinuxcn 库](#添加-archlinuxcn-库)

接着

```text
sudo pacman -S yay
```

如果遇到：

![](/others/arch/5.webp)

在执行

```text
sudo pacman -S archlinuxcn-keyring
```

后重新安装 yay

### fcitx5

安装 fcitx5 输入法

```text
sudo pacman -S fcitx5-im fcitx5-chinese-addons fcitx5-pinyin-zhwiki
```

- fcitx5-im #基础包组
- fcitx5-chinese-addons #官方中文输入引擎
- fcitx5-pinyin-zhwiki #中文维基百科词库

添加环境变量
```text
sudo vim sudoedit /etc/environment
```

写入内容：
```text
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
SDL_IM_MODULE=fcitx
```

### clash-verge

梯子

```text
yay -S clash-verge-rev-bin
```

### zsh

```text
sudo pacman -Ss zsh oh-my-zsh-git
```

更改 shell 为 zsh

```text
chsh -s /usr/bin/zsh
```

我们去搞默认配置

```
cp /usr/share/oh-my-zsh/zshrc ~/.zshrc
```

换个主题 找到：
```text
ZSH_THEME="xxx"
```

改成 `agnoster`

再装两个插件

```text
sudo pacman -S zsh-autosuggestions zsh-syntax-highlighting
```

- zsh-autosuggestions 自动建议插件
- zsh-syntax-highlighting 代码高亮插件

刷新配置

```text
source ~/.zshrc
```

### firefox

火狐浏览器

```text
sudo pacman -S firefox firefox-i18n-zh-cn
```

- firefox # 本体
- firefox-i18n-zh-cn #firefox 中文汉化包

### vscode

```text
yay -S visual-studio-code-bin
```

### LinuxQQ

```text
yay -S linuxqq liteloader-qqnt-bin
```

- linuxqq #QQNT
- liteloader-qqnt-bin #插件加载器

插件列表查看：https://github.com/ltxhhz/LL-plugin-list-viewer/

### Java

```text
yay -S zulu-8-bin zulu-21-bin
```

### HMCL

先安装 [Java](#java) 以及 [添加 archlinuxcn 库](#添加-archlinuxcn-库)

``` text
sudo yay -S hmcl-dev-bin
```

### TimeShift

快照

```
sudo pacman -S timeshift
```

### neofetch

就是这玩意

![](/others/arch/6.png)

```text
sudo pacman -S neofetch
```

## 多系统

### 引导

如果在 Grub 里看不到 Windows

先去 PE 系统修复 Windows 的引导

![](/others/arch/8.jpg)

安装 [os-prober](https://archlinux.org/packages/extra/x86_64/os-prober/)

```text
sudo pacman -S os-prober
```

接下来运行它

```text
sudo os-prober
```

![](/others/arch/9.png)

编辑 Grub 的配置文件，找到 `GRUB_DISABLE_OS_PROBER` 取消注释（即设置为false）

```text
sudo vim /etc/default/grub
```

然后生成 Grub 所需的配置文件

```text
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

![](/others/arch/10.png)

参考：[archlinuxcn 维基](https://wiki.archlinuxcn.org/wiki/GRUB#%E6%8E%A2%E6%B5%8B%E5%85%B6%E4%BB%96%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F)

### 时间

如果你的机器是 ArchLinux + Windows 双系统，那么请按照以下操作同步时间，使切换系统时时间不会错乱

ArchLinux 下执行：

```text
timedatectl set-local-rtc 0
```

Windows 管理员权限下执行：

```text
reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\TimeZoneInformation" /v RealTimeIsUniversal /d 1 /t REG_DWORD /f
```

### 快速启动

打开 Windows 控制面板，按下图操作

![](/others/arch/11.png)

![](/others/arch/12.png)

点击 `更改当前不可用的设置` 后取消 `启用快速启动的对钩`

这里我已经取消了

![](/others/arch/13.png)

## 美化

其实哪有什么美化，调一点东西而已

### 应用程序启动器

右键 `应用程序启动器` 选择配置

更改图标

![](/others/arch/14.png)

选择 `其他` 找到 ArchLinux 的 logo

![](/others/arch/15.png)

### 顶栏

面板位置设置到上方

挂件依次是：

```text
应用程序启动器 虚拟桌面切换器 面板间隙 数字时钟 面板间隙 系统托盘
```

![](/others/arch/16.png)

![](/others/arch/17.png)

### Dock栏

![](/others/arch/18.png)

![](/others/arch/19.png)

## 展示

换个桌面，最后看起来是这样

![](/others/arch/20.png)

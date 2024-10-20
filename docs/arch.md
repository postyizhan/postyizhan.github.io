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
sudo pacman -S hmcl
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

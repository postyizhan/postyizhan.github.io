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

最后:wq 保存退出，刷新 pacman 数据库

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

最后:wq 保存退出，刷新 pacman 数据库

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

如果遇到:

![](/others/arch/4.webp)

在执行

```
sudo pacman -S archlinuxcn-keyring
```

后重新安装 yay
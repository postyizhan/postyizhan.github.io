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

![](/others/arch/３.webp)

接着我们关机 `shutdown now`

虚拟机的话，删除碟片，真机就拔出U盘后开机

![](/others/arch/４.webp)

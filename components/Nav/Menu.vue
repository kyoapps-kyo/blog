<template>
    <div>
        <ul class="menu menu-horizontal gap-x-4">
            <li>
                <div>
                    <ul class="hidden lg:flex lg:flex-row">
                        <NavItems></NavItems>
                    </ul>
                </div>
            </li>
            <li>
                <ColorSwitch></ColorSwitch>
            </li>
            <li>
                <a href="javascript:void(0);" class="p-0 lg:px-4">
                    <SvgGithub />
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" class="px-1 lg:px-4">
                    <Icon name="fa:search" />
                </a>
            </li>
            <li class="flex justify-center items-center lg:hidden">
                <DrawerLabel class=""></DrawerLabel>
            </li>
        </ul>

    </div>
</template>
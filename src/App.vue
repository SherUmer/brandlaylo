<template>
  <router-view v-slot="{ Component,route }">
    <transition name="route" mode="out-in">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
</template>

<style>
@import 'assets/style.css';
/* route transition properties */
.route-enter-from{ 
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active{
  transition: all 0.2s ease-out;
}
.route-leave-to{
  opacity:0;
  transform: translateX(-100px);
}
.route-leave-acitve{
  transition: all 0.2s ease-in;
}
</style>
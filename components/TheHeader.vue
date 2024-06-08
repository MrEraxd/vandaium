<template>
  <header class="bg-white shadow-sm mb-4">
    <div class="container mx-auto flex justify-between py-6">
      <NuxtLink to="/">
        <BaseSvg svg-name="logo" />
      </NuxtLink>

      <nav>
        <ul class="flex gap-x-6 items-center">
          <li>
            <NuxtLink to="/myaccount/overview">
              <BaseSvg svg-name="icon-user" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/wishlist">
              <BaseSvg svg-name="icon-heart" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/basket">
              <BaseSvg svg-name="icon-cart" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <div class="container mx-auto flex py-2">
      <nav>
        <ul class="flex gap-4 items-center">
          <li>
            <NuxtLink to="/category/computer">Komputery</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/category/smartphones">Smartfony</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/category/pc-part">Podzespoły komputerowe</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

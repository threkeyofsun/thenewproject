<template>
  <div class="parti mt-2 mt-md-4">
    <div>
      <p class="btn draw-border">In Process</p>
      <div class="mx-xxl-5">
        <li> <router-link to="/event/activities/:id"> <span> Acttivity I Lorem Ipsum is simply dummy text... </span></router-link></li>
        <hr />
      </div>
    </div>

    <div>
      <p class="btn draw-border draw-border1">On Going</p>
      <div class="mx-xxl-5">
        <p class="text-center"> </p>
        <hr />
      </div>
    </div>

    <div>
      <p class="btn draw-border draw-border2">Past Activity</p>
      <div class="mx-xxl-5">
        <p class="text-center"> </p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.parti {
  font-family: "THSaraban";
  font-size: larger;
}
.parti .container {
  max-width: 100%;
}
.parti hr {
  margin-right: 11%;
}
@media (min-width: 576px) {
  .container-sm,
  .container {
    max-width: 670px;
  }
}
</style>
<style lang="scss" scoped>
//=== Drawing effect

@mixin btn-border-drawing(
  $color: #ccc,
  $hover: black,
  $width: 2px,
  $vertical: top,
  $horizontal: left,
  $duration: 0.25s
) {
  box-shadow: inset 0 0 0 $width $color;
  color: $color;
  transition: color $duration $duration/3;
  position: relative;

  &::before,
  &::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: "";
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;

    #{$vertical}: 0;
    #{$horizontal}: 0;
  }

  &::before {
    $h-side: if($horizontal == "left", "right", "left");

    border-#{$vertical}-width: $width;
    border-#{$h-side}-width: $width;
  }

  &::after {
    $v-side: if($vertical == "top", "bottom", "top");

    border-#{$v-side}-width: $width;
    border-#{$horizontal}-width: $width;
  }

  &:hover {
    color: $hover;

    &::before,
    &::after {
      border-color: $hover;
      transition: border-color 0s, width $duration, height $duration;
      width: 100%;
      height: 100%;
    }

    &::before {
      transition-delay: 0s, 0s, $duration;
    }

    &::after {
      transition-delay: 0s, $duration, 0s;
    }
  }
}
.draw-border1 {
  box-shadow: inset 0 0 0 4px #ffc5b396 !important;
}
.draw-border2 {
  box-shadow: inset 0 0 0 4px #7599c696 !important;
}

.draw-border {
  @include btn-border-drawing(#58afd1, #ffe593, 4px, bottom, right);
}
.draw-border {
  box-shadow: inset 0 0 0 4px #7aa15596;
  color: #214c5eb4;
  transition: color 0.25s 0.0833333333s;
  position: relative;
  width: 91%;
}

//=== Button styling, semi-ignore
.btn {
  background: none;
  border: none;
  cursor: default;
  line-height: 1.5;
  font: 700 1.3rem "THSaraban";
  padding: 0.3em 3%;
  letter-spacing: 0.05rem;

  &:focus {
    outline: 2px dotted #55d7dc;
  }
}

//=== Pen styling, ignore
body {
  background: #1f1a25;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>

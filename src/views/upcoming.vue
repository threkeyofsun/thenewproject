<template>
  <HomepageHeader />

  <div class="row topspace">
    <Sidebar />
    <!--End of  Sidebar -->

    <div class="col-md-9 col-12 mt-5 ">
      <p class="mt-5 mb-4 anounce-title mx-5">My Activities > Upcoming</p>
      <div class="parti mt-5 mt-md-5 ml-5 mx-5 text-center">
        
    <div>
      <p class="btn draw-border">Volunteer Activities</p>
      <div class="mx-xxl-5 upcomelink">
       <li> <router-link to="/event/activities/:id"> <span> Acttivity I Lorem Ipsum is simply dummy text... </span></router-link></li>
        <hr />
      </div>
      <div class="mx-xxl-5">
        <li> <router-link to="/event/activities/:id"> <span> Acttivity II Lorem Ipsum is simply dummy text... </span></router-link></li>
        <hr class="text-center" />
      </div>
    </div>

    <div>
      <p class="btn draw-border draw-border1">Regular Activities Activities</p>
      <div class="mx-xxl-5">
        <li> <router-link to="/event/activities/:id"> <span> Acttivity I Lorem Ipsum is simply dummy text... </span></router-link></li>
        <hr />
      </div>
      <div class="mx-xxl-5">
        <li> <router-link to="/event/activities/:id"> <span> Acttivity II Lorem Ipsum is simply dummy text... </span></router-link></li>
        <hr class="text-center" />
      </div>
    </div>

    <div>
      <p class="btn draw-border draw-border2">Force Activities</p>
      <div class="mx-xxl-5">
        <li> <router-link to="/event/activities/:id"> <span> Acttivity I Lorem Ipsum is simply dummy text... </span></router-link></li>
        <hr />
      </div>
      <div class="mx-xxl-5">
        <li> <router-link to="/event/activities/:id"> <span> Acttivity II Lorem Ipsum is simply dummy text... </span></router-link></li>
        <hr class="text-center" />
      </div>
    </div>
  </div>

    </div>
  </div>

  <HPfooter />
</template>

<script>
// import axios from "axios";
import HomepageHeader from "../components/HomepageHeader";
import HPfooter from "../components/homepageFooter";
import Sidebar from "../components/sliderbar";

export default {
  components: {
    HomepageHeader,
    HPfooter,
    Sidebar,
  },
  data() {
    return {};
  },
  async created() {},
  methods: {},
};
</script>

<style scoped>
   .topspace hr {
    margin-left: 12%;
}
  .anounce-title {
  font-size: 20px;
  color: rgb(184 46 46 / 70%);
}
/* Upload profile image */
input.file-input {
  display: none;
}
/*  */
.topspace {
  margin-top: -6%;
}
.detail {
  font-family: "THSaraban";
}
.container {
  max-width: 680px;
  width: 100%;
  float: left;
}
.posting {
  text-align-last: center;
}
</style>

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
    padding: 0.3em 36.7%;
  }
  .draw-border2 {
  box-shadow: inset 0 0 0 4px #7599c696 !important;
}
  
  .draw-border {
    @include btn-border-drawing(#58afd1, #ffe593, 4px, bottom, right);
  }
  .draw-border{
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
    cursor: pointer;
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



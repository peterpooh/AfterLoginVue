<template>
  <svg
    viewBox="0 0 24 24"
    class="icon"
    :class="styleClasses"
  >
    <path :d="path" />
  </svg>
</template>

<script>
import icons from "./icons.json";

export default {
  name: 'Svg-Icon',
  props: {
    name: String,
    size: String,
    color: String,
  },
  computed: {
    path() {
      return icons[this.name];
    },
    styleClasses() {
      return [this.size, this.color].map(val => val && `is-${val}`);
    },
  },
};
</script>

<style>
/* default */
.icon {
  fill: currentColor;
  font-size: 20px;
  width: 30px;

}
.icon.mobile-menu{

  margin : 0 20px 10px 5px;
}

/* sizes */
.icon.is-xlarge {
  width: 3em;
  height: 3em;
}

.icon.is-large {
  width: 2em;
  height: 2em;
}
.icon.is-medium {
  width: 1.6em;
  height: 1.6em;
}
.icon.is-normal {
  width: 1.2em;
  height: 1.2em;
}
.icon.is-small {
  width: 1em;
  height: 1em;
}
.icon.is-tiny {
  width: 0.8em;
  height: 0.8em;
}
</style>
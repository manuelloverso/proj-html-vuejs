<script>
export default {
  name: "CourseCard",
  props: {
    course: Object,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div class="col-3">
    <div class="square">
      <img :src="'/images/' + course.image" alt="" />
      <h4>{{ course.name }}</h4>
      <p>
        <i class="fa-regular fa-user fa-sm"></i> Teacher:
        <strong>{{ course.teacher }}</strong>
      </p>
      <p>
        <i class="fa-regular fa-money-bill-1 fa-sm"></i> Price:
        <strong>€{{ course.price }}</strong>
      </p>
      <button class="hover-accent btn-primary">
        <i class="fa-regular fa-eye fa-sm"></i> View Course
      </button>
    </div>
  </div>
</template>
<style scoped>
.square {
  height: 100%;
  position: relative;
  box-shadow: var(--border-light-grey) 0 0 20px 0px;
  padding: 2rem;
  text-align: center;

  & h4 {
    font-weight: 900;
    font-size: 1.3rem;
    margin-bottom: 5px;
  }

  & p {
    margin-bottom: 5px;
  }

  & p:nth-child(4) {
    margin-bottom: 2rem;
  }

  & img {
    width: 30%;
    margin-bottom: 1rem;
  }

  & button {
    position: absolute;
    white-space: nowrap;
    bottom: 0;
    transform: translate(-50%, +50%);
    font-size: 1.1rem;
    padding: 10px 15px;
  }
}
</style>

<script>
export default {
  name: "AppMain",
  data() {
    return {};
  },
};
</script>
<template>
  <main>
    <!-- Browse through courses section -->
    <section class="courses">
      <div class="d-flex container-lg">
        <!-- Ledt section -->
        <div class="left col-6">
          <img width="60" src="/images/Books-icon.png" alt="Books" />
          <h2 class="fs-7 mb-3">
            Thousands of courses for any type of student
          </h2>
          <p class="fs-3 mb-6">
            At EduPrime, it doesn't matter what domain you wish to persue a
            career in. Here you can find a course that satisfies your needs
            within a click away and applies for a course in a matter of minutes.
            EduPrime is ranked as the most versatile university in the world,
            thanks to the number of courses it provides.
          </p>

          <button class="btn-accent">Browse through courses</button>
        </div>

        <!-- right section -->
        <div class="right col-6 d-flex justify-center align-center">
          <img
            class="w-80 d-block"
            src="/images/Graduation-Illustration.png"
            alt="graduation Hat"
          />
        </div>
      </div>
    </section>

    <!-- EduPrime faculties available section -->
    <section class="faculties">
      <h2>Faculties available at EduPrime</h2>
      <p>
        A single university with a load of courses, tailored to satisfy any
        student's needs.
      </p>

      <div class="img-squares d-flex">
        <div class="square"></div>
        <div class="square">
          <img src="/images/Gavel-v2.png" alt="" />
          <h4>Law Faculty</h4>
        </div>
        <div class="square">
          <img src="/images/Coins-tabs-v2.png" alt="" />
          <h4>Economy</h4>
        </div>
        <div class="square">
          <img src="/images/Medicine-tabs-v2.png" alt="" />
          <h4>Medicine</h4>
        </div>
        <div class="square">
          <img src="/images/Computer-tabs-v2.png" alt="" />
          <h4>Computer Scinece</h4>
        </div>
        <div class="square">
          <img src="/images/Palette-tabs-v2.png" alt="" />
          <h4>Graphic Design</h4>
        </div>
        <div class="square"></div>
      </div>
    </section>

    <!-- University year section -->
    <section class="university-year">
      <!-- University Path -->
      <div class="path"></div>

      <!-- Upcoming Events -->
      <div class="events"></div>
    </section>

    <!-- Latest Courses section -->
    <section class="latest-courses"></section>

    <!-- Benefits section -->
    <section class="benefits"></section>

    <!-- Newsletter section -->
    <section class="newsletter"></section>

    <!-- Partners section -->
    <section class="partners"></section>
  </main>
</template>
<style scoped>
main {
  .courses {
    padding-top: 4rem;
    color: var(--text-dark);
    background-image: url("/images/home-background.png");
    background-repeat: no-repeat;
  }

  .faculties {
    .img-squares {
      box-shadow: var(--border-light-grey) 0 0 30px 0;
    }
    .square {
      width: calc(100% / 7);
      aspect-ratio: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;

      &:not(:first-child, :last-child) {
        border: var(--border-light-grey) 1px solid;
      }

      & img {
        width: 50%;
      }

      & h4 {
        font-size: 1.5rem;
        color: var(--primary-color);
      }
    }
  }
}
</style>

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
      <div class="row container-lg">
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
      <h2 class="text-center fs-7 mb-3">Faculties available at EduPrime</h2>
      <p style="width: 25%" class="mx-auto text-center fs-3 mb-6">
        A single university with a load of courses, tailored to satisfy any
        student's needs.
      </p>

      <!-- Horizontal images squares -->
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

      <!-- Pic and text -->
      <div class="container-md row">
        <div class="left col-6 d-flex justify-center">
          <img class="w-70" src="/images/Gavel-Illustration.png" alt="Gravel" />
        </div>
        <div class="right col-6">
          <h2 class="fs-7 mb-4">Law Faculty</h2>
          <p class="lighter mb-4">
            Learning from world-leading academics and practitioners, you'll not
            only receive an outstanding grounding in the theory of law, but
            you'll be able to understand how those principles are applied in
            practice through a range of student-led activities and competitions
          </p>
          <button class="btn-primary">Read More</button>
        </div>
      </div>
    </section>

    <!-- University year section -->
    <section class="university-year">
      <!-- Wave Image -->
      <img
        class="wave upside-down w-100 d-block"
        src="/images/Wave-1.png"
        alt=""
      />

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
  color: var(--text-dark);
  .courses {
    padding: 4rem 0;
    background-image: url("/images/home-background.png");
    background-repeat: no-repeat;
    background-position: right;
  }

  .faculties {
    padding-bottom: 5rem;
    .img-squares {
      margin-bottom: 5rem;
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

    .lighter {
      color: var(--text-light);
      line-height: 1.7;
    }
  }

  .university-year {
    padding-bottom: 6rem;
    background-color: var(--primary-color);
    .wave {
      margin-bottom: 6rem;
    }
  }
}
</style>

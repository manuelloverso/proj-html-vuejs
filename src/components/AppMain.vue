<script>
import { store } from "../store.js";
import CourseCard from "./CourseCard.vue";

export default {
  name: "AppMain",
  components: {
    CourseCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <main>
    <!-- Browse through courses section -->
    <section class="courses">
      <div class="row container-lg">
        <!-- Left section -->
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

          <button class="hover-red btn-accent">Browse through courses</button>
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
      <div class="container-md row mb-6">
        <div class="left col-6 d-flex justify-center align-center">
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
          <button class="btn-primary hover-accent">Read More</button>
        </div>
      </div>

      <!-- Wave Image -->
      <img class="w-100 m-neg-bottom d-block" src="/svg/svg-0.svg" alt="" />
    </section>

    <!-- University year section -->
    <section class="university-year">
      <img
        style="width: 80px"
        class="d-block mx-auto mb-3"
        src="/images/Clock-and-Bell.png"
        alt=""
      />
      <h2 class="text-center fs-7"><span>University Year</span></h2>

      <!-- University Path -->
      <div class="path">
        <div class="orientation">
          <h4>Orientation</h4>
          <p>
            First day of the university year, all students gather for the
            opening ceremony and then network with others.
          </p>
        </div>
        <div class="demo">
          <h4>Demo Classes</h4>
          <p>
            In the first week, students try to accomodate with the teaching
            style and choose their optional courses.
          </p>
        </div>
        <div class="evaluation">
          <h4>Evaluation</h4>
          <p>
            At the end of a semester, students take a general evaluation test
            for every subject they're learning.
          </p>
        </div>
        <div class="graduation">
          <h4>Graduation Day</h4>
          <p>
            On the day of graduation, all students gather for the ceremony and
            then network and party among others.
          </p>
        </div>
        <img
          class="w-100 d-block mx-auto"
          src="/images/Timeline-Item.png"
          alt=""
        />
      </div>

      <img
        style="width: 80px"
        class="d-block mx-auto mb-1"
        src="/images/Clock-and-Bell.png"
        alt=""
      />
      <h2 class="text-center fs-7">Upcoming Events</h2>

      <!-- Upcoming Events -->
      <div class="events container-lg row">
        <div class="col-4">
          <div class="square">
            <h4>Coaching Sessions</h4>
            <span
              ><i class="fa-regular fa-calendar-days fa-sm"></i> 20 May 21:30
              PM</span
            >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
              error [...]
            </p>
            <button>+ Find More</button>
          </div>
        </div>
        <div class="col-4">
          <div class="square">
            <h4>Coaching Sessions</h4>
            <span
              ><i class="fa-regular fa-calendar-days fa-sm"></i> 20 May 21:30
              PM</span
            >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
              error [...]
            </p>
            <button>+ Find More</button>
          </div>
        </div>
        <div class="col-4">
          <div class="square">
            <h4>Coaching Sessions</h4>
            <span
              ><i class="fa-regular fa-calendar-days fa-sm"></i> 20 May 21:30
              PM</span
            >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
              error [...]
            </p>
            <button>+ Find More</button>
          </div>
        </div>
      </div>

      <div class="pb-6">
        <button class="btn-accent hover-primary d-block mx-auto">
          View All Events
        </button>
      </div>
    </section>

    <!-- Latest Courses section -->
    <section class="latest-courses">
      <!-- Wave Image -->
      <img class="w-100 d-block mb-4 m-neg-top" src="/svg/svg-1.svg" alt="" />
      <div class="container-lg">
        <h2 class="fs-7 mb-6">Latest Courses</h2>
        <div class="row">
          <CourseCard :course="course" v-for="course in store.latestCourses" />
        </div>
      </div>
    </section>

    <!-- Benefits section -->
    <section class="benefits">
      <div class="row container-lg">
        <div class="left col-6">
          <img width="60" class="mb-2" src="/images/Exam-icon.png" alt="" />
          <h2 class="fs-7 mb-4">The most efficient examination method</h2>
          <p class="mb-5">
            EduPrime has gathered teachers from around the globe to brainstorm
            in order to facilitate the evaluation for our students. Every
            teacher from our university has an influence on how students are
            evaluated at his/her subject.
          </p>
          <button class="hover-accent btn-primary fs-3">
            Discover the Mehtod
          </button>
        </div>
        <div class="right col-6 d-flex justify-center align-center">
          <img class="w-80" src="/images/Exam-Illustration.png" alt="" />
        </div>
      </div>

      <div class="row container-lg">
        <div class="left col-6 d-flex justify-center align-center">
          <img class="w-80" src="/images/Girl-Illustration.png" alt="" />
        </div>
        <div class="right col-6">
          <img width="60" class="mb-2" src="/images/Exam-icon-1.png" alt="" />
          <h2 class="fs-7 mb-4">Variable fees for international students</h2>
          <p class="mb-5">
            EduPrime has gathered teachers from around the globe to brainstorm
            in order to facilitate the evaluation for our students. Every
            teacher from our university has an influence on how students are
            evaluated at his/her subject.
          </p>
          <button class="hover-accent btn-primary fs-3">List of Fees</button>
        </div>
      </div>
    </section>

    <!-- Newsletter section -->
    <section class="newsletter">
      <div class="row align-center justify-between container-lg">
        <h2 class="fs-7">Subscribe Now to Our Newsletter !</h2>
        <form>
          <div class="input-bar">
            <input
              type="email"
              name="newsletter"
              id="newsletter"
              placeholder="Email address..."
            />
            <button type="submit" class="btn-accent hover-primary">
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- Partners section -->
    <section class="partners text-center">
      <h2 class="fs-7 mb-4">Partners</h2>
      <p class="mx-auto mb-5">
        Levarage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy.
      </p>
      <div class="icons row container-xl">
        <img src="/images/partner-2.png" alt="" />
        <img src="/images/partner-1.png" alt="" />
        <img src="/images/partner-3.png" alt="" />
        <img src="/images/partner-4.png" alt="" />
        <img src="/images/partner-5.png" alt="" />
        <img src="/images/partner-6.png" alt="" />
        <img src="/images/partner-7.png" alt="" />
        <img src="/images/partner-8.png" alt="" />
      </div>

      <!-- Wave Image -->
      <img class="wave" src="/images/background-wave3.png" alt="" />
    </section>
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
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: rgb(230, 230, 230);
      }

      &:not(:first-child, :last-child) {
        border: var(--border-light-grey) 1px solid;
      }

      & img {
        width: 50%;
      }

      & h4 {
        font-size: 1.5rem;
        color: var(--primary-color);
        text-align: center;
      }
    }

    .lighter {
      color: var(--text-light);
      line-height: 1.7;
    }
  }

  .university-year {
    padding: 6rem 0;
    background-color: var(--primary-color);
    .wave:first-child {
      margin-bottom: 6rem;
    }

    .wave:last-child {
      margin-top: 6rem;
    }

    & > h2 {
      margin-bottom: 6rem;
      color: white;
      & span {
        background-color: red;
      }
    }

    .path {
      padding: 7rem 0;
      margin-bottom: 6rem;
      position: relative;
      max-width: 1200px;
      margin-right: auto;
      margin-left: auto;

      & div {
        position: absolute;
        width: 400px;
        text-align: center;
        color: white;

        & h4 {
          font-size: 1.3rem;
          font-weight: 900;
          margin-bottom: 1rem;
        }

        & p {
          font-weight: 400;
        }
      }

      .demo {
        top: 0;
        left: 23%;
      }

      .orientation {
        bottom: 0;
        left: 30px;
      }

      .graduation {
        top: 0;
        right: 30px;
      }

      .evaluation {
        bottom: 0;
        right: 280px;
      }
    }

    .events {
      margin-bottom: 4.5rem;
      .square {
        position: relative;
        background-color: white;
        border-radius: 20px;
        padding: 2rem;
        text-align: center;

        & h4 {
          font-size: 2rem;
          font-weight: 900;
        }

        & span {
          display: inline-block;
          font-weight: 500;
          color: var(--text-light);
          margin-bottom: 5px;
        }

        & p {
          color: var(--text-light);
          margin-bottom: 30px;
        }

        & button {
          background-color: var(--primary-color);
          color: white;
          position: absolute;
          padding: 10px 20px;
          box-shadow: black 0 0 10px -5px;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, +50%);

          &:hover {
            background-color: var(--accent-yellow);
            color: white;
          }
        }
      }
    }
  }

  .latest-courses {
    padding-bottom: 4rem;

    & h2 {
      padding-left: 16px;
    }
  }

  .benefits {
    padding-top: 3rem;
    & h2 {
      line-height: 1.3;
    }

    .row {
      margin-bottom: 6rem;
    }
  }

  .newsletter {
    background-color: var(--primary-color);

    @media screen and (max-width: 1700px) {
      .row {
        flex-direction: column;
        align-items: center;
      }

      h2 {
        margin-bottom: 2rem;
      }
    }

    .row {
      padding: 3.5rem 0;
      color: white;

      & input {
        width: 400px;
      }
    }
  }

  .partners {
    padding-top: 3rem;

    & p {
      width: 500px;
    }

    .icons {
      justify-content: center;
      gap: 50px;
      margin-bottom: 50px;

      & img {
        height: 50px;
        filter: opacity(40%);
      }
    }

    .wave {
      display: block;
      width: 100%;
      height: 200px;
      transform: rotate(180deg);
      filter: contrast(90%);
    }
  }
}
</style>

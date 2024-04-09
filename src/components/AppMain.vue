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

      <button class="btn-accent d-block mx-auto">View All Events</button>

      <!-- Wave Image -->
      <img class="wave w-100 d-block" src="/images/Wave-1.png" alt="" />
    </section>

    <!-- Latest Courses section -->
    <section class="latest-courses">
      <div class="container-lg">
        <h2 class="fs-7 mb-6">Latest Courses</h2>
        <div class="row">
          <div class="col-3">
            <div class="square">
              <img src="/images/Decisions-icon.png" alt="" />
              <h4>Make Better Decisions</h4>
              <p>
                <i class="fa-regular fa-user fa-sm"></i> Teacher:
                <strong>James Colins</strong>
              </p>
              <p>
                <i class="fa-regular fa-money-bill-1 fa-sm"></i> Price:
                <strong>$21.00</strong>
              </p>
              <button class="btn-primary">
                <i class="fa-regular fa-eye fa-sm"></i> View Course
              </button>
            </div>
          </div>
          <div class="col-3">
            <div class="square">
              <img src="/images/Speaker-icon.png" alt="" />
              <h4>How to be a speaker</h4>
              <p>
                <i class="fa-regular fa-user fa-sm"></i> Teacher:
                <strong>James Colins</strong>
              </p>
              <p>
                <i class="fa-regular fa-money-bill-1 fa-sm"></i> Price:
                <strong>$21.00</strong>
              </p>
              <button class="btn-primary">
                <i class="fa-regular fa-eye fa-sm"></i> View Course
              </button>
            </div>
          </div>
          <div class="col-3">
            <div class="square">
              <img src="/images/Network-icon.png" alt="" />
              <h4>Network Introductions</h4>
              <p>
                <i class="fa-regular fa-user fa-sm"></i> Teacher:
                <strong>James Colins</strong>
              </p>
              <p>
                <i class="fa-regular fa-money-bill-1 fa-sm"></i> Price:
                <strong>$21.00</strong>
              </p>
              <button class="btn-primary">
                <i class="fa-regular fa-eye fa-sm"></i> View Course
              </button>
            </div>
          </div>
          <div class="col-3">
            <div class="square">
              <img src="/images/Brand-icon.png" alt="" />
              <h4>Brand Management</h4>
              <p>
                <i class="fa-regular fa-user fa-sm"></i> Teacher:
                <strong>James Colins</strong>
              </p>
              <p>
                <i class="fa-regular fa-money-bill-1 fa-sm"></i> Price:
                <strong>$21.00</strong>
              </p>
              <button class="btn-primary">
                <i class="fa-regular fa-eye fa-sm"></i> View Course
              </button>
            </div>
          </div>
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
          <button class="btn-primary fs-3">Discover the Mehtod</button>
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
          <button class="btn-primary fs-3">List of Fees</button>
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
            <button type="submit" class="btn-accent">
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
        text-align: center;
      }
    }

    .lighter {
      color: var(--text-light);
      line-height: 1.7;
    }
  }

  .university-year {
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
        }
      }
    }
  }

  .latest-courses {
    padding: 4rem 0;

    & h2 {
      padding-left: 16px;
    }

    .row {
      align-items: stretch;
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

      .input-bar {
        position: relative;
        & button {
          position: absolute;
          right: -10px;
          padding: 1.45rem;
          border-radius: 50%;

          & i {
            display: block;
          }
        }

        & input {
          width: 400px;
          border: none;
          padding: 1.5rem;
          border-radius: 30px;
          font-size: 1rem;
        }
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

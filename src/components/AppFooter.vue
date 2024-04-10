<script>
export default {
  name: "AppFooter",
  props: {
    list1: Array,
    list2: Array,
    categories: Array,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <!-- Site Footer -->
  <footer>
    <div class="absolute-btns">
      <button>
        <img width="20" src="/svg/svg-3.svg" alt="" />
        <span> Purchase Theme</span>
      </button>
      <button>
        <img width="20" src="/svg/svg-2.svg" alt="" />
        <span> Related Themes</span>
      </button>
    </div>
    <div class="row">
      <div class="col-4 left">
        <div class="logo mb-4">
          <img class="w-100" src="/images/theme_eduprime_logo.png" alt="" />
        </div>

        <p class="mb-3">
          EduPrime is the most versatile WordPress theme for educational
          purposes, showcasing universities, courses, secondary schools etc.
        </p>

        <div class="socials">
          <button><i class="fa-brands fa-facebook-f"></i></button>
          <button><i class="fa-brands fa-x-twitter"></i></button>
          <button><i class="fa-brands fa-instagram"></i></button>
        </div>
      </div>
      <div class="col-2">
        <h4>Get EduPrime</h4>
        <ul>
          <li v-for="link in list1">
            <a href="#">{{ link }}</a>
          </li>
        </ul>
      </div>
      <div class="col-2">
        <h4>Networking</h4>
        <ul>
          <li v-for="link in list2">
            <a href="#">{{ link }}</a>
          </li>
        </ul>
      </div>
      <div class="col-4">
        <!-- search bar -->
        <div class="input-bar mb-3">
          <input type="text" placeholder="Search..." />
          <button class="btn-accent hover-primary">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <h5 class="fs-3 text-end mb-2">Search categories</h5>
        <div class="categories mb-3 row g-1 justify-end">
          <button v-for="category in categories">
            {{ category.toUpperCase() }}
          </button>
        </div>
        <p class="copyright text-end">ModelTheme. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer {
  color: white;
  padding: 7rem;
  background-color: var(--primary-color);
  position: relative;

  .absolute-btns {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    bottom: 30px;
    left: 50px;

    & button {
      box-shadow: black 0px 9px 20px -7px;
      background-color: var(--bg-buttons);
      display: flex;
      align-items: center;
      gap: 10px;
      color: white;
      padding: 7px 0 7px 10px;
      font-size: 0.8rem;
      font-weight: 400;
      width: 200px;
      height: 40px;
      border-radius: 7px;
    }
  }

  & > .row {
    width: 90%;
    max-width: 1600px;
    margin: auto;
    .logo {
      width: 80%;
    }
    .copyright {
      color: var(--accent-yellow);
    }

    .categories {
      & button {
        background-color: transparent;
        border: 1px solid white;
        color: white;
        padding: 8px 15px;
        font-size: 0.8rem;
        font-weight: 400;

        &:hover {
          background-color: white;
          font-weight: 500;
          color: var(--primary-color);
        }
      }
    }

    .left {
      & p {
        font-weight: 400;
      }

      .socials {
        & button {
          background-color: transparent;
          border: 2px solid var(--accent-yellow);
          padding: 0;
          width: 50px;
          aspect-ratio: 1;
          border-radius: 50%;
          margin-right: 15px;

          &:hover i {
            color: var(--accent-yellow);
          }

          & i {
            display: block;
            color: white;
          }
        }
      }
    }

    & h4 {
      font-size: 1.4rem;
      margin-bottom: 15px;
      font-weight: 900;
    }

    ul {
      & li {
        margin-bottom: 10px;

        &:hover a {
          text-decoration: underline;
        }

        & a {
          text-decoration: none;
          color: white;
        }
      }
    }

    & input {
      width: 100%;
    }
  }
}
</style>

<template>
  <!-- Regis------------------------------------------------- -->
  <div class="right-content container-fluid">
    <div class="regis-part">
      <form
        id="regis-form"
        action=""
        @submit.prevent="sendFile"
        method="post"
        enctype="multipar/form-data"
      >
        <!-- <font-awesome-icon icon="angle-down"></font-awesome-icon> -->
        <input
          class="largeIn"
          type="username"
          name="username"
          v-model.trim="user.username"
          required
          placeholder="| Username"
        />
        <input
          class="largeIn"
          type="password"
          name="password"
          v-model.trim="user.password"
          required
          placeholder="| Password"
        />
        <div class="text-danger" v-if="user.passwordError">{{ user.passwordError }}</div>

        <!-- Row os here -->
        <div class="row1">
          <input
            class="smallIn"
            type="text"
            name="First-Name"
            v-model.trim="user.firstname"
            required
            placeholder="| First-Name"
          />

          <input
            class="smallIn"
            type="text"
            name="Last-Name"
            v-model.trim="user.lastname"
            required
            placeholder="| Last-Name"
          />
        </div>

        <div class="row1">
          <select
            class="smallIn d-inline"
            id="faculty"
            v-model.trim="user.faculty"
            required
          >
            <option disabled selected class="faculty-disble" value="0">| Faculty</option>

            <option value="CCI">College of Creative Industry</option>
            <option value="Engineering">Faculty of Engineering</option>
            <option value="Agricultural Product Innovation and Technology">
              Faculty of Agricultural Product Innovation and Technology
            </option>
            <option value="Humanities">Faculty of Humanities</option>
            <option value="Science">Faculty of Science</option>
            <option value="Physical Education">Faculty Of Physical Education</option>
            <option value="Social Science">Faculty of Social Science</option>
            <option value="Education">Faculty of Education</option>
            <option value="Medicine">Faculty of Medicine</option>
            <option value="Fine Art">Faculty of Fine Art</option>
            <option value="Dentistry">Faculty Of Dentistry</option>
            <option value="Pharmacy">Faculty of Pharmacy</option>
            <option value="Physical Therapy">Faculty of Physical Therapy</option>
            <option value="Economics">Faculty of Economics</option>
            <option value="COSCI">College of Social Communication Innovention</option>
            <option value="Bodhivijjalaya College">Bodhivijjalaya College</option>
            <option value="International College for Sustainability Studies">
              International College for Sustainability Studies
            </option>
            <option value="Environmental Culture and Ecotourism">
              Faculty of Environmental Culture and Ecotourism
            </option>
            <option value="Business Administration for Society">
              Faculty of Business Administration for Society
            </option>
          </select>
          <input
            class="smallIn"
            type="text"
            name="Majors"
            v-model.trim="user.department"
            required
            placeholder="| Majors"
          />
        </div>

        <div class="row1">
          <input
            class="smallIn"
            type="Email"
            name="Email"
            v-model.trim="user.email"
            required
            placeholder="| Email"
          />
          <input
            class="smallIn"
            type="text"
            name="tel"
            required
            v-model="user.tel_no"
            @input="acceptNumber"
            placeholder="| Phone NUmber"
          />
        </div>

        <div class="row1">
          <div class="d-inline">
            <input
              class="smallIn"
              type="ID"
              name="ID"
              v-model.trim="user.id"
              required
              placeholder="| Student ID or Stuff ID"
            />
          </div>

          <div class="d-inline checkB">
            <input
              class="type d-inline"
              type="radio"
              name="type"
              value="Student"
              required
              v-model="user.type"
            />
            <label for="Student">Student</label>

            <input
              class="type d-inline"
              type="radio"
              name="type"
              value="Stuff"
              required
              v-model="user.type"
            />
            <label for="Stuff">Stuff</label>
          </div>
        </div>
        <!-- End of input -->

        <div class="mb-5 mb-xl-auto">
          <!-- @click="doSomething(), $router.push('/homepage')" -->
          <button class="login-btn"  id="login-btn">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "reg",
  components: {},
  data() {
    return {
      uploadInfo: [],
      user: {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        faculty: "0",
        department: "",
        email: "",
        tel_no: "",
        id: "",
        type: "",
        passwordError: "",
      },  
      message:'',
      showSuccessMessage: false,
      error: false,
      typeOfTask: null, // 1 = recurring, 2 = scheduled
    };
  },
  methods: {
    doSomething() {
      alert("Registeration successfully");
    },
    acceptNumber() {
      var x = this.user.tel_no.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.user.tel_no = !x[2]
        ? x[1]
        : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    },
    password() {
      this.user.passwordError =
        this.user.password.length > 7 ? "" : "Password must be at least 8 chars long";
    },
    // async addToCart() {
    //     const res = await axios.post('/users/api/user', {
    //       username: this.user.username,
    //       password: this.user.password,
    //       firstname_en: this.user.firstname,
    //       lastname_en: this.user.lastname,
    //       faculty: this.user.faculty,
    //       department: this.user.department,
    //       tel_no: this.user.tel_no,
    //       s_id: this.user.id,
    //       s_type: this.user.type,
    //       email: this.user.email,
    //     });
    //     console.log(res);
    //     this.showSuccessMessage = true;
    //     setTimeout(() => {
    //       this.$router.push('/');
    //     }, 1500);
    //   },
    async sendFile() {
      try {
        const response = await axios.post("/users/api/register", {
          username: this.user.username,
          password: this.user.password,
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          faculty: this.user.faculty,
          department: this.user.department,
          tel_no: this.user.tel_no,
          s_id: this.user.id,
          s_type: this.user.type,
          email: this.user.email,
        });
       
        console.log('Your registration has been successful');
        this.showSuccessMessage = true;
        alert(response.data);
        this.user.username = '',
        this.user.password = '',
        this.user.firstname = '',
        this.user.lastname = '',
        this.user.faculty = '0',
        this.user.department = '',
        this.user.tel_no = '',
        this.user.id = '',
        this.user.type = '',
        this.user.email = ''
        this.$router.push({name:'login'})
  
      } catch (err) {
        this.error = true;
        alert(err.response.data.error_message);
        console.log(err.response.data.error_message)
      }
      
    },

  },
};
</script>

<style>
.option {
  margin-bottom: 5px;
}

@media only screen and (max-width: 575.98px) {
  .option .hr-main {
    width: 135px;
    height: 3px;
    background-color: #79b6a78a;
    margin: 0px;
  }
  .option .hr-main1 {
    width: 135px;
    height: 3px;
    background-color: #629084;
    margin: 0px;
  }
}
@media only screen and (max-width: 1565px) {
  .option h2 {
    font-family: "Srinakharin";
    margin: 0px 0px 0px 0px;
    font-size: 41px;
  }
  .option hr {
    width: 125px;
  }
}

@media only screen and(min-width: 1568px) and (max-width: 1900px) {
  .rightR {
    align-self: unset !important;
    margin-top: 15px;
  }
}
</style>

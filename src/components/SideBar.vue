<template lang="html">
  <div id="left-bar">
    <div id="top-left-bar">
      <router-link to="/">
        <div id="icon">
          <i 
            class="fa fa-home fa-2x" 
            aria-hidden="true" />
        </div>
      </router-link>
    </div>
    <div 
      id="link-icons" >
      <a target="_blank" href="https://github.com/weatherfordmat">     
        <div> 
        <i 
        class="fa fa-github-alt fa-2x" 
        aria-hidden="true" ></i>
        </div>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/matthewweatherford/">     
        <div> 
        <i 
        class="fa fa-linkedin fa-2x" 
        aria-hidden="true" ></i>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>
/* One-Off */
#left-bar {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 65px;
	background-color: #4d4d4d;
}

#top-left-bar {
    position: fixed;
	top: 0;
    left: 0;
    width: 65px;
    height: 65px;
    background-color: #20b2aa;
}

#logo {
	position: fixed;
	top: 0;
	left: 0;
	margin: 15px;
	width: 35px;
    height: 40px;
}

#link-icons {
	position: absolute;
	bottom: 0;
	margin: 15px;
}

#link-icons .fa {
    margin-top: 25px;
    color: white;
	cursor: crosshair;
}

#link-icons .fa:hover {
    opacity: 0.8;
}

#icon {
    color: white;
    padding: 15px;
    cursor: crosshair;
}

#icon:hover {
    opacity: 0.8;
}

@media (max-width: 750px) {
  #left-bar {
  	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 65px;
    background-color: #4d4d4d;
  }
  #link-icons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 90%;
  }
  #link-icons {
      margin-right: 10px;
  }
  #link-icons a {
      margin-left: 15px;
  }
}
</style>

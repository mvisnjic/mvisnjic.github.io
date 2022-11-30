
<template>
    <div class="bg-gradient-to-b bg-[#D4AF37] lg:hidden">
        <div class="p-6 flex flex-row justify-between lg:hidden">
                <button>
                    <a href="#" class="font-['Bungee'] text-xl">
                        mvisnjic
                    </a>
                </button>    
            <button @click="toggleMenu">                    
                    <svg
                    class="open fill-current h-5 w-5 transform transition duration-1000 ease-in-out"
                    :class="open ? 'hidden' : 'open'"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>

            <svg
                    class="close h-5 w-5 transform transition duration-1000 ease-in-out"
                    :class="open ? 'close' : 'hidden'"
                    version="1.1"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                    <title />
                    <desc />
                    <defs />
                    <g
                        fill="none"
                        fill-rule="evenodd"
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                    >
                        <g
                            fill="black"
                            id="Core"
                            transform="translate(-341.000000, -89.000000)"
                        >
                            <g
                                id="close"
                                transform="translate(341.000000, 89.000000)"
                            >
                                <path
                                    d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"
                                    id="Shape"
                                />
                            </g>
                        </g>
                    </g>
                </svg>
        </button>
        </div>
    </div>
    <div :class="open ? 'close text-white flex flex-col text-center text-xl bg-gradient-to-b bg-[#D4AF37] h-screen' : 'hidden lg:flex'">
        <div class="font-bold space-y-3 lg:space-y-0 text-black lg:text-2xl lg:flex lg:flex-row lg:p-8 lg:border-b-[#D4AF37] lg:mx-52 lg:text-[#D4AF37] lg:border-b lg:opacity-75 lg:w-full lg:justify-evenly lg:items-center"
        >
        <div class="hidden md:block">
                <button>
                    <a href="#" class="font-['Bungee']">

                        mvisnjic
                    </a>
                </button>  
        </div>
        <div class="lg:bg-[#D4AF37] lg:h-16 lg:w-px lg:self-center" />
            <div class="bg-black h-px lg:hidden mx-10" />
            <div>
                <button @click="scrollAbout">
                    About
                </button>    
                </div>
                <div>
                <button @click="scrollProjects">
                    Projects
                </button>    
                </div>
                <div>
                <button @click="scrollContact">
                    Contact me
                </button>    
                </div>
                <div>
                <button @click="scrollFindMe">
                    Find me
                </button>    
                </div>
            </div>
</div>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            open: false,
        }
    },
    methods: {
        async toggleMenu() {
            this.open = !this.open;
        },
        scrollAbout() {
            var about = document.getElementById("about")
            about.scrollIntoView();
            this.open = false;            
        },
        scrollProjects() {
            var about = document.getElementById("projects")
            about.scrollIntoView();            
            this.open = false;
        },
        scrollContact() {
            var about = document.getElementById("contact")
            about.scrollIntoView();            
            this.open = false;
        },
        scrollFindMe() {
            var about = document.getElementById("findMe")
            about.scrollIntoView();            
            this.open = false;
        },
    },
}
</script>

<style>
.router-link-exact-active {
    font-weight: bold;
}
</style>
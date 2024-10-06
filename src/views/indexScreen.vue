<template>
    <div class="flex flex-col items-center space-y-12 lg:space-y-32 mt-12 lg:mt-16 md:px-20 lg:px-52 mb-12 lg:mb-32">
        <div class="text-[#D4AF37] font-bungee p-4">
            <div class="flex flex-row space-x-6">
                <img src="../static/autoportret.png" alt="" class="h-40 lg:h-52 max-h-52 rounded-full">
                <div class="flex flex-col justify-center space-y-0 lg:space-y-2">

                    <div class="text-3xl lg:text-7xl">Hello.</div>
                    <div class="text-xl lg:text-3xl flex flex-col">i am matej visnjic</div>
                </div>
            </div>
        </div>
        <div id="about" class="w-full space-y-12 lg:space-y-16">
            <div class="text-4xl lg:text-7xl text-[#D4AF37] font-shareTech">About</div>
            <div  class="bg-[#8C8C8C] bg-opacity-85 h-1/3 p-4 w-full md:rounded-lg lg:rounded-lg flex flex-col md:flex-row lg:text-2xl lg:items-center lg:p-6">
                <div class="text-justify p-2 flex flex-col lg:flex-col gap-4">
                    <p>Currently working on my master's project and seeking full-time or freelance opportunities. I'm constantly learning and refining my skills.</p>
                    <p>During my studies, I gained experience with various programming languages and tools, In my free time, I enjoy working with Python, AI, IoT devices, bash scripts, cronjobs, web server management, custom REST APIs, and web scraping, especially on Linux.</p>
                    <div id="findMe" class="inline-flex space-x-3">
                        <a target="_blank" href="https://github.com/mvisnjic">
                            <img src="../static/github-icon.svg" alt="github" class="lg:w-10 lg:h-10">
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/matej-vi%C5%A1nji%C4%87-51b273213/">
                            <img src="../static/linkedin-square-icon.svg" alt="linkedin" class="lg:w-10 lg:h-10">
                        </a>
                        <a target="_blank" href="https://twitter.com/matejvisnjic">
                            <img src="../static/x-social-media-logo-icon.svg" alt="twitter" class="lg:w-10 lg:h-10">
                        </a>
                        <a target="_blank" href="https://www.facebook.com/matej.visnjic">
                            <img src="../static/facebook-messenger-black-icon.svg" alt="facebook" class="lg:w-10 lg:h-10">
                        </a>
                    </div>
                    <a href="/files/CV-en.pdf" target="_blank">
                        <p class="text-[#D4AF37] hover:underline">
                            Click here to download a CV.
                        </p>
                    </a>
                </div>
            </div>
        </div>
        <div id="projects" class="w-full space-y-12 lg:space-y-16">
            <div class="text-4xl lg:text-7xl text-[#D4AF37] font-shareTech">My projects</div>
            <div class="flex lg:justify-start flex-col items-center lg:flex-row lg:flex-wrap gap-8 lg:gap-24">
                <projects />
            </div>
        </div>
        
    </div>
</template>

<script setup>
import projects from '../components/projects.vue'
import contact from '../components/contactMe.vue'
</script>

<template>
    <div class="flex flex-col items-center space-y-12 lg:space-y-32 mt-12 lg:mt-16 md:px-20 lg:px-52 mb-12 lg:mb-32">
        <div class="text-[#D4AF37] font-['Bungee']">
            <div class="flex flex-row space-x-6">
                <img src="../static/autoportret.png" alt="" class="h-40 lg:h-52 max-h-52 rounded-full">
                <div class="flex flex-col justify-center space-y-0 lg:space-y-2">

                    <div class="text-3xl lg:text-7xl">Hello.</div>
                    <div class="text-xl lg:text-3xl flex flex-col">i am matej visnjic,</div>
                    <div class="text-md lg:text-lg">univ. bacc. inf</div>
                </div>
            </div>
        </div>
        <div id="about" class="w-full space-y-12 lg:space-y-16">
            <div class="text-4xl lg:text-7xl text-[#D4AF37]">About</div>
            <div  class="bg-[#8C8C8C] bg-opacity-85 h-1/3 p-4 w-full md:rounded-lg lg:rounded-lg flex flex-col md:flex-row lg:text-2xl lg:items-center lg:p-6">
                <div class="text-justify p-2 flex flex-col lg:flex-col gap-4">
                    <p> I am informatics student from Croatia. I'm studying at Sveučilište Jurja Dobrile in Pula. From September 2022 I have a bachelor's degree. Currently I'm at fifth year. 
                        Every day I'm learning something new, and I try to improve my skills even more. 
                        In college I encountered many programming languages and tools. 
                    </p>
                    <p> Some of them are: C++, Vue.js, MySQL, MongoDB, Firebase, Big Data Analytics using Python, C#, Java, Javascript, Git, PHP Laravel, Tensorflow, Node.js and many others.
                        Also , I've been learning PHP Laravel for the past few months and have made a few small projects for practice.
                        In the future I want to become a backend developer who also applies IoT stuff.
                    </p>
                    <a href="/files/CV-en.pdf" download>
                        <p class="text-[#D4AF37] hover:underline">
                            Click here to download a CV.
                        </p>
                    </a>
                </div>
            </div>
        </div>
        <div id="projects" class="w-full space-y-12 lg:space-y-16">
            <div class="text-4xl lg:text-7xl text-[#D4AF37]">My projects</div>
            <div class="flex lg:justify-start flex-col items-center lg:flex-row lg:flex-wrap gap-8 lg:gap-24">
                <projects name="FIPUbot" about="Bachler's degree projects" languages="Vue" team="1" githubLink="https://github.com/mvisnjic/FIPUbot" linkName="mvisnjic/FIPUbot" appLink="http://fipubot.letseait.com/"/>
                <projects name="FIPUbot - backend" about="Bachler's degree projects" languages="Python, RaspberyPI" team="1" githubLink="https://github.com/mvisnjic/FIPUbot-backend" linkName="mvisnjic/FIPUbot" appLink=""/>
                <projects name="eventFinder - backend" about="backend for eventFinder-frontend" languages="nodeJS" team="2" githubLink="https://github.com/mvisnjic/eventFinder-backend" linkName="mvisnjic/eventFinder-backend" appLink=""/>
                <projects name="eventFinder - frontend" about="App for search an events" languages="Vue" team="2" githubLink="https://github.com/mvisnjic/FIPUbot" linkName="mvisnjic/FIPUbot" appLink="https://eventfinder.letseait.com/"/>
                <projects name="orderTech" about="Web app for ordering tehnical inspection for vehicle" languages="Vue, firebase" team="2" githubLink="https://github.com/mvisnjic/orderTech" linkName="mvisnjic/orderTech" appLink="https://ordertech.letseait.com/"/>
                <projects name="IoT project" about="Easy IoT project for toggle a light and get a temperature from DHT11 sensor." languages="Python, flask" team="1" githubLink="https://github.com/mvisnjic/project_iot" linkName="mvisnjic/project_iot" appLink=""/>
                <projects name="Age and gender prediction using CNN" about="Age and gender prediction using convolutional neural network" languages="Python, tensorflow" team="1" githubLink="https://github.com/mvisnjic/age-and-gender-prediction-using-CNN" linkName="mvisnjic/age-gender-prediction" appLink=""/>
            </div>
        </div>
        <div id="contact" class="w-full space-y-12 lg:space-y-16">
            <div class="text-4xl lg:text-7xl text-[#D4AF37]">Contact me</div>
            <div class="flex lg:justify-start flex-col items-center lg:flex-row lg:flex-wrap gap-9 lg:gap-18">
                <contact />
            </div>
        </div>
        
    </div>
</template>

<script setup>
import projects from '../components/projects.vue'
import contact from '../components/contactMe.vue'
</script>

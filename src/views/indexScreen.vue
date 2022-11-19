<template>
    <div class="flex flex-col items-center space-y-12 lg:space-y-32 mt-12 lg:mt-16 px-6 lg:px-32 mb-32">
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
            <div class="text-3xl lg:text-7xl text-[#D4AF37]">About</div>
            <div  class="bg-gray-500 bg-opacity-50 h-1/3 p-4 w-full rounded-lg flex flex-row lg:text-xl lg:items-center lg:p-6">
                <div class="text-justify p-2">
                    <p> I am informatics student from Croatia. I'm studying at Sveučilište Jurja Dobrile in Pula. From September 2022 I have a bachelor's degree. Currently I'm at fourth year. 
                        Every day I'm learning something new, and I try to improve my skills even more. </p>
                </div>
                <div class="text-justify p-2">
                     <p>At my university i tried a lot of programming languages. Some of them are: C++, C#, MySQL, HTML, CSS, JavaScript, Python, Java, R etc.
                                                Currently I use Python, JavaScript, Java, R. I like IoT, too. I own one(for now) RaspberryPI.
                                                In the future I want to become a backend developer who also applies IoT stuff.</p>
                </div>
            </div>
        </div>
        <div id="projects" class="w-full space-y-12 lg:space-y-16">
            <div class="text-3xl lg:text-7xl text-[#D4AF37]">My projects</div>
            <div class="flex lg:justify-start flex-col items-center lg:flex-row lg:flex-wrap gap-9 lg:gap-18">
                <projects name="FIPUbot" about="Bachler's degree projects" languages="Vue" team="1" githubLink="https://github.com/mvisnjic/FIPUbot" linkName="mivsnjic/FIPUbot" appLink="http://fipubot.bslm.com.hr/"/>
                <projects name="FIPUbot - backend" about="Bachler's degree projects" languages="Python, RaspberyPI" team="1" githubLink="https://github.com/mvisnjic/FIPUbot-backend" linkName="mivsnjic/FIPUbot" appLink="http://fipubot.bslm.com.hr/"/>
                <projects name="eventFinder - backend" about="backend for eventFinder-frontend" languages="nodeJS" team="2" githubLink="https://github.com/mvisnjic/eventFinder-backend" linkName="mvisnjic/eventFinder-backend" appLink="https://eventfinder.bslm.com.hr/"/>
                <projects name="eventFinder - frontend" about="App for search an events" languages="Vue" team="2" githubLink="https://github.com/mvisnjic/FIPUbot" linkName="mivsnjic/FIPUbot" appLink="https://eventfinder.bslm.com.hr/"/>
                <projects name="orderTech" about="Web app for ordering tehnical inspection for vehicle" languages="Vue, firebase" team="2" githubLink="https://github.com/mvisnjic/orderTech" linkName="mivsnjic/orderTech" appLink="https://ordertech.bslm.com.hr/"/>
            </div>
        </div>
        <div id="contact" class="w-full space-y-12 lg:space-y-16">
            <div class="text-3xl lg:text-7xl text-[#D4AF37]">Contact me</div>
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

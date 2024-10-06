<template>
    <div v-for="project in projects" v-bind:key="project.name" class="md:rounded-lg lg:rounded-lg bg-[#D4AF37] lg:text-xl bg-opacity-85 w-full gap-4 p-2 md:w-[400px] md:h-[300px] flex flex-col items-start lg:gap-4 lg:p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] hover:bg-opacity-100 duration-300 font-shareTech">
        <p class="self-center font-bold text-lg lg:text-2xl">{{project.name}}</p>
        <div class="flex flex-row gap-4 h-1/6 items-center">
            <img src="../static/info.png" alt="" class="max-h-7"/>
            <p class="text-wrap break-all">{{project.about}}</p>
        </div>
        <div class="flex flex-row gap-4 h-1/3">
            <img src="../static/code.png" alt="" class="max-h-7"/>
            <p>{{project.languages}}</p>
        </div>
        <div class="flex flex-row gap-4 h-1/3">
            <img src="../static/team.png" alt="" class="max-h-7"/>
        <p>{{project.team}}</p>
        </div>
        <div class="flex flex-row gap-4 h-1/3">
            <img src="../static/repo.png" alt="" class="max-h-7">
            <a class="underline" target="_blank" :href="project.githubLink">{{ project.linkName }}</a>
        </div>
        <div class="flex flex-row gap-4 h-1/3">
            <img src="../static/link.png" alt="" class="max-h-7" v-if="project.appLink">
            <a class="underline" target="_blank" :href="project.appLink">{{ project.appLink }}</a>
        </div>
    </div>
</template>

<script>
import projects from '../projects.json'
export default {
    name: 'projects',
    data() {
        return {
            projects
        }
    }
}
</script>
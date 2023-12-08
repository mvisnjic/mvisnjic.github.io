<template>
        <div class="md:rounded-lg lg:rounded-lg bg-[#D4AF37] lg:text-xl bg-opacity-85 w-full gap-4 p-2 md:w-[400px] lg:w-[450px] lg:h-[350px] flex flex-col items-start lg:gap-4 lg:p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] hover:bg-opacity-100 duration-300">
        <p class="self-center font-bold text-lg lg:text-2xl">{{name}}</p>
        <div class="flex flex-row gap-4 h-1/6">
        <img src="../static/info.png" alt="" class="max-h-7"/>
        <p>{{about}}</p>
        </div>
        <div class="flex flex-row gap-4 h-1/3">
        <img src="../static/code.png" alt="" class="max-h-7"/>
        <p>{{languages}}</p>
        </div>
        <div class="flex flex-row gap-4 h-1/3">
        <img src="../static/team.png" alt="" class="max-h-7"/>
        <p>{{team}}</p>
        </div>
        <div class="flex flex-row gap-4 h-1/3">
            <img src="../static/repo.png" alt="" class="max-h-7">
            <a class="underline" target="_blank" :href="githubLink">{{ linkName }}</a>
        </div>
        <div class="flex flex-row gap-4 h-1/3">
            <img src="../static/link.png" alt="" class="max-h-7" v-if="appLink">
            <a class="underline" target="_blank" :href="appLink">{{ appLink }}</a>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'projects',
    props: {
        name: '',
        about: '',
        githubLink: '',
        linkName: '',
        languages: '',
        team: '',
        appLink: '',
    },
}
</script>
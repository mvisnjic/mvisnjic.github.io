<template>
    <div
        class="flex flex-col border-t lg:mx-52 border-[#D4AF37] w-3/3 opacity-75 items-center lg:items-start"
    >
    <button class="lg:hidden self-end m-2 mb-2" @click.prevent="goUp">
        <img src="../static/uparrow.png" alt="" class="w-12 h-12">
    </button>
        <div class="flex flex-col text-center space-y-3 lg:p-4 lg:space-y-4 lg:w-full">
            <div id="findMe" class="inline-flex space-x-5 self-center place-content-center lg:w-full">
                <a target="_blank" href="https://github.com/mvisnjic">
                    <img src="../static/github-icon.png" alt="github" class="lg:w-14 lg:h-14">
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/matej-vi%C5%A1nji%C4%87-51b273213/">
                    <img src="../static/linked-icon.png" alt="linkedin" class="lg:w-14 lg:h-14">
                </a>
                <a target="_blank" href="https://twitter.com/matejvisnjic">
                    <img src="../static/twitter-icon.png" alt="twitter" class="lg:w-14 lg:h-14">
                </a>
                <a target="_blank" href="https://www.facebook.com/matej.visnjic">
                    <img src="../static/facebook-icon.png" alt="facebook" class="lg:w-14 lg:h-14">
                </a>
            </div>
        </div>
        <div class="text-[#D4AF37] text-[10px] lg:text-[10px] lg:self-center">icons made by <a target="_blank" href="https://icons8.com">Icons8</a></div>
        <div class="self-center text-[12px] text-[#D4AF37]">© 2023.</div>
    </div>
</template>

<script>
export default {
    name: 'appFooter',
    methods: {
        goUp() {
            window.scrollTo(0, 0);
        }
    },
}
</script>
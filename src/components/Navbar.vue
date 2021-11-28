<template>
    <nav> 
        <img src="../assets/feather/menu.svg">
     
        <a href="#about">Autor</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#services">Usługi</a>
        <a href="#contact">Kontakt</a>
        <a href="#cv">CV</a>
    </nav>
</template>

<style lang="scss" scoped>
*{
    transition: 0.4s;
}
img{
    margin: 1vw;
    width: 2vw;
    cursor: pointer;
    filter: invert(92%) sepia(0%) saturate(4022%) hue-rotate(126deg) brightness(110%) contrast(106%);
    &:hover{
        filter: invert(42%) sepia(60%) saturate(2392%) hue-rotate(351deg) brightness(104%) contrast(99%);
    }
}

nav{
    position: fixed;
    top: 2vw; 
    left: 2vw;
    background:#00584c86;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1vw;

    a{
        color: #00FF75;
        text-decoration: none;     
        font-size: 1.3vw;
        margin: 1vw;
        &:hover{
            color: #FFFFFF;
        }
    }
}
</style>
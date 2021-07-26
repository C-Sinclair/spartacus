<script>
    import { isLoggedIn } from "../stores/auth";
    import { goto } from '$app/navigation';

    async function select() {
        isLoggedIn.set(true)
        await goto('/')
    }
</script>

<svelte:head>
	<title>Spartacus</title>
</svelte:head>

<h1>Log in</h1>

<h4>Pick an avatar</h4>
<form>
    <ul role='menu'>
        <li role='menuitem' on:click={select} tabindex={0}>
            <div class='image-wrapper'>
                <img src='/kirk.jpg' alt='Spartacus'/>
            </div>
            <p><i>Spartacus</i> </p>
        </li>
    </ul>
</form>

<article>
    <p>Only Spartacus is welcome in this app.</p>
</article>

<style>
    form {
        --wrapper-size: 100px;
        
        border-radius: 20px;
    }
    ul {
        list-style: none;
        display: flex;
        justify-content: center;
    }
    li {
        cursor: pointer;
        text-align: center;
    }
    .image-wrapper {
        position: relative;
        transition: transform 0.1s ease-in-out;
    }
    :is(img, .image-wrapper) {
        width: 100px;
        height: 100px;
        border-radius: 100px;
    }
    img {
        object-fit: cover;
        z-index: 20;
    }
    li:hover .image-wrapper {
        transform: scale(1.1);
    }
    .image-wrapper::before {
        content: '';
        position: absolute;
        width: var(--wrapper-size);
        height: var(--wrapper-size);
        border-radius: 120px;
        top: calc((100px - var(--wrapper-size)) / 2);
        left: calc((100px - var(--wrapper-size)) / 2);
        z-index: -1;
        transition: all 0.1s ease-in-out;
    }
    li:hover .image-wrapper::before {
        --wrapper-size: 110px;
        background-color: firebrick;
    }
</style>
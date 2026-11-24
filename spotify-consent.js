// No external network request until explicit consent. Consent is not persisted.
document.querySelectorAll('[data-spotify-player]').forEach(panel => {
    const enable = panel.querySelector('.spotify-enable');
    const disable = panel.querySelector('.spotify-disable');
    const frame = panel.querySelector('.spotify-frame');
    enable.addEventListener('click', () => {
        if (frame.firstChild) return;
        const player = document.createElement('iframe');
        player.title = panel.dataset.title;
        player.width = '100%';
        player.height = '352';
        player.referrerPolicy = 'no-referrer';
        player.allow = 'encrypted-media; fullscreen; picture-in-picture';
        player.allowFullscreen = true;
        player.src = 'https://open.spotify.com/embed/album/7p7KgotPfnINwCBviPJStS';
        frame.append(player);
        frame.hidden = false;
        enable.hidden = true;
        disable.hidden = false;
        disable.focus();
    });
    disable.addEventListener('click', () => {
        frame.replaceChildren();
        frame.hidden = true;
        disable.hidden = true;
        enable.hidden = false;
        enable.focus();
    });
});

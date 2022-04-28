module.exports = {
    name: 'downloaderuserscript',
    author: 'Heinrich',
    homepage: 'https://github.com/heinrichI/DownloaderUserScript.git',
    version: '[version]',
    license: 'GPL',
    match: [
        '*://*.vk.com/*',
    ],
    grant: [
        'GM_setValue',
        'GM_getValue',
        'GM_addValueChangeListener',
        'GM_openInTab'
    ],
};

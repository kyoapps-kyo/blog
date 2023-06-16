export default defineAppConfig({
  social: {
    gitUrl: "https://github.com/kyoapps-kyo",
    youtubeUrl: ""
  },
  site : {
    // title: "Frontend Minds And AI",
    title: 'WK',
    themes :[
      "light", "corporate", "business", "dracula", "night", "dark"
    ]
  },
  components: [{
    path: '~/components',
    global: true
  }],
  // vercelAnalytics: {
  //   mode: "auto",
  //   debug: true,
  //   beforeSend: (event: any) => {
  //     if (event.url.includes("/private")) return null;
  //     return event;
  //   },
  // },
});

document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs || !tabs[0] || !tabs[0].url) {
      document.getElementById("status").innerText = "Could not detect domain.";
      return;
    }

    try {
      const url = new URL(tabs[0].url);
      const domain = url.hostname.replace(/^www\./, "");

      document.getElementById("status").innerText = "Checking " + domain + "...";

      chrome.tabs.create({
        url: "https://tgdatahub.site/tools/domain-age-checker/?domain=" + encodeURIComponent(domain)
      });
    } catch (e) {
      document.getElementById("status").innerText = "Invalid URL.";
    }
  });
});


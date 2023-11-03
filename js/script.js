$("#stocks-select").selectric();

function clearSearchInput(id) {
    const searchInput = document.getElementById(id);

    if (!searchInput) return;

    searchInput.value = "";
    searchInput.focus();
}

function expandText(textId, btnId) {
    const text = document.getElementById(textId);
    const btn = document.getElementById(btnId);

    if (!text || !btn) return;

    if (text.classList.contains("ellipsis")) {
        text.classList.remove("ellipsis");
        btn.textContent = "Скрыть";
        btn.innerHTML += '<i class="fa-solid fa-angle-up btn-link__icon"></i>';
    } else {
        text.classList.add("ellipsis");
        btn.textContent = "Показать весь";
        btn.innerHTML +=
            '<i class="fa-solid fa-angle-down btn-link__icon"></i>';
    }
}

function switchTab(tabContentId, tabId) {
    const tabContent = document.getElementById(tabContentId);
    const newTab = document.getElementById("tab-" + tabId);
    const currTab = document.getElementsByClassName("tab_active")[0];
    const newListItem = document.getElementById("list-item-" + tabId);
    const currListItem = document.getElementsByClassName("list-item_active")[0];

    if (!tabContent || !newTab || !currTab || !newListItem || !currListItem)
        return;

    newTab.classList.add("tab_active");
    currTab.classList.remove("tab_active");
    newListItem.classList.add("list-item_active");
    currListItem.classList.remove("list-item_active");
    tabContent.innerHTML = tab.innerHTML;
}

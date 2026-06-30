import {test} from "@playwright/test";
import {DragAndDropPage} from "../Pages/DragAndDropPage";

test.describe("Drag and Drop Feature ", async () => {

    test("DDTest", async ({page}) => {

        const DDPage = new DragAndDropPage(page);

        DDPage.navigateToDDPage();
        DDPage.DragAtoB();


    })
})
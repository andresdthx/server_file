import getUserInteractor from '../src/core/interactors/user/getUser.interactor';
import saveUserInteractor from '../src/core/interactors/user/saveUser.interactor';
import deleteUserInteractor from '../src/core/interactors/user/delete.interactor';
import updateUserInteractor from '../src/core/interactors/user/update.interactor';

import UserMock from './mocks/UserMock';
import { userDataGet, userDataPost, userDataPatch } from './helpers/user.helper';

const userMock = new UserMock();

describe("GET clients", () => {

    it("success", async () => {
        const getUser = getUserInteractor(userMock);
        const response = await getUser('1');
        expect(response).toMatchObject(userDataGet);
    });

    it("failed", async () => {
        const getUser = getUserInteractor(userMock);
        const response = await getUser('1');
        expect(response).not.toEqual(null);
    });
});

describe("POST clients", () => {

    it("success", async () => {
        const saveUser = saveUserInteractor(userMock);
        const response = await saveUser(1, 'image-35784943049304348548efdhjd');
        expect(response).toMatchObject(userDataPost);
    });
});

describe("PATCH clients", () => {

    it("success", async () => {
        const updateUser = updateUserInteractor(userMock);
        const response = await updateUser(userDataGet, 'image-3bnbnbnbnb69696969');
        expect(response).toMatchObject(userDataPatch);
    });

    it("success", async () => {
        const updateUser = updateUserInteractor(userMock);
        const response = await updateUser(userDataGet, 'image-3bnbnbnbnb696969');
        expect(response).not.toMatchObject(userDataPatch);
        // expect(response).toHaveProperty('image');
    });
});

describe("DELETE clients", () => {

    it("success", async () => {
        const deleteUser =  deleteUserInteractor(userMock);
        const response = await deleteUser(1);
        expect(response).toEqual(1);
    });

    it("failed", async () => {
        const deleteUser =  deleteUserInteractor(userMock);
        const response = await deleteUser(1);
        expect(response).not.toEqual(0);
    });
});
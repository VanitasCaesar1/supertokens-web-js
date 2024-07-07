/* Copyright (c) 2024, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

import { getNormalisedUserContext } from "../../utils";
import { RecipeFunctionOptions } from "../emailpassword";
import Recipe from "./recipe";
import {
    PreAndPostAPIHookAction,
    PreAPIHookContext,
    PostAPIHookContext,
    RecipeInterface,
    UserInput,
    LoginInfo,
} from "./types";

export default class RecipeWrapper {
    static init(config?: UserInput) {
        return Recipe.init(config);
    }

    /**
     * Returns information about an OAuth login in progress
     *
     * @param loginChallenge The login challenge from the url
     *
     * @param userContext (OPTIONAL) Refer to {@link https://supertokens.com/docs/emailpassword/advanced-customizations/user-context the documentation}
     *
     * @param options (OPTIONAL) Use this to configure additional properties (for example pre api hooks)
     *
     * @returns `{status: "OK", info: LoginInfo}`
     *
     * @throws STGeneralError if the API exposed by the backend SDKs returns `status: "GENERAL_ERROR"`
     */
    static getLoginChallengeInfo(input: {
        loginChallenge: string;
        options?: RecipeFunctionOptions;
        userContext?: any;
    }): Promise<{
        status: "OK";
        info: LoginInfo;
        fetchResponse: Response;
    }> {
        return Recipe.getInstanceOrThrow().recipeImplementation.getLoginChallengeInfo({
            ...input,
            userContext: getNormalisedUserContext(input.userContext),
        });
    }
}

const init = RecipeWrapper.init;
const getLoginChallengeInfo = RecipeWrapper.getLoginChallengeInfo;

export {
    init,
    getLoginChallengeInfo,
    RecipeInterface,
    PreAPIHookContext,
    PostAPIHookContext,
    PreAndPostAPIHookAction,
    UserInput,
};

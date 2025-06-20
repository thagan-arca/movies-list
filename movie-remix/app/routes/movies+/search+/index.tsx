import Modal from "../../../components/Modal";
import { Link, Form } from "react-router-dom";

import classes from "./search.module.css";

function SearchIndexRoute() {
    return (
        <Modal>
            <Form method="get" className={classes.form}>
                {/* <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3} />
                </p> */}
                <p>
                    <label htmlFor="title">Movie name:</label>
                    <input type="text" name="title" required />
                </p>
                <p className={classes.actions}>
                    <Link to=".." type="button">
                        Cancel
                    </Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default SearchIndexRoute;

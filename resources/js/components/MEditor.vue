<template>
    <div class="card">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                    <a
                        class="nav-link active"
                        data-toggle="tab"
                        :href="tabId('write', '#')"
                        >Write</a
                    >
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        data-toggle="tab"
                        :href="tabId('preview', '#')"
                        @click.prevent="formatDocument"
                        >Preview</a
                    >
                </li>
            </ul>
        </div>
        <div class="card-body tab-content">
            <div class="tab-pane active" :id="tabId('write')">
                <slot></slot>
            </div>
            <div class="tab-pane" v-html="preview" :id="tabId('preview')"></div>
        </div>
    </div>
</template>

<script>
import MarkdownIt from "markdown-it";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import php from "highlight.js/lib/languages/php";
import scss from "highlight.js/lib/languages/scss";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import autosize from "autosize";

hljs.registerLanguage("js", javascript);
hljs.registerLanguage("php", php);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("css", css);
hljs.registerLanguage("xml", xml);

const md = new MarkdownIt();

export default {
    props: ["body", "name"],

    computed: {
        preview() {
            return md.render(this.body);
        },
    },

    methods: {
        tabId(tabName, hash = "") {
            return `${hash}${tabName}${this.name}`;
        },
        formatDocument() {
            document.querySelectorAll("pre code").forEach((block) => {
                hljs.highlightElement(block);
            });
        },
    },

    updated() {
        autosize(this.$el.querySelector("textarea"));
    },
};
</script>

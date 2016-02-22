# Cloudformable

This repository is a starting point for static generation of [CloudFormation][cf] templates using [`grunt`][grunt], [`assemble`][ass], and [`handlebars`][hb]. See [my blog post][liggat] for more details on the motivation behind this project.

## Usage
1. Install `npm` (left as an exercise to the reader).
2. Install `grunt` globally:
  * `npm install -g grunt-cli`
3. Clone this repo:
  * `git clone https://github.com/dliggat/cloudformable`
  * `cd cloudformable`
4. Install the dependencies from this repo's `package.json`:
  * `npm install`
5. Customize to your situation:
  * Update `data` with static data
  * Add custom code in `helpers`
  * Add, remove, or delete `.hbs` files in `partials/resources`
  * Update `outputs.hbs` and `resources.hbs` accordingly
6. Generate the final CloudFormation artifact(s):
  * `grunt render`
7. The results will appear in `_output`. From here, incorporate into your build system, or use within [CloudFormation][cf] directly.

## Structure
The project structure is a straightfoward [`assemble`][ass] static site:

```bash
$ tree
├── Gruntfile.js
├── README.md
├── _output
│   └── cloudformation-stack.template
├── cloudformation-stack.hbs
├── data
│   └── about.yml
├── helpers
│   └── git.js
├── package.json
└── partials
    ├── outputs.hbs
    ├── parameters.hbs
    ├── resources
    │   ├── lambda-execution-policy.hbs
    │   ├── lambda-execution-role.hbs
    │   ├── lambda-function.hbs
    │   ├── lambda-permission.hbs
    │   ├── s3-bucket-policy.hbs
    │   └── s3-bucket.hbs
    └── resources.hbs
```

The top-level `*.hbs` file(s) is eventually rendered as `_output/*.template` on `grunt render`.


[liggat]: https://liggat.org/cloudformable-a-simple-approach-to-preprocessing-cloudformation-templates
[hb]: http://handlebarsjs.com/
[grunt]: http://gruntjs.com/
[ass]: http://assemble.io/
[cf]: https://aws.amazon.com/cloudformation/

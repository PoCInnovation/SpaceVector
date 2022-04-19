# 42-AI x POC Technical Test

- [42-AI x POC Technical Test](#42-ai-x-poc-technical-test)
- [The task](#the-task)
	- [Definition](#definition)
	- [The data](#the-data)
	- [The model](#the-model)
	- [Your results](#your-results)
- [What matters for this test](#what-matters-for-this-test)
- [Practical details](#practical-details)
	- [Setup for the Technical Test](#setup-for-the-technical-test)
	- [Submiting your work](#submiting-your-work)
	- [Questions](#questions)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


-----------------

# The task

## Definition

You need to classify a collection of clothes in each category they belong to.


## The data

You will need to use PyTorch to classify the [FashionMNIST dataset](https://github.com/zalandoresearch/fashion-mnist).

FashionMNIST is based on the MNIST dataset but for clothing.


![Fashion-MNIST data sample](https://www.researchgate.net/publication/349913991/figure/fig4/AS:999291262861319@1615261011992/Fashion-MNIST-dataset.ppm)

> Some caveats:
> 
> Fashion-MNIST is a dataset of Zalando's article images—consisting of 
> 	- a training set of 60,000 examples 
> 	- a test set of 10,000 examples. 
> 
> Each example is a 28x28 grayscale image, associated with a label from 10 classes. 
> 
> Zalando intends Fashion-MNIST to serve as a direct drop-in replacement for the original MNIST dataset for benchmarking machine learning algorithms. 
> 
> It shares the same image size and structure of training and testing splits.

## The model

For the construction of the model, you must use PyTorch.

On the architecture of your neural network (number and type of layers, activation functions, optimizer, ...) you are completely free!

## Your results

You need to evaluate your model results.

---------------------
# What matters for this test

We are looking for candidates with the ability to dive deep in a question, with the goal of solving a problem, and then share their findings in a comprehensive manner.


As such, we want you to document your thought and research process.

There is a lot of different choices that you have to make to solve this problem.

 - What model to use ? 
 - Which parameters to give him ? 
 - How to evaluate your results ?
 - ...

We want you to be aware of these choices, by specifying them in a markdown cell before your code blocks, and sourcing what motivated your choice.

It can be:
 - as simple as a link to an online tutorial found from a google search like `PyTorch FashionMNIST classification tutorial`
 - as complex as a citation from a relevant research paper
 - as adventurous as a conclusion from your own benchmark


It should be easy for someone discovering your notebook to read and understand your work.

---------------------
# Practical details

## Setup for the Technical Test

Install jupyter

```bash
pip3 install jupyter notebook
```

then, execute this command at the root of the project

```bash
jupyter notebook
```

The web app Jupyter should be launch. But if you have some problems, you could use [Google Colab](https://colab.research.google.com/?utm_source=scs-index).


---------------------
## Submiting your work

Fill the notebook ```Subject.ipynb```

Before submitting us back your notebook, vertify that we will be able to run it without errors if we do it from the first cell to the last one.


-----

## Questions

If you have any questions, please contact me on Slack : @ldevelle or contact Mikael V. on discord : Mikael#9999